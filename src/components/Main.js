import React, { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import Earth from "./Earth";
import Logo from "../assets/logo.png";

import BGVideo from "../assets/video.mp4";
import Moon from "./Moon";
import Skybox from "./Skybox";

const Main = () => {
  const videoRef = useRef();
  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}>
        <video
          ref={videoRef}
          src={BGVideo}
          autoPlay
          muted
          loop
          style={{ objectFit: "cover", width: "100%", height: "65%" }}
        />
      </div>
      <div className="flex items-center justify-center h-16 my-8 md:my-16">
        <img src={Logo} className="logo" width={500} height={350} alt="logo" />
      </div>
      <div style={{}}>
        {/* Hero Main Text */}
        <h1 className=" text-center text-5xl md:text-9xl font-black text-white ">
          {" "}
          ULTIMATE LIFE{" "}
        </h1>

        {/* Hero SubText */}
        <h2 className="text-center font-medium text-white  text-4xl ">
          MetaVerse
        </h2>
      </div>
      {/* Stating Canvas */}
      <div className="h-screen ">
        <div className="h-screen md:mt-10 relative">
          <div className="md:h-[80vh]  h-[30vh] -mt-8  md:-mt-16 absolute z-[100] mx-auto w-[100%]  md:w-[100%] top-0 left-0">
            <Canvas>
              <Earth pos={[0, 0, 0]} size={3} url={[]} />
              <Moon pos={[5, 0, 0]} size={0.5} />
            </Canvas>
          </div>
          <div>
            <div className="flex  justify-end  items-start ">
              <p className=" w-64 md:w-96 font-extrabold px-5 py-3 mt-[60%]  md:mt-[32%] mr-5 md:mr-32 text-[#00000080] bg-[#9eaec0cc]   absolute z-[100]">
                A safe, high quality and easy-to-explore virtual world twin
                where Liveness, commnication, entertainment and investment are
                available to everyone
              </p>

              <p className="w-auto font-extrabold px-3 py-3 mt-[105%]  mr-5 md:mr-32 md:mt-[41%]  text-white bg-[#25415ccc]   absolute z-[100]">
                explore
              </p>
            </div>
          </div>

          <Canvas className="">
            <Skybox />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Main;
