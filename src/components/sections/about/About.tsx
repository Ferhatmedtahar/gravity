"use client";
import GridItem from "./GridItem";
import { GridItemProps, gridItems } from "../../../data/gridItems";

export default function About() {
  return (
    <section
      id="about"
      className="text-center flex items-center justify-start flex-col gap-2 sm:mb-14 mb-10"
    >
      <h1 className="capitalize text-3xl sm:text-4xl md:text-7xl">
        About Gravity Team
      </h1>
      <p className=" text-lg md:text-xl leading-8 sm:max-w-md md:max-w-xl mx-auto my-5">
        At Gravity Team, we are on a mission to balance supply and demand across
        crypto markets worldwide. We are a crypto-native market maker founded by
        traders, developers, and innovators who strongly believe in the future
        of decentralization and digital assets.
      </p>

      <div className="relative w-full h-full rounded-md btn-gradient p-[1.5px] transition duration-300 hover:shadow-xl hover:shadow-primary/10">
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
      </div>
    </section>
  );
}

// "use client";
// import { useEffect } from "react";
// import GridItem from "./GridItem";
// import { GridItemProps, gridItems } from "./gridItems";
// export default function About() {
//   useEffect(() => {
//     setInterval(() => {
//       const randomNumber = Math.floor(Math.random() * gridItems.length);
//       console.log(randomNumber);
//       gridItems[randomNumber].style = "btn-gradient";
//     }, 1000);
//   }, []);
//   return (
//     <section className="  text-center flex items-center justify-start flex-col gap-2 sm:mb-14 mb-10 ">
//       <h1 className=" capitalize text-3xl sm:text-4xl md:text-7xl">
//         about gravity team
//       </h1>
//       <p className="text-lg md:text-xl   leading-8  sm:max-w-md md:max-w-xl mx-auto my-5">
//         At Gravity Team, we are on the mission to balance the supply and demand
//         across crypto markets worldwide. We are a crypto native market maker
//         founded by traders, developers, and innovators who are strong believers
//         and supporters of the future of decentralization and digital assets.
//       </p>

//       <div className=" relative w-full h-full rounded-md btn-gradient p-[1.5px] transition duration-300 hover:shadow-xl hover:shadow-primary/10">
//         <div className="grid grid-cols-2 lg:grid-cols-4 w-full h-full bg-background rounded-md transition duration-300 ease-in-out ">
//           {gridItems.map((item: GridItemProps) => (
//             <GridItem
//               key={item.title}
//               title={item.title}
//               description={item.description}
//               style={item.style}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
