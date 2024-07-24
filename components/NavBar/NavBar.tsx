import React from 'react'

import Link from 'next/link'

import NavLinks from '@/components/NavBar/NavLinks'


const index = () => {
  return (
    <div className='isolate py-4 w-screen'>
      <div className='flex justify-between max-w-[1440px] items-center m-auto'>
        <Link href="/">CREAIVE</Link>
        <div className='hidden md:flex'>
          <NavLinks />
        </div>
      </div>
    </div>
  )
}

export default index