import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TrustedBy />
      <Stats />
      <Services />
      <Contact />
    </main>
  );
}
