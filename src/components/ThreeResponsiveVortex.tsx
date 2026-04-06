import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function AmbientOrbs() {
  const { viewport } = useThree();
  const orb1 = useRef<THREE.Mesh>(null);
  const orb2 = useRef<THREE.Mesh>(null);
  const orb3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (orb1.current) {
      orb1.current.position.x = Math.sin(t * 0.3) * (viewport.width / 3);
      orb1.current.position.y = Math.cos(t * 0.4) * (viewport.height / 3);
    }
    if (orb2.current) {
      orb2.current.position.x = Math.cos(t * 0.2) * (viewport.width / 2.5);
      orb2.current.position.y = Math.sin(t * 0.3) * (viewport.height / 2.5);
    }
    if (orb3.current) {
      orb3.current.position.x = Math.sin(t * 0.5) * (viewport.width / 4);
      orb3.current.position.y = Math.cos(t * 0.25) * (viewport.height / 4);
    }
  });

  return (
    <>
      <mesh ref={orb1} position={[0, 0, -2]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#FF6600" transparent opacity={0.15} />
      </mesh>
      <mesh ref={orb2} position={[0, 0, -3]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#FF8C00" transparent opacity={0.12} />
      </mesh>
      <mesh ref={orb3} position={[0, 0, -1]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#FFF7F0" transparent opacity={0.25} />
      </mesh>
    </>
  );
}

function ParticleStorm({ count = 5000 }) {
  const mesh = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();
  
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 15 + 4; 
      temp[i * 3 + 1] = (Math.random() - 0.5) * 12;
      temp[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return temp;
  }, [count]);

  const colors = useMemo(() => {
    const temp = new Float32Array(count * 3);
    const color1 = new THREE.Color('#FF6600');
    const color2 = new THREE.Color('#331100');
    for (let i = 0; i < count; i++) {
       const mixedColor = Math.random() > 0.85 ? color2 : color1;
       temp[i * 3] = mixedColor.r;
       temp[i * 3 + 1] = mixedColor.g;
       temp[i * 3 + 2] = mixedColor.b;
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime() * 0.1;
    mesh.current.rotation.y = t * 0.2;
    mesh.current.rotation.x = Math.sin(t * 0.5) * 0.05;

    // Mouse Interaction
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, mouse.x * viewport.width / 15, 0.05);
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, mouse.y * viewport.height / 15, 0.05);
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles, 3]} count={particles.length / 3} array={particles} itemSize={3} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.022} vertexColors transparent opacity={0.4} sizeAttenuation blending={THREE.AdditiveBlending} />
    </points>
  );
}

export default function ThreeResponsiveVortex() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-[#FFF7F0]">
      <div className="absolute top-0 right-0 w-[80%] h-[100%] bg-gradient-to-l from-orange-100/40 via-orange-50/20 to-transparent rounded-full blur-[140px] opacity-70" />
      <div className="absolute -bottom-20 -left-20 w-[60%] h-[60%] bg-gradient-to-tr from-orange-100/30 to-transparent rounded-full blur-[160px] opacity-50 animate-pulse" />
      
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
         <fog attach="fog" args={['#FFF7F0', 5, 20]} />
         <ambientLight intensity={3} />
         <pointLight position={[10, 10, 10]} intensity={3} color="#ffffff" />
         <directionalLight position={[-10, 10, 5]} intensity={1.5} color="#ffffff" />
         <AmbientOrbs />
         <ParticleStorm />
      </Canvas>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#FF6600 0.7px, transparent 0.7px)',
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
}
