import { useSpring, animated } from "@react-spring/three";
import { Html } from "@react-three/drei";
import React, { useEffect } from "react";
import { Canvas, useFrame } from "react-three-fiber";

const FrontPageText = () => {


  const [springs, setSprings] = useSpring(() => ({
    scale: 1, // initial position
    config: { mass: 1, tension: 86, friction: 8.6, duration:500 },
    reset: true
  }));

  useFrame(() => {
    setSprings({scale: 2 });
  },[])

  return (
    
        <Html
          //   position={[5, -2, 0]}
          fullscreen
          wrapperClass
          as="div"
          prepend={true}
          zIndexRange={[2, -2]}
          className="top-0 left-0 w-full h-full  "
        >
          {/* < animated.div style={{...springs}}> */}
            {/* Hero Main Text */}
            <h1 
            // style={{...springs}}  
            className=" text-center  text-5xl md:text-5xl font-black text-white ">
              {" "}
              ULTIMATE LIFE{" "}
            </h1>

            {/* Hero SubText */}
            <p 
            // style={{...springs}} 
            className="text-center   font-medium text-white md:text-9xl  ">
              {" "}
              MetaVerse{" "}
            </p>
          {/* </animated.div> */}
        </Html>

  );
};

export default FrontPageText;
