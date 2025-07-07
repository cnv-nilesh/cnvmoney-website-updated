"use client";
import jsPDF from "jspdf";
import React, { useState, useEffect, useRef } from "react";
import { FaFilePdf } from "react-icons/fa";
import html2canvas from "html2canvas";
import autoTable from "jspdf-autotable";

const SipCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(15);
  const [delayInMonths, setDelayInMonths] = useState(12);
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [futureValueWithoutDelay, setFutureValueWithoutDelay] = useState(0);
  const [costOfDelay, setCostOfDelay] = useState(0);
  const calculatorRef = useRef(null);

  const [showTooltipMonthlyInvestment, setShowTooltipMonthlyInvestment] =
    useState(false);
  const [showTooltipExpectedReturnRate, setShowTooltipExpectedReturnRate] =
    useState(false);
  const [showTooltipTimePeriod, setShowTooltipTimePeriod] = useState(false);
  const [showTooltipDelayMonth, setShowTooltipDelayMonth] = useState(false);

  const calculateSip = () => {
    const totalMonths = timePeriod * 12;
    const monthlyRate = expectedReturnRate / 100 / 12;

    const investedAmount = monthlyInvestment * totalMonths;

    const futureValueWithoutDelay =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
      (1 + monthlyRate);

    const delayedMonths = totalMonths - delayInMonths;

    const futureValueAfterDelay =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, delayedMonths) - 1) / monthlyRate) *
      (1 + monthlyRate);

    const returns = futureValueAfterDelay - investedAmount;
    const costOfDelay = futureValueWithoutDelay - futureValueAfterDelay;

    setInvestedAmount(investedAmount);
    setEstimatedReturns(returns);
    setTotalValue(futureValueAfterDelay);
    setFutureValueWithoutDelay(futureValueWithoutDelay);
    setCostOfDelay(costOfDelay);
  };

  useEffect(() => {
    calculateSip();
  }, [monthlyInvestment, expectedReturnRate, timePeriod, delayInMonths]);

  const total = investedAmount + estimatedReturns;
  const circumference = 2 * Math.PI * 45;
  const investedAmountOffset = (investedAmount / total) * circumference;
  const returnsOffset = (estimatedReturns / total) * circumference;

  const handleDownloadPDF = () => {
    const doc = new jsPDF("landscape");
    doc.setFont("Helvetica");

    const logoUrl =
      "https://www.cnvmoney.com/_next/image?url=%2FLogo.png&w=256&q=75";

    const loadImageAsBase64 = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = function () {
          const canvas = document.createElement("canvas");
          canvas.width = this.naturalWidth;
          canvas.height = this.naturalHeight;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(this, 0, 0);
          resolve(canvas.toDataURL("image/png"));
        };
        img.onerror = function () {
          reject("Failed to load image.");
        };
        img.src = url;
      });
    };
    Promise.all([
      html2canvas(calculatorRef.current),
      loadImageAsBase64(logoUrl),
    ]).then(([canvas, logoBase64]) => {
      const imgData = canvas.toDataURL("image/png");

      doc.addImage(imgData, "PNG", 20, 30, 320, 100);
      doc.setFontSize(12);
      doc.setTextColor(107, 114, 128);
      doc.text("Invested Amount", 155, 98);
      doc.text("Returns", 199, 98);

      const pageHeight = 180;
      const pageWidth = 297;
      const contentSpacing = 7;
      const labelFontSize = 13;
      const valueFontSize = 12;
      const maxTextWidth = 70;

      doc.setFontSize(14);
      doc.setTextColor(1, 67, 162);
      doc.setFont("Helvetica", "bold");
      doc.text("Setup SIP", 20, 12);
      doc.addImage(logoBase64, "PNG", pageWidth - 60, 2, 40, 10);
      doc.setDrawColor(1, 67, 162);
      doc.setLineWidth(0.5);
      doc.line(10, 17, 287, 17);
      const wrapText = (text, width) => doc.splitTextToSize(text, width);
      doc.setFontSize(13);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text("Initial Monthly Investment:", 20, 40);
      doc.setFontSize(12);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(
          `Rs ${monthlyInvestment.toLocaleString("en-IN")}`,
          maxTextWidth
        ),
        23,
        47 + contentSpacing
      );

      doc.setFontSize(13);
      doc.setTextColor(107, 114, 128);
      doc.text("Annual Increase Percentage (%)", 23, 65);
      doc.setFontSize(12);
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(`${expectedReturnRate}%`, maxTextWidth),
        22,
        72 + contentSpacing
      );

      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text("Total Invested Amount :", pageWidth - 65, 60);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(
          `Rs ${Math.round(investedAmount).toLocaleString("en-IN")}`,
          maxTextWidth
        ),
        pageWidth - 65,
        60 + contentSpacing
      );

      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text("Future Value without Delay:", pageWidth - 65, pageHeight - 105);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(
          `Rs ${Math.round(futureValueWithoutDelay).toLocaleString("en-IN")}`,
          maxTextWidth
        ),
        pageWidth - 65,
        pageHeight - 105 + contentSpacing
      );
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text(
        "Cost of Delay in Future Value:",
        pageWidth - 65,
        pageHeight - 90
      );
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(
          `Rs ${Math.round(costOfDelay).toLocaleString("en-IN")}`,
          maxTextWidth
        ),
        pageWidth - 65,
        pageHeight - 90 + contentSpacing
      );

      doc.setTextColor(107, 114, 128);
      doc.text("Time Period (Years)", 20, 90);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(timePeriod.toString(), maxTextWidth),
        23,
        96 + contentSpacing
      );
      doc.setTextColor(107, 114, 128);
      doc.text("SIP Delay (Months)", 20, 115);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(delayInMonths.toString(), "+", maxTextWidth),
        23,
        120 + contentSpacing
      );

      doc.setTextColor(80, 80, 80);
      doc.setFontSize(14);

      doc.setFont("Helvetica", "bold");

      doc.text("Future Value after Delay", pageWidth - 65, pageHeight - 75);
      doc.setFontSize(18);
      doc.setTextColor(150, 0, 16);
      doc.text(
        wrapText(
          `Rs ${Math.round(totalValue).toLocaleString("en-IN")}`,
          maxTextWidth
        ),
        pageWidth - 65,
        pageHeight - 75 + contentSpacing
      );

      doc.setFont("Helvetica", "bold");

      const monthlySIP = `Rs ${monthlyInvestment.toLocaleString()}`;
      const totalAmt = `Rs ${new Intl.NumberFormat("en-IN").format(
        Math.round(totalValue)
      )}`;
      const timeStr = `${timePeriod} years`;
      const rateStr = `${expectedReturnRate}%`;

      let x = 20;
      let y = 24;
      const maxWidth = 300;
      const lineHeight = 6;

      function drawText(text, style = "normal", color = [0, 0, 0]) {
        if (style === "bold") {
          doc.setFont("Helvetica", "bold");
        } else {
          doc.setFont("Helvetica", "normal");
        }
        doc.setFontSize(12);
        doc.setTextColor(...color);

        const fullText = Array.isArray(text) ? text.join(" ") : text;
        const words = fullText.split(" ");
        words.forEach((word) => {
          const wordWidth = doc.getTextWidth(word + " ");
          if (x + wordWidth > maxWidth) {
            x = 20;
            y += lineHeight;
          }
          doc.text(word + " ", x, y);
          x += wordWidth;
        });
      }

      drawText("A Monthly Setup SIP of ");
      drawText(monthlySIP, "bold", [1, 67, 162]);
      drawText(" over ");
      drawText(timeStr, "bold", [1, 67, 162]);
      drawText(" at an expected return rate of ");
      drawText(rateStr, "bold", [1, 67, 162]);
      drawText(" will give you a total amount of ");
      drawText(totalAmt, "bold", [1, 67, 162]);
      const body = [];
      let currentMonthlyInvestment = monthlyInvestment;
      for (let year = 1; year <= timePeriod; year++) {
        const investedTillYear = currentMonthlyInvestment * 12 * year;
        const marketValue = (() => {
          let total = 0;
          for (let m = 0; m < year * 12; m++) {
            const monthsRemaining = timePeriod * 12 - m;
            const monthlyRate = expectedReturnRate / 100 / 12;
            total +=
              currentMonthlyInvestment *
              Math.pow(1 + monthlyRate, monthsRemaining);
          }
          return total;
        })();
        const gain = marketValue - investedTillYear;

        body.push([
          year.toString(),
          investedTillYear.toLocaleString("en-IN"),
          Math.round(gain).toLocaleString("en-IN"),
          Math.round(marketValue).toLocaleString("en-IN"),
        ]);

        currentMonthlyInvestment +=
          (currentMonthlyInvestment * costOfDelay) / 100;
      }

      autoTable(doc, {
        startY: pageHeight - 30,
        head: [["Year", "Investment ", "Gain ", "Market Value "]],
        body: body,
        theme: "grid",
        styles: {
          fontSize: 10,
          halign: "center",
        },
        headStyles: {
          fillColor: [1, 67, 162],
          textColor: [255, 255, 255],
          fontStyle: "bold",
        },
        columnStyles: {
          0: { cellWidth: 50 },
          1: { cellWidth: 75 },
          2: { cellWidth: 75 },
          3: { cellWidth: 75 },
        },
      });

      doc.save("Setup_Dealy_Calculator.pdf");
    });
  };
  return (
    <div className="bg-white p-6 drop-shadow-lg rounded flex flex-wrap gap-5 items-center">
      {/* <div className="ml-auto flex items-center gap-2 no-print">
        <FaFilePdf
          className="text-3xl cursor-pointer"
          style={{ color: "#0143a2" }}
          title="Download PDF"
          onClick={handleDownloadPDF}
        />
      </div> */}
      <div
        ref={calculatorRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full"
      >
        <div className="w-full lg:max-w-[500px]">
          <form className="space-y-6 mt-8">
            <div className="flex flex-col gap-6">
              <div>
                <label className="block text-gray-500 text-[13px] font-medium mb-2">
                  Monthly Investment (₹)
                </label>
                <div className="relative mb-2">
                  <input
                    id="invested-amount-slider"
                    type="range"
                    min="1000"
                    max="1000000"
                    value={monthlyInvestment}
                    onChange={(e) =>
                      setMonthlyInvestment(Number(e.target.value))
                    }
                    onMouseEnter={() => setShowTooltipMonthlyInvestment(true)}
                    onMouseLeave={() => setShowTooltipMonthlyInvestment(false)}
                    className="w-full h-1 rounded appearance-none cursor-pointer text-[12px]"
                    style={{
                      background: `linear-gradient(to right, #0143a2 ${
                        ((monthlyInvestment - 1000) / (1000000 - 1000)) * 100
                      }%, #E5E7EB ${
                        ((monthlyInvestment - 1000) / (1000000 - 1000)) * 100
                      }%)`,
                    }}
                  />
                  {showTooltipMonthlyInvestment && (
                    <div
                      className="absolute -top-8 bg-gray-700 text-white text-xs rounded px-2 py-1"
                      style={{
                        left: `${
                          ((monthlyInvestment - 1000) / (1000000 - 1000)) * 100
                        }%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      ₹{monthlyInvestment.toLocaleString("en-IN")}
                    </div>
                  )}
                </div>
                <input
                  value={monthlyInvestment}
                  type="number"
                  onChange={(e) =>
                    setMonthlyInvestment(Math.max(100, Number(e.target.value)))
                  }
                  className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
                  placeholder="₹25,000"
                />
              </div>

              <div>
                <label
                  htmlFor="expected-return-rate"
                  className="block text-gray-500 text-sm font-medium mb-2"
                >
                  Expected Return Rate (% p.a.)
                </label>
                <div className="relative mb-2">
                  <input
                    id="returns-slider"
                    type="range"
                    min="1"
                    max="30"
                    value={expectedReturnRate}
                    onChange={(e) =>
                      setExpectedReturnRate(Number(e.target.value))
                    }
                    onMouseEnter={() => setShowTooltipExpectedReturnRate(true)}
                    onMouseLeave={() => setShowTooltipExpectedReturnRate(false)}
                    className="w-full h-1 rounded appearance-none cursor-pointer text-[12px]"
                    style={{
                      background: `linear-gradient(to right, #0143a2 ${
                        (expectedReturnRate / 30) * 100
                      }%, #E5E7EB ${(expectedReturnRate / 30) * 100}%)`,
                    }}
                  />
                  {showTooltipExpectedReturnRate && (
                    <div
                      className="absolute -top-8 bg-gray-700 text-white text-xs rounded px-2 py-1"
                      style={{
                        left: `${(expectedReturnRate / 30) * 100}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      {expectedReturnRate}%
                    </div>
                  )}
                </div>
                <input
                  value={expectedReturnRate === 0 ? "" : expectedReturnRate}
                  type="number"
                  min="1"
                  max="30"
                  onChange={(e) => {
                    const newValue =
                      e.target.value === "" ? 0 : Number(e.target.value);
                    if (newValue <= 30) {
                      setExpectedReturnRate(newValue);
                    }
                  }}
                  className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
                  placeholder="12%"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-[13px] font-medium mb-2">
                  Time Period (Years)
                </label>
                <div className="relative mb-2">
                  <input
                    id="time-period-slider"
                    type="range"
                    min="1"
                    max="40"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    onMouseEnter={() => setShowTooltipTimePeriod(true)}
                    onMouseLeave={() => setShowTooltipTimePeriod(false)}
                    className="w-full h-1 rounded appearance-none cursor-pointer text-[12px]"
                    style={{
                      background: `linear-gradient(to right, #0143a2 ${
                        ((timePeriod - 1) / (40 - 1)) * 100
                      }%, #E5E7EB ${((timePeriod - 1) / (40 - 1)) * 100}%)`,
                    }}
                  />
                  {showTooltipTimePeriod && (
                    <div
                      className="absolute -top-8 bg-gray-700 text-white text-xs rounded px-2 py-1"
                      style={{
                        left: `${((timePeriod - 1) / (40 - 1)) * 100}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      {timePeriod} Years
                    </div>
                  )}
                </div>
                <input
                  value={timePeriod}
                  id="time-period"
                  type="number"
                  min="1"
                  max="40"
                  onChange={(e) =>
                    setTimePeriod(
                      Math.max(1, Math.min(40, Number(e.target.value)))
                    )
                  }
                  className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
                  placeholder="10"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-500 text-sm font-medium mb-2">
                SIP Delay (Months)
              </label>

              <div className="relative">
                <input
                  id="delay-slider"
                  type="range"
                  min="0"
                  max="60"
                  value={delayInMonths}
                  onChange={(e) => setDelayInMonths(Number(e.target.value))}
                  onMouseEnter={() => setShowTooltipDelayMonth(true)}
                  onMouseLeave={() => setShowTooltipDelayMonth(false)}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #0143a2 ${
                      (delayInMonths / 60) * 100
                    }%, #E5E7EB ${(delayInMonths / 60) * 100}%)`,
                  }}
                />
                {showTooltipDelayMonth && (
                  <div
                    className="absolute -top-8 bg-gray-700 text-white text-xs rounded px-2 py-1"
                    style={{
                      left: `${(delayInMonths / 60) * 100}%`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    {delayInMonths} months
                  </div>
                )}
              </div>

              <input
                type="number"
                value={delayInMonths}
                min="0"
                max="60"
                onChange={(e) => {
                  const value = Math.max(
                    0,
                    Math.min(60, Number(e.target.value))
                  );
                  setDelayInMonths(value);
                }}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                placeholder="Delay in months"
              />
            </div>
          </form>
        </div>
        <div className="w-full lg:max-w-[400px] mx-auto lg:mt-0 mt-12">
          <div className="flex justify-center relative h-72">
            <svg
              className="w-72 h-72 drop-shadow-md"
              viewBox="0 0 110 110"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="55"
                cy="55"
                r="45"
                stroke="#0143A2"
                strokeWidth="15"
                fill="none"
                strokeDasharray={circumference}
                className="transition-all duration-500 bg-white"
                strokeLinecap="round"
              />
              <circle
                cx="55"
                cy="55"
                r="45"
                stroke="#E21c1c"
                strokeWidth="15"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={investedAmountOffset}
                className="transition-all duration-500 bg-white"
              />
            </svg>
          </div>
          <div className="w-full flex gap-8 justify-center lg:justify-center mt-8">
            <div className="flex justify-center items-center gap-1">
              <div className="w-3 bg-[#E21c1c] border h-3"></div>
              <p className="text-gray-400 text-sm">Invested Amount</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <div className="w-3 bg-[#0143a2] h-3"></div>
              <p className="text-gray-400 text-sm">Returns</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-28">
          <div className="flex text-[#E21c1c] text-[16px] space-x-1 font-bold">
            <span> Total Amount Invested : ₹ </span>
            {new Intl.NumberFormat("en-IN").format(Math.round(investedAmount))}
          </div>
          <div className="flex text-green-600 text-[18px] space-x-1 font-semibold">
            <span> Future Value without Delay : ₹ </span>
            {new Intl.NumberFormat("en-IN").format(
              Math.round(futureValueWithoutDelay)
            )}
          </div>
          <div className="flex text-green-700 text-[20px] space-x-1 font-semibold">
            <span>Cost of Delay in Future Value : ₹ </span>
            {new Intl.NumberFormat("en-IN").format(Math.round(costOfDelay))}
          </div>
          <div className="flex text-[#0143a2] text-[22px] font-bold">
            <span> Future Value after Delay : ₹ </span>
            {new Intl.NumberFormat("en-IN").format(Math.round(totalValue))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SipCalculator;
