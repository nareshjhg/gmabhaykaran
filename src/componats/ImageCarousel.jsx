import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/assest/images/gallary1.jpg",
  "/assest/images/gallary2.jpg",
  "/assest/images/gallary3.jpg",
  // Add more image paths here
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
