import React from "react";
import "./heading.css";
function Heading({ heading = "heading" }) {
  return <div className="heading  ">{heading}</div>;
}

export default Heading;
