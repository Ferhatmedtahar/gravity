import { cn } from "@/lib/utils";
import Image from "next/image";

interface MarqueeItemProps {
  image: string;
  text: string;
  className?: string;
  imageClassName?: string;
  textClassName?: string;
}

export function MarqueeItem({
  image,
  text,
  className,
  imageClassName,
  textClassName,
}: MarqueeItemProps) {
  return (
    <div
      className={cn(
        "flex flex-col p-4 border rounded-sm  border-[#2d323c] bg-[#191D22]",
        className
      )}
    >
      <div className="relative z-20 h-24 sm:h-28 sm:w-28 md:h-36  flexCenter md:w-full aspect-square overflow-hidden rounded-lg  ">
        <Image
          src={image}
          alt={text}
          height={120}
          width={120}
          className={cn(
            "w-auto h-14 md:h-16 lg:h-20  object-cover",
            imageClassName
          )}
        />
      </div>
      <p
        className={cn(
          "text-slate-400 uppercase text-sm text-center",
          textClassName
        )}
      >
        {text}
      </p>
    </div>
  );
}
