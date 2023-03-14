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
import EarthDayMap from "../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../assets/textures/8k_earth_clouds.jpg";

const Earth = (props) => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh>
        <sphereGeometry args={[1.005, 100, 100]} />
        <meshPhongMaterial
          map={colorMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 100, 100]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          side={THREE.DoubleSide}
        />
        <OrbitControls
          enablePan={true}
          zoomSpeed={0.6}
          autoRotate={true}
          panSpeed={0.5}
          rotateSpeed={0.4}
          maxDistance={16050}
          minDistance={1}
          minZoom={200}
          maxZoom={100}
          enabled={true}
          enableZoom={true}
        />
      </mesh>
    </>
  );
};

export default Earth;
