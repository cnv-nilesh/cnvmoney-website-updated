"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaFilePdf } from "react-icons/fa";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import autoTable from "jspdf-autotable";
const SipCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const calculatorRef = useRef(null);

  const [timePeriod, setTimePeriod] = useState(15);
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const [showTooltipMonthlyInvestment, setShowTooltipMonthlyInvestment] =
    useState(false);
  const [showTooltipExpectedReturnRate, setShowTooltipExpectedReturnRate] =
    useState(false);
  const [showTooltipTimePeriod, setShowTooltipTimePeriod] = useState(false);

  const calculateSip = () => {
    const totalMonths = timePeriod * 12;
    const monthlyRate = expectedReturnRate / 100 / 12;

    const investedAmount = monthlyInvestment * totalMonths;
    const futureValue =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
      (1 + monthlyRate);

    const returns = futureValue - investedAmount;

    setInvestedAmount(investedAmount);
    setEstimatedReturns(returns);
    setTotalValue(futureValue);
  };

  useEffect(() => {
    calculateSip();
  }, [monthlyInvestment, expectedReturnRate, timePeriod]);

  const totalAmount = investedAmount + estimatedReturns;
  const investedAmountPercentage =
    totalAmount > 0 ? (investedAmount / totalAmount) * 100 : 0;
  const estimatedReturnsPercentage =
    totalAmount > 0 ? (estimatedReturns / totalAmount) * 100 : 0;

  const circumference = 2 * Math.PI * 45;
  const investedAmountOffset =
    circumference * (1 - investedAmountPercentage / 100);
  const estimatedReturnsOffset =
    circumference * (1 - estimatedReturnsPercentage / 100);

  const calculateSIPValue = (monthlyInvestment, annualReturnRate, years) => {
    const months = years * 12;
    const monthlyRate = annualReturnRate / 100 / 12;

    let futureValue = 0;
    for (let i = 0; i < months; i++) {
      futureValue += monthlyInvestment * Math.pow(1 + monthlyRate, months - i);
    }
    return futureValue;
  };

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
    ])
      .then(([canvas, logoBase64]) => {
        const imgData = canvas.toDataURL("image/png");
        doc.addImage(imgData, "PNG", 20, 30, 320, 100);

        const pageHeight = 180;
        const pageWidth = 297;
        const contentSpacing = 7;
        const labelFontSize = 13;
        const valueFontSize = 12;
        const maxTextWidth = 70;

        const wrapText = (text, width) => doc.splitTextToSize(text, width);

        const text = "SIP Summary";
        const xPos = 20;
        const yPos = 12;

        doc.setFontSize(14);
        doc.setTextColor(1, 67, 162);
        doc.setFont("Helvetica", "bold");
        doc.text(text, xPos, yPos);

        const imgWidth = 40;
        const imgHeight = 10;
        const imgX = pageWidth - imgWidth - 20;
        const imgY = yPos - imgHeight + 2;
        doc.addImage(logoBase64, "PNG", imgX, imgY, imgWidth, imgHeight);

        const headerBottomY = yPos + 5;
        doc.setDrawColor(1, 67, 162);
        doc.setLineWidth(0.5);
        doc.line(10, headerBottomY, 287, headerBottomY);

        doc.setFontSize(12);
        doc.setTextColor(107, 114, 128);
        doc.text("Invested Amount", 155, 120);
        doc.text("Returns", 199, 120);

        doc.setFontSize(labelFontSize);
        doc.setFont("Helvetica", "bold");
        doc.setTextColor(80, 80, 80);
        doc.text("Monthly Investment:", 20, 45);

        doc.setFontSize(valueFontSize);
        doc.setFont("Helvetica", "normal");
        doc.setTextColor(1, 67, 162);
        doc.text(
          wrapText(monthlyInvestment.toLocaleString("en-IN"), maxTextWidth),
          23,
          54 + contentSpacing
        );

        doc.setFontSize(labelFontSize);
        doc.setFont("Helvetica", "bold");
        doc.setTextColor(80, 80, 80);
        doc.text("Expected Return Rate:", 20, 78);

        doc.setFontSize(valueFontSize);
        doc.setFont("Helvetica", "normal");
        doc.setTextColor(1, 67, 162);
        doc.text(
          wrapText(`${expectedReturnRate}%`, maxTextWidth),
          22,
          87 + contentSpacing
        );

        doc.setFontSize(labelFontSize);
        doc.setFont("Helvetica", "bold");
        doc.setTextColor(80, 80, 80);
        doc.text("Gain:", pageWidth - 65, 60);

        doc.setFontSize(valueFontSize);
        doc.setFont("Helvetica", "normal");
        doc.setTextColor(1, 67, 162);
        doc.text(
          wrapText(
            "Rs " +
              new Intl.NumberFormat("en-IN").format(
                Math.round(estimatedReturns)
              ),
            maxTextWidth
          ),
          pageWidth - 65,
          60 + contentSpacing
        );

        doc.setFontSize(labelFontSize);
        doc.setFont("Helvetica", "bold");
        doc.setTextColor(80, 80, 80);
        doc.text("Investment:", pageWidth - 65, pageHeight - 100);

        doc.setFontSize(valueFontSize);
        doc.setFont("Helvetica", "normal");
        doc.setTextColor(1, 67, 162);
        doc.text(
          wrapText(
            "Rs " +
              new Intl.NumberFormat("en-IN").format(Math.round(investedAmount)),
            maxTextWidth
          ),
          pageWidth - 65,
          pageHeight - 100 + contentSpacing
        );

        doc.setFontSize(labelFontSize);
        doc.setFont("Helvetica", "bold");
        doc.setTextColor(80, 80, 80);
        doc.text("Time Period:", 20, 110);

        doc.setFontSize(valueFontSize);
        doc.setFont("Helvetica", "normal");
        doc.setTextColor(1, 67, 162);
        doc.text(
          wrapText(`${timePeriod} Years`, maxTextWidth),
          23,
          120 + contentSpacing
        );

        doc.setFontSize(labelFontSize);
        doc.setFont("Helvetica", "bold");
        doc.setTextColor(80, 80, 80);
        doc.text("Market Value:", pageWidth - 65, pageHeight - 80);

        doc.setFontSize(16);
        doc.setFont("Helvetica", "bold");
        doc.setTextColor(150, 0, 16);
        doc.text(
          wrapText(
            "Rs " +
              new Intl.NumberFormat("en-IN").format(Math.round(totalValue)),
            maxTextWidth
          ),
          pageWidth - 65,
          pageHeight - 80 + contentSpacing
        );
        const monthlySIP = `Rs ${monthlyInvestment.toLocaleString()}`;
        const totalAmt = `Rs ${new Intl.NumberFormat("en-IN").format(
          Math.round(totalValue)
        )}`;
        const timeStr = `${timePeriod} years`;
        const rateStr = `${expectedReturnRate}%`;

        let x = 20;
        let y = 24;

        doc.setFontSize(12);
        doc.setCharSpace(0);
        doc.setFontSize(10);

        doc.setFont("Helvetica", "normal");
        doc.setTextColor(0, 0, 0);
        doc.text("A monthly SIP of ", x, y);
        x += doc.getTextWidth("A monthly SIP of ");

        doc.setFontSize(12);
        doc.setFont("Helvetica", "bold");
        doc.setTextColor(1, 67, 162);
        doc.text(monthlySIP, x, y);
        x += doc.getTextWidth(monthlySIP);
        const spaceBetweenText = 1;
        x += spaceBetweenText;

        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");
        doc.setTextColor(0, 0, 0);
        doc.text(" over ", x, y);
        x += doc.getTextWidth(" over ");

        doc.setFontSize(12);
        doc.setFont("Helvetica", "bold");
        doc.setTextColor(1, 67, 162);
        doc.text(timeStr, x, y);
        x += doc.getTextWidth(timeStr);

        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");
        doc.setTextColor(0, 0, 0);
        doc.text(" at an expected return rate of ", x, y);
        x += doc.getTextWidth(" at an expected return rate of ");

        doc.setFontSize(12);
        doc.setFont("Helvetica", "bold");
        doc.setTextColor(1, 67, 162);
        doc.text(rateStr, x, y);
        x += doc.getTextWidth(rateStr);

        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");
        doc.setTextColor(0, 0, 0);
        doc.text(" will give you a total amount of ", x, y);
        x += doc.getTextWidth(" will give you a total amount of ");
        doc.setFontSize(12);

        doc.setFont("Helvetica", "bold");
        doc.setTextColor(1, 67, 162);
        doc.text(totalAmt, x, y);

        doc.setCharSpace(0);

        const body = [];
        for (let year = 1; year <= timePeriod; year++) {
          const totalInvestment = monthlyInvestment * 12 * year;
          const marketValue = calculateSIPValue(
            monthlyInvestment,
            expectedReturnRate,
            year
          );
          const gain = marketValue - totalInvestment;

          body.push([
            year.toString(),
            totalInvestment.toLocaleString("en-IN"),
            Math.round(gain).toLocaleString("en-IN"),
            Math.round(marketValue).toLocaleString("en-IN"),
          ]);
        }

        autoTable(doc, {
          startY: pageHeight - 30,
          head: [["Year", "Investment Rs", "Gain Rs", "Market Value Rs"]],
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
        });

        doc.save("SIP Summary.pdf");
      })
      .catch((error) => {
        console.error("Failed to generate PDF:", error);
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
                  Monthly Investment
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
                  value={monthlyInvestment === 0 ? "" : monthlyInvestment}
                  id="monthly-investment"
                  type="number"
                  onChange={(e) => {
                    const newValue =
                      e.target.value === "" ? 0 : Number(e.target.value);
                    setMonthlyInvestment(newValue);
                  }}
                  className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
                  placeholder="10000"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-[13px] font-medium mb-2">
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
                />
              </div>

              <div>
                <label className="block text-gray-500 text-[14px] font-medium mb-2">
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
                  id="time-period"
                  type="number"
                  value={timePeriod}
                  min="1"
                  max="40"
                  onChange={(e) => {
                    const value = Math.max(
                      1,
                      Math.min(40, Number(e.target.value))
                    );
                    setTimePeriod(value || 0);
                  }}
                  className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
                  placeholder="10"
                />
              </div>
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

        <div className="space-y-1 text-center mt-8 lg:mt-28">
          <div className="flex text-[#E21c1c] text-[16px] font-bold space-x-1">
            <span>Invested Amount : </span>
            <span>
              ₹{" "}
              {new Intl.NumberFormat("en-IN").format(
                Math.round(investedAmount)
              )}
            </span>
          </div>
          <div className="flex text-green-700 text-[20px] space-x-1 font-semibold">
            <span>Returns : </span>
            <span>
              ₹{" "}
              {new Intl.NumberFormat("en-IN").format(
                Math.round(estimatedReturns)
              )}
            </span>
          </div>
          <div className="flex text-[#0143a2] text-[22px] font-semibold">
            <span>Total Value : </span>
            <span>
              ₹ {new Intl.NumberFormat("en-IN").format(Math.round(totalValue))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SipCalculator;
