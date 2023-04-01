import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import "../App.css";
import { OrbitControls } from "@react-three/drei";

import { TextureLoader } from "three/src/loaders/TextureLoader";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";

import EarthDayMap from "../assets/textures/8k_earth_daymap.png";
import EarthNormalMap from "../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../assets/textures/8k_earth_clouds.jpg";
import { DoubleSide } from "three";
import * as THREE from 'three';

const Earth = ({ size, pos, zoomState }) => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );
  const earthRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [zoomAnim, setZoomAnim] = useState(false);
  const vec = new THREE.Vector3()


  const [springs, api] = useSpring(
    () => ({
      X: pos,
      scale: 2.58,
      radii: [size, 24, 48],
      config: { mass: 1, tension: 170, friction: 26 },
      reset: true,
    }),
    []
  );

  useEffect(() => {
    setZoomAnim(zoomState)
  },[zoomState])

  useFrame(() => {
    earthRef.current.rotation.y += 0.006;
    setScrollPosition(window.pageYOffset);
  });

  useFrame(({ viewport }) => {
    console.log(viewport.height + " " + viewport.width);
    console.log(window.pageYOffset);

    if (window.pageYOffset > 450 && !zoomAnim) {
      api({
        scale: 1.25,
      });
    }
    if (!zoomAnim) {
      api({
        X: [0, -scrollPosition * 0.01, 0],
      });
    }
    
    // }
  }, []);

  useFrame(state => {
    if(zoomAnim) {
      state.camera.lookAt(earthRef.current.position)
      state.camera.position.lerp(vec.set(0, 0, 0), 0.05)
      state.camera.updateProjectionMatrix()
      setTimeout(() => {
      setZoomAnim(false)
      }, 1500);
    }
  })

  return (
    <animated.group position={springs.X} scale={springs.scale}>
      <ambientLight intensity={1} />
      <mesh>
        <mesh position={pos}>
          <sphereGeometry args={[size + 0.02, 33, 66]} />

          <meshStandardMaterial
            map={cloudsMap}
            opacity={0.4}
            depthWrite={true}
            transparent={true}
            side={DoubleSide}
          />
          <OrbitControls
            enablePan={false}
            autoRotate={false}
            enableZoom={false}
          />
        </mesh>
        <mesh ref={earthRef} position={pos}>
          <sphereGeometry args={[size, 33, 66]} />
          <meshPhongMaterial specularMap={specularMap} />
          <meshStandardMaterial map={colorMap} normalMap={normalMap} />
          <OrbitControls
            enablePan={false}
            autoRotate={false}
            enableZoom={false}
          />
        </mesh>
      </mesh>
    </animated.group>
  );
};

export default Earth;
