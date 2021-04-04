import React from "react";
import { GoToBtn } from "../components";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import "./footer.css";
function Footer() {
  
  return (
    <div className="footer">
      <div className="footer__left">
        <p>© Plugged Robotics</p>
      </div>
      <div className="footer__right">
        <GoToBtn target={true} Go="mailto:pluggedrobotics@yourctplug.com"  title="Contact Us" />
        <GoToBtn  target={true}  Go="https://twitter.com/pluggedrobotics" title="Twitter" />
        <GoToBtn  Go="#top" isCom={true}Component={ArrowUpwardIcon} />
      </div>
    </div>
  );
}

export default Footer;
