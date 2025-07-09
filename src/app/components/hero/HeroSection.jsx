"use client";
import Image from "next/image";
import image2 from "./hero.png";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    heading: "Build Wealth Confidently",
    subheading:
      "Invest in expertly managed mutual funds tailored to your goals.",
  },
  {
    heading: "SIP Made Simple",
    subheading:
      "Start a Systematic Investment Plan with as little as ₹500/month.",
  },
  {
    heading: "Smart. Secure. Diversified.",
    subheading: "Our mutual funds balance risk and return for steady growth.",
  },
  {
    heading: "Retirement Planning Starts Now",
    subheading: "Invest in long-term funds for a financially secure future.",
  },
  {
    heading: "Track. Manage. Grow.",
    subheading: "Real-time portfolio tracking and performance insights.",
  },
  {
    heading: "Tax-Saving with ELSS Funds",
    subheading: "Save up to ₹46,800 in taxes while growing your money.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  const getPosition = (index) => {
    if (index === current) return "center";
    if (index === (current - 1 + total) % total) return "left";
    if (index === (current + 1) % total) return "right";
    return "hidden";
  };

  const cardVariants = {
    center: { scale: 1, x: 0, opacity: 1, zIndex: 2 },
    left: { scale: 0.9, x: "10%", opacity: 0, zIndex: 1 },
    right: { scale: 0.9, x: "10%", opacity: 0, zIndex: 1 },
    hidden: { scale: 0, opacity: 0, zIndex: 0 },
  };
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center p-4 gap-6">
      <div className="w-1/2 p-2 flex flex-col justify-center items-center flex-wrap">
        <div className="relative flex items-center justify-center min-h-[350px]">
          <AnimatePresence>
            {slides.map((item, index) => {
              const position = getPosition(index);
              if (position === "hidden") return null;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={position}
                  exit="hidden"
                  transition={{ duration: 0.6 }}
                  className="absolute w-[300px] min-h-[280px] p-2 flex flex-col items-center justify-center text-center"
                >
                  <h3 className="text-2xl font-bold mb-2 text-nowrap">
                    {item.heading}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {item.subheading}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-gray-800" : "bg-gray-400"
              } transition-colors`}
            ></div>
          ))}
        </div>
      </div>
      <div className="w-1/2 p-2">
        <Image src={image2} className="object-fill" alt="hero" />
      </div>
    </div>
  );
};

export default HeroSection;
