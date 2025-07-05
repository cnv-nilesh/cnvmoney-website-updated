"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import MPOP from "../../assets/WhyCNV/shoping_cart.svg";
import MBch from "../../assets/WhyCNV/multiplebranches.svg";
import CPR from "../../assets/WhyCNV/growth.svg";
import Up from "../../assets/WhyCNV/upgrade.svg";
import SMC from "../../assets/WhyCNV/socialmeadia.svg";
import GYS from "../../assets/WhyCNV/coin.svg";
import PDS from "../../assets/WhyCNV/security.svg";

const cardData = [
  { img: MPOP, text: "Multiple Products on One Platform" },
  { img: MBch, text: "Multiple branches available for customer support" },
  {
    img: CPR,
    text: "In the last 10 years, cnvmoney has delivered a return of 12% Plus CAGR in the Customer Portfolios.",
  },
  // {
  //   img: Up,
  //   text: "cnvmoney keeps updating its systems to the needs of the clients.",
  // },
  {
    img: SMC,
    text: "cnvmoney provides regular market updates through Digital Media.",
  },
  {
    img: GYS,
    text: "cnvmoney offers an opportunity to build your own business and generate a secondary source of income.",
  },
  {
    img: PDS,
    text: "cnvmoney ensures that client financial and personal data are kept safe and secured.",
  },
];

function WhyCNV() {
  // useEffect(() => {
  //   const loadScrollReveal = async () => {
  //     const ScrollReveal = (await import("scrollreveal")).default;
  //     ScrollReveal().reveal(".whyCNV-card", {
  //       delay: 200,
  //       distance: "50px",
  //       origin: "bottom",
  //       duration: 800,
  //       easing: "ease-in-out",
  //       reset: false,
  //       interval: 100,
  //     });
  //   };
  //   loadScrollReveal();
  // }, []);

  return (
    <section className="whyCNV-section bg-gradient-to-r from-gray-100 to-gray-200 py-16 px-6">
      <div className="whyCNV-container max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Why cnvmoney</h2>
        <p className="text-gray-500 mb-12 text-lg leading-relaxed">
          Discover the benefits of partnering with cnvmoney and how we can help
          grow your portfolio.
        </p>

        <div className="whyCNV-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer rounded-sm shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <Image src={card.img} alt="Feature Icon" width={60} height={60} />
              <p className="mt-4 text-gray-700 text-base leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyCNV;
