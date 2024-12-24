"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    autoPlay: true,
  };
  return (
    <main className="max-w-[1500px] mx-auto">
    <Slider {...settings} className="mx-[0.3%]">
      <div>
        <Image
          src="/slider1.jpg"
          alt="image1"
          height={100}
          width={400}
          layout="responsive"
        />
      </div>
      <div>
        <Image
          src="/slider2.jpg"
          alt="image2"
          height={100}
          width={400}
          layout="responsive"
        />
      </div>
      <div>
        <Image
          src="/slider3.webp"
          alt="image3"
          height={100}
          width={400}
          layout="responsive"
        />
      </div>
      <div>
        <Image
          src="/slider5.jpg"
          alt="image4"
          height={100}
          width={400}
          layout="responsive"
        />
      </div>
    </Slider>
    </main>
  );
}
