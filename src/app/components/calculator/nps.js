"use client";
import React, { useState, useEffect, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { FaFilePdf } from "react-icons/fa";
import autoTable from "jspdf-autotable";

const NpsCalculator = () => {
  const [monthlyContribution, setMonthlyContribution] = useState(100000);
  const [currentAge, setCurrentAge] = useState(30);
  const [expectedReturn, setExpectedReturn] = useState(8);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [maturityAmount, setMaturityAmount] = useState(0);
  const [interestEarned, setInterestEarned] = useState(0);
  const [minimumAnnuityInvestment, setMinimumAnnuityInvestment] = useState(0);
  const [showTooltipMonthlyInvestment, setShowTooltipMonthlyInvestment] =
    useState(false);
  const [showTooltipExpectedReturnRate, setShowTooltipExpectedReturnRate] =
    useState(false);
  const [showTooltipTimePeriod, setShowTooltipTimePeriod] = useState(false);
  const [circumference, setCircumference] = useState(0);
  const [investedAmountOffset, setInvestedAmountOffset] = useState(0);
  const calculatorRef = useRef(null);

  useEffect(() => {
    const retirementAge = 60;
    const yearsToInvest = retirementAge - currentAge;
    const monthsToInvest = yearsToInvest * 12;

    const totalInvestmentValue = monthlyContribution * monthsToInvest;
    setTotalInvestment(totalInvestmentValue);

    const monthlyRate = expectedReturn / 100 / 12;
    const maturityValue =
      monthlyContribution *
      ((Math.pow(1 + monthlyRate, monthsToInvest) - 1) / monthlyRate);
    setMaturityAmount(maturityValue);

    const totalInterestEarned = maturityValue - totalInvestmentValue;
    setInterestEarned(totalInterestEarned);

    const minAnnuityInvestment = maturityValue * 0.4;
    setMinimumAnnuityInvestment(minAnnuityInvestment);

    const radius = 45;
    const circumferenceValue = 2 * Math.PI * radius;
    setCircumference(circumferenceValue);

    const investedAmountRatio = totalInvestmentValue / maturityValue;
    const investedOffset = circumferenceValue * (1 - investedAmountRatio);
    setInvestedAmountOffset(investedOffset);
  }, [monthlyContribution, currentAge, expectedReturn]);

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
      const pageWidth = 297;
      const pageHeight = 180;
      const contentSpacing = 7;
      const maxTextWidth = 70;

      doc.addImage(imgData, "PNG", 20, 30, 320, 100);
      doc.setFontSize(14);
      doc.setTextColor(1, 67, 162);
      doc.setFont("Helvetica", "bold");
      doc.text("NPS Summary", 20, 12);
      doc.addImage(logoBase64, "PNG", pageWidth - 60, 2, 40, 10);

      doc.setDrawColor(1, 67, 162);
      doc.setLineWidth(0.5);
      doc.line(10, 17, 287, 17);

      doc.setFontSize(12);
      doc.setTextColor(107, 114, 128);
      doc.text("Invested Amount", 155, 125);
      doc.text("Returns", 199, 125);
      const wrapText = (text, width) => doc.splitTextToSize(text, width);

      doc.setFontSize(13);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text("Monthly Investment:", 20, 45);
      doc.setFontSize(12);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(
          `Rs ${monthlyContribution.toLocaleString("en-IN")}`,
          maxTextWidth
        ),
        23,
        54 + contentSpacing
      );

      doc.setFontSize(13);
      doc.setTextColor(107, 114, 128);
      doc.text("Interest Earned", 23, 78);
      doc.setFontSize(12);
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(`${expectedReturn}%`, maxTextWidth),
        22,
        87 + contentSpacing
      );

      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text("Maturity Amount", pageWidth - 65, 60);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(
          `Rs ${Math.round(maturityAmount).toLocaleString("en-IN")}`,
          maxTextWidth
        ),
        pageWidth - 65,
        60 + contentSpacing
      );

      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text("Total Investment ", pageWidth - 65, pageHeight - 105);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(
          `Rs ${Math.round(totalInvestment).toLocaleString("en-IN")}`,
          maxTextWidth
        ),
        pageWidth - 65,
        pageHeight - 105 + contentSpacing
      );

      doc.setTextColor(107, 114, 128);
      doc.text("Current Age", 20, 110);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(currentAge.toString(), maxTextWidth),
        23,
        120 + contentSpacing
      );

      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text("Interest Earned ", pageWidth - 65, pageHeight - 90);
      doc.setFontSize(14);
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(
          `Rs ${Math.round(expectedReturn).toLocaleString("en-IN")}`,
          maxTextWidth
        ),
        pageWidth - 65,
        pageHeight - 90 + contentSpacing
      );

      doc.setTextColor(80, 80, 80);
      doc.text("Total Value  ", pageWidth - 65, pageHeight - 75);
      doc.setFontSize(14);
      doc.setTextColor(150, 0, 16);
      doc.text(
        wrapText(
          `Rs ${Math.round(minimumAnnuityInvestment).toLocaleString("en-IN")}`,
          maxTextWidth
        ),
        pageWidth - 65,
        pageHeight - 75 + contentSpacing
      );

      const monthlySIP = `Rs ${monthlyContribution.toLocaleString("en-IN")}`;
      const totalAmt = `Rs ${Math.round(
        minimumAnnuityInvestment
      ).toLocaleString("en-IN")}`;
      const timeStr = `${currentAge} Current Age`;
      const rateStr = `${expectedReturn}%`;

      let x = 20;
      let y = 24;
      const maxWidth = 300;
      const lineHeight = 6;

      function drawText(text, style = "normal", color = [0, 0, 0]) {
        doc.setFont("Helvetica", style === "bold" ? "bold" : "normal");
        doc.setFontSize(12);
        doc.setTextColor(...color);

        const words = text.split(" ");
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

      drawText("A monthly NPS of ");
      drawText(monthlySIP, "bold", [1, 67, 162]);
      drawText(" over ");
      drawText(timeStr, "bold", [1, 67, 162]);
      drawText(" at an expected return rate of ");
      drawText(rateStr, "bold", [1, 67, 162]);
      drawText(" will give you a total amount of ");
      drawText(totalAmt, "bold", [1, 67, 162]);

      const tableBody = [];
      for (let year = 1; year <= 10; year++) {
        const invested = monthlyContribution * 12 * year;
        const marketValue = calculateMaturity(
          monthlyContribution * 12,
          expectedReturn / 100,
          year
        );
        const gain = marketValue - invested;

        tableBody.push([
          year.toString(),
          invested.toLocaleString("en-IN"),
          Math.round(gain).toLocaleString("en-IN"),
          Math.round(marketValue).toLocaleString("en-IN"),
        ]);
      }

      autoTable(doc, {
        startY: pageHeight - 30,
        head: [["Year", "Investment Rs", "Gain Rs", "Market Value Rs"]],
        body: tableBody,
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

      doc.save("NPS_Calculator.pdf");
    });
  };

  return (
    <div className="bg-white p-6 drop-shadow-lg rounded flex flex-col items-center">
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
        <form className="space-y-4 mt-8">
          <div>
            <label className="block text-gray-500 text-[13px] font-medium mb-2">
              Monthly Contribution (₹)
            </label>
            <div className="relative mb-2">
              <input
                id="invested-amount-slider"
                type="range"
                min="500"
                max="1000000"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                onMouseEnter={() => setShowTooltipMonthlyInvestment(true)}
                onMouseLeave={() => setShowTooltipMonthlyInvestment(false)}
                className="w-full h-1 rounded appearance-none cursor-pointer text-[12px]"
                style={{
                  background: `linear-gradient(to right, #0143a2 ${
                    ((monthlyContribution - 1000) / (1000000 - 1000)) * 100
                  }%, #E5E7EB ${
                    ((monthlyContribution - 1000) / (1000000 - 1000)) * 100
                  }%)`,
                }}
              />
              {showTooltipMonthlyInvestment && (
                <div
                  className="absolute -top-8 bg-gray-700 text-white text-xs rounded px-2 py-1"
                  style={{
                    left: `${
                      ((monthlyContribution - 1000) / (1000000 - 1000)) * 100
                    }%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  ₹{monthlyContribution.toLocaleString("en-IN")}
                </div>
              )}
            </div>
            <input
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
            />
          </div>
          <div>
            <label className="block text-gray-500">Current Age</label>
            <div className="relative mb-2">
              <input
                id="time-period-slider"
                type="range"
                min="18"
                max="60"
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                onMouseEnter={() => setShowTooltipTimePeriod(true)}
                onMouseLeave={() => setShowTooltipTimePeriod(false)}
                className="w-full h-1 rounded appearance-none cursor-pointer text-[12px]"
                style={{
                  background: `linear-gradient(to right, #0143a2 ${
                    ((currentAge - 18) / (60 - 18)) * 100
                  }%, #E5E7EB ${((currentAge - 18) / (60 - 18)) * 100}%)`,
                }}
              />
              {showTooltipTimePeriod && (
                <div
                  className="absolute -top-8 bg-gray-700 text-white text-xs rounded px-2 py-1"
                  style={{
                    left: `${((currentAge - 18) / (60 - 18)) * 100}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  {currentAge} Years
                </div>
              )}
            </div>
            <input
              value={currentAge}
              onChange={(e) =>
                setCurrentAge(Math.min(Math.max(Number(e.target.value), 1), 60))
              }
              className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
              min="18"
              max="60"
            />
          </div>

          <div>
            <label className="block text-gray-500 text-[13px] font-medium mb-2">
              Expected Rate of Return (%)
            </label>
            <div className="relative mb-2">
              <input
                id="returns-slider"
                type="range"
                min="1"
                max="30"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                onMouseEnter={() => setShowTooltipExpectedReturnRate(true)}
                onMouseLeave={() => setShowTooltipExpectedReturnRate(false)}
                className="w-full h-1 rounded appearance-none cursor-pointer text-[12px]"
                style={{
                  background: `linear-gradient(to right, #0143a2 ${
                    (expectedReturn / 30) * 100
                  }%, #E5E7EB ${(expectedReturn / 30) * 100}%)`,
                }}
              />
              {showTooltipExpectedReturnRate && (
                <div
                  className="absolute -top-8 bg-gray-700 text-white text-xs rounded px-2 py-1"
                  style={{
                    left: `${(expectedReturn / 30) * 100}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  {expectedReturn}%
                </div>
              )}
            </div>
            <input
              type="number"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
            />
          </div>
        </form>

        {/* Graph Implementation */}
        <div className="w-full lg:max-w-[400px] mx-auto lg:mt-0 mt-12">
          <div className="flex justify-center relative h-72">
            <svg
              className="w-72 h-72 drop-shadow-md"
              viewBox="0 0 110 110"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer circle for Returns */}
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

        <div className="space-y-1  mt-8 lg:mt-28">
          <div className="flex text-[#E21c1c] text-[16px] font-bold space-x-1">
            <span>Total Investment : </span>
            <span>
              ₹{" "}
              {new Intl.NumberFormat("en-IN").format(
                Math.round(totalInvestment)
              )}
            </span>
          </div>
          <div className="flex text-green-700 text-[20px] space-x-1 font-semibold">
            <span>Interest Earned : </span>
            <span>
              ₹{" "}
              {new Intl.NumberFormat("en-IN").format(
                Math.round(expectedReturn)
              )}
            </span>
          </div>
          <div className="flex text-green-700 text-[24px] space-x-1 font-semibold">
            <span>Maturity Amount : </span>
            <span>
              ₹{" "}
              {new Intl.NumberFormat("en-IN").format(
                Math.round(maturityAmount)
              )}
            </span>
          </div>
          <div className="flex text-[#0143a2] text-[27px] font-semibold">
            <span>Total Value : </span>
            <span>
              ₹{" "}
              {new Intl.NumberFormat("en-IN").format(
                Math.round(minimumAnnuityInvestment)
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NpsCalculator;
