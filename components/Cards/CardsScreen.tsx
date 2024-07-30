"use client"
import React, { useEffect, useState } from 'react'
import { CardProps } from '@/types'

const VibrantPrimaryFill_CardCol_1 = {
    upper: 'absolute w-full h-full bg-[#7F7F7F] rounded-[20px] pl-10 pr-2 py-2 bg-opacity-50 text-white',
    lower: 'relative w-full h-full bg-[#C2C2C2] rounded-[20px] '
}


const CardScreen: React.FC<CardProps> = (
    {
        children,
        type,
        topic,
        tagline,
        body,
        ...props
    }
) => {

    const [cardType, setCardType] = useState(VibrantPrimaryFill_CardCol_1)

    return (
        <div className={cardType.lower}>
            <div className={cardType.upper}>
                <div className='flex h-full'>
                    <div className='grid grid-cols-2 w-full gap-4'>
                        <div className='w-full h-full rounded-[20px] '>
                            <div className='font-proTextHeavy text-black text-4xl pt-6 uppercase'> {topic} </div>
                            Test
                        </div>
                        <div className='w-full h-full rounded-[20px] p-10 bg-white '>
                            Image
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardScreen