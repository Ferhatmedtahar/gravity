"use client";

import Image from "next/image";
import MarqueeCompoent from "../../ui/MarqueeCompoent";
export default function Features() {
  return (
    <section id="features" className=" relative  sm:my-14 my-10">
      <Image
        src="/blobs/middle-left-2.png"
        alt="blobs"
        width={500}
        height={500}
        className=" opacity-80 blur-3xl  absolute top-10 -left-[60%] sm:-left-[30%] lg:-left-[30%] -z-10 focus:outline-none   cursor-default  animate-spin-and-go "
        aria-label="Blob"
      />
      <div className="flex items-center flex-col md:flex-row md:justify-between w-full gap-12 ">
        <p className="capitalize text-3xl sm:text-5xl lg:text-6xl font-medium max-w-xl text-start ">
          our partners & friends
        </p>
        <MarqueeCompoent />
      </div>
    </section>
  );
}
