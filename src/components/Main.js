import React, { useRef } from "react";
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
import ReactPlayer from "react-player";
import Logo from "../assets/logo.png";

import BGVideo from "../assets/video.mp4";

const Main = () => {
  const [ImageTexture] = useLoader(TextureLoader, [image]);

  let width = window.innerWidth;
  let height = window.innerHeight;
  const videoRef = useRef();
  return (
    // <div className="container">
    //   {/* <HomePageText /> */}
    //   <Canvas>
    // {/* PerspectiveCamera( 45, width / height, 1, 1000 ); */}
    /* <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <ambientLight intensity={1} /> */
    /* <directionalLight position={[1, 1, 20]} intensity={1.5} /> */
    /* <mesh>
          <sphereGeometry args={[50, 320, 320]} />
          <meshStandardMaterial side={DoubleSide} map={ImageTexture} />
          <perspectiveCamera
            fov={20}
            makeDefault={true}
            position={[45, width / height, 1, 1000]}
          />
        </mesh> */
    /* 
        <mesh>
          <Html as="div" className="">
            <div className="d-flex" style={{ display: "flex" }}>
              <div>
                <ReactPlayer
                  controls={true}
                  style={{
                    position: "absolute",
                    height: "100vh",
                    width: "100vh",
                    top: "0",
                    left: "0",
                    transform: "none",
                  }}
                  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                />
              </div>
              <div>
                <h1>Hello World</h1>
              </div>
            </div>
          </Html>
        </mesh>
        {/* <Earth /> */
    //   </Canvas>
    // </div> */}

    <>
      <div style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}>
        <video
          ref={videoRef}
          src={BGVideo}
          autoPlay
          muted
          loop
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div className="logoParent">
        <img src={Logo} className="logo" width={500} height={350} alt="logo" />
      </div>
      <div style={{}}>
        <h1 className="Maintext"> ULTIMATE LIFE </h1>
        <h1 className="subText">MetaVerse</h1>
      </div>
      <div className="CanvaStyle">
        <Canvas>
          <directionalLight position={[5, 1, 20]} intensity={1.5} />
          <Earth />
        </Canvas>
      </div>
    </>
  );
};

export default Main;
