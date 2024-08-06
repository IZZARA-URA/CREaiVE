"use client";
import React from "react";
import { Carousel } from "@material-tailwind/react";

import type { CarouselProps } from "@material-tailwind/react";

const CarouselsUseCases: React.FC<CarouselProps> = ({ children }) => {
  return (
    <Carousel
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      autoplay={true}
      loop={true}
      autoplayDelay={10000}
      transition={{ duration: 4 }}
      className="rounded-[20px] max-h-[600px] scroll-smooth focus:scroll-auto"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div
          className=" bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 "
          key={length}
        >
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div>
        <div className="grid grid-cols-12 gap-4 items-center text-center mx-2">
          {/*  */}
          <div className="w-full h-[500px] col-span-6 bg-grayDefaultDark-400 rounded-[20px]">
            <img
              className="w-full h-full rounded-[20px] object-cover object-top"
              src="amber.png"
              alt="Placeholder"
            />
          </div>
          {/*  */}
          <div className="w-full h-[500px] col-span-6 bg-grayDefaultDark-400 rounded-[20px]">
            <img
              className="w-full h-full rounded-[20px] object-cover object-top"
              src="amber.png"
              alt="Placeholder"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-12 gap-4 items-center text-center mx-2">
          {/*  */}
          <div className="w-full h-[500px] col-span-6 bg-grayDefaultDark-400 rounded-[20px]">
            <img
              className="w-full h-full rounded-[20px] object-cover object-top"
              src="amber.png"
              alt="Placeholder"
            />
          </div>
          {/*  */}
          <div className="w-full h-[500px] col-span-6 bg-grayDefaultDark-400 rounded-[20px]">
            <img
              className="w-full h-full rounded-[20px] object-cover object-top"
              src="amber.png"
              alt="Placeholder"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-12 gap-4 items-center text-center mx-2">
          {/*  */}
          <div className="w-full h-[500px] col-span-6 bg-grayDefaultDark-400 rounded-[20px]">
            <img
              className="w-full h-full rounded-[20px] object-cover object-top"
              src="amber.png"
              alt="Placeholder"
            />
          </div>
          {/*  */}
          <div className="w-full h-[500px] col-span-6 bg-grayDefaultDark-400 rounded-[20px]">
            <img
              className="w-full h-full rounded-[20px] object-cover object-top"
              src="amber.png"
              alt="Placeholder"
            />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselsUseCases;
