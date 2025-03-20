import About from "@/src/components/sections/about/About";
import Contact from "@/src/components/sections/contact/Contact";
import Features from "@/src/components/sections/features/Features";
import Landing from "@/src/components/sections/Landing/Landing";

export default function Home() {
  return (
    <main className="  flexCenter flex-col w-full lg:mt-10 mt-4 md:mt-8 ">
      <Landing />
      <About />
      <Features />
      <Contact />
    </main>
  );
}
