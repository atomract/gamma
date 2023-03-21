import React, { useRef } from "react";
import "./styles.css";
import { Canvas, useLoader } from "@react-three/fiber";
import { Html, OrbitControls, RenderTexture, Text } from "@react-three/drei";
import {
  DoubleSide,
  PerspectiveCamera,
  RepeatWrapping,
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
  ImageTexture.wrapS = RepeatWrapping;
  ImageTexture.wrapT = RepeatWrapping;

  let width = window.innerWidth;
  let height = window.innerHeight;
  const videoRef = useRef();
  return (
    // // <div className="container">
    // //   {/* <HomePageText /> */}
    // //   <Canvas>
    // // {/* PerspectiveCamera( 45, width / height, 1, 1000 ); **-}

    // /*
    //     <mesh>
    //       <Html as="div" className="">
    //         <div className="d-flex" style={{ display: "flex" }}>
    //           <div>
    //             <ReactPlayer
    //               controls={true}
    //               style={{
    //                 position: "absolute",
    //                 height: "100vh",
    //                 width: "100vh",
    //                 top: "0",
    //                 left: "0",
    //                 transform: "none",
    //               }}
    //               url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
    //             />
    //           </div>
    //           <div>
    //             <h1>Hello World</h1>
    //           </div>
    //         </div>
    //       </Html>
    //     </mesh>
    //     {/* <Earth /> */
    // //   </Canvas>
    // // </div> */}

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
          <Canvas>
            <mesh position={[0, 0, 0]}>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
              />
              <ambientLight intensity={0} />
              <directionalLight position={[1, 2, 30]} intensity={1} />
              <mesh position={[0, -2, 0]}>
                <sphereGeometry args={[7, 105, 105]} />
                <meshStandardMaterial side={DoubleSide} map={ImageTexture} />
                {/* <meshStandardMaterial map={ImageTexture} side={DoubleSide} /> */}
              </mesh>
            </mesh>
            <Earth pos= {[0,0.9,0]} size={2.3} />
            <mesh position={[2, -0.5, -0.5]}>
              <Html as="div" className="">
                <div>
                  <p
                    style={{
                      paddingRight: "40px",
                      paddingLeft: "20px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      backgroundColor: "GrayText",
                      width: "300px",
                      color: "white",
                    }}
                  >
                    A safe, high quality and easy-to-explore virtual world twin
                    where Liveness, commnication, entertainment and investment
                    are available to everyone
                  </p>
                </div>
              </Html>
            </mesh>
            <mesh position={[4, -3, -3]}>
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
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        backgroundColor: "GrayText",
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
