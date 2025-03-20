import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo/gravityLogo.png"
      alt="Gravity Logo"
      width={220}
      height={220}
      className="w-auto h-4 sm:h-5 md:h-9 lg:h-10 focus:outline-none   cursor-default   object-contain"
      aria-label="Gravity Logo"
      tabIndex={1}
    />
  );
}
