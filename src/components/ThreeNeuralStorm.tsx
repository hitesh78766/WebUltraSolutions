import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleStorm({ count = 8000, color = "#FF6600" }) {
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2 + Math.random() * 4;
      temp[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      temp[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      temp[i * 3 + 2] = r * Math.cos(phi);
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime() * 0.2;
    mesh.current.rotation.y = t;
    mesh.current.rotation.z = t * 0.5;

    // Subtle pulsating scale
    const s = 1 + Math.sin(t * 2) * 0.08;
    mesh.current.scale.set(s, s, s);
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color={color}
        transparent
        opacity={0.85}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ThreeNeuralStorm({ color = "#FF6600", bgOpacity = 1 }) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundColor: `rgba(255, 247, 240, ${bgOpacity})` }}>
      {/* Ambient Depth Gradients - Orange/Amber Focus */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[#FF6600]/15 rounded-full blur-[140px] opacity-70 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[70%] h-[70%] bg-orange-100/40 rounded-full blur-[160px] opacity-60" />

      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <fog attach="fog" args={['#FFF7F0', 5, 20]} />
        <ambientLight intensity={3.5} />
        <pointLight position={[10, 10, 10]} intensity={4} color="#ffffff" />
        <directionalLight position={[-10, 10, 5]} intensity={2} color="#ffffff" />
        <ParticleStorm color={color} />
      </Canvas>

      {/* Surface Detail - Technical Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
