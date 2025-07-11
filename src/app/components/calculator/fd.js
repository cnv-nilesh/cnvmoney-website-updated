"use client";
import jsPDF from "jspdf";
import React, { useState, useEffect, useRef } from "react";
import { FaFilePdf } from "react-icons/fa";
import html2canvas from "html2canvas";
import autoTable from "jspdf-autotable";

const FdCalculator = () => {
  const calculatorRef = useRef(null);

  const [principal, setPrincipal] = useState(5000000);
  const [rate, setRate] = useState(6);
  const [tenure, setTenure] = useState(5);
  const [tenureUnit, setTenureUnit] = useState("years");
  const [maturityAmount, setMaturityAmount] = useState(0);
  const [interestAmount, setInterestAmount] = useState(0);

  const [showTooltipMonthlyInvestment, setShowTooltipMonthlyInvestment] =
    useState(false);
  const [showTooltipExpectedReturnRate, setShowTooltipExpectedReturnRate] =
    useState(false);
  const [showTooltipTimePeriod, setShowTooltipTimePeriod] = useState(false);

  const calculateFD = () => {
    let n;
    switch (tenureUnit) {
      case "years":
        n = 4;
        break;
      case "half-years":
        n = 2;
        break;
      case "quarters":
        n = 4;
        break;
      case "months":
        n = 12;
        break;
      default:
        n = 4;
    }

    const t =
      tenureUnit === "years"
        ? tenure
        : tenure / (tenureUnit === "months" ? 12 : 1);
    const r = rate / 100;

    const maturity = principal * Math.pow(1 + r / n, n * t);
    const interest = maturity - principal;

    setMaturityAmount(maturity);
    setInterestAmount(interest);
  };

  useEffect(() => {
    calculateFD();
  }, [principal, rate, tenure, tenureUnit]);

  const formatCurrency = (amount) => {
    if (amount === 0) return "₹0";

    const amountString = Math.round(amount).toString();
    const lastThreeDigits = amountString.slice(-3);
    const otherDigits = amountString.slice(0, -3);
    const formattedNumber =
      otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
      (otherDigits.length > 0 ? "," : "") +
      lastThreeDigits;

    return "₹" + formattedNumber;
  };

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const investedAmountOffset = (
    (principal / (principal + interestAmount)) *
    circumference
  ).toFixed(2);
  const returnsOffset = (
    (interestAmount / (principal + interestAmount)) *
    circumference
  ).toFixed(2);

  const handleDownloadPDF = async () => {
    const doc = new jsPDF("landscape");
    doc.setFont("Helvetica");

    const logoUrl =
      "https://www.cnvmoney.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.cd1450c5.png&w=256&q=75";

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

    // ✅ Function to remove or replace `oklch()` colors
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
      doc.text("Invested Amount", 155, 108);
      doc.text("Returns", 199, 108);
      const pageHeight = 180;
      const pageWidth = 297;
      const contentSpacing = 7;
      const maxTextWidth = 70;

      const wrapText = (text, width) => doc.splitTextToSize(text, width);

      doc.setFontSize(14);
      doc.setTextColor(1, 67, 162);
      doc.setFont("Helvetica", "bold");
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
      doc.setFontSize(12);
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(`Rs ${principal.toLocaleString("en-IN")}`, maxTextWidth),
        23,
        50 + contentSpacing
      );

      doc.setFont("Helvetica", "bold");
      doc.setTextColor(107, 114, 128);
      doc.text("Annual Increase Percentage (%)", 23, 72);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(wrapText(`${rate}%`, maxTextWidth), 22, 79 + contentSpacing);

      doc.setFont("Helvetica", "bold");
      doc.setTextColor(107, 114, 128);
      doc.text("Tenure:", 23, 102);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(wrapText(`${tenure}%`, maxTextWidth), 22, 107 + contentSpacing);

      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(`${tenureUnit}`, maxTextWidth),
        22,
        120 + contentSpacing
      );

      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text("Principal", pageWidth - 65, 60);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(
          `Rs ${Math.round(principal).toLocaleString("en-IN")}`,
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
      doc.text("Tenure:", pageWidth - 65, pageHeight - 90);
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(18);
      doc.setTextColor(150, 0, 16);
      doc.text(
        wrapText(
          `Rs ${Math.round(interestAmount).toLocaleString("en-IN")}`,
          maxTextWidth
        ),
        pageWidth - 65,
        pageHeight - 90 + contentSpacing
      );

      const monthlySIP = `Rs ${principal.toLocaleString("en-IN")}`;
      const totalAmt = `Rs ${Math.round(maturityAmount).toLocaleString(
        "en-IN"
      )}`;
      const timeStr = `${tenure} ${tenureUnit}`;
      const rateStr = `${rate}%`;

      let x = 20;
      let y = 24;
      const lineHeight = 6;
      const maxWidth = 300;

      function drawText(text, style = "normal", color = [0, 0, 0]) {
        if (style === "bold") {
          doc.setFont("Helvetica", "bold");
        } else {
          doc.setFont("Helvetica", "normal");
        }
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

      drawText("A Monthly FD of ");
      drawText(monthlySIP, "bold", [1, 67, 162]);
      drawText(" over ");
      drawText(timeStr, "bold", [1, 67, 162]);
      drawText(" at an expected return rate of ");
      drawText(rateStr, "bold", [1, 67, 162]);
      drawText(" will give you a total amount of ");
      drawText(totalAmt, "bold", [1, 67, 162]);

      const formatCurrency = (value) => value.toLocaleString("en-IN");
      const body = [];

      let totalPrincipal = 0;

      for (let year = 1; year <= tenure; year++) {
        const yearlyPrincipal =
          principal * 12 * Math.pow(1 + rate / 100, year - 1);
        totalPrincipal += principal * 12;

        const compoundedValue =
          yearlyPrincipal * Math.pow(1 + rate / 100, tenure - year + 1);
        const interest = compoundedValue - totalPrincipal;

        body.push([
          `${year} Year`,
          formatCurrency(Math.round(totalPrincipal)),
          formatCurrency(Math.round(interest)),
          formatCurrency(Math.round(totalPrincipal + interest)),
        ]);
      }

      autoTable(doc, {
        startY: 170,
        head: [["Year", "Principal", "Interest", "Total Value"]],
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
          0: { cellWidth: 50 },
          1: { cellWidth: 75 },
          2: { cellWidth: 75 },
          3: { cellWidth: 75 },
        },
      });

      doc.save("Setup_Deal_Calculator.pdf");
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full"
      >
        <div className="w-full lg:max-w-[500px]">
          <form className="space-y-6 mt-8">
            <div className="flex flex-col gap-6">
              <div>
                <label className="block text-gray-500 text-[13px] font-medium mb-2">
                  Principal Amount (₹):
                </label>
                <div className="relative mb-2">
                  <input
                    id="invested-amount-slider"
                    type="range"
                    min="1000"
                    max="10000000"
                    value={Math.max(1000, principal)}
                    onChange={(e) =>
                      setPrincipal(Math.max(1000, Number(e.target.value)))
                    }
                    onMouseEnter={() => setShowTooltipMonthlyInvestment(true)}
                    onMouseLeave={() => setShowTooltipMonthlyInvestment(false)}
                    className="w-full h-1 rounded appearance-none cursor-pointer text-[12px]"
                    style={{
                      background: `linear-gradient(to right, #0143a2 ${
                        ((principal - 1000) / (10000000 - 1000)) * 100
                      }%, #E5E7EB ${
                        ((principal - 1000) / (10000000 - 1000)) * 100
                      }%)`,
                    }}
                  />
                  {showTooltipMonthlyInvestment && (
                    <div
                      className="absolute -top-8 bg-gray-700 text-white text-xs rounded px-2 py-1"
                      style={{
                        left: `${
                          ((principal - 1000) / (10000000 - 1000)) * 100
                        }%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      ₹{principal.toLocaleString("en-IN")}
                    </div>
                  )}
                </div>
                <input
                  type="number"
                  value={Math.max(1000, principal)}
                  min="1000"
                  onChange={(e) =>
                    setPrincipal(Math.max(1000, Number(e.target.value)))
                  }
                  className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
                />
              </div>

              <div>
                <label className="block text-gray-500 text-[13px] font-medium mb-2">
                  Rate of Interest (%):
                </label>
                <div className="relative mb-2">
                  <input
                    id="returns-slider"
                    type="range"
                    min="1"
                    max="40"
                    value={Math.min(40, Math.max(1, rate))}
                    onChange={(e) =>
                      setRate(Math.min(40, Math.max(1, Number(e.target.value))))
                    }
                    onMouseEnter={() => setShowTooltipExpectedReturnRate(true)}
                    onMouseLeave={() => setShowTooltipExpectedReturnRate(false)}
                    className="w-full h-1 rounded appearance-none cursor-pointer text-[12px]"
                    style={{
                      background: `linear-gradient(to right, #0143a2 ${
                        (rate / 40) * 100
                      }%, #E5E7EB ${(rate / 40) * 100}%)`,
                    }}
                  />
                  {showTooltipExpectedReturnRate && (
                    <div
                      className="absolute -top-8 bg-gray-700 text-white text-xs rounded px-2 py-1"
                      style={{
                        left: `${(rate / 40) * 100}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      {rate}%
                    </div>
                  )}
                </div>
                <input
                  type="number"
                  value={Math.min(40, Math.max(1, rate))}
                  min="1"
                  max="40"
                  onChange={(e) =>
                    setRate(Math.min(40, Math.max(1, Number(e.target.value))))
                  }
                  className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
                />
              </div>

              <div>
                <label className="block text-gray-500 text-[14px] font-medium mb-2">
                  Tenure:
                </label>
                <div className="relative mb-2">
                  <input
                    id="time-period-slider"
                    type="range"
                    min="1"
                    max="30"
                    value={Math.max(1, tenure)}
                    onChange={(e) =>
                      setTenure(Math.max(1, Number(e.target.value)))
                    }
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
                      {tenureUnit === "years"
                        ? "Years"
                        : tenureUnit === "months"
                        ? "Months"
                        : tenureUnit === "half-years"
                        ? "Half-Years"
                        : "Quarters"}
                    </div>
                  )}
                </div>

                <input
                  type="number"
                  value={Math.max(1, tenure)}
                  min="1"
                  onChange={(e) =>
                    setTenure(Math.max(1, Number(e.target.value)))
                  }
                  className="w-full border text-[13px] border-gray-300 rounded mb-4 p-2 text-gray-500 text-sm "
                />
                <select
                  value={tenureUnit}
                  onChange={(e) => setTenureUnit(e.target.value)}
                  className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
                >
                  <option value="years">Years</option>
                  <option value="months">Months</option>
                  <option value="half-years">Half-Years</option>
                  <option value="quarters">Quarters</option>
                </select>
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
              <div className="w-3 bg-[#E21c1c] border h-3 "></div>
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
            <span>Principal Amount: </span>{" "}
            <span>{formatCurrency(principal)}</span>
          </div>
          <div className="flex text-green-700 text-[20px] space-x-1 font-semibold">
            <span>Maturity Amount: </span>{" "}
            <span>{formatCurrency(maturityAmount)}</span>
          </div>
          <div className="flex text-[#0143a2] text-[22px] font-semibold">
            <span>Interest Earned: </span>{" "}
            <span>{formatCurrency(interestAmount)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FdCalculator;
