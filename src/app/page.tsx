
import Image from "next/image";
import { Hero } from "@/components/hero";
import Trabajos from "@/components/Trabajos";


export default function Home() {
  return (
    <main>
      <Hero />
      <Trabajos />
    </main>
  );
}
