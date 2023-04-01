import React, { useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import Earth from "./Earth";
import Logo from "../assets/logo.png";

import BGVideo from "../assets/video.mp4";
import Moon from "./Moon";
import Skybox from "./Skybox";
import Navbar from "./navbar";
import { Button } from "./UI/UI";

const Main = () => {
  const videoRef = useRef();
  const [zoomAnim, setZoomAnim] = useState(false);

  const OnHandleBtn = () => {
    setZoomAnim(true);
  };

  return (
    <>
      <div
        className="w-full  "
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          backgroundColor: "#4169e1",
          opacity: 0.96,
        }}
      >
        <div className="overlay w-full" />
        <video
          ref={videoRef}
          src={BGVideo}
          autoPlay
          muted
          loop
          className="w-full"
          style={{ objectFit: "cover", width: "100%", height: "25%" }}
        />
      </div>
      <Navbar />

      <div style={{}} className="mt-6">
        {/* Hero Main Text */}
        <h1 className=" text-center  text-5xl md:text-5xl font-black text-white ">
          {" "}
          ULTIMATE LIFE{" "}
        </h1>

        {/* Hero SubText */}
        <h2 className="text-center pb-6  font-medium text-white md:text-9xl  ">
          MetaVerse
        </h2>
      </div>
      {/* Stating Canvas */}
      <div className="h-[200vh]    ">
        <div className="edge1 z-[2] absolute"></div>
        <div className="h-[200vh] edge2  relative">
          <div className="md:h-[100vh]  h-[60vh] -mt-8 md:-mt-16 absolute z-[5] mx-auto w-[100%]  md:w-[100%] top-0 left-0">
            <Canvas
              camera={{ fov: 75, position: [0, 0, -16] }}
              className=" z-[3]"
            >
              <Earth pos={[0, 0.55, 0]} size={3.3} zoomState={zoomAnim} />
              <Moon pos={[10, -0.2, 0]} size={0.75} />
            </Canvas>
          </div>
          <Button handleBtn={OnHandleBtn} />
          <Canvas>
            <Skybox />
            {/* <Skybox /> */}
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Main;
