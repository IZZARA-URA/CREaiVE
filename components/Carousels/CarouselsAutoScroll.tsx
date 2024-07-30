"use client"
import React from 'react'
import { Carousel, IconButton } from "@material-tailwind/react";


const Card = () => {
    return (
        <div className='flex gap-4 mr-4'>
            <div className="flex flex-col justify-center items-center bg-grayDefaultDark-300 rounded-[20px] shadow-lg w-full h-[200px]">
                <img
                    className="object-cover w-full h-64 rounded-[20px] opacity-0"
                    src="https://via.placeholder.com/350x200"
                    alt="Placeholder"
                />
            </div>
        </div>
    )
}

const ContainerCards = () => {
    return (
        <div className='flex w-auto '>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

const CarouselsAutoScroll: React.FC = ({ }) => {
    return (
        <Carousel
            prevArrow={false}
            nextArrow={false}
            autoplay={true}
            navigation={false}
            loop={true}
            autoplayDelay={10000}
            transition={{ duration: 10 }}
            className="rounded-[20px] max-h-[200px] no-scrollbar gradienL2R "
        // prevArrow={({ handlePrev }) => (
        //     <IconButton
        //         variant="text"
        //         color="white"
        //         size="lg"
        //         onClick={handlePrev}
        //         className="!absolute top-2/4 left-4 -translate-y-2/4"
        //     >
        //         <svg
        //             xmlns="http://www.w3.org/2000/svg"
        //             fill="none"
        //             viewBox="0 0 24 24"
        //             strokeWidth={2}
        //             stroke="currentColor"
        //             className="h-6 w-6"
        //         >
        //             <path
        //                 strokeLinecap="round"
        //                 strokeLinejoin="round"
        //                 d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        //             />
        //         </svg>
        //     </IconButton>
        // )}
        // nextArrow={({ handleNext }) => (
        //     <IconButton
        //         variant="text"
        //         color="white"
        //         size="lg"
        //         onClick={handleNext}
        //         className="!absolute top-2/4 !right-4 -translate-y-2/4"
        //     >
        //         <svg
        //             xmlns="http://www.w3.org/2000/svg"
        //             fill="none"
        //             viewBox="0 0 24 24"
        //             strokeWidth={2}
        //             stroke="currentColor"
        //             className="h-6 w-6"
        //         >
        //             <path
        //                 strokeLinecap="round"
        //                 strokeLinejoin="round"
        //                 d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        //             />
        //         </svg>
        //     </IconButton>
        // )}
        >
            <ContainerCards />
            <ContainerCards />
            <ContainerCards />
            <ContainerCards />
        </Carousel>
    )
}

export default CarouselsAutoScroll