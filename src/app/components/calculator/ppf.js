"use client";
import React, { useState, useEffect, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { FaFilePdf } from "react-icons/fa";
import autoTable from "jspdf-autotable";

const PpfCalculator = () => {
  const [annualInvestment, setAnnualInvestment] = useState(100000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [years, setYears] = useState(15);
  const [maturityAmount, setMaturityAmount] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [showTooltipMonthlyInvestment, setShowTooltipMonthlyInvestment] =
    useState(false);
  const [showTooltipExpectedReturnRate, setShowTooltipExpectedReturnRate] =
    useState(false);
  const [showTooltipTimePeriod, setShowTooltipTimePeriod] = useState(false);
  const calculatorRef = useRef(null);

  const calculateMaturity = () => {
    const P = annualInvestment;
    const i = interestRate / 100;
    const n = years;

    const maturity = P * (((Math.pow(1 + i, n) - 1) / i) * (1 + i));

    setMaturityAmount(maturity);
    setTotalInvested(P * n);
    setEstimatedReturns(maturity - P * n);
  };

  useEffect(() => {
    calculateMaturity();
  }, [annualInvestment, interestRate, years]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const totalAmount = totalInvested + estimatedReturns;
  const investedAmountOffset =
    circumference * (1 - totalInvested / totalAmount);
  const returnsOffset = circumference * (1 - estimatedReturns / totalAmount);
  const handleDownloadPDF = () => {
    const doc = new jsPDF("landscape");
    doc.setFont("Helvetica");

    const logoUrl =
      "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.397b7043.png&w=256&q=75";

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

    const calculateMaturity = (annualInvestment, rate, years) => {
      let maturity = 0;
      for (let i = 1; i <= years; i++) {
        maturity += annualInvestment * Math.pow(1 + rate, years - i + 1);
      }
      return maturity;
    };

    const removeUnsupportedColors = (element) => {
      const elements = element.querySelectorAll("*");
      elements.forEach((el) => {
        const computedStyle = getComputedStyle(el);
        ["color", "backgroundColor", "borderColor"].forEach((prop) => {
          const val = computedStyle[prop];
          if (val && val.includes("oklch")) {
            console.log("pdf generate");
            el.style[prop] = "#000"; // Replace with any fallback color
          }
        });
      });
    };

    removeUnsupportedColors(calculatorRef.current);
    Promise.all([
      html2canvas(calculatorRef.current),
      loadImageAsBase64(logoUrl),
    ]).then(([canvas, logoBase64]) => {
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "PNG", 20, 30, 320, 100);

      doc.setFontSize(12);
      doc.setTextColor(107, 114, 128);
      doc.text("Invested Amount", 155, 120);
      doc.text("Returns", 199, 120);

      const pageHeight = 180;
      const pageWidth = 297;
      const contentSpacing = 7;
      const labelFontSize = 13;
      const valueFontSize = 12;
      const maxTextWidth = 70;

      const wrapText = (text, width) => doc.splitTextToSize(text, width);

      doc.setFontSize(14);
      doc.setTextColor(1, 67, 162);
      doc.setFont("Helvetica", "bold");
      doc.text("PPF Summary", 20, 12);

      doc.addImage(logoBase64, "PNG", pageWidth - 60, 2, 40, 10);
      doc.setDrawColor(1, 67, 162);
      doc.setLineWidth(0.5);
      doc.line(10, 17, 287, 17);

      doc.setFontSize(labelFontSize);
      doc.setTextColor(80, 80, 80);
      doc.text("Monthly Investment:", 20, 45);
      doc.setFontSize(valueFontSize);
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText("Rs" + annualInvestment.toLocaleString("en-IN"), maxTextWidth),
        23,
        54 + contentSpacing
      );

      doc.setFontSize(labelFontSize);
      doc.setTextColor(107, 114, 128);
      doc.text("Expected Return Rate:", 23, 78);
      doc.setFontSize(valueFontSize);
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(interestRate + "%", maxTextWidth),
        22,
        87 + contentSpacing
      );

      doc.setFontSize(labelFontSize);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text("Estimated Returns:", pageWidth - 65, 60);
      doc.setFontSize(valueFontSize);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(
          "Rs" +
            new Intl.NumberFormat("en-IN").format(Math.round(estimatedReturns)),
          maxTextWidth
        ),
        pageWidth - 65,
        60 + contentSpacing
      );

      doc.setFontSize(labelFontSize);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text("Invested Amount:", pageWidth - 65, pageHeight - 100);
      doc.setFontSize(valueFontSize);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(
          "Rs" +
            new Intl.NumberFormat("en-IN").format(Math.round(totalInvested)),
          maxTextWidth
        ),
        pageWidth - 65,
        pageHeight - 100 + contentSpacing
      );

      doc.setFontSize(labelFontSize);
      doc.setTextColor(107, 114, 128);
      doc.text("Time Period:", 20, 110);
      doc.setFontSize(valueFontSize);
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(years + " Years", maxTextWidth),
        23,
        120 + contentSpacing
      );

      doc.setFontSize(labelFontSize);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text("Total Value:", pageWidth - 65, pageHeight - 80);
      doc.setFontSize(14);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(150, 0, 16);
      doc.text(
        wrapText(
          "Rs" +
            new Intl.NumberFormat("en-IN").format(Math.round(maturityAmount)),
          maxTextWidth
        ),
        pageWidth - 65,
        pageHeight - 80 + contentSpacing
      );

      const monthlySIP = `Rs ${annualInvestment.toLocaleString()}`;
      const totalAmt = `Rs ${new Intl.NumberFormat("en-IN").format(
        Math.round(maturityAmount)
      )}`;
      const timeStr = `${years} years`;
      const rateStr = `${interestRate}%`;

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

      drawText("A monthly PPF of ");
      drawText(monthlySIP, "bold", [1, 67, 162]);
      drawText(" over ");
      drawText(timeStr, "bold", [1, 67, 162]);
      drawText(" at an expected return rate of ");
      drawText(rateStr, "bold", [1, 67, 162]);
      drawText(" will give you a total amount of ");
      drawText(totalAmt, "bold", [1, 67, 162]);

      const body = [];
      for (let year = 1; year <= years; year++) {
        const totalInvestment = annualInvestment * year;
        const marketValue = calculateMaturity(
          annualInvestment,
          interestRate / 100,
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

      doc.save("PPF_Calculator.pdf");
    });
  };

  return (
    <div className="bg-white p-6 drop-shadow-lg rounded flex flex-wrap gap-5 items-center">
      <div className="ml-auto flex items-center gap-2 no-print">
        <FaFilePdf
          className="text-3xl cursor-pointer"
          style={{ color: "#0143a2" }}
          title="Download PDF"
          onClick={handleDownloadPDF}
        />
      </div>
      <div
        ref={calculatorRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full "
      >
        <div className="flex flex-col gap-6">
          <form className="space-y-6 mt-8">
            <div>
              <label className="block text-gray-500 text-[13px] font-medium mb-2">
                Annual Investment (₹)
              </label>
              <div className="relative mb-2">
                <input
                  id="invested-amount-slider"
                  type="range"
                  min="1000"
                  max="1000000"
                  value={annualInvestment}
                  onChange={(e) => setAnnualInvestment(Number(e.target.value))}
                  onMouseEnter={() => setShowTooltipMonthlyInvestment(true)}
                  onMouseLeave={() => setShowTooltipMonthlyInvestment(false)}
                  className="w-full h-1 rounded appearance-none cursor-pointer text-[12px]"
                  style={{
                    background: `linear-gradient(to right, #0143a2 ${
                      ((annualInvestment - 1000) / (1000000 - 1000)) * 100
                    }%, #E5E7EB ${
                      ((annualInvestment - 1000) / (1000000 - 1000)) * 100
                    }%)`,
                  }}
                />
                {showTooltipMonthlyInvestment && (
                  <div
                    className="absolute -top-8 bg-gray-700 text-white text-xs rounded px-2 py-1"
                    style={{
                      left: `${
                        ((annualInvestment - 1000) / (1000000 - 1000)) * 100
                      }%`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    ₹{annualInvestment.toLocaleString("en-IN")}
                  </div>
                )}
              </div>

              <input
                type="number"
                value={annualInvestment}
                onChange={(e) => setAnnualInvestment(Number(e.target.value))}
                className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
              />
            </div>

            <div>
              <label className="block text-gray-500 text-[13px] font-medium mb-2">
                Interest Rate (% p.a.)
              </label>
              <div className="relative mb-2">
                <input
                  id="returns-slider"
                  type="range"
                  min="1"
                  max="40"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  onMouseEnter={() => setShowTooltipExpectedReturnRate(true)}
                  onMouseLeave={() => setShowTooltipExpectedReturnRate(false)}
                  className="w-full h-1 rounded appearance-none cursor-pointer text-[12px]"
                  style={{
                    background: `linear-gradient(to right, #0143a2 ${
                      (interestRate / 40) * 100
                    }%, #E5E7EB ${(interestRate / 40) * 100}%)`,
                  }}
                />
                {showTooltipExpectedReturnRate && (
                  <div
                    className="absolute -top-8 bg-gray-700 text-white text-xs rounded px-2 py-1"
                    style={{
                      left: `${(interestRate / 40) * 100}%`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    {interestRate}%
                  </div>
                )}
              </div>
              <input
                type="number"
                value={interestRate}
                onChange={(e) =>
                  setInterestRate(
                    Math.min(Math.max(Number(e.target.value), 1), 40)
                  )
                }
                className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
                min="1"
                max="40"
              />
            </div>

            <div>
              <label className="block text-gray-500 text-[13px] font-medium mb-2">
                Investment Duration (Years)
              </label>

              <div className="relative mb-2">
                <input
                  id="time-period-slider"
                  type="range"
                  min="1"
                  max="40"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  onMouseEnter={() => setShowTooltipTimePeriod(true)}
                  onMouseLeave={() => setShowTooltipTimePeriod(false)}
                  className="w-full h-1 rounded appearance-none cursor-pointer text-[12px]"
                  style={{
                    background: `linear-gradient(to right, #0143a2 ${
                      ((years - 1) / (40 - 1)) * 100
                    }%, #E5E7EB ${((years - 1) / (40 - 1)) * 100}%)`,
                  }}
                />
                {showTooltipTimePeriod && (
                  <div
                    className="absolute -top-8 bg-gray-700 text-white text-xs rounded px-2 py-1"
                    style={{
                      left: `${((years - 1) / (40 - 1)) * 100}%`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    {years} Years
                  </div>
                )}
              </div>
              <input
                type="number"
                value={years}
                onChange={(e) =>
                  setYears(Math.min(Math.max(Number(e.target.value), 1), 40))
                }
                className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
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
                strokeDashoffset={returnsOffset}
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
        <div className="space-y-1 text-center mt-28">
          <div className="flex justify-between text-[#E21c1c] text-[16px] space-x-1 font-bold">
            <span>Invested Amount : </span>
            <span>
              ₹
              {new Intl.NumberFormat("en-IN").format(Math.round(totalInvested))}
            </span>
          </div>
          <div className="flex justify-between text-green-700 font-semibold text-[19px] space-x-1">
            <span>Estimated Returns : </span>
            <span>
              ₹
              {new Intl.NumberFormat("en-IN").format(
                Math.round(estimatedReturns)
              )}
            </span>
          </div>
          <div className="flex justify-between text-[#0143a2] text-[22px] font-bold">
            <span>Total Value : </span>
            <span>
              ₹
              {new Intl.NumberFormat("en-IN").format(
                Math.round(maturityAmount)
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PpfCalculator;
