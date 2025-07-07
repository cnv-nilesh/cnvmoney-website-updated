"use client";
import { useState, useEffect, useRef } from "react";
import { FaFilePdf } from "react-icons/fa";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import autoTable from "jspdf-autotable";

export default function EmiCalculator() {
  const calculatorRef = useRef(null);
  const [principal, setPrincipal] = useState("5000000");
  const [interestRate, setInterestRate] = useState("8");
  const [tenure, setTenure] = useState("25");
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [investedAmount, setInvestedAmount] = useState(0);
  const [returns, setReturns] = useState(0);
  const [showTooltipMonthlyInvestment, setShowTooltipMonthlyInvestment] =
    useState(false);
  const [showTooltipExpectedReturnRate, setShowTooltipExpectedReturnRate] =
    useState(false);
  const [showTooltipTimePeriod, setShowTooltipTimePeriod] = useState(false);

  const circumference = 2 * Math.PI * 45;
  const investedAmountOffset =
    circumference - circumference * (investedAmount / totalAmount);
  const returnsOffset = circumference - circumference * (returns / totalAmount);

  const calculateEMI = (p, r, t) => {
    const monthlyRate = r / 12 / 100;
    const numberOfMonths = t * 12;

    if (p && r && t) {
      const emiAmount =
        (p * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
        (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
      const totalPayment = emiAmount * numberOfMonths;
      const interestPayment = totalPayment - p;

      setEmi(emiAmount);
      setTotalInterest(interestPayment);
      setTotalAmount(totalPayment);

      setInvestedAmount(p);
      setReturns(totalPayment);
    } else {
      setEmi(0);
      setTotalInterest(0);
      setTotalAmount(0);
    }
  };

  useEffect(() => {
    if (principal && interestRate && tenure) {
      calculateEMI(
        parseFloat(principal),
        parseFloat(interestRate),
        parseFloat(tenure)
      );
    }
  }, [principal, interestRate, tenure]);

  const formatCurrency = (amount) => {
    const roundedAmount = Math.round(amount);
    return `₹${roundedAmount.toLocaleString("en-IN")}`;
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

    const calculateMaturity = (annualInvestment, rate, years) => {
      let maturity = 0;
      for (let i = 1; i <= years; i++) {
        maturity += annualInvestment * Math.pow(1 + rate, years - i + 1);
      }
      return maturity;
    };

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
      doc.text("EMI Summary", 20, 12);

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
        wrapText("Rs" + principal.toLocaleString("en-IN"), maxTextWidth),
        23,
        54 + contentSpacing
      );

      doc.setFontSize(labelFontSize);
      doc.setTextColor(107, 114, 128);
      doc.text("Annual Interest Rate (%)", 23, 78);
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
      doc.text("Monthly EMI", pageWidth - 65, 60);
      doc.setFontSize(valueFontSize);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(
          "Rs" + new Intl.NumberFormat("en-IN").format(Math.round(emi)),
          maxTextWidth
        ),
        pageWidth - 65,
        60 + contentSpacing
      );

      doc.setFontSize(labelFontSize);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text("Principal Amount", pageWidth - 65, pageHeight - 105);
      doc.setFontSize(valueFontSize);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(
          "Rs" + new Intl.NumberFormat("en-IN").format(Math.round(principal)),
          maxTextWidth
        ),
        pageWidth - 65,
        pageHeight - 105 + contentSpacing
      );

      doc.setFontSize(labelFontSize);
      doc.setTextColor(107, 114, 128);
      doc.text("Loan Tenure (Years)", 20, 110);
      doc.setFontSize(valueFontSize);
      doc.setTextColor(1, 67, 162);
      doc.text(
        wrapText(tenure + " Years", maxTextWidth),
        23,
        120 + contentSpacing
      );

      doc.setFontSize(labelFontSize);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text("Total Interest : ", pageWidth - 65, pageHeight - 90);
      doc.setFontSize(14);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(150, 0, 16);
      doc.text(
        wrapText(
          "Rs" +
            new Intl.NumberFormat("en-IN").format(Math.round(totalInterest)),
          maxTextWidth
        ),
        pageWidth - 65,
        pageHeight - 90 + contentSpacing
      );
      doc.setFontSize(labelFontSize);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      doc.text("Total Amount Payable : ", pageWidth - 65, pageHeight - 75);
      doc.setFontSize(14);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(150, 0, 16);
      doc.text(
        wrapText(
          "Rs" + new Intl.NumberFormat("en-IN").format(Math.round(totalAmount)),
          maxTextWidth
        ),
        pageWidth - 65,
        pageHeight - 75 + contentSpacing
      );

      const monthlySIP = `Rs ${principal.toLocaleString()}`;
      const totalAmt = `Rs ${new Intl.NumberFormat("en-IN").format(
        Math.round(totalAmount)
      )}`;
      const timeStr = `${tenure} years`;
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

      drawText("A monthly EMI of ");
      drawText(monthlySIP, "bold", [1, 67, 162]);
      drawText(" over ");
      drawText(timeStr, "bold", [1, 67, 162]);
      drawText(" at an expected return rate of ");
      drawText(rateStr, "bold", [1, 67, 162]);
      drawText(" will give you a total amount of ");
      drawText(totalAmt, "bold", [1, 67, 162]);

      const body = [];
      for (let year = 1; year <= tenure; year++) {
        const totalInvestment = tenure * year;
        const marketValue = calculateMaturity(
          principal,
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

      doc.save("EMI_Calculator.pdf");
    });
  };

  return (
    <div className="bg-white p-6 drop-shadow-lg rounded flex flex-wrap gap-5 items-center">
      {/* {/* <div className="ml-auto flex items-center gap-2 no-print">
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
          <form className="space-y-6 mt-8 col-span-2 md:col-span-1 lg:col-span-2">
            <div className="flex flex-col gap-6">
              <div>
                <label className="block text-gray-500 text-[13px] font-medium mb-2">
                  Principal Amount (₹)
                </label>
                <div className="relative mb-2">
                  <input
                    id="invested-amount-slider"
                    type="range"
                    min="500"
                    max="10000000"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    onMouseEnter={() => setShowTooltipMonthlyInvestment(true)}
                    onMouseLeave={() => setShowTooltipMonthlyInvestment(false)}
                    className="w-full h-1 rounded appearance-none cursor-pointer text-[12px]"
                    style={{
                      background: `linear-gradient(to right, #0143a2 ${
                        ((principal - 500) / (10000000 - 500)) * 100
                      }%, #E5E7EB ${
                        ((principal - 500) / (10000000 - 500)) * 100
                      }%)`,
                    }}
                  />
                  {showTooltipMonthlyInvestment && (
                    <div
                      className="absolute -top-8 bg-gray-700 text-white text-xs rounded px-2 py-1"
                      style={{
                        left: `${
                          ((principal - 500) / (10000000 - 500)) * 100
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
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
                  placeholder="Enter principal amount"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-500 text-[13px] font-medium mb-2">
                  Annual Interest Rate (%)
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
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
                  placeholder="Enter annual interest rate"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-500 text-[14px] font-medium mb-2">
                  Loan Tenure (Years)
                </label>
                <div className="relative mb-2">
                  <input
                    id="time-period-slider"
                    type="range"
                    min="1"
                    max="50"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    onMouseEnter={() => setShowTooltipTimePeriod(true)}
                    onMouseLeave={() => setShowTooltipTimePeriod(false)}
                    className="w-full h-1 rounded appearance-none cursor-pointer text-[12px]"
                    style={{
                      background: `linear-gradient(to right, #0143a2 ${
                        ((tenure - 1) / (50 - 1)) * 100
                      }%, #E5E7EB ${((tenure - 1) / (50 - 1)) * 100}%)`,
                    }}
                  />
                  {showTooltipTimePeriod && (
                    <div
                      className="absolute -top-8 bg-gray-700 text-white text-xs rounded px-2 py-1"
                      style={{
                        left: `${((tenure - 1) / (50 - 1)) * 100}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      {tenure} Years
                    </div>
                  )}
                </div>
                <input
                  type="number"
                  value={tenure}
                  onChange={(e) =>
                    setTenure(Math.min(Math.max(Number(e.target.value), 1), 50))
                  }
                  className="w-full border text-[13px] border-gray-300 rounded p-2 text-gray-500 text-sm "
                  placeholder="Enter tenure in years"
                  required
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
                strokeDashoffset={returnsOffset}
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
        <div className="space-y-1 lg:mt-28">
          <div className="flex flex-col text-[#E21c1c] text-[13px] font-bold">
            <div className="flex flex-col text-[#E21c1c] text-[13px]">
              <span>Monthly EMI : </span>
              <span> {formatCurrency(emi)}</span>
            </div>

            <div className="flex flex-col text-green-600 text-[16px] font-bold">
              <span>Principal Amount : </span>
              <span>{formatCurrency(principal)}</span>
            </div>

            <div className="flex flex-col text-green-700 text-[19px] font-bold">
              <span>Total Interest : </span>
              <span>{formatCurrency(totalInterest)}</span>
            </div>

            <div className="flex flex-col text-[#0143a2] text-[22px] font-bold">
              <span>Total Amount Payable : </span>
              <span>{formatCurrency(totalAmount)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
