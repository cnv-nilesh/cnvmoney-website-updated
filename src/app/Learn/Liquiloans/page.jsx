"use client";
import React from "react";
import "./Liquiloans.css";
import HD from "./High Diversification.svg";
import RBV from "./Robust Borrower Verification.png";
import LRSR from "./low_risk_high_returns.svg";
import NoOne from "./1.svg";
import NoTwo from "./2.svg";
import NoThree from "./3.svg";
import HTI from "./MacStudio.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Liquiloans() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="LLS-mainContainer mt-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="LLS-main">
            <div className="LLS-mainFirst">
              <h3>What is Liquiloans?</h3>
              <h2 className="text-gray-500">
                LiquiLoans is a leading peer-to-peer (P2P) lending marketplace
                where people borrow and lend money to each other.
              </h2>
            </div>
            <div className="LLS-mainSecond">
              <div className="LLS-SecondDesc">
                <h3>Why Liquiloans?</h3>
                <h1 className="text-gray-500">
                  We diversify your funds in multiple loans to Mitigate Risk and
                  Get Safe Returns
                </h1>
              </div>
              <div className="LLS-SecondCards">
                <div className="LLS-SecondCard drop-shadow-lg">
                  <Image
                    src={HD}
                    alt="High Diversification"
                    width={400}
                    height={300}
                  />
                  <h1 className="text-gray-700">High Diversification</h1>
                  <p className="text-gray-500">
                    Investment spread across 150-200 borrowers.Portfolio
                    exposure per borrower limited to 0.5%
                  </p>
                </div>
                <div className="LLS-SecondCard drop-shadow-lg">
                  <Image
                    src={RBV}
                    alt="Robust Borrower Verification"
                    width={400}
                    height={300}
                    className="pt-5"
                  />
                  <h1 className="text-gray-700">
                    Robust Borrower Verification
                  </h1>
                  <p className="text-gray-500">
                    Strong checks for KYC, Credit score and income proof of
                    borrowers
                  </p>
                </div>
              </div>
              <div className="LLS-SecondMainCard shadow-lg">
                <div className="LLS-SecondMainCardImg ">
                  <Image
                    src={LRSR}
                    alt="Low Risk, Safe Returns"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="LLS-SecondMainCardText">
                  <h1 className="text-gray-700">Low Risk, Safe Returns</h1>
                  <p className="text-gray-500">
                    At 0% net NPA, 100% of investors have made money at
                    indicative returns without loss of capital
                  </p>
                </div>
              </div>
            </div>
            <div className="LLS-mainThird drop-shadow-lg">
              <div className="LLS-ThirdDesc">
                <h3>HOW TO INVEST</h3>
                <h1 className="text-gray-500">Investment is Easy and Secure</h1>
                <ul>
                  <li>
                    <Image
                      src={NoOne}
                      alt="Number One"
                      width={150}
                      height={200}
                    />
                    <p>
                      Create your account, submit your KYC & bank account
                      details
                    </p>
                  </li>
                  <li>
                    <Image
                      src={NoTwo}
                      alt="Number Two"
                      width={150}
                      height={200}
                    />
                    <p>
                      Sign Investor agreement and begin an investment starting
                      at just Rs. 10,000
                    </p>
                  </li>
                  <li>
                    <Image
                      src={NoThree}
                      alt="Number Three"
                      width={150}
                      height={200}
                    />
                    <p>
                      Sit back and watch your money grow on Liquiloans dashboard
                      or LiquiMoney app
                    </p>
                  </li>
                </ul>
                <Link
                  href="https://liquiloans.com/investor/register/g12EFYWu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="LLS-ThirdDescBTN drop-shadow-lg">
                    Start Investing
                  </button>
                </Link>
              </div>
              <div className="LLS-ThirdMainCardImg">
                <Image src={HTI} alt="How To Invest" width={150} height={200} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Liquiloans;
