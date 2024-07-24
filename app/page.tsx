import Image from "next/image";
import Link from "next/link";
import Video from 'next-video';

// import ImageHome from "@assets/video/image.png"

// C:\Users\U\Desktop\CREaiVE\creaive\assets\videos\image.png

import Container from "@/components/ContainerPage";
import { Button } from "@/components/Buttons/Button"

export default function Home() {
  return (
    <div>
      <div className="absolute -z-10 w-screen ">
        <Container>
          <div className="grid grid-cols-4 gap-4">
            <Button text="request demo" />
            <Button text="request demo" />
            <Button text="request demo" />
            <Button text="request demo" />
          </div>
        </Container>
      </div>
    </div>
  );
}
