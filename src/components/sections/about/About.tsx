"use client";
import * as motion from "motion/react-client";
import { GridItemProps, gridItems } from "../../../data/gridItems";
import GridItem from "./GridItem";
export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
      id="about"
      className="text-center flex items-center justify-start flex-col gap-2 sm:mb-14 mb-10"
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
        className="capitalize text-3xl sm:text-4xl md:text-7xl"
      >
        About Gravity Team
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
        className=" text-lg md:text-xl leading-8 sm:max-w-md md:max-w-xl mx-auto my-5"
      >
        At Gravity Team, we are on a mission to balance supply and demand across
        crypto markets worldwide. We are a crypto-native market maker founded by
        traders, developers, and innovators who strongly believe in the future
        of decentralization and digital assets.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
        className="relative w-full h-full rounded-md btn-gradient p-[1.5px] transition duration-300 hover:shadow-xl hover:shadow-primary/10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full h-full bg-background rounded-md transition duration-300 ease-in-out">
          {gridItems.map((item: GridItemProps) => (
            <GridItem
              key={item.title}
              title={item.title}
              description={item.description}
              style={item.style}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
