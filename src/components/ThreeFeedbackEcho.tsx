import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function PulsingRing({ radius, index }: { radius: number; index: number }) {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!ringRef.current) return;
    const t = state.clock.getElapsedTime();
    const scale = 1 + Math.sin(t * 0.5 + index * 0.5) * 0.1;
    ringRef.current.scale.set(scale, scale, scale);
    ringRef.current.rotation.z = t * 0.05 * (index % 2 === 0 ? 1 : -1);
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshStandardMaterial 
        color="#FF6600" 
        transparent 
        opacity={0.3 - index * 0.04} 
        emissive="#FF6600" 
        emissiveIntensity={1.5} 
      />
    </mesh>
  );
}

function EchoSystem() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <group ref={groupRef}>
      {[...Array(6)].map((_, i) => (
        <PulsingRing key={i} radius={2 + i * 1.5} index={i} />
      ))}
      
      {/* Floating Success Nodes */}
      {[...Array(20)].map((_, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2} position={[(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 5]}>
          <Sphere args={[0.04, 16, 16]}>
            <meshStandardMaterial color="#FF6600" emissive="#FF6600" emissiveIntensity={1} />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

export default function ThreeFeedbackEcho() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7F0]/60 via-transparent to-white/90" />
      <Canvas antialias="true">
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={40} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-10, 10, 5]} intensity={1.5} color="#ffffff" />
        <EchoSystem />
        <Environment preset="studio" />
      </Canvas>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(#FF6600 1.2px, transparent 1.2px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
