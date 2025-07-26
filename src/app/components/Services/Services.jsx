// components/Services.tsx
"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cart } from "./product";

const Services = () => {
  const [index, setIndex] = useState(0);
  const itemWidth = 300; // width in pixels
  const visibleItems = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1 >= cart.length ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const totalWidth = cart.length * itemWidth;

  return (
    <div className="px-4 py-8 overflow-hidden bg-slate-100">
      <h2 className="text-2xl font-bold text-center ">
        The Best Service We Offer
      </h2>

      <div className="relative w-full overflow-hidden max-w-[1200px] mx-auto">
        <motion.div
          className="flex gap-4"
          animate={{ x: -index * (itemWidth + 16) }} // 16 = gap
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ width: totalWidth }}
        >
          {cart.map((item) => (
            <div
              key={item.id}
              className="mt-4 min-w-[300px] max-w-[300px] bg-white shadow-md p-4 rounded-xl flex flex-col items-center text-center mb-6"
            >
              <Image
                src={item.Image}
                alt={item.Title}
                width={50}
                height={50}
                className="mb-3"
              />
              <p className="text-lg font-semibold">{item.Title}</p>
              <p className="text-sm mt-2 text-gray-600">{item.Desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
