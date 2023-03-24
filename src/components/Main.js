import React, { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import Earth from "./Earth";
import Logo from "../assets/logo.png";

import BGVideo from "../assets/video.mp4";
import Moon from "./Moon";
import Skybox from "./Skybox";
import Navbar from "./navbar";

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
      <Navbar />

      <div style={{}} className="mt-80">
        {/* Hero Main Text */}
        <h1 className=" text-center  text-5xl md:text-5xl font-black text-white ">
          {" "}
          ULTIMATE LIFE{" "}
        </h1>

        {/* Hero SubText */}
        <h2 className="text-center font-medium text-white md:text-9xl  ">
          MetaVerse
        </h2>
      </div>
      {/* Stating Canvas */}
      <div className="h-[200vh] ">
        <div className="h-[200vh] md:mt-10 relative">
          <div className="md:h-[80vh]  h-[30vh] -mt-8  md:-mt-16 absolute z-[100] mx-auto w-[100%]  md:w-[100%] top-0 left-0">
            <Canvas frameloop="demand">
              <Earth pos={[0, 0, 0]} size={3} url={[]} />
              <Moon pos={[5, 0, 0]} size={0.5} />
            </Canvas>
          </div>
          <div>
            <div className="flex   justify-end  items-start ">
              <div className="mt-[105%]  mr-5 md:mr-80 md:mt-[35%] absolute z-[100] ">
                <div className="exploreBtnParent">
                  <p className=" exploreBtn w-auto  font-extrabold  text-white bg-[#25415ccc]   ">
                    explore
                  </p>
                </div>
              </div>
            </div>

            <div className="flex   justify-start  items-start">
              <div className="mt-[105%]  ml-60 md:mr-70 md:mt-[60%] absolute z-[100] ">
                <h1 className="text-white text-5xl">About US</h1>
              </div>
            </div>
          </div>

          <Canvas className="" frameloop="demand">
            <Skybox />
            {/* <Skybox /> */}
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Main;
