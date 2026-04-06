import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Text, Float } from '@react-three/drei';
import * as THREE from 'three';


function WordParticles() {
  const ref = useRef<any>();
  
  // Create a high-density cluster for "Content Nodes"
  const count = 3000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const r = 2.0 + Math.random() * 2.0;
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        
        pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.25; // Even more compressed for compact hero
        pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
        ref.current.rotation.y = t * 0.05;
        ref.current.rotation.x = Math.sin(t * 0.05) * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 15]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#FF6600"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.NormalBlending}
        />
      </Points>
    </group>
  );
}

// Background Grid for architectural feel
function TechGrid() {
    return (
        <gridHelper 
            args={[25, 25, 0xFF6600, 0xFF6600]} 
            position={[0, -1.5, 0]} 
            rotation={[Math.PI / 10, 0, 0]}
        >
            <meshStandardMaterial opacity={0.03} transparent />
        </gridHelper>
    );
}

export default function ThreeWordpressParticles() {
  return (
    <div className="absolute inset-0 z-0 bg-[#FFF7F0]">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 40 }}>
        <ambientLight intensity={3.5} />
        <WordParticles />
        <TechGrid />
        <mesh position={[-3, 1, -4]}>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshBasicMaterial color="#FF6600" opacity={0.02} transparent />
        </mesh>
        <mesh position={[3, -1, -4]}>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshBasicMaterial color="#FF8C00" opacity={0.02} transparent />
        </mesh>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none" />
    </div>
  );
}
