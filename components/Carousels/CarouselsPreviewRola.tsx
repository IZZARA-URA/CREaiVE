"use client"
import React from 'react'
import { Carousel } from "@material-tailwind/react";
import type { CarouselProps } from "@material-tailwind/react";

type Props = {
    image: string
}

const Card = ({ image }: Props) => {
    return (
        <div className='flex mr-4'>
            <div className="flex flex-col justify-center items-center bg-grayDefaultDark-300 rounded-[20px] w-full ">
                <img
                    className="object-cover w-full rounded-[20px]"
                    src={image}
                    alt="Placeholder"
                />
            </div>
        </div>
    )
}

const ContainerCards = () => {
    return (
        <div className='flex w-auto'>
            <Card image='aihumansNisa.png'/>
            <Card image='aihumansNisa.png'/>
            <Card image='aihumansNisa.png'/>
            <Card image='aihumansNisa.png'/>
            <Card image='aihumansNisa.png'/>
        </div>
    );
}

const CarouselsPreviewRola: React.FC = ({}) => {
    return (
        <Carousel
            prevArrow={false}
            nextArrow={false}
            autoplay={true}
            navigation={false}
            loop={true}
            autoplayDelay={15000}
            transition={{ duration: 15 }}
            className="rounded-[20px] max-h-[500px] no-scrollbar gradienL2R py-8"
        >
            <ContainerCards />
            <ContainerCards />
            <ContainerCards />
            <ContainerCards />
        </Carousel>
    )
}

export default CarouselsPreviewRola