import { Container } from "@/components/shared";
import { Title } from "@/components/shared/title";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Container className="mt-8">
        <Title text="Все товары" size="lg" className="font-extrabold" />

        
      </Container>
    </main>
  );
}
