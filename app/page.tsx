import Image from "next/image";
import Link from "next/link";
import Video from "next-video";

import Header from "@/components/Header/Header";
import Container from "@/components/ContainerPage";
import Buttons from "@/components/Buttons/Button";
import Carousels from "@/components/Carousels/Carousels";
import CarouselsAutoScroll from "@/components/Carousels/CarouselsAutoScroll";

import { Cards, CardsCol_1 } from "@/components/Cards/Cards";

export default function Home() {
  return (
    <Container>
      <Image
        layout="fill"
        sizes="100vw"
        src="/HomeImage.png"
        alt="HomeImage"
        style={{
          display: "absolute",
          zIndex: "-50",
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <div className="w-full text-[100px] font-bold pt-[20vh] leading-[100px] uppercase text-justify">
            Rise of the
          </div>
          <div className="w-full text-[110px] font-bold leading-[100px] uppercase text-justify">
            AI Humans
          </div>

          <div className="text-[20px] pr-20 pt-10 text-justify">
            Welcome to CREAIVE, Where CREATIVITY and AI CONVERGE!, We are a
            generative AI lab that specializes in making content for any
            creative application. Our goal is to help brands and agencies
            streamline traditional workflows by operationalizing AI into
            thecreative process.
          </div>
        </div>

        <div></div>
      </div>
    </Container>
  );
}
