"use client"
import React, { useEffect, useState } from 'react'
import { ButtonProps } from '@/types'

const ButtonPrimary = 'w-full h-[50px] bg-white rounded-[30px] font-SanFrancisco text-black text-lg font-bold uppercase hover:bg-black hover:text-white hover:border-white hover:border-2'
const ButtonPrimaryKeepHover = 'w-full h-[50px] rounded-[30px] font-SanFrancisco text-lg font-bold uppercase bg-black text-white border-white border-2 hover:bg-white hover:text-black'

const ButtonSecondary = 'w-full h-[50px] bg-secondaryDark-0 rounded-[20px] font-SanFrancisco text-white text-lg font-bold uppercase hover:bg-black hover:text-secondaryDark-0 hover:border-secondaryDark-0 hover:border-2'
const ButtonTertinary = 'w-full h-[50px] rounded-[20px] font-SanFrancisco text-lg text-secondaryDark-0 font-bold uppercase hover:bg-secondaryDark-0 hover:text-white border-2 border-secondaryDark-0 hover:border-2'


const Buttons: React.FC<ButtonProps> = (
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
        } else if (type === "PrimaryHover") {
            setButtonType(ButtonPrimaryKeepHover)
        } else if (type === "Secondary") {
            setButtonType(ButtonSecondary)
        } else if (type === "Terialy") {
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


export default Buttons
