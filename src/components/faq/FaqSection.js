import React from "react";
import "./faq-section.css";
import { Heading, Accordion as AccordionSection } from "../components";
import { Accordion } from "../../fixtures/faq";
import { ZoomInUp } from "../../helper/animate";
function FaqSection() {
  const handleClick = (value, setValue) => {
    setValue(!value);
  };

  const CheckView = () => {
    ZoomInUp(".faqSection");
  };
 
  React.useEffect(() => {
    window.addEventListener("scroll", CheckView);
  }, []);

  return (
    <div id="faqSection" className="faqSection">
      <Heading heading="Frequently Asked Questions" />
      {Accordion?.map(({ heading, id, solution }, index) => (
        <AccordionSection
          key={id || index}
          click={handleClick}
          heading={heading}
          solution={solution}
        />
      ))}
    </div>
  );
}

export default FaqSection;
