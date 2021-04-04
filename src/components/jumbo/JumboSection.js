import React from "react";
import "./jumbo-section.css";
import { FeatureBox, Heading } from "../../components/components";
import { EssentialsBoxes } from "../../fixtures/essential";
import CheckerViewonScrollIntoView, {
  FadeInLeftBigEntrance,
} from "../../helper/animate";

function JumboSection() {
  const CheckView = () => {
    CheckerViewonScrollIntoView({ elem: ".jumboSection__wrapper" });
     FadeInLeftBigEntrance(".jumboSection");
  };

  React.useEffect(() => {
    window.addEventListener("scroll", CheckView);
  }, []);

  return (
    <div id="services" className="jumboSection">
      <Heading heading="Services" />
      <div className="jumboSection__wrapper">
        {EssentialsBoxes.map(({ id, src, title, description }) => (
          <FeatureBox
            key={id}
            src={src}
            description={description}
            title={title}
          />
        ))}
      </div>
    </div>
  );
}

export default JumboSection;
