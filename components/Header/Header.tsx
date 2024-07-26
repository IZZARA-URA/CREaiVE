"use client"
import React from 'react'
import { HeaderProps } from '@/types'



const Header: React.FC<HeaderProps> = (
    {
        topic,
        tagline
    }
) => {
  return (
    <div className='w-full pt-[18vh] '>
        <div className='font-proDisplayRegular text-[60px] text-center'>
            { topic }
        </div>
        <div className='font-proDisplayRegular text-[18px] text-center'>
            { tagline }
        </div>
    </div>
  )
}

export default Header