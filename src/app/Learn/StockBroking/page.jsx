"use client";
import React from "react";
import SBMen from "./sb-men.png";
import "./StockBroking.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function StockBroking() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="sb-Container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="sb-main">
            <div className="sb-UpContainer">
              <h1 className="text-gray-700">What is Share Market?</h1>
              <p className="text-gray-500 p-1">
                The share market is a platform where buyers and sellers come
                together to trade on publicly listed shares during specific
                hours of the day. People often use the terms {"share market"}{" "}
                and {"stock market"} interchangeably. However, the key
                difference between the two lies in the fact that while the
                former is used to trade only shares, the latter allows you to
                trade various financial securities such as bonds, derivatives,
                forex etc.
              </p>
            </div>
            <div className="sb-DownContainer">
              <div className="sb-DownContainerLeft">
                <p className="text-gray-500">
                  The principal stock exchanges in India are the National Stock
                  Exchange (NSE) and the Bombay Stock Exchange (BSE).
                </p>
                <br />
                <h2 className="text-gray-700">Types of Share Markets</h2>
                <br />
                <p className="text-gray-500">
                  Stock markets can be further classified into two parts:
                  primary markets and secondary markets.
                </p>
                <br />
                <h3 className="text-gray-700"> 1. Primary Share Markets</h3>
                <br />
                <p className="text-gray-500">
                  When a company registers itself for the first time at the
                  stock exchange to raise funds through shares, it enters the
                  primary market. This is called an Initial Public Offering
                  (IPO), after which the company becomes publicly registered and
                  its shares can be traded within market participants.
                </p>
                <br />
                <h3 className="text-gray-700"> 2. Secondary Market</h3>
                <br />
                <p className="text-gray-500">
                  Once a company{"'"}s new securities have been sold in the
                  primary market, they are then traded on the secondary stock
                  market. Here, investors get the opportunity to buy and sell
                  the shares among themselves at the prevailing market prices.
                  Typically investors conduct these transactions through a
                  broker or other such intermediary who can facilitate this
                  process.
                </p>
              </div>
              <div className="sb-DownContainerRight">
                <div className="sb-DownContainerRightUp">
                  <Link
                    href="https://ttweb.indiainfoline.com/trade/login.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="sb-DownContainerRightUpBtn">
                      CLIENT LOGIN
                    </button>
                  </Link>
                  <Link
                    href="https://cutt.ly/86Qz1kQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="sb-DownContainerRightUpBtn">
                      OPEN DEMAT ACCOUNT
                    </button>
                  </Link>
                </div>
                <div className="sb-DownContainerRightDown">
                  <Image
                    src={SBMen}
                    alt="Stock Broker men"
                    // width={600}
                    // height={400}
                    // layout="responsive"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default StockBroking;
