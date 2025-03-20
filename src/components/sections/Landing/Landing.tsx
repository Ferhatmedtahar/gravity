import Button from "@/src/components/common/button/Button";

export default function Landing() {
  return (
    <section
      id="landing"
      className=" text-center flex items-center justify-start flex-col gap-2  mb-10 sm:mt-14 sm:mb-14 min-h-screen "
    >
      <h1 className="text-4xl sm:text-5xl md:text-7xl mb-0.5 ">Balancing</h1>

      <h2 className="text-4xl sm:text-5xl md:text-7xl ">Crypto Markets</h2>

      <p className="text-lg md:text-xl leading-8  font-normal max-w-sm md:max-w-md mx-auto my-5 sm:my-10">
        Our fully automated proprietary quantitative trading software provides
        24/7 liquidity to 170+ crypto assets across 25+ centralized spot and
        derivative crypto exchanges.
      </p>
      <Button variant="primary" size="large">
        get in touch
      </Button>
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute bottom-0 opacity-50  object-cover -z-20 "
      >
        <source src="/hero-animation.mp4" type="video/mp4" />
      </video> */}
      <div className="absolute bottom-0 left-0 w-full h-full -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source src="/hero-animation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 top-1/2 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>{" "}
        {/* Gradient overlay */}
      </div>
    </section>
  );
}
