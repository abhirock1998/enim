import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import "./accord.css";
function Accordion({ heading, solution, click }) {
  const [show, setShow] = useState(false);
  return (
    <div className="accordion">
      <div className="accordion__wrapper">
        <div
          onClick={() => click(show, setShow)}
          className="accordion__heading"
        >
          <h2>{heading}</h2>
          <div>{show ? <CloseIcon /> : <AddIcon />}</div>
        </div>
      </div>
      {show && (
        <div className="accordion__solution animate__fadeInUp ">{solution}</div>
      )}
    </div>
  );
}

export default Accordion;
