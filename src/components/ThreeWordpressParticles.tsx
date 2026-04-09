import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Text, Float } from '@react-three/drei';
import * as THREE from 'three';


function WordParticles() {
  const ref = useRef<any>();
  
  // Create a high-density cluster for "Content Nodes"
  const count = 8000;
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
        ref.current.rotation.y = t * 0.08;
        ref.current.rotation.x = Math.sin(t * 0.1) * 0.08;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 15]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#1A1B1F"
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
            args={[25, 25, 0x1A1B1F, 0x1A1B1F]} 
            position={[0, -1.5, 0]} 
            rotation={[Math.PI / 10, 0, 0]}
        >
            <meshStandardMaterial opacity={0.06} transparent />
        </gridHelper>
    );
}

export default function ThreeWordpressParticles() {
  return (
    <div className="absolute inset-0 z-0 bg-[#FDFBF9]">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 40 }}>
        <fog attach="fog" args={['#FDFBF9', 2, 8]} />
        <ambientLight intensity={2.2} />
        <pointLight position={[5, 5, 5]} intensity={2.5} color="#FF6600" />
        <pointLight position={[-5, -5, 2]} intensity={1.5} color="#1A1B1F" />
        <WordParticles />
        <TechGrid />
        <mesh position={[-3, 1, -4]}>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshBasicMaterial color="#1A1B1F" opacity={0.04} transparent />
        </mesh>
        <mesh position={[3, -1, -4]}>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshBasicMaterial color="#2D2E32" opacity={0.04} transparent />
        </mesh>
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(25,25,28,0.12)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF6600]/5 via-white/40 to-white pointer-events-none" />
    </div>
  );
}
