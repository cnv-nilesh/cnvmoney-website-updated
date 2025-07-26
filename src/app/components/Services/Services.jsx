// components/Services.tsx
"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cart } from "./product";

const Services = () => {
  return (
    <div className="px-4 py-8 overflow-hidden bg-slate-100">
      <h2 className="text-2xl font-bold text-center ">
        The Best Service We Offer
      </h2>

      <div className="relative w-full overflow-hidden max-w-[1200px] mx-auto flex gap-5">
        {cart.map((item) => (
          <div
            key={item.id}
            className="mt-4 min-w-[300px] max-w-[300px] bg-white animate-slide shadow-md p-4 rounded-xl flex flex-col items-center text-center mb-6"
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
      </div>
      <style jsx>{`
        .animate-slide {
          animation: scroll 2s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
