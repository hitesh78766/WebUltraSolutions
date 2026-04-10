import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function MedicalParticles({ count = 2000 }) {
   const mesh = useRef<THREE.Points>(null);
   const linesMesh = useRef<THREE.LineSegments>(null);

   const points = useMemo(() => {
      const p = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
         p[i * 3] = (Math.random() - 0.5) * 10;
         p[i * 3 + 1] = (Math.random() - 0.5) * 10;
         p[i * 3 + 2] = (Math.random() - 0.5) * 10;
      }
      return p;
   }, [count]);

   const lineIndices = useMemo(() => {
      const indices = [];
      for (let i = 0; i < count; i++) {
         for (let j = i + 1; j < i + 5; j++) {
            if (j < count) {
               indices.push(i, j);
            }
         }
      }
      return new Uint16Array(indices);
   }, [count]);

   useFrame((state) => {
      if (!mesh.current || !linesMesh.current) return;
      const t = state.clock.getElapsedTime() * 0.1;
      
      mesh.current.rotation.y = t;
      mesh.current.rotation.x = t * 0.5;
      
      linesMesh.current.rotation.y = t;
      linesMesh.current.rotation.x = t * 0.5;

      // Pulsing effect like a heartbeat
      const s = 1 + Math.sin(t * 10) * 0.02;
      mesh.current.scale.set(s, s, s);
      linesMesh.current.scale.set(s, s, s);
   });

   return (
      <group>
         <points ref={mesh}>
            <bufferGeometry>
               <bufferAttribute
                  attach="attributes-position"
                  count={points.length / 3}
                  array={points}
                  itemSize={3}
               />
            </bufferGeometry>
            <pointsMaterial
               size={0.05}
               color="#FF6600"
               transparent
               opacity={0.6}
               sizeAttenuation
            />
         </points>
         <lineSegments ref={linesMesh}>
            <bufferGeometry>
               <bufferAttribute
                  attach="attributes-position"
                  count={points.length / 3}
                  array={points}
                  itemSize={3}
               />
               <bufferAttribute
                  attach="index"
                  count={lineIndices.length}
                  array={lineIndices}
                  itemSize={1}
               />
            </bufferGeometry>
            <lineBasicMaterial color="#FF6600" transparent opacity={0.15} />
         </lineSegments>
      </group>
   );
}

export default function ThreeHealthNeural() {
   return (
      <div className="absolute inset-0 z-0 pointer-events-none">
         <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <ambientLight intensity={1} />
            <MedicalParticles />
         </Canvas>
         
         {/* Subtle circular medical scan overlay */}
         <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
            <div className="w-[500px] h-[500px] border border-orange-600 rounded-full animate-[ping_10s_linear_infinite]" />
            <div className="absolute w-[400px] h-[400px] border border-orange-600 rounded-full animate-[ping_15s_linear_infinite]" />
            <div className="absolute w-[300px] h-[300px] border border-orange-600 rounded-full animate-[ping_20s_linear_infinite]" />
         </div>
      </div>
   );
}
