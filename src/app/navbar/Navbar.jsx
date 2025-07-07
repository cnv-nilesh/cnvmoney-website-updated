"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import Logo from "./Logo.webp";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to apply background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/Download", label: "Download" },
    { href: "/Learn/MutualFund", label: "Learn" },
    { href: "/About", label: "About" },
    { href: "/Blog", label: "Blog" },
    { href: "/Contact", label: "Contact" },
    { href: "/Calculator", label: "Calculator" },
    { href: "https://cnvmoney.my-portfolio.co.in/app/#/login", label: "Login" },
  ];

  const path = usePathname();
  console.log(path);
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300",
        isScrolled ? "bg-white/80 backdrop-blur shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            <Image src={Logo} alt="logo" width={160} height={40}></Image>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ href, label }) => (
              <div
                key={href}
                className={`${
                  path == href
                    ? ` border-b-[1] border-b-gray-800`
                    : `hover-underline`
                }`}
              >
                <Link
                  key={href}
                  href={href}
                  className={`${
                    path == href
                      ? `rounded-sm border-b-gray-800`
                      : `text-gray-700 transition-colors`
                  }`}
                >
                  {label}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={clsx(
            "md:hidden transition-all duration-300 overflow-hidden",
            isOpen ? "max-h-60 mt-2" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-2 py-2">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block text-gray-700 hover:text-blue-600 px-2 py-1 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
