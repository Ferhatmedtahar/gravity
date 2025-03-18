import Button from "@/components/button/Button";

export default function Landing() {
  return (
    <section className=" font-semibold text-center flex items-center justify-start flex-col gap-2 sm:mb-14 mb-10 md:mb-24 ">
      <h1 className="text-4xl sm:text-5xl md:text-6xl mb-5  sm:mb-6 md:mb-8 ">
        Balancing
      </h1>

      {/* Subheading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl ">Crypto Markets</h2>

      {/* Description */}
      <p className="text-lg text-slate-300 font-normal max-w-md md:max-w-lg mx-auto my-5">
        Our fully automated proprietary quantitative trading software provides
        24/7 liquidity to 170+ crypto assets across 25+ centralized spot and
        derivative crypto exchanges.
      </p>
      <Button variant="primary" size="large">
        get in touch
      </Button>
    </section>
  );
}
