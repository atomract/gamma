import { Html } from "@react-three/drei";
import React from "react";
import { Canvas } from "react-three-fiber";

const FrontPageText = () => {
  return (
    <div className=" w-full h-[25vh]">
      <Canvas className="">
        <Html
          //   position={[5, -2, 0]}
          fullscreen
          wrapperClass
          as="div"
          prepend={true}
          zIndexRange={[2, -2]}
          className="top-0 left-0 w-full h-full  "
        >
          {/* Hero Main Text */}
          <h1 className=" text-center  text-5xl md:text-5xl font-black text-white ">
            {" "}
            ULTIMATE LIFE{" "}
          </h1>

          {/* Hero SubText */}
          <p className="text-center   font-medium text-white md:text-9xl  ">
            {" "}
            MetaVerse{" "}
          </p>
        </Html>
      </Canvas>
    </div>
  );
};

export default FrontPageText;
