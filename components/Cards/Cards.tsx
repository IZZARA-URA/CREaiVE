"use client"
import React, { useEffect, useState } from 'react'
import { CardProps } from '@/types'


const VibrantPrimaryFill = {
    style: 'w-full h-full bg-grayDefaultLight-100 rounded-[20px] px-10 py-10 text-white',
}
const VibrantSecondaryFill = {
    style: 'w-full h-full bg-grayDefaultLight-200 rounded-[20px] px-20 py-16 text-white',
}
const VibrantTertiaryFill = {
    style: 'w-full h-full bg-grayDefaultLight-400 px-20 py-16 text-white',
}

const isChildNull = (children: React.ReactNode) => {
    return Boolean(children === null)
};


const Cards: React.FC<CardProps> = ({
    children,
    type,
    topic,
    tagline,
    body,
    ...props }) => {

    const isNull = isChildNull(children)

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

    if (isNull) {
        return (
            <div className={cardType.style}>
                <div className='font-proTextHeavy text-white text-4xl uppercase '> {topic} </div>
                <div className='font-proDisplayRegular text-white text-xl'>
                    {
                        body?.map((bodyText) => {
                            return (
                                <div className='mt-4' key={bodyText}>
                                    {bodyText}
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        )
    }

    return (
        <div className={cardType.style}>
            <div className='font-proTextHeavy text-white text-4xl uppercase'> {topic} </div>
            <div className='font-proDisplayRegular text-white text-xl'>
                {children}
            </div>
        </div>
    )
}

export default Cards