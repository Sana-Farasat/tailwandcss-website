"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import Image from "next/image";
import { Fullscreen } from "lucide-react";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <main className="text-center  bg-gray-400 h-80 w-[94%] my-28 lg:h-96 lg:w-[98%] lg:my-20">
      <Slider {...settings}>
        <div>
          <Image
            src="/heroimage3.jpg"
            alt="Heroimage"
            height={200}
            width={300}
            className="h-96 w-full"
          />
        </div>
        <div>
          <Image
            src="/heroimage2.jfif"
            alt="Heroimage"
            height={200}
            width={300}
            className="h-96 w-full"
          />
        </div>
        <div>
          <Image
            src="/heroimage1.jfif"
            alt="Heroimage"
            height={200}
            width={300}
            className="h-96 w-full"
          />
        </div>
        <div>
          <Image
            src="/heroimage4.avif"
            alt="Heroimage"
            height={200}
            width={300}
            className="h-96 w-full"
          />
        </div>
        <div>
          <Image
            src="/heroimage5.jpg"
            alt="Heroimage"
            height={200}
            width={300}
            className="h-96 w-full"
          />
        </div>
      </Slider>
    </main>
  );
}
