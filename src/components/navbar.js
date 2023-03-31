import React from "react";
import "../App.css";
import logo from "../assets/Gamma_Logo.svg";
import HamburgerIcon from "../assets/bars-solid.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <div className="w-full sticky top-5 z-50  flex items-center justify-between h-24 my-8 md:my-16 ">
        <img src={logo} className="logo" width={500} height={350} alt="Logo" />
        <FontAwesomeIcon
          className="text-white text-3xl mr-4 md:mr-10"
          icon={faBars}
        />
      </div>
    </>
  );
}

export default Navbar;
