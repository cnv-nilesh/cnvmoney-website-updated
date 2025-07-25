"use client";
import React from "react";
import Image from "next/image";

const images = [
  { image: "/amc/360One.jpg", links: "https://www.360.one/" },
  {
    image: "/amc/AdityaBirla.jpg",
    links: "https://mutualfund.adityabirlacapital.com/",
  },
  { image: "/amc/axisMF.jpg", links: "https://www.axismf.com/" },
  { image: "/amc/Bajaj.png", links: "https://www.bajajamc.com/" },
  { image: "/amc/bandhan.jpg", links: "https://bandhanmutual.com/" },
  { image: "/amc/BARPN.jpg", links: "https://www.barodabnpparibasmf.in/" },
  { image: "/amc/BhartiAXA.jpg", links: "https://www.boimf.in/" },
  { image: "/amc/canaraMF.jpg", links: "https://www.canararobeco.com/" },
  { image: "/amc/DSP_mf.jpg", links: "https://www.dspim.com/" },
  { image: "/amc/edlMF.jpg", links: "https://www.edelweissmf.com/" },
  {
    image: "/amc/frnkMF.jpg",
    links: "https://www.franklintempletonindia.com/",
  },
  { image: "/amc/Groww.png", links: "https://groww.in/mutual-funds" },
  { image: "/amc/hdfcMF.jpg", links: "https://www.hdfcfund.com/" },
  { image: "/amc/Helios.png", links: "https://www.heliosmf.in/" },
  {
    image: "/amc/hsbcMF.jpg",
    links: "https://www.assetmanagement.hsbc.co.in/en",
  },
  { image: "/amc/iciciMF.jpg", links: "https://www.icicipruamc.com/" },
  { image: "/amc/inveMF.jpg", links: "https://www.invescomutualfund.com/" },
  { image: "/amc/ITI_mf.jpg", links: "https://www.itiamc.com/home" },
  { image: "/amc/jmMF.jpg", links: "https://www.jmfinancialmf.com/" },
  { image: "/amc/kotakMF.jpg", links: "https://www.kotakmf.com/" },
  { image: "/amc/licMF.jpg", links: "https://www.licmf.com/" },
  {
    image: "/amc/mahindraMF.jpg",
    links: "https://www.mahindramanulife.com/",
  },
  { image: "/amc/miraeMF.jpg", links: "https://www.miraeassetmf.co.in/" },
  { image: "/amc/motilalMF.jpg", links: "https://www.motilaloswalmf.com/" },
  { image: "/amc/NAVI_mf.jpg", links: "https://navi.com/mutual-fund" },
  { image: "/amc/nipponindiaMF.png", links: "https://mf.nipponindiaim.com/" },
  { image: "/amc/NJ.png", links: "https://www.njmutualfund.com/" },
  { image: "/amc/pgim.jpg", links: "https://www.pgimindia.com/mutual-funds" },
  {
    image: "/amc/PPFAS_mf.jpg",
    links: "https://www.pgimindia.com/mutual-funds/",
  },
  { image: "/amc/quant_mf.jpg", links: "https://www.quantmutual.com/" },
  { image: "/amc/quantamMF.jpg", links: "https://www.quantumamc.com/" },
  { image: "/amc/samcom_mf.jpg", links: "https://www.samcomf.com/" },
  { image: "/amc/sbiMF.jpg", links: "https://www.sbimf.com/" },
  { image: "/amc/Shriram_mf.jpg", links: "https://www.shriramamc.in/" },
  { image: "/amc/sundaramMF.jpg", links: "https://www.sundarammutual.com/" },
  { image: "/amc/tataMF.jpg", links: "https://www.tatamutualfund.com/" },
  { image: "/amc/taurusMF.jpg", links: "https://www.taurusmutualfund.com/" },
  { image: "/amc/Trust_mf.jpg", links: "https://www.trustmf.com/" },
  { image: "/amc/Union_mf.jpg", links: "https://unionmf.com/" },
  { image: "/amc/utiMF.jpg", links: "https://www.utimf.com/" },
  { image: "/amc/WhiteOak.jpg", links: "https://mf.whiteoakamc.com/" },
];

const Amc = () => {
  const repeatedImages = [...images, ...images]; // For continuous loop

  return (
    <div className="w-full overflow-hidden py-8 mb-8 mt-4">
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
                src={src.image}
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
          animation: scroll 10s linear infinite;
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
