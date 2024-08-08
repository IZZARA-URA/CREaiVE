"use client";
import React from "react";
import { Carousel } from "@material-tailwind/react";

type Props = {
  img: string;
};


import { direction } from "@/direction"
// {`${direction}/logos/Customers Logo 06.png`}

const Card = ({ img }: Props) => {
  return (
    <div className="flex gap-4 mr-4">
      <div className="flex flex-col justify-center items-center rounded-[20px] shadow-lg w-full h-[200px]">
        <div className="">
          <img
            className="w-full h-full rounded-[20px] "
            // {`${direction}/{img}`}
            src={`${direction}/${img}`}
            alt="Placeholder"
          />
        </div>
      </div>
    </div>
  );
};

const CarouselsTechnicalPartners: React.FC = ({}) => {
  return (
    <Carousel
      prevArrow={() => false}
      nextArrow={() => false}
      autoplay={true}
      navigation={() => false}
      loop={true}
      autoplayDelay={10000}
      transition={{ duration: 10 }}
      className="rounded-[20px] w-[500px] no-scrollbar gradienL2R m-auto"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <Card img="/partners/Partners Logo 01.png" />
      <Card img="/partners/Partners Logo 02.png" />
      <Card img="/partners/Partners Logo 03.png" />
      <Card img="/partners/Partners Logo 04.png" />
    </Carousel>
  );
};

export default CarouselsTechnicalPartners;
