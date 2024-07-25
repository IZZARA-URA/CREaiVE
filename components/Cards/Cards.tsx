"use client"
import React, { useEffect, useState } from 'react'
import { CardProps } from '@/types'

const VibrantPrimaryFill = {
    upper: 'absolute w-full h-[20vh] bg-[#303030] fill-[#303030] rounded-[20px] px-10 py-10 bg-opacity-20 text-white',
    // middle: 'relative w-full h-[20vh] bg-[#FBFBFB] fill-[#FBFBFB] rounded-[20px]',
    lower: 'relative w-full h-[20vh] bg-[#1C1C1C] fill-[#1C1C1C] rounded-[20px] bg-opacity-50'
}
const VibrantSecondaryFill = {
    upper: 'absolute w-full h-[20vh] bg-[#7F7F7F] rounded-[20px] px-20 py-16 bg-opacity-10 text-white',
    lower: 'relative w-full h-[20vh] bg-[#C2C2C2] rounded-[20px] bg-opacity-50'
}
const VibrantTertiaryFill = {
    upper: 'absolute w-full h-[20vh] bg-[#252525] rounded-[20px] px-20 py-16 text-white',
    lower: 'relative w-full h-[20vh] bg-[#7C7C7C] rounded-[20px] bg-opacity-90'
}

const VibrantPrimaryFill_CardCol_1 = {
    upper: 'absolute w-full h-[20vh] bg-[#7F7F7F] rounded-[20px] pl-10 pr-2 py-2 bg-opacity-50 text-white',
    lower: 'relative w-full h-[20vh] bg-[#C2C2C2] rounded-[20px] '
}

const Cards: React.FC<CardProps> = (
    {
        children,
        type,
        topic,
        tagline,
        body,
        ...props
    }
) => {

    const [cardType, setCardType] = useState(VibrantPrimaryFill)

    useEffect(() => {
        if (type === "Primary") {
            setCardType(VibrantPrimaryFill)
        } else if (type === "Secondary") {
            setCardType(VibrantSecondaryFill)
        } else if (type === "Tertiary") {
            setCardType(VibrantTertiaryFill)
        }
    }, [cardType])

    return (
        <div className={cardType.lower}>
            <div className={cardType.upper}>
                <div className='font-proTextHeavy text-white text-4xl uppercase'> {topic} </div>
                <div className='font-proDisplayRegular text-white text-xl'>
                    {
                        body?.map((bodyText) => {
                            return (
                                <div className='mt-4'>
                                    {bodyText}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const CardsCol_1: React.FC<CardProps> = (
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


export {
    Cards,
    CardsCol_1
} 
