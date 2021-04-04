import React from "react";
import { GoToBtn } from "../components";
import "./header.css";

function Header() {
  return (
    <div id="top" className="header">
      <div className="hedaer__logo">
        <img
          src="https://www.pikpng.com/pngl/m/546-5467841_website-development-port-blair-web-design-logo-png.png"
          alt="bot-logo"
        />
        <span>DPDC</span>
      </div>
      <div className="header__options">
        <GoToBtn title="Home" />
        <GoToBtn Go="#services" title="Services" />
        <GoToBtn Go="#contact-us" title="Contact Us" />
      </div>
    </div>
  );
}

export default Header;
