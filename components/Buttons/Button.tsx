"use client"
import React, { useEffect, useState } from 'react'
import { ButtonProps } from '@/types'

const ButtonPrimary = 'w-full h-[50px] bg-white rounded-[20px] font-SanFrancisco text-black text-lg font-bold uppercase hover:bg-black hover:text-white hover:border-white hover:border-2'
const ButtonSecondary = 'w-full h-[50px] bg-white rounded-[20px] font-SanFrancisco text-black text-lg font-bold uppercase hover:bg-black hover:text-white hover:border-white hover:border-2'
const ButtonTertinary = 'w-full h-[50px] bg-white rounded-[20px] font-SanFrancisco text-black text-lg font-bold uppercase hover:bg-black hover:text-white hover:border-white hover:border-2'



const Button: React.FC<ButtonProps> = (
    {
        onClick,
        children,
        text,
        type = "Primary",
        ...props
    }
) => {

    const [buttonType, setButtonType] = useState(ButtonPrimary)

    useEffect(() => {
        if (type === "Primary") {
            setButtonType(ButtonPrimary)
        } else if (type === "Secondary") {
            setButtonType(ButtonSecondary)
        } else if (type === "Terinaly") {
            setButtonType(ButtonTertinary)
        }

    }, [buttonType])

    return (
        <button
            {...props}
            onClick={onClick}
            className={buttonType}>

            {text}

        </button>
    )
}


export {
    Button,
} 