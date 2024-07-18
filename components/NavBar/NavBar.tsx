import React from 'react'

import Link from 'next/link'

import NavLinks from '@/components/NavBar/NavLinks'


const index = () => {
  return (
    <div className='isolate backdrop-blur-md py-4 bg-white/15 shadow-lg ring-1 ring-black/5'>
      <div className='flex justify-between max-w-[1440px] items-center m-auto'>
        <Link href="/">CREAIVE</Link>
        <div>
          <NavLinks />
        </div>
      </div>
    </div>
  )
}

export default index