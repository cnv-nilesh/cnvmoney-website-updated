"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import clsx from "clsx";
import Image from "next/image";
import Logo from "./Logo.png";
import { usePathname } from "next/navigation";
import { Menu } from "@mui/icons-material";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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
    {
      href: "https://www.amfiindia.com/investor-corner/investor-center/download-forms.html",
      label: "Download",
    },
    { href: "/Learn/MutualFund", label: "Learn" },
    { href: "/About", label: "About" },
    { href: "/Blog", label: "Blog" },
    { href: "/Contact", label: "Contact" },
    { href: "/Calculator", label: "Calculator" },
  ];

  const path = usePathname();

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-40 transition-colors duration-300",
        isScrolled ? "bg-white/80 backdrop-blur shadow-sm" : "backdrop-blur"
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
            <div className="inline-flex justify-center w-full py-1 px-4 font-medium text-white text-xs bg-blue-600 rounded-2xl hover:bg-blue-700 focus:outline-none">
              <a href="https://cnvmoney.my-portfolio.co.in/app/#/kycOnBoarding/mobileSignUp">
                Sign Up
              </a>
            </div>
            <div className="relative inline-block text-left" ref={menuRef}>
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex cursor-pointer justify-center w-full text-xs py-1 px-4 font-medium text-white bg-blue-600 rounded-2xl hover:bg-blue-700 focus:outline-none"
              >
                Login
              </button>

              {open && (
                <div className="absolute right-0 z-10 mt-2 w-32 border-none origin-top-right rounded-md bg-white shadow-lg ring-1 ring-opacity-5">
                  <div className="py-1 text-gray-700">
                    <a
                      href="https://cnvmoney.my-portfolio.co.in/app/#/login"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Client Login
                    </a>
                    <a
                      href="https://cnvmoney.my-portfolio.co.in/app/#/login"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Partner Login
                    </a>
                  </div>
                </div>
              )}
            </div>
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
