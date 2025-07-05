"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import achivement from "./achivement.svg";

const StatCard = ({ value, label, prefix = "", suffix = "", duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const start = 0;
      const end = value;
      const stepTime = Math.abs(Math.floor((duration * 1000) / end));
      let current = start;

      const counter = setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= end) {
          clearInterval(counter);
        }
      }, stepTime);
    }
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <span className="text-2xl md:text-3xl font-bold text-cyan-500">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
      <p className="text-sm md:text-base text-gray-700 text-center">{label}</p>
    </motion.div>
  );
};

const StatsCounter = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-auto relative flex justify-center flex-col items-center">
        <Image
          src={achivement}
          alt="achivement"
          className="w-full object-cover opacity-20 p-2"
        />
        <div className="bg-black/90 backdrop-blur-md rounded-xl shadow-md p-6 md:p-8 flex flex-wrap justify-center items-center gap-6 w-11/12 max-w-6xl -mt-16">
          <StatCard value={50} suffix="K+" label="Instruments" />
          <div className="hidden md:block h-12 w-px bg-gray-300"></div>
          <StatCard value={40} suffix="+" label="Markets" />
          <div className="hidden md:block h-12 w-px bg-gray-300"></div>
          <StatCard
            value={50}
            prefix="$"
            suffix=" Million"
            label="Charter Capital"
          />
          <div className="hidden md:block h-12 w-px bg-gray-300"></div>
          <StatCard value={23} suffix=" yrs" label="Of Experience" />
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
