"use client";

import { MarqueeItemProp, marqueeItems } from "../../data/marqueeItems";
import Marquee from "./Marquee";
import { MarqueeItem } from "./MarqueItem";
export default function MarqueeCompoent() {
  const direction = "vertical";
  const speed = 2;
  const firstMarque = marqueeItems.slice(0, 5);
  const secondMarque = marqueeItems.slice(5);
  return (
    <div className=" max-w-4xl mx-auto p-4">
      <div className="flex  gap-4 sm:gap-6 md:gap-12  max-w-xs sm:w-full sm:max-w-xl h-96 bg-muted/20 rounded-lg overflow-hidden">
        <Marquee direction={direction} speed={speed} fadeWidth={100}>
          {firstMarque.map((item: MarqueeItemProp) => (
            <MarqueeItem
              key={item.text}
              image={item.image}
              text={item.text}
              className="w-full h-40 shrink-0 my-4"
            />
          ))}
        </Marquee>
        <Marquee direction={direction} speed={speed} fadeWidth={80} reverse>
          {secondMarque.map((item: MarqueeItemProp) => (
            <MarqueeItem
              key={item.text}
              image={item.image}
              text={item.text}
              className="w-full h-40 shrink-0 my-4"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
