import React from 'react'
import Link from 'next/link'

import FooterContainer from './FooterContainer'


import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";

const index = () => {
  return (
    <footer className='w-screen bg-grayDefaultDark-400 left-0 bottom-0'>
      <FooterContainer>
        <div>
          <div className='w-full h-[4vh] uppercase pt-8'>
            Creaive
          </div>
          <div className='grid grid-cols-4 pt-10'>
            <div className='col-span-1 mr-20'>
              <div className='text-xl font-bold border-b-2 py-4'>
                Company
              </div>
              <div className='pt-2'>
                <Link href="about-us">
                  About Us
                </Link>
              </div>
              <div className='pt-2'>
                <Link href="about-us">
                  Products
                </Link>
              </div>
              <div className='pt-2'>
                <Link href="about-us">
                  BLog
                </Link>
              </div>
              <div className='pt-2'>
                <Link href="about-us">
                  Holuvue
                </Link>

              </div>
            </div>

            <div className='col-span-1 mr-20'>
              <div className='text-xl font-bold border-b-2 py-4'>
                Exploer
              </div>
              <div className='pt-2'>
                <Link href="about-us">
                  Showcases
                </Link>
              </div>
              <div className='pt-2'>
                <Link href="about-us">
                  Technical Partners
                </Link>
              </div>
              <div className='pt-2'>
                <Link href="about-us">
                  Trusted By Our Customers
                </Link>
              </div>
              <div className='pt-2'>
                <Link href="about-us">
                  Holuvue
                </Link>

              </div>
            </div>

            <div className='col-span-1 mr-20'>
              <div className='text-xl font-bold border-b-2 py-4'>
                Support
              </div>
              <div className='pt-2'>
                <Link href="contact-us">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className='col-span-1 mr-20'>
              <div className='text-xl font-bold border-b-2 py-4 text-center'>
                Follow Us
              </div>
              <div className='flex w-full justify-between px-8 pt-4'>
                <FaFacebook size={25}/>
                <FaInstagram size={25}/>
                <FaTiktok size={25}/>
                <FaLinkedin size={25}/>
                <FaMediumM size={25}/>
              </div>
            </div>
          </div>
        </div>
      </FooterContainer>
    </footer>
  )
}

export default index