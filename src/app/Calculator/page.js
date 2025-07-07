"use client";
import React, { useState } from "react";
import SipCalculator from "../components/calculator/sip";
import PpfCalculator from "../components/calculator/ppf";
import FDCalculator from "../components/calculator/fd";
import RdCalculator from "../components/calculator/rd";
import NpsCalculator from "../components/calculator/nps";
import EmiCalculator from "../components/calculator/emi";
import Lumpsumcalculator from "../components/calculator/lumpsum";
import StepUpSIPCalculator from "../components/calculator/SetupSIP";
import DelaySipCalculator from "../components/calculator/sipdelay";
import WealthSIP from "../components/calculator/wealthSIP";
import LumpsumWealth from "../components/calculator/lumpsumwealth";

function Page() {
  const [mode, setMode] = useState("SIP through  wealth");

  const renderComponent = () => {
    switch (mode) {
      case "SIP through  wealth":
        return <SipCalculator />;
      case "Wealth through  SIP":
        return <WealthSIP />;
      case "Lumpsum  through  wealth":
        return <Lumpsumcalculator />;
      case "Wealth through  Lumpsum":
        return <LumpsumWealth />;
      // case "SWP":
      //   return <SWPCalculator />;
      case "Setup SIP":
        return <StepUpSIPCalculator />;
      case "SIP Delay":
        return <DelaySipCalculator />;
      case "FD":
        return <FDCalculator />;
      case "PPF":
        return <PpfCalculator />;
      case "RD":
        return <RdCalculator />;
      case "EMI":
        return <EmiCalculator />;
      case "NPS":
        return <NpsCalculator />;
      default:
        return <SipCalculator />;
    }
  };

  return (
    <div className="bg-white p-6 rounded flex flex-wrap gap-5 items-center">
      <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
        {[
          "SIP through  wealth",
          "Wealth through  SIP",
          "Lumpsum  through  wealth",
          "Wealth through  Lumpsum",
          "SWP",
          "Setup SIP",
          "SIP Delay",
          "FD",
          "PPF",
          "RD",
          "EMI",
          "NPS",
        ].map((buttonLabel, index) => (
          <button
            key={index}
            className={`w-30 text-[13px] px-7 py-1 rounded text-center ${
              mode === buttonLabel
                ? "bg-[#0143A2] text-white shadow-md hover:text-white hover:border-[#0144a2a9]"
                : "bg-white text-shadow-slate-600 shadow-md hover:text-white hover:bg-[#0144a2a9] border-[#0143A2]"
            }`}
            onClick={() => setMode(buttonLabel)}
          >
            {buttonLabel}
          </button>
        ))}
      </div>
      <div className="mt-8 w-full">{renderComponent()}</div>
    </div>
  );
}

export default Page;
