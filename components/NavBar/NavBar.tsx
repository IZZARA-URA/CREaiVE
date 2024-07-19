import React from 'react'

import Link from 'next/link'

import NavLinks from '@/components/NavBar/NavLinks'


const index = () => {
  return (
    <div className=''>
      <div className='isolate backdrop-blur-md bg-white/15 shadow-lg ring-1 ring-black/5 bg-opacity-5 border-white py-4 w-screen'>
        <div className='flex justify-between max-w-[1440px] items-center m-auto'>
          <Link href="/">CREAIVE</Link>
          <div>
            <NavLinks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index