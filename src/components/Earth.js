import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import "../App.css";
import { useHelper, OrbitControls } from "@react-three/drei";

import { TextureLoader } from "three/src/loaders/TextureLoader";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";

import EarthDayMap from "../assets/textures/8k_earth_daymap.png";
import EarthNormalMap from "../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../assets/textures/8k_earth_clouds.jpg";
import { DoubleSide } from "three";
import * as THREE from "three";

const Earth = (props) => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );
  const directionalLightRef = useRef();
  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);
  const earthRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [zoomAnim, setZoomAnim] = useState();
  const [scaleState, setScaleState] = useState(true);
  const vec = new THREE.Vector3();

  const [springs, api] = useSpring(
    () => ({
      X: props.pos,
      scale: !zoomAnim ? 10.5 : 3.5,
      radii: [props.size, 24, 48],
      config: { mass: 1, tension: 170, friction: 26 },
      reset: true,
    }),
    []
  );

  useEffect(() => {
    setZoomAnim(props.zoomState);
  }, [props.zoomState, zoomAnim]);

  useEffect(() => {
    window.pageYOffset > 450 ? setScaleState(false) : setScaleState(true);
  }, [window.pageYOffset, setScaleState, zoomAnim]);

  useFrame(({ viewport }) => {
    earthRef.current.rotation.y += 0.003;
    setScrollPosition(window.pageYOffset);

    // console.log(viewport.height + " " + viewport.width);

    if (!zoomAnim && !scaleState) {
      api({
        X: [0, -scrollPosition * 0.02, 0],
      });
    }
    if (!scaleState) {
      api({
        scale: 3,
      });
    }

    // }
  }, []);

  useEffect(() => {
    console.log(zoomAnim);
  }, [zoomAnim]);

  useFrame((state) => {
    if (zoomAnim) {
      // api({
      //   X: props.pos,
      // });
      state.camera.lookAt(earthRef.current.position);
      state.camera.position.lerp(vec.set(0, 0, -30), 0.075);
      state.camera.updateProjectionMatrix();
      setTimeout(() => {
        setZoomAnim(false);
      }, 1500);
    }
    else if(!zoomAnim) {
      state.camera.lookAt(earthRef.current.position);
      state.camera.position.lerp(vec.set(0, 0, -90), 0.075);
      state.camera.updateProjectionMatrix();
      setTimeout(() => {
        setZoomAnim(false);
      }, 1500);
    }
  });

  return (
    <animated.group
      position={zoomAnim ? props.pos : springs.X}
      scale={springs.scale}
    >
      <ambientLight intensity={1} />
      <mesh castShadow ref={earthRef} position={props.pos}>
        <directionalLight
          position={[-15, 6, 1]}
          intensity={-1}
          ref={directionalLightRef}
          castShadow
        />
        <sphereGeometry args={[props.size, 33, 66]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
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
