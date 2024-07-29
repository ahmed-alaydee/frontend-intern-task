import React from "react";
import Slider from "react-slick";
import "../Components/Slide.css"
import  banner from "../Components/Pages/img/banner-media3.png"
import  pic8 from "../Components/Pages/img/pic8.jpg"
import  banner2 from "../Components/Pages/img/banner-media.png"
import  b2 from "../Components/Pages/img/2 (1).png"
import { Link } from "react-router-dom";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots:(dots) =>{
      return <ul style={{margin:"10px"}}>{dots}</ul>
    }
  };
  return (
    <Slider {...settings}>
       
      <div  className="contanire_btn">
   <img src={banner} className="img" alt="" />
     <Link className="btn btn-light">MAN SHOES</Link>
      </div>
      <div className="contanire_btn">
      <img src={pic8} className="img" alt="" />
      <Link className="btn btn-light">MAN SHOES</Link>
      </div>
      <div className="contanire_btn">
      <img src={banner2} className="img" alt="" />
      <Link className="btn btn-light">MAN SHOES</Link>
      </div>
      <div className="contanire_btn">
      <img src={b2} className="img" alt="" />
      <Link className="btn btn-light">MAN SHOES</Link>
      </div>

    </Slider>
  );
}