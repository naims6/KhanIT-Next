import Background from "@/components/bg/Background";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChoseUs";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Stats />
      </main>
    </>
  );
}
