import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Pearl({ position, size, speed, color }: { position: [number, number, number], size: number, speed: number, color: string }) {
  const mesh = useRef<THREE.Mesh>(null!);
  const initialY = position[1];
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
        mesh.current.position.y = initialY + Math.sin(t * speed + position[0]) * 0.2;
        mesh.current.position.x += Math.sin(t * 0.1) * 0.002;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshPhysicalMaterial 
        color={color} 
        roughness={0.05} 
        metalness={0.9} 
        clearcoat={1} 
        emissive={color} 
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

function FloatingGrid() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.05) * 0.1;
      group.current.position.y = Math.sin(t * 0.2) * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Transaction Lines - Global Trade Network */}
      {[...Array(12)].map((_, i) => (
        <mesh key={i} position={[(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10, -3]}>
           <boxGeometry args={[0.01, 12, 0.01]} />
           <meshBasicMaterial color="#FF6600" transparent opacity={0.05} />
        </mesh>
      ))}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[0, (Math.random() - 0.5) * 8, -4]} rotation={[0, 0, Math.PI / 2]}>
           <boxGeometry args={[0.01, 20, 0.01]} />
           <meshBasicMaterial color="#FF8C00" transparent opacity={0.03} />
        </mesh>
      ))}
    </group>
  );
}

function PearlStream({ count = 400 }) {
  const particles = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
        // Grouping into a compact spherical cluster
        const r = Math.pow(Math.random(), 0.5) * 4.5; // Radius
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta) * 0.45; // Flattened for compact section
        const z = r * Math.cos(phi);
        
        const size = Math.random() * 0.025 + 0.01;
        const speed = Math.random() * 0.5 + 0.2;
        
        const rand = Math.random();
        const color = rand > 0.95 ? '#FF6600' : rand > 0.85 ? '#FFCC99' : '#ffffff';
        data.push({ position: [x, y, z] as [number, number, number], size, speed, color });
    }
    return data;
  }, [count]);

  return (
    <group>
      {particles.map((p, i) => (
        <Pearl key={i} {...p} />
      ))}
    </group>
  );
}

export default function ThreeEcommercePearls() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-white">
      {/* High-status background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#FFF7F0]" />
      <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-orange-100/40 rounded-full blur-[140px] opacity-70" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[60%] h-[60%] bg-orange-50/50 rounded-full blur-[120px] opacity-50" />

      <Canvas camera={{ position: [0, 0, 7], fov: 40 }} dpr={[1, 2]}>
        <ambientLight intensity={3} />
        <pointLight position={[10, 10, 10]} intensity={4} color="#ffffff" />
        <directionalLight position={[-10, 10, 5]} intensity={2} color="#ffffff" />
        <spotLight position={[0, 10, 0]} angle={0.5} penumbra={1} intensity={3} color="#fff7f0" />
        
        <PearlStream />
        <FloatingGrid />
        
        <fog attach="fog" args={['#FFF7F0', 5, 20]} />
      </Canvas>

      {/* Technical Finishing Texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(#FF6600 0.5px, transparent 0.5px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
