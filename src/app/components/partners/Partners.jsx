"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiveStar, FourAndHalfStar } from "../StarRating/StarRating";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Rina Patel",
    company: "",
    des: "Premier Business Partner - Vadodara ",
    rate: <FiveStar />,
    text: "Partnering with CNVMONEY has been a transformative experience for my mutual fund distribution business. Their platform combines cutting-edge technology with deep industry insight, making it easier than ever to manage client portfolios, track performance, and offer tailored investment advice. CNVMONEY's robust support system and seamless digital tools have significantly improved client engagement and operational efficiency. I truly appreciate their commitment to transparency, compliance, and innovation. With CNVMONEY, I feel empowered to grow my business with confidence and deliver exceptional value to my clients",
    url: "/partners/Rina.png",
  },
  {
    id: 2,
    name: "Stalin Rebello",
    company: "Rebello Finance",
    des: "Premier Business Partner – Virar",
    rate: <FiveStar />,
    text: "Being associated with CNVMONEY as a Premier Business Partner has been a game-changer for my financial distribution journey. The platform’s user-friendly interface, advanced tools, and strong back-end support have helped me deliver exceptional service to my clients. What sets CNVMONEY apart is their consistent focus on innovation, compliance, and partner empowerment. Operating from Vashi, I’ve seen first-hand how their solutions have streamlined my operations and strengthened client trust. Proud to be part of the CNVMONEY ecosystem",
    url: "/partners/Stalin.png",
  },
  {
    id: 3,
    name: "Thomas Sequeira",
    company: "Invest@easa",
    des: "Premier Business Partner – Boisar",
    rate: <FiveStar />,
    text: "Joining hands with CNVMONEY as a Premier Business Partner has been one of the best decisions for my business in Vasai. Their comprehensive platform, backed by top-notch technology and excellent support, has helped me serve my clients more efficiently and professionally. CNVMONEY doesn’t just offer tools—they offer a complete ecosystem that supports growth, learning, and client satisfaction. I’m proud to be associated with a brand that truly values its partners and is committed to building a stronger financial future for all.",
    url: "/partners/Thomas.png",
  },
  {
    id: 4,
    name: "Clarence Dmello",
    company: "CME Finserv",
    des: "Wealth Premier Partner – Mumbai",
    rate: <FourAndHalfStar />,
    text: "As a Wealth Premier Partner with CNVMONEY in Mumbai, I’ve experienced a new level of efficiency, trust, and professionalism in the wealth management space. CNVMONEY's platform empowers me with the right tools, real-time insights, and compliance-friendly solutions that make client servicing smooth and impactful. Their unwavering support and forward-thinking approach has helped me scale my business and build lasting client relationships. Proud to be part of a network that truly understands and uplifts its partners.",
    url: "/partners/Clarence.png",
  },
  {
    id: 5,
    name: "Asim Jain",
    company: "",
    des: "Elite Business Partner – Vashi",
    rate: <FourAndHalfStar />,
    text: "As an Elite Business Partner with CNVMONEY in Vashi, I can confidently say that this association has elevated my practice to new heights. CNVMONEY offers a powerful blend of technology, training, and personalized support that makes mutual fund distribution not only efficient but also future-ready. Their digital tools simplify everything—from onboarding to portfolio tracking—allowing me to focus more on building long-term relationships with my clients. The team at CNVMONEY is proactive, professional, and always just a call away. It's truly a partnership that delivers on every promise.",
    url: "/partners/Asim.png",
  },
];

export default function Partners() {
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
    <div className="w-full max-w-7xl mx-auto py-12 px-4 bg-gray-100 mt-4">
      <h2 className="text-2xl font-bold text-center mb-10">
        Our Partners Reviews
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
                className="absolute w-[700px] h-[320px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
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
                  “{item.text.slice(0, 500)}...”
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
