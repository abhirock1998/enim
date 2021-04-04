import React from "react";
import "./input.css";
function Input({ title = "Full Name*", isTextArea = false,place,type }) {
  return (
    <div className="contact__input">
      <span>{title}</span>
      {isTextArea ? <textarea></textarea> : <input  type={type}  placeholder={place}  />}
    </div>
  );
}

export default Input;
