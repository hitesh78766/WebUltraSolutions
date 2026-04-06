import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Text, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function DeviceWireframe({ position, args, label }: { position: [number, number, number]; args: [number, number, number]; label: string }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={position}>
      <mesh>
        <boxGeometry args={args} />
        <meshStandardMaterial color="#FF6600" wireframe transparent opacity={0.15} />
      </mesh>
      {/* SCREEN PLANE */}
      <mesh position={[0, 0, args[2] / 2 + 0.01]}>
        <planeGeometry args={[args[0] * 0.9, args[1] * 0.9]} />
        <meshBasicMaterial color="#FF6600" transparent opacity={0.05} />
      </mesh>
      <Text
        position={[0, -args[1]/2 - 0.3, 0]}
        fontSize={0.15}
        color="#FF6600"
        anchorX="center"
        anchorY="middle"
        opacity={0.4}
      >
        {label}
      </Text>
    </Float>
  );
}

function TechnicalNeuralNetwork() {
  const pointsRef = useRef<THREE.Group>(null);
  const lineArray = useMemo(() => {
    const lines = [];
    for (let i = 0; i < 40; i++) {
      const start = new THREE.Vector3((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 5);
      const end = new THREE.Vector3((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 5);
      lines.push({ start, end });
    }
    return lines;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <group ref={pointsRef}>
      {lineArray.map((line, i) => (
        <group key={i}>
          <mesh position={line.start.toArray()}>
             <sphereGeometry args={[0.03, 8, 8]} />
             <meshBasicMaterial color="#FF6600" transparent opacity={0.3} />
          </mesh>
          <line>
            <bufferGeometry attach="geometry">
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([...line.start.toArray(), ...line.end.toArray()])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#FF6600" transparent opacity={0.1} />
          </line>
        </group>
      ))}
    </group>
  );
}

export default function ThreeAppArchitecture() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#FFF7F0_100%)] opacity-40" />
      <Canvas shadows antialias="true">
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={35} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-10, 10, 10]} intensity={1.5} color="#ffffff" />
        <spotLight position={[0, 15, 20]} angle={0.2} intensity={2} color="#fff7f0" />
        
        {/* REFINED TECHNICAL BLUEPRINT ELEMENTS */}
        <group position={[0, 0, 0]}>
           <DeviceWireframe position={[4, 1.5, 0]} args={[0.8, 1.8, 0.1]} label="MOBILE.OS" />
           <DeviceWireframe position={[-4, -1, 1]} args={[2, 1.5, 0.1]} label="TABLET.UX" />
           <DeviceWireframe position={[0.5, -2.5, -2]} args={[3.5, 2, 0.1]} label="ENTERPRISE.SQL" />
           
           {/* CENTRAL DATA CORE */}
           <Float speed={3}>
             <Sphere args={[0.5, 32, 32]}>
               <meshStandardMaterial color="#FF6600" emissive="#FF8C00" emissiveIntensity={0.5} roughness={0.1} metalness={0.8} />
             </Sphere>
           </Float>
        </group>

        <TechnicalNeuralNetwork />
        
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
