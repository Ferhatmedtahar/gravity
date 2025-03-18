import GridItem from "./GridItem";

export default function About() {
  return (
    <section className="  text-center flex items-center justify-start flex-col gap-2 sm:mb-14 mb-10 min-h-[60vh] ">
      <h1 className=" capitalize text-3xl sm:text-4xl md:text-5xl">
        about gravity team
      </h1>
      <p className="text-base md:text-lg text-slate-300 font-normal max-w-md md:max-w-lg mx-auto my-5">
        At Gravity Team, we are on the mission to balance the supply and demand
        across crypto markets worldwide. We are a crypto native market maker
        founded by traders, developers, and innovators who are strong believers
        and supporters of the future of decentralization and digital assets.
      </p>
      <div className="grid grid-cols-1 w-full max-w-sm mx-auto gap-4 mt-8 sm:hidden">
        <GridItem
          title="~$100 Billion"
          description="cumulative trading volume to date"
          style="border border-hover rounded-lg"
        />
        <GridItem
          title="0.8%"
          description="of the global crypto spot trading volume"
          style="btn-gradient border border-hover rounded-lg"
        />
        <GridItem
          title="~30"
          description="Gravity Teammates (& growing)"
          style="border border-hover rounded-lg"
        />
        <GridItem
          title="25+"
          description="loading global and local crypto exchanges"
          style="border border-hover rounded-lg"
        />
        <GridItem
          title="2017"
          description="start, crypto-natives"
          style="border border-hover rounded-lg"
        />
        <GridItem
          title="1,200+"
          description="crypto-assets pairs"
          style="border border-hover rounded-lg"
        />
        <GridItem
          title="24/7"
          description="liquidity"
          style="border border-hover rounded-lg"
        />
        <GridItem
          title="5 billion+"
          description="trades done to date"
          style="border border-hover rounded-lg"
        />
      </div>

      {/* Tablet/Desktop grid (2x4 or 4x2) */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 sm:w-full sm:max-w-4xl mx-auto mt-8">
        <GridItem
          title="~$100 Billion"
          description="cumulative trading volume to date"
          style="border-b border-r border-hover"
        />
        <GridItem
          title="0.8%"
          description="of the global crypto spot trading volume"
          style="btn-gradient border-b border-r border-hover"
        />
        <GridItem
          title="~30"
          description="Gravity Teammates (& growing)"
          style="border-b border-r border-hover"
        />
        <GridItem
          title="25+"
          description="loading global and local crypto exchanges"
          style="border-b border-hover"
        />
        <GridItem
          title="2017"
          description="start, crypto-natives"
          style="border-r border-hover"
        />
        <GridItem
          title="1,200+"
          description="crypto-assets pairs"
          style="border-r border-hover"
        />
        <GridItem
          title="24/7"
          description="liquidity"
          style="border-r border-hover"
        />
        <GridItem
          title="5 billion+"
          description="trades done to date"
          style="border-hover"
        />
      </div>
    </section>
  );
}

{
  /* <div className="grid grid-cols-2 md:grid-cols-4  md:grid-rows-2 mt-8">
  <GridItem
    title="~$100 Billion"
    description="cumulative trading volume to date"
    style="border-b border-r border-hover"
  />
  <GridItem
    title="0.8%"
    description="of the global crypto spot trading volume"
    style="btn-gradient border-b  border-r border-hover "
  />
  <GridItem
    title="~30"
    description="Gravity Teammates (& growing)"
    style="border-b border-r  border-hover"
  />
  <GridItem
    title="25+"
    description="loading global and local crypto exchanges"
    style="border-b  border-hover"
  />
  <GridItem
    title="2017"
    description="start, crypto-natives"
    style=" border-r border-hover"
  />
  <GridItem
    title="1,200+"
    description="crypto-assets pairs"
    style="border-r border-hover"
  />
  <GridItem
    title="24/7"
    description="liquidity"
    style="border-r border-hover"
  />
  <GridItem
    title="5 billion+"
    description="trades done to date"
    style=" border-hover"
  />
</div> */
}
