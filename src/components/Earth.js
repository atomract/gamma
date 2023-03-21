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

// Images
// import EarthDayMap from "../assets/textures/8k_earth_daymap.jpg";
// import EarthNormalMap from "../assets/textures/8k_earth_normal_map.jpg";
// import EarthSpecularMap from "../assets/textures/8k_earth_specular_map.jpg";
// import EarthCloudsMap from "../assets/textures/8k_earth_clouds.jpg";

import EarthTexture from "../assets/textures/8k_earth_daymap.jpg";

const Earth = ({ size, pos }) => {
  const [EarthTextureMap] = useLoader(TextureLoader, [EarthTexture]);

  return (
    <>
      <ambientLight intensity={0.6} />
      {/* <mesh>
        <sphereGeometry args={[3, 100, 100]} />
        <meshPhongMaterial
          map={colorMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
        />
      </mesh> */}
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

export default Earth;
