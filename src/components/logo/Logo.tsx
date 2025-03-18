import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/gravityLogo.png"
      alt="Gravity Logo"
      width={80}
      height={80}
      className="w-auto h-4 sm:h-5 md:h-6 lg:h-8 focus:outline-none   cursor-pointer   object-contain"
      aria-label="Gravity Logo"
      tabIndex={1}
    />
  );
}
