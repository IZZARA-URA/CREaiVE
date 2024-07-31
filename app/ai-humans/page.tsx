import React from 'react'
import Image from 'next/image'

import Buttons from "@/components/Buttons/Button";
import Container from '@/components/ContainerPage'
import Header from "@/components/Header/Header";
import { Cards } from '@/components/Cards';

const index = () => {
  return (
    <Container>
      {/* START AIHUMAN THUMB CONTAINER */}
      <div className="h-[90vh] relative ">
        <div style={{ width: '100%' }}>
          <Image
            fill
            src="/AiHumans.png"
            alt="AiHumans"
            // sizes="width:'130%' "
            style={{
              // display: "absolute",
              zIndex: "-50",
              // width: '120%',
              objectFit: "cover",
              left: "-25%",
              top: "-30%",
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-[25vh]">
          <div>
            {/*  */}
          </div>
          <div>
            <div className='w-full text-[90px] text-center m-auto'>
              AI HUMANS
            </div>
            <div className='max-w-[140px] m-auto pt-4'>
              <Buttons text="Contact" type="PrimaryHover" />
            </div>
          </div>
        </div>
        <div className='absolute w-full text-center inset-x-0 bottom-0 py-4'>
          Harnessing the transformative power of generative AI technology to empower creativity
        </div>
      </div>
      {/* END AIHUMAN THUMB CONTAINER */}



      {/* END WHAT WE HELP THUMB CONTAINER */}
      <div className='relative h-auto'>
        <Header
          topic={`What We Help`}
          tagline={
            [
              "We create AI Influencers, AI Chatbots, and AI Clones that replicate real people with astonishing accuracy",
              "Whether you need a digital spokesperson pr virtual assistant, Our AI Humans can enhance brand's presence"
            ]
          }

        />

        <div style={{ width: '100%' }}>
          <Image
            layout="fill"
            src="/WhatWeHelp.png"
            alt="WhatWeHelp"

            style={{
              display: "relative",
              zIndex: "-50",
              width: '100%',
              objectFit: "cover"
            }}
          />
        </div>

        <div className='grid grid-cols-5 gap-4'>
          <div className='col-span-2'>
            <Cards>

            </Cards>
          </div>
          <div className='col-span-3'>
            <Cards>

            </Cards>
          </div>
        </div>

      </div>
      {/* END WHAT WE HELP THUMB CONTAINER */}

    </Container>
  )
}

export default index