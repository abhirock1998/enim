import React from "react";
import "./go-to-id.css";
function GoToId({ Component, Go = "/", isCom = false, title, target = false }) {
  return (
    <div className="go-to-id">
      {target ? (
        <a href={Go} rel="noreferrer" target="_blank">
          {isCom ? <Component /> : title}
        </a>
      ) : (
        <a href={Go}>{isCom ? <Component /> : title}</a>
      )}
    </div>
  );
}

export default GoToId;
