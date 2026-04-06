import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function WavingGrid({ count = 45, separation = 0.25 }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const { mouse } = useThree();

  // Create the initial grid of points
  const positions = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    let i = 0;
    for (let x = 0; x < count; x++) {
      for (let z = 0; z < count; z++) {
        pos[i++] = (x - count / 2) * separation; // x
        pos[i++] = 0; // y (height)
        pos[i++] = (z - count / 2) * separation; // z
      }
    }
    return pos;
  }, [count, separation]);

  // Color mapping: variations of the brand's orange
  const colors = useMemo(() => {
    const cols = new Float32Array(count * count * 3);
    const colorA = new THREE.Color('#FF6600');
    const colorB = new THREE.Color('#FF8C00');
    
    let i = 0;
    for (let x = 0; x < count; x++) {
      for (let z = 0; z < count; z++) {
        const mixedColor = colorA.clone().lerp(colorB, Math.random());
        cols[i++] = mixedColor.r;
        cols[i++] = mixedColor.g;
        cols[i++] = mixedColor.b;
      }
    }
    return cols;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const positionArray = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const index = (i * count + j) * 3;
        
        // Horizontal coordinates
        const x = positionArray[index];
        const z = positionArray[index + 2];

        // Complex wave logic for "Moving Data" meaning
        // Combines multiple sine/cosine waves for organic movement
        let noise = Math.sin(x * 0.5 + t) * 0.15;
        noise += Math.cos(z * 0.4 + t * 0.8) * 0.15;
        noise += Math.sin((x + z) * 0.2 + t * 0.5) * 0.1;

        // Interaction: mouse influences the wave height subtly
        const dist = Math.sqrt(Math.pow(x - mouse.x * 5, 2) + Math.pow(z - mouse.y * -5, 2));
        const mouseInfluence = Math.max(0, (1.5 - dist) * 0.4);
        
        positionArray[index + 1] = noise + mouseInfluence;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Gentle overall rotation
    pointsRef.current.rotation.y = Math.sin(t * 0.1) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation={true}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}

export default function ThreeSolutionBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-[#FFF7F0]">
      {/* Soft Ambient Gradients - High-Status LIGHT THEME */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-orange-100/50 rounded-full blur-[140px] opacity-60" />
      <div className="absolute bottom-0 left-0 w-[70%] h-[70%] bg-orange-100/40 rounded-full blur-[160px] opacity-50" />
      
      <Canvas 
        camera={{ position: [0, 2.5, 5], fov: 45 }}
        dpr={[1, 2]}
      >
        <fog attach="fog" args={['#FFF7F0', 2, 10]} />
        <ambientLight intensity={2.5} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-8, 12, 10]} intensity={1.5} color="#ffffff" />
        <WavingGrid count={50} separation={0.3} />
      </Canvas>

      {/* Surface Details - Technical Grids (Light Version) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#FF6600 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      
      {/* Subtle Bottom Vignette */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
