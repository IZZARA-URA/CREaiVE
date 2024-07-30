"use client"
import React, { useEffect, useState } from 'react'
import { CardProps } from '@/types'

const VibrantPrimaryFill_CardCol_1 = {
    style: 'w-full h-auto bg-grayDefaultDark-500 rounded-[20px] pl-10 pr-2 py-8 bg-opacity-50 text-white',
}


const CardsScreenTrustedBy: React.FC<CardProps> = (
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
        <div className={cardType.style}>
            <div className='flex h-full'>
                <div className='grid grid-cols-2 w-full gap-4'>
                    <div className='w-full h-full rounded-[20px] '>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardsScreenTrustedBy