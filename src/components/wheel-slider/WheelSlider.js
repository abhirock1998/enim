import React from "react";
import "./wheel-slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { WheelSldierImage } from "../../fixtures/wheel-slider-image";
function WheelSlider() {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="wheelSlider">
      <Slider {...settings}>
        {WheelSldierImage?.slice(0, 5).map(({ src, title, id }) => (
          <div key={id} className="wheelSlider__box">
            <img src={src} alt={title} />
            <div className="wheelSlider__boxTitle">{title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default WheelSlider;
