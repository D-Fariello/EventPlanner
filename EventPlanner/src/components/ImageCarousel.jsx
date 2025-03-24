import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          className="home-img"
          src="/images/ceramic.avif"
          alt="Experience 1"
        />
      </div>
      <div>
        <img
          className="home-img"
          src="/images/doctor-part.avif"
          alt="Experience 2"
        />
      </div>
      <div>
        <img
          className="home-img"
          src="/images/cocktails.avif"
          alt="Experience 3"
        />
      </div>
      <div>
        <img
          className="home-img"
          src="/images/women-party.avif"
          alt="Experience 4"
        />
      </div>
      <div>
        <img
          className="home-img"
          src="/images/photo_pc_1.jpg"
          alt="Experience 5"
        />
      </div>
    </Slider>
  );
};

export default ImageCarousel;
