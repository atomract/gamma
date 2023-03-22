import { Canvas, useLoader } from "@react-three/fiber";
import "../App.css";
import { OrbitControls, useTexture } from "@react-three/drei";
import {
  Texture,
  MeshBasicMaterial,
  SphereGeometry,
  RepeatWrapping,
  // TextureLoader,
} from "three";

import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import EarthTexture from "../assets/textures/8k_earth_daymap.jpg";

useTexture.preload(EarthTexture);

const Earth = ({ size, pos }) => {
  const [EarthTextureMap] = useLoader(TextureLoader, [EarthTexture]);

  return (
    <mesh>
      <ambientLight intensity={0.6} />

      <mesh position={pos}>
        <sphereGeometry args={[size, 50, 50]} />
        <meshPhongMaterial specularMap={EarthTextureMap} />
        <meshStandardMaterial
          map={EarthTextureMap}
          normalMap={EarthTextureMap}
          side={THREE.DoubleSide}
        />
        <OrbitControls
          enablePan={false}
          autoRotate={false}
          enableZoom={false}
          enableRotate={false}
        />
      </mesh>
    </mesh>
  );
};

export default Earth;
