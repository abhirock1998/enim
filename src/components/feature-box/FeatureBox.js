import React from "react";
import "./feature-box.css";
import AddIcon from "@material-ui/icons/Add";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function FeatureBox({ src, title, description, children }) {
  return (
    <div className="featureBox">
      <div className="featureBox__top">
        <img src={src} alt={title} />
        {title}
      </div>
      <div className="featureBox__content">
        <p>{description}</p>
        <div className="featureBox__contentPropHolder">
          {children?.map((child, index) => (
            <span key={child} className="featureBox__contentProp">
              {index < children?.length - 1 ? (
                <FiberManualRecordIcon />
              ) : (
                <AddIcon />
              )}
              {child}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureBox;
