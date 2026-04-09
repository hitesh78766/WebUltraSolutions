import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, PerspectiveCamera, Environment, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function SearchPulse() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
      <MeshDistortMaterial
        color="#FF6600"
        roughness={0.1}
        metalness={1}
        distort={0.4}
        speed={2}
        transparent
        opacity={0.08}
      />
    </Sphere>
  );
}

function DataPoints() {
  const pointsRef = useRef<THREE.Group>(null);
  const count = 40;
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10] as [number, number, number],
        speed: 0.1 + Math.random() * 0.5
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <group ref={pointsRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshBasicMaterial color="#FF6600" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeSEOIntelligence() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Subtle SEO Analytics Gradient */}
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-orange-50/20 via-white to-transparent" />
      
      <Canvas antialias="true">
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#FF6600" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#1e293b" />
        
        <SearchPulse />
        <DataPoints />
        
        <Environment preset="city" />
      </Canvas>

      {/* Surface Technical Detail */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(#FF6600 0.5px, transparent 0.5px)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
}
