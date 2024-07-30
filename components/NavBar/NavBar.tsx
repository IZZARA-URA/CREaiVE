import React from 'react'

import Link from 'next/link'

import NavLinks from '@/components/NavBar/NavLinks'


const index = () => {
  return (
    <div className='w-screen py-3 min-h-[3vh]'>
      <div className='flex justify-between max-w-[1280px] m-auto md:px-4 items-center '>
        <Link href="/">CREAIVE</Link>
        <div className='hidden md:flex text-white'>
          <NavLinks />
        </div>
      </div>
    </div>
  )
}

export default index