import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

function DigitalGlobe() {
  const pointsRef = useRef<THREE.Points>(null!);
  const lineRef = useRef<THREE.LineSegments>(null!);

  const [positions, lineIndices] = useMemo<[Float32Array, Uint16Array]>(() => {
    const count = 1500; // Increased count for RICHER detail
    const pos = new Float32Array(count * 3);
    const indices: number[] = [];

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const r = 1.95; // Reduced for a more balanced and refined look
      pos[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = r * Math.cos(phi);

      if (i < count - 15 && Math.random() > 0.94) {
        indices.push(i, i + Math.floor(Math.random() * 12));
      }
    }
    return [pos, new Uint16Array(indices)];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.1;
    pointsRef.current.rotation.x = t * 0.03;

    if (lineRef.current) {
      lineRef.current.rotation.y = t * 0.1;
      lineRef.current.rotation.x = t * 0.03;
    }

    const scale = 1 + Math.sin(t * 0.4) * 0.012;
    pointsRef.current.scale.set(scale, scale, scale);
    if (lineRef.current) lineRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#000000" // Pure black for sharpest definition
          size={0.038} // Slightly larger for better visibility
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.NormalBlending}
          opacity={0.6} // Higher opacity for more "darker" presence
        />
      </Points>

      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="index"
            args={[lineIndices, 1]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#1a1a1a" transparent opacity={0.35} />
      </lineSegments>

      {/* Dynamic Inner Light Mapping */}
      <Sphere args={[1.88, 32, 32]}>
        <meshBasicMaterial color="#993D00" transparent opacity={0.015} wireframe />
      </Sphere>
    </group>
  );
}

export default function ThreeNetworkGlobe() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(255,247,240,1)_0%,_rgba(255,255,255,1)_100%)]">
      {/* Background radial gradients - "Little bit dark" Elite refinement */}
      <div
        className="absolute top-[-25%] right-[-15%] w-[100%] h-[100%] bg-orange-300/20 rounded-full blur-[170px] opacity-70 animate-pulse"
        style={{ animationDuration: '9s' }}
      />
      <div
        className="absolute bottom-[-15%] left-[-15%] w-[90%] h-[90%] bg-orange-300/15 rounded-full blur-[190px] opacity-60 animate-pulse"
        style={{ animationDuration: '11s' }}
      />


      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 2]}>
        <fog attach="fog" args={['#ffffff', 3, 9]} />
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#FF6600" />

        <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.6}>
          <DigitalGlobe />
        </Float>

        <Particles count={50} />
      </Canvas>

      {/* Surface Pattern Refinement */}
      <div
        className="absolute inset-0 opacity-[0.01] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#FF6600 1px, transparent 1px)',
          backgroundSize: '45px 45px',
        }}
      />
    </div>
  );
}

function Particles({ count = 50 }) {
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 50;
      const speed = 0.004 + Math.random() / 700;
      const xFactor = -12 + Math.random() * 24;
      const yFactor = -12 + Math.random() * 24;
      const zFactor = -12 + Math.random() * 24;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed;
      const s = Math.cos(t);
      dummy.position.set(
        xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s * 0.07, s * 0.07, s * 0.07);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.04, 16, 16]} />
      <meshBasicMaterial color="#000000" transparent opacity={0.25} />
    </instancedMesh>
  );
}
