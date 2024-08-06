import Image from "next/image";


import Header from "@/components/Header/Header";
import Container from "@/components/ContainerPage";
import Buttons from "@/components/Buttons/Button";
import {
  CarouselsRealWord,
  CarouselsTechnicalPartners,
  CarouselsUseCases
} from "@/components/Carousels/Carousels";
import {
  Cards,
  CardScreen,
  CardsScreenTrustedBy,
  CardImage,
  CardVideo
} from "@/components/Cards";

// ICONS
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Home() {
  return (
    <Container>
      {/* START HOME THUMB CONTAINER */}
      <div className="h-[90vh]">
        <div style={{ width: '100%' }}>
          <Image
            layout="fill"
            src="/HomeImage.png"
            alt="HomeImage"
            style={{
              zIndex: "-50",
              width: '100%',
              objectFit: "cover"
            }}
          />
        </div>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1">
            <div className="pt-[25vh]">
              <Image
                src="/Rise of the AI Humans.png"
                alt="Rise of the AI Humans"
                sizes="100vw"
                width={0}
                height={0}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                priority
              />
            </div>

            <div className="text-[20px] pt-10 text-justify ">
              Welcome to CREAIVE, Where CREATIVITY and AI CONVERGE!
              We are a generative AI lab that specializes in making content for any
              creative application. Our goal is to help brands and agencies
              streamline traditional workflows by operationalizing AI into
              thecreative process.
            </div>

            <div className="grid grid-cols-2 gap-4 py-10">
              <Buttons text="request demo" type="Primary" />
              <Buttons text="learn more" type="PrimaryHover" />
            </div>
          </div>

          <div className="col-span-1">
            {/*  */}
          </div>
        </div>
      </div>
      {/* END HOME THUMB CONTAINER */}


      {/* START REAL WORLD CONTAINER */}
      <div className="h-auto">
        <Header
          topic={`Our impact for the business in Real-World`}
          tagline={["Our tools can be helpful for your business, and make the impact to customers interacted make the choices."]}
        />

        <CarouselsRealWord className="w-full max-h-[600px] ">
          <div className="grid grid-cols-12 gap-4 items-center text-center mx-2">
            <div className="w-full h-[600px] col-span-5 bg-grayDefaultDark-400 rounded-[20px] overflow-hidden">
              <video
                loop
                preload='none'
                muted
                autoPlay
              >
                <source
                  src="/videos/Snap finger cloth change.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="w-full h-[600px] col-span-7">
              <div className="grid grid-cols-3 gap-4 max-h-[300px] h-full pb-2">
                <div className="col-span-1 bg-grayDefaultDark-0 rounded-[20px] h-full overflow-hidden">
                  <img
                    className="w-full h-full rounded-[20px] object-cover object-center"
                    src="aihumansNisa.png"
                    alt="Placeholder"
                  />
                </div>

                <div className="col-span-2 bg-grayDefaultDark-100 rounded-[20px] h-full overflow-hidden">
                  <video
                    loop
                    preload='none'
                    muted
                    autoPlay
                  >
                    <source
                      src="/videos/AiHumans.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 max-h-[300px] h-full pt-2">
                <div className="col-span-2 bg-grayDefaultDark-100 rounded-[20px] h-full overflow-hidden">
                  <video
                    loop
                    preload='none'
                    muted
                    autoPlay
                    className="object-center"
                  >
                    <source
                      src="/videos/AIinfluencerAmbrassador.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="col-span-1 bg-grayDefaultDark-0 rounded-[20px] h-full overflow-hidden">
                  <img
                    className="w-full h-full rounded-[20px] object-cover object-center"
                    src="nic.png"
                    alt="Placeholder"
                  />
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="grid grid-cols-12 gap-4 items-center text-center mx-2">
            {/*  */}
            <div className="w-full h-[600px] col-span-5 bg-grayDefaultDark-400 rounded-[20px] overflow-hidden">
              <video
                loop
                preload='none'
                muted
                autoPlay
                className="object-center"
              >
                <source
                  src="/videos/ThairathVideo.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="w-full h-[600px] col-span-7">
              <div className="grid grid-cols-4 gap-4 max-h-[300px] h-full pb-2">
                <div className="col-span-2 bg-grayDefaultDark-500 rounded-[20px] h-full">
                  <img
                    className="w-full h-full rounded-[20px] object-cover object-center"
                    src="jack.png"
                    alt="Placeholder"
                  />
                </div>

                <div className="col-span-2 bg-grayDefaultDark-200 rounded-[20px] h-full overflow-hidden">
                  <img
                    className="w-full h-full rounded-[20px] object-cover object-top"
                    src="aden.png"
                    alt="Placeholder"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 max-h-[300px] h-full pt-2">
                <div className="col-span-2 bg-grayDefaultDark-0 rounded-[20px] h-full overflow-hidden">
                  <video
                    loop
                    preload='none'
                    muted
                    autoPlay
                    className="object-center"
                  >
                    <source
                      src="/videos/AILAB.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
            {/*  */}

          </div>
        </CarouselsRealWord>
        <div className="opacity-40">
          <CarouselsTechnicalPartners />
        </div>
      </div>
      {/* END REAL WORLD CONTAINER */}


      {/* START PRODUCTs CONTAINER */}
      <div className="h-auto">
        <Header
          topic={`Products`}
          tagline={["Our tools can be helpful for your business, and make the impact to customers interacted make the choices."]}
        />
        <div className="grid grid-cols-1 ">
          <div className="h-[40vh]">
            <CardScreen
              type="Primary"
              topic="Holovue"
            >
            </CardScreen>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4 h-auto">
            <div className="relative w-full h-full bg-grayDefaultDark-200 rounded-[20px] text-white overflow-hidden">
              <CardImage
                text="Ai Humans"
                thums="/BlackWindow.png"
                image="/AihimanNisa.png"
                href="/ai-humans"
              />
              {/* <CardVideo
                text='AI Influencer & Ambrassadors'
                thums='/BlackWindow.png'
                video="/AiHumans.mp4"
              /> */}
            </div>
            <div className="w-full h-full bg-grayDefaultDark-200 rounded-[20px] text-white">
              <div className="flex h-full items-center justify-center text-[20px] uppercase font-proTextThin">
                <CardImage
                  text="Ai Microsites"
                  thums="/BlackWindow.png"
                  image="/microsite.png"
                  href="/ai-microsites"
                />
              </div>
            </div>
            <div className="w-full h-full bg-grayDefaultDark-200 rounded-[20px] text-white">
              <div className="flex h-full items-center justify-center text-[20px] uppercase font-proTextThin">
                <CardImage
                  text="Operational AI lab"
                  thums="/BlackWindow.png"
                  image="/AihimanNisa.png"
                  href="/ai-lab"
                />
              </div>
            </div>
          </div>
        </div>
        {/* END PRODUCTs CONTAINER */}
      </div>


      {/* START USECASES CONTAINER */}
      <div className="h-auto">
        <Header
          topic={`Usecases`}
          tagline={["Our tools can be helpful for your business, and make the impact to customers interacted make the choices."]}
        />

        <div>
          <CarouselsUseCases >
            <div>

            </div>
          </CarouselsUseCases>
        </div>

        {/* 
        <div className="h-auto pb-[10vh]">
          <div className="grid grid-cols-2 gap-4 h-[20vh]">
            <Cards>
              TEST
            </Cards>
            <Cards>
              TEST
            </Cards>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 h-full">
            <div className='relative z-0 h-[60vh] overflow-visible border-[1px] rounded-[20px]'>
            </div>
            <div className="relative w-full h-full">
              <div className="absolute inset-x-0 bottom-[25%]">
                <div className="font-bold text-4xl text-center w-full py-8">
                  Holuvue
                </div>
                <div className="flex gap-4 h-full">
                  <Buttons text="request demo" type="Primary" />
                  <Buttons text="learn more" type="PrimaryHover" />
                </div>
              </div>
            </div>
          </div>
        </div> 
        */}

      </div>
      {/* END USECASES CONTAINER */}


      {/* START TRUSTED BY CONTAINER */}
      <div className="h-auto relative ">
        <Image
          layout="fill"
          src="/TrustedBy.png"
          alt="TrustedBy"

          style={{
            zIndex: "-10",
            width: '100%',
            height: '100%',
            objectFit: "cover",
            overflow: "visible",

          }}
          className="gradienRadal"
        />
        <Header
          topic={`Trusted by`}
          tagline={["Our tools can be helpful for your business, and make the impact to customers interacted make the choices."]}
        />
        <div className="h-[30vh]">
          <CardsScreenTrustedBy
            type="Primary"
            topic="Holovue"
            body={[
              "Our cutting-edge holographic display technology revolutionizes advertising and marketing capabilities!",
              "Our HOLOVUE showcases  content in three formats: pre-recorded, live-streaming, and interactive, creating immersive experiences that captivate any audience",
            ]}
          >
            <div className='flex w-full gap-4 justify-around opacity-80'>
              <img
                className="w-[100px] h-[100px] rounded-[20px]"
                src="/logos/Customers Logo 06.png"
                alt="Placeholder"
              />
              <img
                className="w-[100px] h-[100px] rounded-[20px]"
                src="/logos/Customers Logo 07.png"
                alt="Placeholder"
              />
              <img
                className="w-[100px] h-[100px] rounded-[20px]"
                src="/logos/Customers Logo 08.png"
                alt="Placeholder"
              />
              <img
                className="w-[100px] h-[100px] rounded-[20px]"
                src="/logos/Customers Logo 09.png"
                alt="Placeholder"
              />
              <img
                className="w-[100px] h-[100px] rounded-[20px]"
                src="/logos/Customers Logo 10.png"
                alt="Placeholder"
              />
            </div>
            {/*  */}
            <div className='flex w-full gap-4 justify-around opacity-80'>
              <img
                className="w-[100px] h-[100px] rounded-[20px]"
                src="/logos/Customers Logo 01.png"
                alt="Placeholder"
              />
              <img
                className="w-[100px] h-[100px] rounded-[20px]"
                src="/logos/Customers Logo 02.png"
                alt="Placeholder"
              />
              <img
                className="w-[100px] h-[100px] rounded-[20px]"
                src="/logos/Customers Logo 03.png"
                alt="Placeholder"
              />
              <img
                className="w-[100px] h-[100px] rounded-[20px]"
                src="/logos/Customers Logo 04.png"
                alt="Placeholder"
              />
              <img
                className="w-[100px] h-[100px] rounded-[20px]"
                src="/logos/Customers Logo 05.png"
                alt="Placeholder"
              />
            </div>
          </CardsScreenTrustedBy>
        </div>
      </div>
      {/* END TRUSTED BY CONTAINER */}


      {/* START TRUSTED BY CONTAINER */}
      <div className="h-auto py-10">
        <Header
          topic={`Follow Us`}
          tagline={["Our tools can be helpful for your business, and make the impact to customers interacted make the choices."]}
        />

        <div className="grid grid-cols-5 gap-4 h-[30vh] my-20">
          {/* <div className="col-span-2">
            <Location />

          </div> */}
          <div className="col-span-5">
            <Cards type="FollowUs">
              <div className="relative">
                <div className="flex  w-full justify-center m-auto py-auto">
                  {/*  */}
                  <div className="w-full h-full text-center justify-center py-2">
                    <GrLocation className="w-full items-center justify-center m-auto" size={50} />
                    <div className='text-[16px] font-bold'>
                      Office
                    </div>
                    <div className='text-[14px] py-2'>

                      Come to say hello our office HQ.
                    </div>
                    <div className='text-[12px]'>
                      26/55 Chan Space office building,  <br />
                      1st. Floor, Room 5A, Nang Linchi Road, <br />
                      Thung Maha Mek Sub-district, <br />
                      Sathon District, <br />
                      Bangkok 10120 <br />
                      Thailand
                    </div>

                  </div>
                  {/*  */}
                  <div className="w-full h-full text-center justify-center py-2">
                    <MdOutlineEmail className="w-full items-center justify-center m-auto" size={50} />
                    <div className='text-[14px] font-bold'>
                      Email
                    </div>
                    <div className='text-[14px] py-2 '>
                      We are friendly to talk with you.
                    </div>
                    <div className='text-[12px]'>
                      hello@creaive.ai
                    </div>
                  </div>
                  {/*  */}
                  <div className="w-full h-full text-center justify-center py-2">
                    <FaPhoneVolume className="w-full items-center justify-center m-auto" size={50} />
                    <div className='text-[14px] font-bold'>
                      Phone
                    </div>
                    <div className='text-[14px] py-2'>
                      Talk to us
                    </div>
                    <div className='text-[12px]'>
                      Tel: (+66) 089-765-7654
                    </div>
                  </div>
                </div>
              </div>
            </Cards>
          </div>
        </div>
      </div>
      {/* END TRUSTED BY CONTAINER */}
    </Container>
  );
}
