"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Stars from "./Starts";

const StatCard = ({ value, label, prefix = "", suffix = "", duration = 1 }) => {
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
      className="flex flex-col items-center px-4 flex-wrap"
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
    <>
      <Stars />
      <div className="w-full flex flex-col items-center justify-center flex-wrap overflow-hidden">
        <div className="w-full h-auto flex justify-center flex-col items-center flex-w">
          <div className="bg-white  backdrop-blur-md rounded-xl shadow-xl p-6 md:p-8 flex flex-wrap justify-center items-center gap-6 w-11/12 max-w-6xl mb-5">
            <StatCard value={11} suffix="+ years" label="Years Experience" />
            <div className="hidden md:block h-12 w-px bg-gray-300"></div>
            <StatCard value={5} suffix=" K+" label="Happy Clients" />
            <div className="hidden md:block h-12 w-px bg-gray-300"></div>
            <StatCard value={5} prefix="" suffix="+ " label="Branches" />
            <div className="hidden md:block h-12 w-px bg-gray-300"></div>
            <StatCard value={45} suffix="+ " label="AMC Partners" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCounter;
