import React from 'react'

import FooterContainer from './FooterContainer'

const index = () => {
  return (
    <div className='w-screen bg-grayDefaultDark-400 left-0 bottom-0'>
      <FooterContainer>
        <div>
          <div className='w-full h-[4vh]'>
            Creaive
          </div>
          <div className='grid grid-cols-4 pt-16'>
            <div className='col-span-1'>
              00
            </div>

            <div className='col-span-1'>
              01
            </div>

            <div className='col-span-1'>
              02
            </div>

            <div className='col-span-1'>
              03
            </div>
          </div>
        </div>
      </FooterContainer>
    </div>
  )
}

export default index