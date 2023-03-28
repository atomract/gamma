import { Canvas, useFrame, useLoader } from "@react-three/fiber";
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
import EarthTexture from "../assets/textures/8k_earth_daymap.png";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";

const Earth = ({ size, pos }) => {
  const [EarthTextureMap] = useLoader(TextureLoader, [EarthTexture]);
  const materialClasses = classNames("bg-red-500", "hover:bg-blue-500");
  const earthRef = useRef()
  const mesh = useRef()
  const [scrollPosition, setScrollPosition] = useState(0);

  // const { springs, api } = useSpring({
  //   X: [0, 0, 0],
  //   config: { mass: 1, tension: 170, friction: 26 }
  // });

  const [springs, api] = useSpring(
    () => ({  
      X: pos,
      radii: [size, 24, 48],
      config: { mass: 1, tension: 170, friction: 26 }
      }),
    []
  )

  // useEffect(({viewport}) => {
  // })

  useFrame(() => {
    earthRef.current.rotation.y += 0.006;
    setScrollPosition(window.pageYOffset);
  })

  useFrame(({ viewport }) => {
    console.log(viewport.height + " " + viewport.width )
    console.log(window.pageYOffset )

    // if(scrollPosition > 100 ){
    //   api({
    //   X: [0, scrollPosition * 0.1, 0],
    // });
    // }
    // else {
      api({
        X: [0, -scrollPosition * 0.01, 0],
      });
    // }
  },[]);


  return (
      <animated.group position={springs.X}>
        <ambientLight intensity={0.5} />
        <mesh ref={earthRef} position={pos}>
          <sphereGeometry args={[size, 33, 66]} />
          <meshPhongMaterial specularMap={EarthTextureMap} />
          <meshStandardMaterial
            map={EarthTextureMap}
            normalMap={EarthTextureMap}
          />
          <OrbitControls
            enablePan={false}
            autoRotate={false}
            enableZoom={false}
          />
        </mesh>
      </animated.group>
  );
};

export default Earth;
