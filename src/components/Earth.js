import { Canvas, useLoader } from "@react-three/fiber";
import "../App.css";
import { OrbitControls } from "@react-three/drei";
import {
  Texture,
  MeshBasicMaterial,
  SphereGeometry,
  RepeatWrapping,
  // TextureLoader,
} from "three";

import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import classNames from "classnames";
import EarthTexture from "../assets/textures/8k_earth_daymap.jpg";

const Earth = ({ size, pos }) => {
  const [EarthTextureMap] = useLoader(TextureLoader, [EarthTexture]);
  const materialClasses = classNames("bg-red-500", "hover:bg-blue-500");
  return (
    <mesh className="">
      <ambientLight intensity={0.6} />

      <mesh rotation={[1, 2, 1]} position={pos}>
        <sphereGeometry args={[size, 50, 40]} />
        <meshPhongMaterial specularMap={EarthTextureMap} />
        <meshStandardMaterial
          className={materialClasses}
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
