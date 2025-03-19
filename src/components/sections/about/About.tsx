import GridItem from "./GridItem";
import { GridItemProps, gridItems } from "./gridItems";
export default function About() {
  return (
    <section className="  text-center flex items-center justify-start flex-col gap-2 sm:mb-14 mb-10 min-h-[60vh] ">
      <h1 className=" capitalize text-3xl sm:text-4xl md:text-5xl">
        about gravity team
      </h1>
      <p className="text-base  text-slate-200 font-thin max-w-md md:max-w-lg mx-auto my-5">
        At Gravity Team, we are on the mission to balance the supply and demand
        across crypto markets worldwide. We are a crypto native market maker
        founded by traders, developers, and innovators who are strong believers
        and supporters of the future of decentralization and digital assets.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:w-full sm:max-w-3xl mx-auto mt-8">
        {gridItems.map((item: GridItemProps) => (
          <GridItem
            key={item.title}
            title={item.title}
            description={item.description}
            style={item.style}
          />
        ))}
      </div>
    </section>
  );
}
