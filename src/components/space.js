import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import "../App.css";
import { OrbitControls, Stars } from "@react-three/drei";
import {
  Texture,
  MeshBasicMaterial,
  SphereGeometry,
  RepeatWrapping,
  // TextureLoader,
} from "three";

import Earth from "./Earth";

const SpaceScene = () => {
  return (
    <div className="CanvaStyle">
      <Canvas>
        <OrbitControls
          enablePan={false}
          zoomSpeed={0.75}
          maxDistance={16050}
          minDistance={1}
          minZoom={200}
          maxZoom={100}
          enabled={true}
        />
        <Stars
          radius={50} // Radius of the inner sphere (default=100)
          depth={-500} // Depth of area where stars should fit (default=50)
          count={10000} // Amount of stars (default=5000)
          factor={1} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          // fade // Faded dots (default=false)
        />
        <Earth />
      </Canvas>
    </div>
  );
};

export default SpaceScene;
