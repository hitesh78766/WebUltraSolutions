import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingPrisms({ count = 12 }) {
  const group = useRef<THREE.Group>(null);

  const prisms = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10 - 5
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: 0.5 + Math.random() * 1.5,
      speed: 0.1 + Math.random() * 0.3,
      type: Math.floor(Math.random() * 3) // 0: box, 1: sphere, 2: torus
    }));
  }, [count]);

  useFrame((state) => {
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      const p = prisms[i];
      child.rotation.x += 0.005 * p.speed;
      child.rotation.y += 0.008 * p.speed;
      child.position.y += Math.sin(state.clock.getElapsedTime() + i) * 0.002;
    });
  });

  return (
    <group ref={group}>
      {prisms.map((p, i) => (
        <mesh key={i} position={p.position as any} rotation={p.rotation as any} scale={p.scale}>
          {p.type === 0 && <boxGeometry args={[1, 1, 1]} />}
          {p.type === 1 && <sphereGeometry args={[0.7, 32, 32]} />}
          {p.type === 2 && <torusGeometry args={[0.6, 0.2, 16, 100]} />}
          <meshPhongMaterial
            color="#FF6600"
            wireframe
            transparent
            opacity={0.08}
            shininess={100}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeGeometricBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#FFF7F0]">
      {/* Ambient Depth Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-50/20 via-transparent to-orange-50/10" />

      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <fog attach="fog" args={['#FFF7F0', 10, 25]} />
        <ambientLight intensity={3} />
        <pointLight position={[10, 10, 10]} intensity={3} color="#ffffff" />
        <directionalLight position={[-10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#FFDAB9" />
        <FloatingPrisms />
      </Canvas>

      {/* Industrial Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(to right, #FF6600 1px, transparent 1px), linear-gradient(to bottom, #FF6600 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}
      />
    </div>
  );
}
