"use client";
import React from "react";
import Image from "next/image";

const images = [
  "/amcImages/adityaBirla.png",
  "/amcImages/360.png",
  "/amcImages/Axis.png",
  "/amcImages/bajaj.png",
  "/amcImages/baroda.png",
  "/amcImages/BOI.png",
  "/amcImages/canara.png",
  "/amcImages/DSP.jpg",
  "/amcImages/edelweiss.jpg",
  "/amcImages/franklin.png",
  "/amcImages/hdfc.png",
  "/amcImages/HSBC.png",
  "/amcImages/ICICI.jpg",
  "/amcImages/invesco.png",
  "/amcImages/ITI.jpg",
  "/amcImages/JM.png",
  "/amcImages/kotak.png",
  "/amcImages/lic.png",
  "/amcImages/MHNDR.png",
  "/amcImages/motilal.jpg",
  "/amcImages/navi.jpg",
  "/amcImages/nippon.jpg",
  "/amcImages/PGMI.png",
  "/amcImages/PPFAS.png",
  "/amcImages/quant.png",
  "/amcImages/samco.png",
  "/amcImages/SBI.jpg",
  "/amcImages/shree ram.png",
  "/amcImages/sundaram.png",
  "/amcImages/tata.png",
  "/amcImages/trust.png",
  "/amcImages/union.jpeg",
  "/amcImages/uti.jpg",
  "/amcImages/whiteoakcap.jpeg",
];

const Amc = () => {
  const repeatedImages = [...images, ...images]; // For continuous loop

  return (
    <div className="w-full overflow-hidden py-8 mb-4 mt-4">
      <h2 className="text-xl md:text-xl font-bold text-center mb-10">
        Our AMCs
      </h2>

      <div className="relative w-full mt-5">
        <div className="flex gap-8 sm:gap-12 md:gap-16 animate-slide whitespace-nowrap">
          {repeatedImages.map((src, i) => (
            <div
              key={i}
              className="flex justify-center items-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px] h-[40px] sm:h-[50px] md:h-[60px]"
            >
              <Image
                src={src}
                alt={`AMC-${i}`}
                width={120}
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-slide {
          animation: scroll 100s linear infinite;
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

export default Amc;
