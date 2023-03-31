import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import "../App.css";
import { OrbitControls } from "@react-three/drei";

import { TextureLoader } from "three/src/loaders/TextureLoader";
import classNames from "classnames";
import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";

import EarthDayMap from "../assets/textures/8k_earth_daymap.png";
import EarthNormalMap from "../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../assets/textures/8k_earth_clouds.jpg";
import { DoubleSide } from "three";

const Earth = ({ size, pos }) => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );
  const earthRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);

  // const { springs, api } = useSpring({
  //   X: [0, 0, 0],
  //   config: { mass: 1, tension: 170, friction: 26 }
  // });

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

  // useEffect(({viewport}) => {
  // })

  useFrame(() => {
    earthRef.current.rotation.y += 0.006;
    setScrollPosition(window.pageYOffset);
  });

  useFrame(({ viewport }) => {
    console.log(viewport.height + " " + viewport.width);
    console.log(window.pageYOffset);

    // if(scrollPosition  100 ){
    //   api({
    //   X: [0, scrollPosition * 0.1, 0],
    // });
    // }
    // else {
    if (window.pageYOffset > 450) {
      api({
        scale: 1.25,
      });
    }
    api({
      X: [0, -scrollPosition * 0.01, 0],
    });
    // }
  }, []);

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
