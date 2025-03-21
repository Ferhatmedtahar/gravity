import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-gray-300 py-8 px-4 border-t border-gray-700">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Top Section: Left (Info) & Right (Logo + Socials) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
          {/* Left Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold uppercase">gravity team</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/" className="hover:text-white transition">
                  about us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section: Logo + Socials */}
          <div className="flex flex-col items-center md:items-end gap-2 sm:gap-4">
            <Link href="/">
              <Image
                src="/logo/gravityLogo.png"
                height={100}
                width={100}
                alt="Gravity Team Logo"
                className="w-16 h-16 md:h-16 md:w-16 lg:h-24 lg:w-24  object-contain"
              />
            </Link>
            <div className="flex justify-center md:justify-end gap-4 ">
              <Link href="/" className="hover:opacity-80 transition">
                <Image
                  src="/icons/twitter-154-svgrepo-com.svg"
                  height={24}
                  width={24}
                  alt="Twitter"
                  className="h-6 w-6  bg-gray-300 p-1 rounded-sm hover:bg-blue-500 transition-colors duration-100"
                />
              </Link>
              <Link href="/" className="hover:opacity-80 transition">
                <Image
                  src="/icons/linkedin-svgrepo-com.svg"
                  height={24}
                  width={24}
                  alt="LinkedIn"
                  className="h-6 w-6  bg-gray-300 p-1 rounded-sm hover:bg-blue-500 transition-colors duration-100"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section: Terms + Copyright */}
        <div className="flex justify-between  items-center  text-center md:text-left ">
          <div className="flexCenter gap-4   ">
            <p className="text-xs sm:text-sm ">Terms of Use & Privacy Policy</p>
            <p className="text-xs sm:text-sm ">Change Cookie Preferences</p>
          </div>
          <p className="text-xs sm:text-sm mt-3">
            ©2025 Gravity Team. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
