import React from "react";
import "./styles.css";
import { Canvas, useLoader } from "@react-three/fiber";
import { Html, OrbitControls, RenderTexture, Text } from "@react-three/drei";
import {
  DoubleSide,
  PerspectiveCamera,
  SphereGeometry,
  TextureLoader,
} from "three";
import image from "../assets/c.png";
import Earth from "./Earth";

const Test = () => {
  const [ImageTexture] = useLoader(TextureLoader, [image]);

  let width = window.innerWidth;
  let height = window.innerHeight;
  return (
    <div className="container">
      {/* <HomePageText /> */}
      <Canvas>
        {/* PerspectiveCamera( 45, width / height, 1, 1000 ); */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <ambientLight intensity={1} />
        {/* <directionalLight position={[1, 1, 20]} intensity={1.5} /> */}
        <mesh>
          <sphereGeometry args={[50, 320, 320]} />
          <meshStandardMaterial side={DoubleSide} map={ImageTexture} />
          <perspectiveCamera
            fov={20}
            makeDefault={true}
            position={[45, width / height, 1, 1000]}
          />
        </mesh>
        <mesh>
          <Html>
            <div className="maintext">ULTIMATE LIFE</div>
          </Html>
        </mesh>
        <Earth />
      </Canvas>
    </div>
  );
};

export default Test;
