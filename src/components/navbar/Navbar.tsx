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

      <ul className="hidden md:flex items-center gap-6 font-light">
        <li className="uppercase text-sm hover:text-hover transition-colors duration-300">
          <Link href="/about">about us</Link>
        </li>
        <li className="uppercase text-sm hover:text-hover transition-colors duration-300">
          <Link href="/services">our services</Link>
        </li>
        <li className="uppercase text-sm hover:text-hover transition-colors duration-300">
          <Link href="/work">work with us</Link>
        </li>
        <li className="uppercase text-sm hover:text-hover transition-colors duration-300">
          <Link href="/blog">blog</Link>
        </li>
      </ul>

      <div className="hidden md:block">
        <Button variant="primary" size="medium">
          get in touch
        </Button>
      </div>

      {/* mobile menu button with animation */}
      <button
        className="text-foreground p-2 md:hidden relative z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {" "}
        <div className="w-6 h-6 flex items-center justify-center">
          <span
            className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`block absolute h-0.5 w-6 bg-current transition-opacity duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </div>
      </button>

      {/* Mobile menu with animation */}
      {mounted && (
        <div
          className={`absolute top-0 left-0 right-0  bg-background z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col justify-center h-full px-6 shadow-xl ">
            <ul className="flex flex-col space-y-6 pt-10 items-center">
              <li className="py-2 uppercase text-sm hover:text-hover transition-colors duration-300">
                <Link href="/about" onClick={toggleMenu}>
                  about us
                </Link>
              </li>
              <li className="py-2 uppercase text-sm hover:text-hover transition-colors duration-300">
                <Link href="/services" onClick={toggleMenu}>
                  our services
                </Link>
              </li>
              <li className="py-2 uppercase text-sm hover:text-hover transition-colors duration-300">
                <Link href="/work" onClick={toggleMenu}>
                  work with us
                </Link>
              </li>
              <li className="py-2 uppercase text-sm hover:text-hover transition-colors duration-300">
                <Link href="/blog" onClick={toggleMenu}>
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
