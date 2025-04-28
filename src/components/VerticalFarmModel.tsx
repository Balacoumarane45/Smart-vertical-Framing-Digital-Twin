import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useSoilMoisture } from "@/hooks/useSoilMoisture";

// Helper function to get color based on moisture level
const getMoistureColor = (level: number) => {
  if (level < 50) return "#ff4444"; // Too dry - red
  if (level > 80) return "#4444ff"; // Too wet - blue
  return "#44ff44"; // Good - green
};

// Component for a single growing rack with multiple shelves
const GrowingRack = ({ position = [0, 0, 0], rackId }: { position: [number, number, number], rackId: string }) => {
  const frame = useRef<THREE.Group>(null);
  const moistureData = useSoilMoisture();
  
  // Dimensions
  const width = 2;
  const height = 4;
  const depth = 1;
  const shelvesCount = 5;
  
  return (
    <group position={[position[0], position[1], position[2]]} ref={frame}>
      {/* Frame structure */}
      <mesh position={[0, height/2, 0]}>
        <boxGeometry args={[width, 0.1, depth]} />
        <meshStandardMaterial color={"#666"} />
      </mesh>
      <mesh position={[0, -height/2, 0]}>
        <boxGeometry args={[width, 0.1, depth]} />
        <meshStandardMaterial color={"#666"} />
      </mesh>
      <mesh position={[width/2, 0, 0]}>
        <boxGeometry args={[0.1, height, depth]} />
        <meshStandardMaterial color={"#666"} />
      </mesh>
      <mesh position={[-width/2, 0, 0]}>
        <boxGeometry args={[0.1, height, depth]} />
        <meshStandardMaterial color={"#666"} />
      </mesh>
      
      {/* Shelves with plants */}
      {Array.from({ length: shelvesCount }).map((_, i) => {
        const y = -height/2 + (i+0.5) * (height/shelvesCount);
        const shelfId = `shelf-${i + 1}`;
        const moistureInfo = moistureData.find(
          (data) => data.rack_id === rackId && data.shelf_id === shelfId
        );
        
        return (
          <group key={i} position={[0, y, 0]}>
            {/* Shelf */}
            <mesh>
              <boxGeometry args={[width - 0.2, 0.05, depth - 0.2]} />
              <meshStandardMaterial color={"#aaa"} />
            </mesh>
            
            {/* Plants (represented by boxes with moisture-based colors) */}
            {Array.from({ length: 3 }).map((_, j) => {
              const x = (j - 1) * (width/3);
              return (
                <mesh key={j} position={[x, 0.2, 0]} castShadow>
                  <boxGeometry args={[0.4, 0.3, 0.4]} />
                  <meshStandardMaterial 
                    color={moistureInfo ? getMoistureColor(moistureInfo.moisture_level) : "#66BB6A"}
                  />
                </mesh>
              );
            })}
            
            {/* LED light */}
            <mesh position={[0, 0.4, 0]}>
              <boxGeometry args={[width - 0.3, 0.05, 0.1]} />
              <meshStandardMaterial 
                color={"#ccc"} 
                emissive={"#ffffff"} 
                emissiveIntensity={0.5} 
              />
            </mesh>

            {/* Moisture level indicator */}
            {moistureInfo && (
              <group position={[width/2 + 0.2, 0, 0]}>
                <mesh>
                  <boxGeometry args={[0.1, 0.4, 0.1]} />
                  <meshStandardMaterial color={getMoistureColor(moistureInfo.moisture_level)} />
                </mesh>
                <mesh position={[0.15, 0, 0]}>
                  <planeGeometry args={[0.3, 0.2]} />
                  <meshBasicMaterial color="#ffffff" />
                </mesh>
              </group>
            )}
          </group>
        );
      })}
    </group>
  );
};

// Main vertical farm model with multiple racks
const VerticalFarm = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001;
    }
  });
  
  return (
    <group ref={group}>
      {/* Multiple growing racks arranged in a grid */}
      <GrowingRack position={[-2.5, 0, -1]} rackId="rack-1" />
      <GrowingRack position={[0, 0, -1]} rackId="rack-2" />
      <GrowingRack position={[2.5, 0, -1]} rackId="rack-3" />
      <GrowingRack position={[-2.5, 0, 1]} rackId="rack-4" />
      <GrowingRack position={[0, 0, 1]} rackId="rack-5" />
      <GrowingRack position={[2.5, 0, 1]} rackId="rack-6" />
      
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial color={"#f0f0f0"} />
      </mesh>
    </group>
  );
};

interface VerticalFarmModelProps {
  className?: string;
}

// Main component that renders the Canvas with the 3D model
const VerticalFarmModel = ({ className }: VerticalFarmModelProps) => {
  return (
    <div className={className}>
      <Canvas
        shadows
        camera={{ position: [10, 7, 10], fov: 40 }}
        style={{ background: "rgb(249, 250, 251)" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <VerticalFarm />
        <OrbitControls enableZoom={true} enablePan={true} minDistance={5} maxDistance={20} />
      </Canvas>
    </div>
  );
};

export default VerticalFarmModel;
