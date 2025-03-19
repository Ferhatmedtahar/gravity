import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Features from "@/components/sections/features/Features";
import Landing from "@/components/sections/Landing/Landing";

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
