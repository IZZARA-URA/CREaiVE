import Image from "next/image";
import Link from "next/link";
import Video from 'next-video';

import Header from "@/components/Header/Header";
import Container from "@/components/ContainerPage";
import Buttons from "@/components/Buttons/Button"
import Carousels from "@/components/Carousels/Carousels";
import CarouselsAutoScroll from "@/components/Carousels/CarouselsAutoScroll";

import {
  Cards,
  CardsCol_1
} from "@/components/Cards/Cards";

export default function Home() {

  return (
    <div>
      <div className="absolute -z-10 w-screen h-[200vh]">
        <Container>
          <Header
            topic={`Our impact for the business in Real-World`}
            tagline="Our tools can be helpful for your business, and make the impact to customers interacted make the choices."
          />
          <div className="grid grid-cols-4 gap-4 py-2">
            <Buttons text="request demo" type="Primary" />
            <Buttons text="request demo" type="PrimaryHover" />
            <Buttons text="request demo" type="Secondary" />
            <Buttons text="request demo" type="Terialy" />
          </div>
          <div className="grid grid-cols-1 gap-4 py-8">
            <CardsCol_1 type="Primary" topic="Holovue" body={[
              "Our cutting-edge holographic display technology revolutionizes advertising and marketing capabilities!",
              "Our HOLOVUE showcases  content in three formats: pre-recorded, live-streaming, and interactive, creating immersive experiences that captivate any audience"
            ]} />
          </div>
          <div className="grid grid-cols-3 gap-4 py-8">
            <Cards type="Primary" topic="AI Humans" body={[
              "We create AI influencers, AI Chatbot, and AI Clones that replicate real people with astonishing accuracy Whether you need a digital brand ambassador or virtual ssistant our AI humans can enhance your brands presence",
            ]} />
            <Cards type="Secondary" />
            <Cards type="Tertiary" />
          </div>

          <div className="grid grid-cols-1 gap-4 py-8 ">
            <Carousels className="w-full max-h-[600px] ">
              {/*  */}
              <div className="grid grid-cols-12 gap-4 items-center text-center mx-2">
                {/*  */}
                <div className="w-full h-[600px] col-span-5 bg-grayDefaultDark-400 rounded-[20px]">
                  01
                </div>
                {/*  */}
                <div className="w-full h-[600px] col-span-7">
                  <div className="grid grid-cols-3 gap-4 max-h-[300px] h-full pb-2">
                    <div className="col-span-1 bg-grayDefaultDark-0 rounded-[20px] h-full">
                      02
                    </div>

                    <div className="col-span-2 bg-grayDefaultDark-100 rounded-[20px] h-full">
                      03
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 max-h-[300px] h-full pt-2">
                    <div className="col-span-2 bg-grayDefaultDark-100 rounded-[20px] h-full">
                      04
                    </div>
                    <div className="col-span-1 bg-grayDefaultDark-0 rounded-[20px] h-full">
                      05
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
                      02
                    </div>

                    <div className="col-span-2 bg-grayDefaultDark-200 rounded-[20px] h-full">
                      03
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 max-h-[300px] h-full pt-2">
                    <div className="col-span-2 bg-grayDefaultDark-0 rounded-[20px] h-full">
                      04
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="w-full h-[600px] col-span-5 bg-grayDefaultDark-400 rounded-[20px]">
                  01
                </div>
              </div>



            </Carousels>
          </div>
          {/*  */}

          <div className="grid grid-cols-12 ">
            <div className="col-start-1">

            </div>
            <div className="col-span-10">
              <CarouselsAutoScroll />
            </div>
            <div className="col-start-1">

            </div>

          </div>

        </Container>
      </div>
    </div>
  );
}
