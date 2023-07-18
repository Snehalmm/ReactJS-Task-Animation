import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WaveAnimation from "../global/animation/Wave";
import ImageSlider from "../slider/Image";
import BannerImg1 from "../../assets/images/banner1.webp";
import BannerImgM1 from "../../assets/images/banner1-m.webp";
import BannerImg2 from "../../assets/images/banner2.webp";
import BannerImgM2 from "../../assets/images/banner2-m.webp";
import BannerImg3 from "../../assets/images/top-25-agency.webp";
import BannerImgM3 from "../../assets/images/top-25-agency-m.webp";


export default function Section() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    arrows: false  
  };
  
  return (
    <main>
        <WaveAnimation />
        <div className="slider-wrapper">
          <Slider {...settings}>
            <div className="img-wrap">
              <ImageSlider image={BannerImg1} mImage={BannerImgM1}/>
            </div>
            <div className="img-wrap">
              <ImageSlider image={BannerImg2} mImage={BannerImgM2}/>
            </div>
            <div className="img-wrap">
              <ImageSlider image={BannerImg3} mImage={BannerImgM3} />
            </div>
          </Slider>
        </div>
    </main>
  );
}
