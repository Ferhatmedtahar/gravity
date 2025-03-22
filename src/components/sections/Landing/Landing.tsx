import Button from "@/src/components/common/button/Button";
import * as motion from "motion/react-client";
import { CurrencyMarquee } from "../../ui/CurrencyMarquee";
// import { MotionWrapper } from "../../motion/MotionWrapper";

export default function Landing() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      id="landing"
      className=" text-center flex items-center justify-start flex-col gap-2  mb-10 sm:mt-14 sm:mb-14 min-h-screen "
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-7xl mb-0.5 "
      >
        Balancing
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.25 }}
        className="text-4xl sm:text-5xl md:text-7xl "
      >
        Crypto Markets
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }}
        className="text-lg md:text-xl leading-8  font-normal max-w-sm md:max-w-md mx-auto my-5 sm:my-10"
      >
        Our fully automated proprietary quantitative trading software provides
        24/7 liquidity to 170+ crypto assets across 25+ centralized spot and
        derivative crypto exchanges.
      </motion.p>
      <Button variant="primary" size="large">
        get in touch
      </Button>
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(19,20,23,1) 0%, rgba(19,20,23,0.8) 20%, rgba(19,20,23,0.4) 40%, rgba(19,20,23,0) 100%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute bottom-0 w-full opacity-80"
            style={{
              transform: "scale(1.05)",
              objectFit: "cover",
              height: "100%",
            }}
          >
            <source src="/hero-animation.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(19,20,23,0.1) 0%, rgba(19,20,23,0.15) 40%, rgba(19,20,23,0.1) 100%)",
          }}
        ></div>
      </div>

      <div className="absolute bottom-0 bg-white-50 inset-x-0  h-[2rem] md:h-[2.5rem] lg:h-[3rem]">
        <CurrencyMarquee speed={3} fadeWidth={80} reverse />
      </div>
    </motion.section>
  );
}
