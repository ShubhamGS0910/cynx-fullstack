import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const X3D = () => {
  return (
    <div className="w-[100px] h-[100px] flex items-center justify-center bg-gray-900">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Ambient & Point Lights for a Futuristic Glow */}
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="cyan" />
        <pointLight position={[-5, -5, -5]} intensity={0.7} color="orange" />
        
        <RotatingX />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

const RotatingX = () => {
  const ref = useRef();

  // Smooth Rotation
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <ExtrudedX />
      <meshStandardMaterial 
        color="black" 
        metalness={1} 
        roughness={0.2} 
        emissive="cyan" 
        emissiveIntensity={1} 
      />
    </mesh>
  );
};

// Create a Futuristic "X" Shape
const ExtrudedX = () => {
  const shape = new THREE.Shape();

  shape.moveTo(-0.5, 1);
  shape.lineTo(0.5, 0);
  shape.lineTo(1, 0.5);
  shape.lineTo(0, -0.5);
  shape.lineTo(-1, 0.5);
  shape.lineTo(-0.5, 0);
  shape.lineTo(-0.5, 1);

  return (
    <extrudeGeometry
      args={[
        shape,
        {
          depth: 0.3,
          bevelEnabled: true,
          bevelSize: 0.1,
          bevelThickness: 0.1,
        },
      ]}
    />
  );
};

export default X3D;
