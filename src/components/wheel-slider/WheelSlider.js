import React from "react";
import "./wheel-slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import one from "../../assests/1.jpeg";
import two from "../../assests/2.jpeg";
import three from "../../assests/3.jpeg";
import four from "../../assests/4.jpeg";
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
        <div className="wheelSlider__box">
          <img src={one} alt="Biopharm Solution" />
          <div className="wheelSlider__boxTitle">Biopharm Solution</div>
        </div>
        <div className="wheelSlider__box">
          <img src={two} alt="Biopharm Solution" />
          <div className="wheelSlider__boxTitle">Kredence PV</div>
        </div>
        <div className="wheelSlider__box">
          <img src={three} alt="Biopharm Solution" />
          <div className="wheelSlider__boxTitle">Ghanshyaam Trading CO.</div>
        </div>
        <div className="wheelSlider__box">
          <img src={four} alt="Biopharm Solution" />
          <div className="wheelSlider__boxTitle">DFY</div>
        </div>
      </Slider>
    </div>
  );
}

export default WheelSlider;
