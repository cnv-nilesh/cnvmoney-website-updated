import React from "react";
import Image from "next/image";
import achivement from "./achivement.svg";
const steps = [
  {
    icon: "✅",
    title: "1. Complete Your KYC",
    description:
      "Get started by completing your KYC (Know Your Customer) process. Submit your basic identification and address proof online—quick, secure, and hassle-free.",
  },
  {
    icon: "📈",
    title: "2. Choose Mutual Fund Schemes",
    description:
      "Explore and select from a wide range of mutual fund schemes that suit your financial goals, risk appetite, and investment horizon. Whether you're saving for the short term or building long-term wealth, we’ve got options for everyone.",
  },
  {
    icon: "💳",
    title: "3. Make a Payment & Invest",
    description:
      "Invest securely using your preferred payment method. Once the payment is made, your money starts working for you right away.",
  },
];
const Starts = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center flex-wrap overflow-hidden">
      <div className="w-full h-auto flex justify-center flex-col items-center flex-w">
        <div className="container mt-2 p-2">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-10">
              Start Investing in 3 Simple Steps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-100 hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starts;
