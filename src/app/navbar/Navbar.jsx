"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import Logo from "./Logo.png";
import { usePathname } from "next/navigation";
import { Menu, Close as X } from "@mui/icons-material";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const path = usePathname();

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

  // Close login dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-40 transition-colors duration-300",
        isScrolled ? "bg-white/80 backdrop-blur shadow-sm" : "backdrop-blur"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <Image src={Logo} alt="logo" width={160} height={40} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "text-sm font-medium transition-colors",
                  path === href
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover-underline"
                )}
              >
                {label}
              </Link>
            ))}

            <a
              href="https://cnvmoney.my-portfolio.co.in/app/#/kycOnBoarding/mobileSignUp"
              className="py-1 px-4 text-xs text-white bg-blue-600 rounded-2xl hover:bg-blue-700"
            >
              Sign Up
            </a>

            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setOpen(!open)}
                className="py-1 px-4 text-xs text-white bg-blue-600 rounded-2xl hover:bg-blue-700"
              >
                Login
              </button>
              {open && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-md ring-1 ring-black ring-opacity-5 z-50">
                  <a
                    href="https://cnvmoney.my-portfolio.co.in/app/#/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Client Login
                  </a>
                  <a
                    href="https://cnvmoney.my-portfolio.co.in/app/#/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Partner Login
                  </a>
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

        {/* Mobile Menu */}
        <div
          className={clsx(
            "md:hidden transition-all duration-300 overflow-hidden",
            isOpen ? "max-h-screen mt-2" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-3 py-2 px-2 bg-white rounded-md shadow">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "block text-sm font-medium px-2 py-2 rounded hover:bg-gray-100",
                  path === href ? "text-blue-600" : "text-gray-700"
                )}
              >
                {label}
              </Link>
            ))}

            <a
              href="https://cnvmoney.my-portfolio.co.in/app/#/kycOnBoarding/mobileSignUp"
              className="block py-2 text-center text-white text-sm bg-blue-600 rounded-xl hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </a>
            <a
              href="https://cnvmoney.my-portfolio.co.in/app/#/login"
              className="block py-2 text-center text-white text-sm bg-blue-600 rounded-xl hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
