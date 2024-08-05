"use client"
import React, { useState } from 'react'
import Link from 'next/link';


type Props = {
    text: string
    thums: string
    image: string
    href: string
};


const CardImage = ({ text, image, href }: Props) => {

    const [hidden, setHidden] = useState(true)

    return (
        <div
            onMouseEnter={() => setHidden(false)}
            onMouseLeave={() => setHidden(true)}
            className='relative w-full h-full rounded-[20px] overflow-hidden min-h-[500px] transition-all'
        >
            {
                hidden ? (
                    <div>
                        <div className='absolute z-20 overflow-hidden transition-all bg-black w-full h-full opacity-70 hover:opacity-0'>
                            <div className='flex w-full h-full items-center justify-center text-[30px] text-center uppercase '>
                                {text}
                            </div>
                        </div>
                        <div className='absolute z-10 overflow-hidden opacity-100 '>
                            <img
                                src={image}
                                alt="Aiinfluencer"
                                className='object-center w-[100%] hover:w-[120%]'
                            />
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='absolute z-20 flex w-full h-full items-center justify-center text-[20px] text-center uppercase  '>
                            <Link href={href} className='flex w-full h-full items-center justify-center text-[30px] text-center uppercase '>
                                <div className='w-full py-2 bg-gray-800 bg-opacity-30 text-white font-bold'>
                                    {text}
                                </div>
                            </Link>
                        </div>
                        <div className='absolute z-0 overflow-hidden '>
                            <img
                                src={image}
                                alt="Aiinfluencer"
                                className='object-center w-[100%] opacity-80'
                            />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CardImage