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
      <div className="logoParent">
        <img src={Logo} className="logo" width={500} height={350} alt="logo" />
      </div>
      <div style={{}}>
        <h1 className="Maintext"> ULTIMATE LIFE </h1>
        <h1 className="subText">MetaVerse</h1>
      </div>
      <div className="CanvaStyle">
        <div className="SkyBox">
          <Canvas camera={{}}>
            <Skybox />
            <mesh>
              <Earth pos={[0, 0.9, 0]} size={2.3} />
              <Moon pos={[5, 0.9, 0]} size={0.6} />
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
            <mesh position={[7.34, -3.4, -3.4]}>
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
