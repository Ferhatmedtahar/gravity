"use client";

import { testimonials } from "@/src/data/testimonials";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  });

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="flexCenter flex-col gap-8">
      {/* Buttons */}
      <div className="flex gap-4 my-2">
        <button
          onClick={handlePrev}
          className=" h-8 w-8 md:h-12 md:w-12  text-lg md:text-2xl rounded-full btn-gradient focus:outline-none focus:ring-2 focus:ring-primary "
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className=" h-8 w-8 md:h-12 md:w-12  text-lg md:text-2xl rounded-full btn-gradient focus:outline-none focus:ring-2 focus:ring-primary "
        >
          ❯
        </button>
      </div>

      {/* Testimonial Content with Smooth Transition */}
      <div className="relative h-[350px] sm:h-[450px] w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className=" flexCenter flex-col  gap-4 text-center px-4"
          >
            <p className=" md:leading-9 pointer-events-none selection:bg-transparent purple-gradient max-w-sm sm:max-w-md lg:max-w-xl text-base sm:text-lg lg:text-2xl">
              {testimonials[currentTestimonial].testimonial}
            </p>
            <p className="font-bold text-sm sm:text-base lg:text-xl">
              {testimonials[currentTestimonial].author}
            </p>
            <div className="flexCenter flex-row gap-2">
              <p className=" text-sm sm:text-base md:text-lg  ">
                {testimonials[currentTestimonial].role}
              </p>
              <p className=" text-lg md:text-2xl text-slate-400">|</p>
              <Image
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].author}
                width={100}
                height={100}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-2 mt-4">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
              currentTestimonial === index ? "btn-gradient w-3" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

// "use client";

// import { testimonials } from "@/src/data/testimonials";
// import Image from "next/image";
// import { useState } from "react";

// export default function Carousel() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(2);

//   const handlePrev = () => {
//     setCurrentTestimonial((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   return (
//     <div className="flexCenter flex-col gap-8">
//       {/* Buttons */}
//       <div className="flex gap-4">
//         <button
//           onClick={handlePrev}
//           className="h-8 w-8 rounded-full btn-gradient"
//         >
//           ❮
//         </button>
//         <button
//           onClick={handleNext}
//           className="h-8 w-8 rounded-full btn-gradient"
//         >
//           ❯
//         </button>
//       </div>

//       {/* Testimonial Content with Smooth Transition */}
//       {currentTestimonial >= 0 && (
//         <div className="min-h-[13rem]  flex items-center justify-center flex-col gap-4 transition-opacity duration-500 ease-in-out opacity-100">
//           <p className="pointer-events-none selection:bg-transparent purple-gradient text-center max-w-sm sm:max-w-md lg:max-w-lg text-sm sm:text-base lg:text-xl">
//             {testimonials[currentTestimonial].testimonial}
//           </p>
//           <p className="font-bold text-sm sm:text-base lg:text-xl">
//             {testimonials[currentTestimonial].author}
//           </p>
//           <div className="flexCenter flex-row gap-2">
//             <p>{testimonials[currentTestimonial].role}</p>
//             <p className="text-2xl text-slate-400">|</p>
//             <Image
//               src={testimonials[currentTestimonial].image}
//               alt={testimonials[currentTestimonial].author}
//               width={120}
//               height={120}
//             />
//           </div>
//         </div>
//       )}

//       {/* Navigation Dots */}
//       <div className="flex gap-2 mt-4">
//         {testimonials.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentTestimonial(index)}
//             className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
//               currentTestimonial === index ? "btn-gradient w-3" : "bg-gray-400"
//             }`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { testimonials } from "@/src/data/testimonials";
// import Image from "next/image";
// import { useState } from "react";

// export default function Carousel() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(2);

//   const handlePrev = () => {
//     setCurrentTestimonial((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//   };
//   return (
//     <div className="flexCenter flex-col gap-8">
//       <div className="flex gap-4">
//         <button
//           onClick={handlePrev}
//           className="h-8 w-8 rounded-full btn-gradient "
//         >
//           ❮
//         </button>
//         <button
//           onClick={handleNext}
//           className="h-8 w-8 rounded-full btn-gradient "
//         >
//           ❯
//         </button>
//       </div>

//       {testimonials[currentTestimonial] && (
//         <div className="flex items-center justify-center  flex-col gap-4">
//           <p className="pointer-events-none selection:bg-transparent purple-gradient text-center max-w-sm sm:max-w-md lg:max-w-lg text-sm sm:text-base lg:text-xl">
//             {testimonials[currentTestimonial].testimonial}
//           </p>
//           <p className="font-bold text-sm sm:text-base lg:text-xl">
//             {testimonials[currentTestimonial].author}
//           </p>
//           <div className="flexCenter flex-row gap-2  ">
//             <p className="">{testimonials[currentTestimonial].role}</p>
//             <p className="text-2xl text-slate-400 ">|</p>
//             <Image
//               src={testimonials[currentTestimonial].image}
//               alt={testimonials[currentTestimonial].author}
//               width={120}
//               height={120}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
