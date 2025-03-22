import * as motion from "motion/react-client";
import Carousel from "../../ui/Carousel";
export default function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
      id="testimonials"
      className=" flex flex-col items-center gap-2  sm:my-14 my-10"
    >
      <h2 className=" text-2xl sm:text-4xl md:text-6xl">
        We are in a good company
      </h2>
      <p className=" text-center text-sm sm:text-base md:text-lg leading-8 sm:max-w-md md:max-w-xl mx-auto my-4 md:my-6">
        Our partnerships have delivered great value to our projects and we’re
        happy to share some of their feedback below
      </p>
      <Carousel />
    </motion.section>
  );
}
