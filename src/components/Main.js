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
      {/* display: flex;
  align-items: center;
  justify-content: center;
  height: 300px; */}
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
      <div className="h-screen">
        <div className="h-screen md:mt-5 w-full">
          <Canvas className="">
            <Skybox />
            <mesh>
              <Earth pos={[0, 0.9, 0]} size={2.3} url={[]} />
              <Moon pos={[4, 0.9, 0]} size={0.5} />
            </mesh>
            <mesh position={[2, -1, -0.5]}>
              <Html as="div" className="">
                <div>
                  <p
                    style={{
                      paddingRight: "40px",
                      paddingLeft: "20px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      background: "#9eaec0cc",
                      width: "400px",
                      fontWeight: "bold",
                      color: "#00000080",
                      wordSpacing: "3px",
                    }}
                  >
                    A safe, high quality and easy-to-explore virtual world twin
                    where Liveness, commnication, entertainment and investment
                    are available to everyone
                  </p>
                </div>
              </Html>
            </mesh>
            <mesh position={[9.15, -4, -4]}>
              <Html as="div" className="">
                <div
                  className=""
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <div>
                    <h1
                      style={{
                        paddingRight: "20px",
                        paddingLeft: "20px",
                        paddingTop: "0",
                        paddingBottom: "5px",
                        background: "#25415ccc",
                        width: "100%",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      explore
                    </h1>
                  </div>
                </div>
              </Html>
            </mesh>
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Main;
