import React from "react";
import { GoToBtn } from "../components";
import "./header.css";

function Header() {
  return (
    <div id="top" className="header">
      <div className="hedaer__logo">
        <img
          src="https://cdn.discordapp.com/attachments/750576650013638666/816199165142630410/Frame_3_1.png"
          alt="bot-logo"
        />
        <span>Crytyl Mini</span>
      </div>
      <div className="header__options">
        <GoToBtn title="Home" />
        <GoToBtn Go="#feature" title="Feature" />
        <GoToBtn Go="#faqSection" title="FAQ" />
      </div>
    </div>
  );
}

export default Header;
