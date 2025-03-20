"use client";

import { cn } from "@/lib/utils";
import { currencies } from "@/src/data/currencies";
import Image from "next/image";

interface CurrencyMarqueeProps {
  speed?: number;
  fadeWidth?: number;
  reverse?: boolean;
}

export function CurrencyMarquee({
  speed = 2,
  fadeWidth = 80,
  reverse = false,
}: CurrencyMarqueeProps) {
  // Calculate animation duration based on speed (lower speed = longer duration)
  const duration = 30 / speed;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
        WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
      }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `scroll ${duration}s linear infinite ${
            reverse ? "reverse" : ""
          }`,
        }}
      >
        {currencies.map((item) => (
          <div
            key={item.name}
            className={cn(
              "flex items-center justify-center  text-start gap-1 px-14 pt-0.5 md:pt-1 lg:pt-2 text-background  md:text-sm text-xs font-medium"
            )}
          >
            <Image
              src={item.symbol}
              alt="Currency"
              height={24}
              width={24}
              className="w-6 h-6 object-contain"
            />
            <div className="flex flex-col items-center justify-center ">
              <span className="leading-none">${item.value}</span>
              <span className="leading-none uppercase">{item.name}</span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${100 / 3}%);
          }
        }
      `}</style>
    </div>
  );
}
