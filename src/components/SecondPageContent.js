import { Html } from "@react-three/drei";
import React from "react";

const SecondPageContent = () => {
  return (
    <>
      {" "}
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
            A safe, high quality and easy-to-explore virtual world twin where
            Liveness, commnication, entertainment and investment are available
            to everyone
          </p>
        </div>
      </Html>
    </>
  );
};

export default SecondPageContent;
