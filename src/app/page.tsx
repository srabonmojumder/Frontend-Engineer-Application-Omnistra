import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Integrations } from "@/components/sections/Integrations";
import { Features } from "@/components/sections/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Integrations />
        <Features />
      </main>
    </>
  );
}
