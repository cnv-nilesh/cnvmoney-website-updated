"use client";
import React from "react";
import Image from "next/image";
import Target from "./Target";
import { useEffect } from "react";
const data = [
  {
    imageUrl: "/about/1.png",
    header: "CNVMONEY FINTECH PRIVATE LIMITED",
    info: "We understand that navigating the financial world can be overwhelming. At CNVMONEY Fintech Pvt. Ltd., our team of experienced and qualified AMFI Distributors and Relationship Managers are dedicated to guiding on your unique financial journey. We take a personalized approach, working closely with you to understand your goals and develop a customized plan.",
  },
  {
    imageUrl: "/about/2.png",
    header: "CREDIT AND VAULT FINANCIAL SERVICES",
    info: "We are in to distribution of Financial Products to Retail and HNI clients. We are a fast growing financial firm engaged in the business of Mutual Fund distribution, Life, Health and General Insurance, PMS, Corporate Fixed Deposits, Stock Broking, IPO, Unlisted Shares, Secured and Unsecured Loans, Tax Advisory, Income Tax Returns and Properties.",
  },
  {
    imageUrl: "/about/3.png",
    header: "CNVEST INSURANCE BROKERS Pvt Ltd.",
    info: `is an IRDA registered Insurance Broker. licence no :- 1033 The company provides both Life and Non-life Insurance solutions offline as well as online through state of the art portal www.policybasket.in One can select, compare, buy, renew & manage their policies online from anywhere through the portal & mobile application.`,
  },
];

const AboutSection = () => {
  useEffect(() => {
    const loadScrollReveal = async () => {
      const sr = (await import("scrollreveal")).default();
      sr.reveal(".about_company", {
        delay: 300,
        distance: "100px",
        origin: "bottom",
        duration: 1000,
        easing: "ease",
        reset: false,
      });
    };

    if (typeof window !== "undefined") {
      loadScrollReveal();
    }
  }, [data]);
  return (
    <>
      <div className="p-2 text-wrap mb-1">
        <p className="text-gray-500">
          CNVMONEY FinTech Pvt. Ltd. ( formerly cnvmoney group) established in
          2014, with vast experience in banking and finance over a period of 22
          years with specialization in Investments and Wealth Management .
        </p>
        <p className="text-gray-500 mt-2">
          We are in to distribution of Financial Products to Retail and HNI
          clients. We are a fast growing financial firm engaged in the business
          of Mutual Fund distribution, Life, Health and General Insurance, PMS,
          Corporate Fixed Deposits, Stock Broking, IPO, Unlisted Shares, Secured
          and Unsecured Loans, Tax Advisory, Income Tax Returns and Properties.
        </p>
        <p className="text-gray-500 mt-2">
          The Firm is committed for best in class one stop financial destination
          for all client financial needs with unbiased Advice, Systematic
          Approach &Passionate Service, keeping the customer at the center Is
          what defines&quot cnvmoney Investments&quot; .With a vision to create
          a WOW experience, we extend unbiased, accurate, and independent
          professional advice along with complete assistance for hassle-free and
          swift execution. As a result of which, we arm you to achieve your
          ultimate destination - Financial Freedom, a stage where the Financial
          Future of the entire Family is fully secured & well planned, In order
          to provide World Class technology, the widest range of services to our
          clients and to enhance our strength we have made strategic alliances
          with some of the Best Financial Service Providers in the Country.
          Nestled in the capital economic hub of India - Mumbai our reach spans
          nationwide. We also serve the NRIs & PIO&apos;s residing in the Gulf
          Region, U.S, Europe, Australia & other places across the globe, who
          still have a strong connect with India.
        </p>
      </div>
      <div className="h-1 w-full bg-slate-100"></div>
      <div className="container mx-auto p-6 mb-2">
        <div className="flex flex-wrap -mx-4 justify-center">
          {data.map((item, id) => (
            <div
              className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-6 company_container"
              key={id}
            >
              <div className="bg-white">
                <div className="p-4 about_company">
                  <Image
                    src={item.imageUrl}
                    width={100}
                    height={100}
                    className={`company_image ${
                      item.imageUrl === "/about/2.png" ? "mb-1" : "mb-4"
                    }`}
                    alt={item.imageUrl}
                  ></Image>
                  <h2
                    className="text-gray-700 p-2"
                    style={{ color: "gray", fontWeight: 600 }}
                  >
                    {item.header}
                  </h2>
                  <p className="text-gray-500 p-2">{item.info}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="h-1 w-full bg-slate-100 mb-4"></div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
