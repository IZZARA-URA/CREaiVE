import Image from "next/image";


import Header from "@/components/Header/Header";
import Container from "@/components/ContainerPage";
import Buttons from "@/components/Buttons/Button";
import {
  CarouselsLogosClients,
  CarouselsTechnicalPartners
} from "@/components/Carousels/Carousels";
// import CarouselsAutoScroll from "@/components/Carousels/CarouselsAutoScroll";

import {
  Cards,
  CardScreen,
  CardsScreenTrustedBy,
  CardImage
} from "@/components/Cards";

// C:\Users\U\Desktop\CREaiVE\CREaiVE\components\Lacation\index.tsx
import Location from "@/components/Lacation"


// import Holovue from '@/components/Holovue/Holovue'

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
              // display: "absolute",
              zIndex: "-50",
              width: '100%',
              objectFit: "cover"
            }}
          />
        </div>
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

            <div className="text-[20px] pt-10 text-justify">
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

        <CarouselsLogosClients className="w-full max-h-[600px] pb-[20vh]">
          {/*  */}
          <div className="grid grid-cols-12 gap-4 items-center text-center mx-2">
            {/*  */}
            <div className="w-full h-[600px] col-span-5 bg-grayDefaultDark-400 rounded-[20px]">
              <img
                className="w-full h-full rounded-[20px] object-cover object-top"
                src="amber.png"
                alt="Placeholder"
              />
            </div>
            {/*  */}
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
                  {/* <img
                    className="w-full h-full rounded-[20px] object-cover object-center"
                    src="jack.png"
                    alt="Placeholder"
                  /> */}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 max-h-[300px] h-full pt-2">
                <div className="col-span-2 bg-grayDefaultDark-100 rounded-[20px] h-full overflow-hidden">
                  {/* <img
                    className="w-full h-full rounded-[20px] object-cover object-center"
                    src="nic.png"
                    alt="Placeholder"
                  /> */}
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
                  {/* <img
                    className="w-full h-full rounded-[20px] object-cover object-center"
                    src="jack.png"
                    alt="Placeholder"
                  /> */}
                </div>
              </div>
            </div>
            {/*  */}
            <div className="w-full h-[600px] col-span-5 bg-grayDefaultDark-400 rounded-[20px]">
              01
            </div>
          </div>
        </CarouselsLogosClients>


        <div className="py-8 opacity-40">
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
          <div className="grid grid-cols-3 gap-4 mt-4 h-[30vh]">
            <div className="relative w-full h-full bg-grayDefaultDark-200 rounded-[20px] text-white overflow-hidden">
              <CardImage
                text="Ai Humans"
                thums="/BlackWindow.png"
                image="/AihimanNisa.png"
                href="/ai-humans"
              />
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
            {/* <Holovue /> */}

            <div className="relative w-full h-full ">
              <div className="absolute inset-x-0 bottom-[25%]">
                <div className="font-bold text-4xl text-center w-full py-8">
                  Holuvue
                </div>
                <div className="flex gap-4 h-full ">
                  <Buttons text="request demo" type="Primary" />
                  <Buttons text="learn more" type="PrimaryHover" />
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div className="h-[40vh]">
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
            {/*  */}


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
          <div className="col-span-3">
            <Location />

          </div>
          <div className="col-span-2">
            <Cards> 
              <div>Email</div>



            </Cards>
          </div>
        </div>

      </div>
      {/* END TRUSTED BY CONTAINER */}



    </Container>
  );
}
