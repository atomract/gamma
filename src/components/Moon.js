import { Canvas, useLoader } from "@react-three/fiber";
import "../App.css";
import { OrbitControls } from "@react-three/drei";

import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import MoonTexture from "../assets/8k_moon.jpg";

const Moon = ({ size, pos }) => {
  const [MoonTextureMap] = useLoader(TextureLoader, [MoonTexture]);

  return (
    <>
      <ambientLight intensity={0.2} />

      <mesh rotation={[3, 1, 0]} position={pos}>
        <sphereGeometry args={[size, 30, 15, 15]} />
        <meshPhongMaterial attach={"material"} specularMap={MoonTextureMap} />
        <meshStandardMaterial
          map={MoonTextureMap}
          normalMap={MoonTextureMap}
          side={THREE.DoubleSide}
        />
        <OrbitControls
          enablePan={false}
          // zoomSpeed={0.75}
          autoRotate={false}
          // panSpeed={0.5}
          // rotateSpeed={0.4}
          // maxDistance={16050}
          // minDistance={1}
          // minZoom={200}
          // maxZoom={100}
          // enabled={true}
          enableZoom={false}
          enableRotate={false}
        />
      </mesh>
    </>
  );
};

export default Moon;
