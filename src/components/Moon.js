import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import "../App.css";
import { OrbitControls } from "@react-three/drei";

import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
// import SpacePlanet from '../assets/planet-station.fbx'

import unknownObject from "../assets/142517171_xl_normal_none-50.gltf";

import MoonTexture from "../assets/8k_moon.jpg";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Moon = ({ size, pos }) => {
  const [MoonTextureMap] = useLoader(TextureLoader, [MoonTexture]);
  const moonRef = useRef();
  const moonEarth = useRef();

  useFrame(() => {
    moonRef.current.rotation.y += 0.003;
    moonEarth.current.rotation.y += 0.015;
  });

  const spacePlanet = useLoader(GLTFLoader, unknownObject);

  return (
    <mesh ref={moonEarth} position={[0, 0.55, 0]}>
      <ambientLight intensity={0.001} />

      <mesh ref={moonRef} position={pos}>
        <sphereGeometry args={[size, 70, 80]} />
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
      {/* <mesh>
      <primitive 
            object = {spacePlanet.sence} />
      </mesh>

       */}
      <mesh>
        <primitive scale={1} object={spacePlanet.scene} />
      </mesh>
    </mesh>
  );
};

export default Moon;
