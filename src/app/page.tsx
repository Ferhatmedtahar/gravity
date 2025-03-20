import About from "@/src/components/sections/about/About";
import Features from "@/src/components/sections/features/Features";
import Landing from "@/src/components/sections/Landing/Landing";
import Testimonials from "@/src/components/sections/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className=" container max-container padding-container  flexCenter flex-col w-full lg:mt-10 mt-4 md:mt-8 ">
      <Landing />
      <About />
      <Features />
      <Testimonials />
    </main>
  );
}
