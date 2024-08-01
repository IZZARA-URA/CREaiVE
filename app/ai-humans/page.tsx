"use client"
import React from 'react'
import Image from 'next/image'

import Buttons from "@/components/Buttons/Button";
import Container from '@/components/ContainerPage'
import Header from "@/components/Header/Header";
import { CarouselsPreviewRola } from '@/components/Carousels/Carousels'

import {
  Cards,
  CardVideo
} from '@/components/Cards';

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
            <Cards type='Tertiary'>
              <div className='overflow-hidden rounded-[20px]'>
                <img
                  src='/aihumansNisa.png'
                  alt='aihumans'
                  style={{
                    // width: '100%',
                    // height: 'auto',
                    objectFit: "cover",
                    margin: "auto"
                  }}
                />

              </div>
            </Cards>
          </div>
          <div className='col-span-3'>
            <Cards>
              <div className='w-full border-b-2 text-center font-bold'>
                AI Brand Ambassador
              </div>
              <div className='pt-4'>
                {/*  */}
                <div className='font-bold pt-4'>AI Humans Creation</div>
                <div className='text-[18px]'>
                  Unleash your boundless creativity and generate a custom AI Human, exclusively yours for every campaign you embark upon. Embrace the power to shape your dreams, as you become the architect of AI-driven wonders, limited only by your imagination.
                </div>
                {/*  */}
                <div className='font-bold pt-4'>AI Clone</div>
                <div className='text-[18px]'>
                  Embrace the cutting-edge revolution where you, as a celebrity, influencer, or creative soul, step into the spotlight of innovation. Generate your very own mesmerizing digital persona, a true reflection of your uniqueness, to proudly stand-out in your brand's projects or campaigns. </div>
                {/*  */}
                <div className='font-bold pt-4'>AI Humans Portfolio</div>
                <div className='text-[18px]'>
                  Choose from our gallery of extraordinary AI Humans to infuse your projects with wonder and allure, creating engaging, unique content that converts!                </div>
                {/*  */}
                <div className='font-bold pt-4'>genAI content</div>
                <div className='text-[18px]'>
                  Unleash the power of genAI magic and watch your ordinary content transcend into lifelike animated masterpieces!
                </div>
              </div>
            </Cards>
          </div>
        </div>

      </div>
      {/* END WHAT WE HELP THUMB CONTAINER */}



      {/* START SHOW CASES CONTAINER */}
      <div className=''>
        <Header
          topic={`Show Cases`}
          tagline={
            [
              "We create AI Influencers, AI Chatbots, and AI Clones that replicate real people with astonishing accuracy",
              "Whether you need a digital spokesperson pr virtual assistant, Our AI Humans can enhance brand's presence"
            ]
          }
        />
        <div className='w-full bg-grayDefaultDark-300 rounded-[20px] p-2'>
          <div className='grid grid-cols-2 gap-2 '>
            <CardVideo
              text='AI Influencer & Ambrassadors'
              thums='/BlackWindow.png'
              video="/videos/AIinfluencerAmbrassador.mp4"
            />
            <CardVideo
              text='AI Clone'
              thums='/BlackWindow.png'
              video="/videos/AIinfluencerAmbrassador.mp4"
            />
            <CardVideo
              text='MC AVATAR'
              thums='/BlackWindow.png'
              video="/videos/AIinfluencerAmbrassador.mp4"
            />
            <CardVideo
              text='MC CHAT'
              thums='/BlackWindow.png'
              video="/videos/AIinfluencerAmbrassador.mp4"
            />
            <CardVideo
              text='Platform'
              thums='/BlackWindow.png'
              video="/videos/AIinfluencerAmbrassador.mp4"
            />
          </div>
        </div>
      </div>
      {/* END SHOW CASES CONTAINER */}


      {/* START PREVIEW ROLA CONTAINER */}
      <div>
        <Header
          topic={`Preview Our Ai Humans`}
          tagline={
            [
              "We create AI Influencers, AI Chatbots, and AI Clones that replicate real people with astonishing accuracy",
              "Whether you need a digital spokesperson pr virtual assistant, Our AI Humans can enhance brand's presence"
            ]
          }
        />
        <CarouselsPreviewRola />
      </div>
      {/* END PREVIEW ROLA CONTAINER */}


      {/* START CONTACT CONTAINER */}
      <div className='grid grid-cols-12 w-full h-auto mb-8'>
        <div className='col-span-5'>
          <div>
            Contact Us
          </div>
          <div>
            Create you AI
          </div>
          <div>
            <img />
            <div>
              <div>
                LINE ID: @creaive.ai
              </div>
              <div>
                Tel: 809-765-7654
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-7 h-full'>
          <div className='w-full h-full rounded-[20px] border-[1px] border-white bg-grayDefaultDark-500 text-start p-4 '>
            <div className='w-full m-auto text-center text-[20px] py-8'>
              Fill out the contact information below
            </div>
            <div className='grid grid-cols-2 gap-4'>
              {/*  */}
              <div className='col-span-1'>
                <div>
                  <div>
                    First Name
                  </div>
                  <input className='w-full rounded-[4px] h-[30px]' />
                </div>
              </div>

              {/*  */}
              <div className='col-span-1'>
                <div>
                  <div>
                    Last Name
                  </div>
                  <input className='w-full rounded-[4px] h-[30px]' />
                </div>
              </div>

              {/*  */}
              <div className='col-span-1'>
                <div>
                  <div>
                    Email Address
                  </div>
                  <input className='w-full rounded-[4px] h-[30px]' />
                </div>
              </div>

              {/*  */}
              <div className='col-span-1'>
                <div>
                  <div>
                    Country
                  </div>
                  <input className='w-full rounded-[4px] h-[30px]' />
                </div>
              </div>

              {/*  */}
              <div className='col-span-1'>
                <div>
                  <div>
                    Company
                  </div>
                  <input className='w-full rounded-[4px] h-[30px]' />
                </div>
              </div>

              {/*  */}
              <div className='col-span-1'>
                <div>
                  <div>
                    Phone Number
                  </div>
                  <input className='w-full rounded-[4px] h-[30px]' />
                </div>
              </div>

              {/*  */}
              <div className='col-span-2'>
                <div>
                  <div>
                    Subject
                  </div>
                  <input className='w-full rounded-[4px] h-[30px]' />
                </div>
              </div>
              <div className='col-span-2'>
                <div>
                  <div>
                    Tell me about you.
                  </div>
                  <textarea className='w-full rounded-[4px] h-[80px]' />
                </div>
              </div>
              {/*  */}
              <div>
                {/*  */}
              </div>
              <Buttons text="Submit" type="PrimaryHover" />
            </div>
          </div>
        </div>
      </div>
      {/* END CONTACT CONTAINER */}
    </Container>
  )
}

export default index