"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiveStar, FourAndHalfStar } from "../StarRating/StarRating";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Prasad Lemos",
    des: "Vice President, HDFC Bank Ltd",
    rate: <FiveStar />,
    text: "CNVMONEY Company has been an excellent partner for my financial journey...",
    url: "/TestimonialImage/Prashant.jpg",
  },
  {
    id: 2,
    name: "Vikas Save",
    des: "Director, VDA Infosolutions Pvt.Ltd.",
    rate: <FourAndHalfStar />,
    text: "Amazing and trustworthy investment experience with CNVMONEY team...",
    url: "/TestimonialImage/Vikas.jpeg",
  },
  {
    id: 3,
    name: "Glen Gonsalves",
    des: "Co-Founder, Fledon Engineering Works",
    rate: <FourAndHalfStar />,
    text: "I highly recommend CNVMONEY as investments firm for their professional advisory.",
    url: "/TestimonialImage/Glen.jpg",
  },
  {
    id: 4,
    name: "Harshala Shastri",
    des: "Marketing Head, ICICI Bank",
    rate: <FourAndHalfStar />,
    text: "I strongly recommend CNVMONEY for their wealth of expertise...",
    url: "/TestimonialImage/Harshala.jpg",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

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
    left: { scale: 0.9, x: "-120%", opacity: 0.7, zIndex: 1 },
    right: { scale: 0.9, x: "120%", opacity: 0.7, zIndex: 1 },
    hidden: { scale: 0, opacity: 0, zIndex: 0 },
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-10">
        Our Clients Reviews
      </h2>

      <div className="relative flex items-center justify-center min-h-[350px] overflow-hidden">
        <AnimatePresence>
          {testimonials.map((item, index) => {
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
                className="absolute w-[300px] h-[320px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
              >
                <Image
                  src={item.url}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-full  mb-4 object-cover"
                />
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.title}</p>
                <div className="text-yellow-400 my-2">{item.rate}</div>
                <p className="text-gray-600 text-sm italic mt-2">
                  “{item.text.slice(0, 100)}...”
                </p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-gray-800" : "bg-gray-400"
            } transition-colors`}
          ></div>
        ))}
      </div>
    </div>
  );
}
