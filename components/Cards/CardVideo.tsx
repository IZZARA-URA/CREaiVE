"use client"
import React from 'react'

type Props = {
    text: string
    thums: string
    video: string
};


const CardVideo = ({ text, thums, video }: Props) => {
    const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) => {
        e.currentTarget.play();
    };

    const handleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
        e.currentTarget.pause();
    };



    return (
        <div className='relative w-full h-full rounded-[20px] overflow-hidden min-h-[500px]'>
            <div className='absolute bg-black opacity-60 hover:opacity-0 z-10 hover:z-0  transition'>
                <div className='absolute text-white text-xl uppercase text-center w-full h-full top-[40%]'>
                    {text}
                </div>
                <img
                    src={thums}
                    alt="Aiinfluencer"
                />
            </div>
            <div className='absolute z-0 hover:z-10'>
                <video
                    loop
                    preload='none'
                    muted // Needs to be there to be able to play
                    onMouseOver={handleOnMouseOver}
                    onMouseOut={handleOnMouseOut}
                    className=''
                >
                    <source
                        src={video}
                        type='video/mp4'
                    />
                </video>
            </div>
        </div>
    )
}

export default CardVideo