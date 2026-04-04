import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

function AndroidCore() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
    meshRef.current.position.y = Math.sin(t * 0.8) * 0.1;
  });

  return (
    <group ref={meshRef}>
      {/* MINIMALIST SMARTPHONE FRAME */}
      <mesh>
        <boxGeometry args={[2, 4, 0.2]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.1} metalness={0.2} transparent opacity={0.9} />
      </mesh>
      
      {/* SCREEN GLOW */}
      <mesh position={[0, 0, 0.11]}>
        <planeGeometry args={[1.8, 3.8]} />
        <meshBasicMaterial color="#3ddc84" transparent opacity={0.15} />
      </mesh>

      {/* FLOATING APP MODULES */}
      {[...Array(6)].map((_, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1} position={[
          Math.sin(i * 1.1) * 2.5,
          Math.cos(i * 1.1) * 2.5,
          Math.sin(i * 2) * 1.5
        ]}>
          <mesh>
            <boxGeometry args={[0.4, 0.4, 0.4]} />
            <MeshDistortMaterial color={i % 2 === 0 ? "#3ddc84" : "#6366f1"} speed={3} distort={0.3} radius={1} />
          </mesh>
        </Float>
      ))}
      
      {/* CONNECTIVITY LINES (SIMULATED WITH THIN TORUS OR TUBES) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3, 0.01, 16, 100]} />
        <meshBasicMaterial color="#3ddc84" transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[3.2, 0.01, 16, 100]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

function GlobalNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 1500;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 20;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#3ddc84" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

export default function ThreeAndroidArchitecture() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-transparent to-emerald-50/20" />
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.2} penumbra={1} intensity={1} />
        
        <AndroidCore />
        <GlobalNetwork />
        
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
