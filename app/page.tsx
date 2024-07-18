import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ContainerPage";

export default function Home() {
  return (
    <Container>
      <div>
        <h1>Welcome to Creaive!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida,
          mauris id fermentum ultricies, urna justo condimentum nunc, a mattis
          ligula nunc ut enim. Cras vel ullamcorper libero, non mollis velit.
          Quisque sed libero vitae neque consectetur tristique. Sed vel mauris
          dapibus, faucibus tellus vel, viverra lectus. Sed vel sem vel velit
          consectetur dictum. Donec vel velit vel nisi bibendum ultricies.
        </p>

      </div>
    </Container>
  );
}
