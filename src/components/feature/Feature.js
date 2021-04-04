import React from "react";
import Heading from "../heading/Heading";
import "./feature.css";
import { FeatureCard } from "../../fixtures/feature";
import { FeatureBox } from "../components";
import CheckerViewonScrollIntoView, {
  FadeInLeftBigEntrance,
} from "../../helper/animate";
function Feature() {
  const CheckView = (e) => {
    CheckerViewonScrollIntoView({ elem: ".features__cardHolder" });
    FadeInLeftBigEntrance(".features");
  };

  React.useEffect(() => {
    window.addEventListener("scroll", CheckView);
  }, []);

  return (
    <div className="features" id="feature">
      <Heading heading="Site Lists and tools" />
      <div className="features__cardHolder">
        {FeatureCard.map(({ icon, title, desc, children }, index) => (
          <FeatureBox
            key={title || index}
            children={children}
            description={desc}
            src={icon}
            title={title}
          />
        ))}
      </div>
    </div>
  );
}

export default Feature;
