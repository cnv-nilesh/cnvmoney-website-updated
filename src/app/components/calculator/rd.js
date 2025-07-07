"use client";
import jsPDF from "jspdf";
import React, { useState, useEffect, useRef } from "react";
import { FaFilePdf } from "react-icons/fa";
import html2canvas from "html2canvas";
import autoTable from "jspdf-autotable";
const RdCalculator = () => {
  const calculatorRef = useRef(null);
  const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
  const [tenure, setTenure] = useState(5);
  const [tenureType, setTenureType] = useState("years");
  const [interestRate, setInterestRate] = useState(10);
  const [maturityAmount, setMaturityAmount] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);

  const [showTooltipMonthlyInvestment, setShowTooltipMonthlyInvestment] =
    useState(false);
  const [showTooltipExpectedReturnRate, setShowTooltipExpectedReturnRate] =
    useState(false);
  const [showTooltipTimePeriod, setShowTooltipTimePeriod] = useState(false);

  const circumference = 2 * Math.PI * 45;

  const calculateMaturity = () => {
    const P = monthlyDeposit;
    const R = interestRate / 100;
    const N = 4;

    let totalMonths;
    switch (tenureType) {
      case "years":
        totalMonths = tenure * 12;
        break;
      case "months":
        totalMonths = tenure;
        break;
      case "half-year":
        totalMonths = tenure * 6;
        break;
      case "quarter":
        totalMonths = tenure * 3;
        break;
      default:
        totalMonths = tenure * 12;
    }

    const totalInvestedValue = P * totalMonths;
    setTotalInvested(totalInvestedValue);

    let totalMaturity = 0;
    for (let i = 0; i < totalMonths; i++) {
      totalMaturity += P * Math.pow(1 + R / N, N * ((totalMonths - i) / 12));
    }

    setMaturityAmount(totalMaturity);
    setEstimatedReturns(totalMaturity - totalInvestedValue);
  };

  useEffect(() => {
    calculateMaturity();
  }, [monthlyDeposit, tenure, tenureType, interestRate]);

  const investedAmountOffset =
    circumference - (totalInvested / maturityAmount) * circumference;
  const returnsOffset =
    circumference - (estimatedReturns / maturityAmount) * circumference;

  const getTotalMonths = (tenure, unit) => {
    switch (unit) {
      case "months":
        return tenure;
      case "years":
        return tenure * 12;
      case "half-years":
        return tenure * 6;
      case "quarters":
        return tenure * 3;
      default:
        return tenure * 12;
    }
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
        img.onerror = () => reject("Failed to load image.");
        img.src = url;
      });
    };

    Promise.all([
      html2canvas(calculatorRef.current),
      loadImageAsBase64(logoUrl),
    ]).then(([canvas, logoBase64]) => {
      const imgData = canvas.toDataURL("image/png");
      const pageWidth = 297;
      const pageHeight = 180;
      const contentSpacing = 7;
      const maxTextWidth = 70;

      const totalMonths = getTotalMonths(tenure, tenureType);
      const monthlyRate = interestRate / 12 / 100;

      const maturityAmount =
        monthlyDeposit *
        ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
        (1 + monthlyRate);

      const totalInvested = monthlyDeposit * totalMonths;
      const interestAmount = maturityAmount - totalInvested;

      const wrapText = (text, width) => doc.splitTextToSize(text, width);

      doc.addImage(imgData, "PNG", 20, 30, 320, 100);
      doc.setFontSize(12);
      doc.setTextColor(107, 114, 128);
      doc.text("Invested Amount", 155, 120);
      doc.text("Returns", 199, 120);

      doc.setFont("Helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor(1, 67, 162);
      doc.text("FD Summary", 20, 12);
      doc.addImage(logoBase64, "PNG", pageWidth - 60, 2, 40, 10);
      doc.setDrawColor(1, 67, 162);
      doc.setLineWidth(0.5);
      doc.line(10, 17, 287, 17);

      doc.setFont("Helvetica", "bold");
      doc.setFontSize(13);
      doc.setTextColor(80, 80, 80);
      doc.text("Initial Monthly Investment:", 20, 40);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(`Rs ${monthlyDeposit.toLocaleString("en-IN")}`, maxTextWidth),
        23,
        46 + contentSpacing
      );

      doc.setFont("Helvetica", "bold");
      doc.setTextColor(107, 114, 128);
      doc.text("Rate of Interest (%)", 23, 67);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(`${interestRate}%`, maxTextWidth),
        22,
        75 + contentSpacing
      );

      doc.setFont("Helvetica", "bold");
      doc.setTextColor(107, 114, 128);
      doc.text("Tenure:", 23, 99);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(`${tenure} ${tenureType}`, maxTextWidth),
        22,
        107 + contentSpacing
      );

      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text("Monthly Deposit", pageWidth - 65, 60);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(
          `Rs ${Math.round(monthlyDeposit).toLocaleString("en-IN")}`,
          maxTextWidth
        ),
        pageWidth - 65,
        60 + contentSpacing
      );

      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text("Maturity Amount:", pageWidth - 65, pageHeight - 105);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(
          `Rs ${Math.round(maturityAmount).toLocaleString("en-IN")}`,
          maxTextWidth
        ),
        pageWidth - 65,
        pageHeight - 105 + contentSpacing
      );

      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text("Total Value", pageWidth - 65, pageHeight - 90);
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(18);
      doc.setTextColor(150, 0, 16);
      doc.text(
        wrapText(
          `Rs ${Math.round(maturityAmount).toLocaleString("en-IN")}`,
          maxTextWidth
        ),
        pageWidth - 65,
        pageHeight - 90 + contentSpacing
      );

      let x = 20;
      let y = 24;
      const lineHeight = 6;
      const maxWidth = 300;

      const drawText = (text, style = "normal", color = [0, 0, 0]) => {
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
      };

      drawText("A Monthly FD of ");
      drawText(
        `Rs ${monthlyDeposit.toLocaleString("en-IN")}`,
        "bold",
        [1, 67, 162]
      );
      drawText(" over ");
      drawText(`${tenure} ${tenureType}`, "bold", [1, 67, 162]);
      drawText(" at an expected return rate of ");
      drawText(`${interestRate}%`, "bold", [1, 67, 162]);
      drawText(" will give you a total amount of ");
      drawText(
        `Rs ${Math.round(maturityAmount).toLocaleString("en-IN")}`,
        "bold",
        [1, 67, 162]
      );

      const formatCurrency = (val) =>
        `₹${Math.round(val).toLocaleString("en-IN")}`;

      const body = [];
      for (let m = 12; m <= totalMonths; m += 12) {
        let value = 0;

        for (let i = 0; i < m; i++) {
          value += monthlyDeposit * Math.pow(1 + monthlyRate, m - i);
        }

        const investedTillNow = monthlyDeposit * m;
        const interest = value - investedTillNow;
        const label =
          tenureType === "months" ? `${m} Months` : `${m / 12} Year`;

        body.push([
          label,
          formatCurrency(investedTillNow),
          formatCurrency(value),
          formatCurrency(interest),
        ]);
      }

      autoTable(doc, {
        startY: 140,
        head: [
          ["Period", "Total Deposit", "Maturity Amount", "Interest Earned"],
        ],
        body,
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
          0: { cellWidth: 60 },
          1: { cellWidth: 70 },
          2: { cellWidth: 80 },
          3: { cellWidth: 70 },
        },
      });
      doc.save("Setup_Deal_Calculator.pdf");
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
        <form className="space-y-4">
          <div>
            <label className="block text-gray-500 text-[13px] font-medium mb-2">
              Monthly Deposit
            </label>

            <div className="relative mb-2">
              <input
                id="invested-amount-slider"
                type="range"
                min="1000"
                max="1000000"
                value={monthlyDeposit}
                onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                onMouseEnter={() => setShowTooltipMonthlyInvestment(true)}
                onMouseLeave={() => setShowTooltipMonthlyInvestment(false)}
                className="w-full h-1 rounded appearance-none cursor-pointer text-[12px]"
                style={{
                  background: `linear-gradient(to right, #0143a2 ${
                    ((monthlyDeposit - 1000) / (1000000 - 1000)) * 100
                  }%, #E5E7EB ${
                    ((monthlyDeposit - 1000) / (1000000 - 1000)) * 100
                  }%)`,
                }}
              />
              {showTooltipMonthlyInvestment && (
                <div
                  className="absolute -top-8 bg-gray-700 text-white text-xs rounded px-2 py-1"
                  style={{
                    left: `${
                      ((monthlyDeposit - 1000) / (1000000 - 1000)) * 100
                    }%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  ₹{monthlyDeposit.toLocaleString("en-IN")}
                </div>
              )}
            </div>
            <input
              value={monthlyDeposit}
              onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
              className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
            />
          </div>

          <div>
            <label className="block text-gray-500 text-[13px] font-medium mb-2">
              Expected Interest Rate (% p.a.)
            </label>
            <div className="relative mb-2">
              <input
                id="returns-slider"
                type="range"
                min="1"
                max="30"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                onMouseEnter={() => setShowTooltipExpectedReturnRate(true)}
                onMouseLeave={() => setShowTooltipExpectedReturnRate(false)}
                className="w-full h-1 rounded appearance-none cursor-pointer text-[12px]"
                style={{
                  background: `linear-gradient(to right, #0143a2 ${
                    (interestRate / 30) * 100
                  }%, #E5E7EB ${(interestRate / 30) * 100}%)`,
                }}
              />
              {showTooltipExpectedReturnRate && (
                <div
                  className="absolute -top-8 bg-gray-700 text-white text-xs rounded px-2 py-1"
                  style={{
                    left: `${(interestRate / 30) * 100}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  {interestRate}%
                </div>
              )}
            </div>
            <input
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
            />
          </div>

          <div>
            <label className="block text-gray-500 text-[13px] font-medium mb-2">
              Tenure
            </label>

            <div className="relative mb-2">
              <input
                id="time-period-slider"
                type="range"
                min="1"
                max="30"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                onMouseEnter={() => setShowTooltipTimePeriod(true)}
                onMouseLeave={() => setShowTooltipTimePeriod(false)}
                className="w-full h-1 rounded appearance-none cursor-pointer text-[12px]"
                style={{
                  background: `linear-gradient(to right, #0143a2 ${
                    ((tenure - 1) / (30 - 1)) * 100
                  }%, #E5E7EB ${((tenure - 1) / (30 - 1)) * 100}%)`,
                }}
              />
              {showTooltipTimePeriod && (
                <div
                  className="absolute -top-8 bg-gray-700 text-white text-xs rounded px-2 py-1"
                  style={{
                    left: `${((tenure - 1) / (30 - 1)) * 100}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  {tenure}{" "}
                  {tenureType === "years"
                    ? "Years"
                    : tenureType === "months"
                    ? "Months"
                    : tenureType === "half-years"
                    ? "Half-Years"
                    : "Quarters"}
                </div>
              )}
            </div>
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
            />
            <select
              value={tenureType}
              onChange={(e) => setTenureType(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full mt-2"
            >
              <option value="years">Years</option>
              <option value="months">Months</option>
              <option value="half-year">Half-Yearly</option>
              <option value="quarter">Quarterly</option>
            </select>
          </div>
        </form>

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
                stroke="#E21c1c"
                strokeWidth="15"
                fill="none"
                strokeDasharray={circumference}
                // strokeDashoffset={investedAmountOffset}
                className="transition-all duration-500 bg-white"
                strokeLinecap="round"
              />
              <circle
                cx="55"
                cy="55"
                r="45"
                stroke="#0143A2"
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
          <div className="space-y-1 text-center">
            <div className="flex text-[#E21c1c] text-[16px] space-x-1 font-bold">
              <span>Total Invested Amount : </span>
              <span>
                ₹ {}
                {new Intl.NumberFormat("en-IN").format(
                  Math.round(totalInvested)
                )}
              </span>
            </div>
            <div className="flex text-green-700 font-semibold text-[19px] space-x-1">
              <span>Estimated Returns : </span>
              <span>
                ₹ {}
                {new Intl.NumberFormat("en-IN").format(
                  Math.round(estimatedReturns)
                )}
              </span>
            </div>
            <div className="flex text-[#0143a2] text-[22px] font-bold">
              <span>Total Value : </span>
              <span>
                ₹{}
                {new Intl.NumberFormat("en-IN").format(
                  Math.round(maturityAmount)
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Graph Section */}
      </div>
    </div>
  );
};

export default RdCalculator;
