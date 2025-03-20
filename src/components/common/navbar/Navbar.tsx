"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../button/Button";
import Logo from "../logo/Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="flex items-center justify-between gap-10">
      <Logo />

      <ul className="hidden lg:flex items-center gap-6 font-light">
        <li className="uppercase text-sm hover:text-primary transition-colors duration-300">
          <Link href="/">about us</Link>
        </li>
        <li className="uppercase text-sm hover:text-primary transition-colors duration-300">
          <Link href="/">our services</Link>
        </li>
        <li className="uppercase text-sm hover:text-primary transition-colors duration-300">
          <Link href="/">work with us</Link>
        </li>
        <li className="uppercase text-sm hover:text-primary transition-colors duration-300">
          <Link href="/">blog</Link>
        </li>
      </ul>

      <div className="hidden lg:block">
        <Button variant="primary" size="medium">
          get in touch
        </Button>
      </div>

      {/* mobile menu button with animation */}
      <button
        className="text-foreground p-2 sm:p-3 lg:hidden relative z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {" "}
        <div className="w-10 h-10 flexCenter">
          {" "}
          {/* Increased width & height */}
          <span
            className={`block absolute h-0.5 w-6 lg:w-10 bg-current transform transition duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45" : "-translate-y-2 md:-translate-y-2.5"
            }`}
          />
          <span
            className={`block absolute h-0.5 w-6 lg:w-10 bg-current transition-opacity duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block absolute h-0.5 w-6 md:w-10 bg-current transform transition duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45" : "translate-y-2 md:translate-y-2.5"
            }`}
          />
        </div>
      </button>

      {/* Mobile menu with animation */}
      {mounted && (
        <div
          className={`absolute -top-4 left-0 right-0  bg-background z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col justify-center h-full px-6 shadow-xl   border-b border-primary ">
            <ul className="flex flex-col space-y-6 pt-10 items-center">
              <li className="py-2 uppercase text-sm hover:text-primary transition-colors duration-300">
                <Link href="/" onClick={toggleMenu}>
                  about us
                </Link>
              </li>
              <li className="py-2 uppercase text-sm hover:text-primary transition-colors duration-300">
                <Link href="/" onClick={toggleMenu}>
                  our services
                </Link>
              </li>
              <li className="py-2 uppercase text-sm hover:text-primary transition-colors duration-300">
                <Link href="/" onClick={toggleMenu}>
                  work with us
                </Link>
              </li>
              <li className="py-2 uppercase text-sm hover:text-primary transition-colors duration-300">
                <Link href="/" onClick={toggleMenu}>
                  blog
                </Link>
              </li>
              <li className="py-4">
                <Button
                  variant="secondary"
                  size="small"
                  icon={
                    <div className="h-3 w-3 btn-gradient rounded-full"></div>
                  }
                >
                  get in touch
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
