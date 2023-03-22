import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React from "react";
import { DoubleSide, RepeatWrapping, TextureLoader } from "three";
import image from "../assets/c.png";
import { useLoader } from "@react-three/fiber";

const Skybox = () => {
  const [ImageTexture] = useLoader(TextureLoader, [image]);
  ImageTexture.wrapS = ImageTexture.wrapT = RepeatWrapping;

  ImageTexture.repeat.set(1, 1);

  //   ImageTexture.wrapS = RepeatWrapping;
  //   ImageTexture.wrapT = RepeatWrapping;

  return (
    <mesh>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 30]} intensity={1} />
      <mesh rotation={[0, 1, 0]} position={[0, -2, 0]}>
        <sphereGeometry args={[7, 105, 105]} />

        <meshStandardMaterial side={DoubleSide} map={ImageTexture} />
        {/* <meshStandardMaterial map={ImageTexture} side={DoubleSide} /> */}
      </mesh>
    </mesh>
  );
};

export default Skybox;
