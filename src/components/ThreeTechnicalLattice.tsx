import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

function LatticeNode({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.15, 0.15, 0.15]} />
      {/* DARKER NODES FOR LIGHT BG */}
      <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

function TechnicalLattice() {
  const groupRef = useRef<THREE.Group>(null);
  const cubeCount = 6;
  const spacing = 2.5;

  const nodes = useMemo(() => {
    const temp = [];
    for (let x = 0; x < cubeCount; x++) {
      for (let y = 0; y < cubeCount; y++) {
        for (let z = 0; z < 2; z++) {
          temp.push([(x - cubeCount / 2) * spacing, (y - cubeCount / 2) * spacing, (z - 1) * spacing]);
        }
      }
    }
    return temp as [number, number, number][];
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.12;
    groupRef.current.rotation.x = Math.sin(t * 0.15) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <LatticeNode key={i} position={pos} />
      ))}
      <mesh>
        <boxGeometry args={[15, 15, 5]} />
        {/* DARKER WIREFRAME */}
        <meshStandardMaterial color="#1e293b" wireframe transparent opacity={0.08} />
      </mesh>
      {/* Floating Ambient Data Plates - Subtle Dark Tints */}
      {[...Array(12)].map((_, i) => (
        <Float key={i} speed={2.5} rotationIntensity={1.5} floatIntensity={2.5} position={[(Math.random() - 0.5) * 18, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 6]}>
          <mesh>
            <planeGeometry args={[2, 1]} />
            <meshBasicMaterial color="#1e293b" transparent opacity={0.03} side={THREE.DoubleSide} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function ThreeTechnicalLattice() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-white">
      {/* Ambient Gradients - REVERTED TO LIGHT THEME */}
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-[#FFF7F0]/80 via-transparent to-white/90" />
      
      <Canvas antialias="true">
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={40} />
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={3} color="#ffffff" />
        <directionalLight position={[-10, 10, 5]} intensity={1.5} color="#ffffff" />
        <TechnicalLattice />
        <Environment preset="studio" />
      </Canvas>

      {/* Surface Detail - Technical Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  );
}
