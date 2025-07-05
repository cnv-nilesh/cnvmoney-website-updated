"use client";
import React, { useState } from "react";
import Popup from "../../components/Popup/Popup";
import "./MutualFund.css";
import HTInvest from "./Sections/HTInvest";
import SIP from "./Sections/SIP";
import AccountStatement from "./Sections/AccountStatement";
import Dividend from "./Sections/Dividend";
import Redemption from "./Sections/Redemption";
import Taxation from "./Sections/Taxation";
import Type from "./Types.svg";
import Image from "next/image";
import { data, fundsData } from "./mutualfundsData";
import CardComponent from "./CardComponent";
import { motion, AnimatePresence } from "framer-motion";
const SECTIONS = [
  {
    id: 1,
    title: "How to Invest ?",
    desc: <HTInvest />,
  },
  {
    id: 2,
    title: "Systematic Investment Plan (SIP)",
    desc: <SIP />,
  },
  {
    id: 3,
    title: "Account Statement",
    desc: <AccountStatement />,
  },
  {
    id: 4,
    title: "Dividend",
    desc: <Dividend />,
  },
  {
    id: 5,
    title: "Redemption",
    desc: <Redemption />,
  },
  {
    id: 6,
    title: "Taxation",
    desc: <Taxation />,
  },
];

function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const openPopup = (section) => {
    setSelectedSection(section);
    setIsOpen(true);
  };

  const closePopup = () => {
    setSelectedSection(null);
    setIsOpen(false);
  };

  return (
    <>
      <div className="mf-main">
        <div className="mf-mainContainer">
          <div className="mf-desUp text-wrap">
            <h1 className="text-gray-600 p-2">What is a Mutual Fund?</h1>
            <p className="text-gray-500 p-2">
              A Mutual Fund is a trust that pools together the savings of a
              number of investors who share a common financial goal. The money
              collected is then invested in capital market instruments such as
              shares, debentures and other securities based on their objective.
              The income earned through these investments and the capital
              appreciation realized are shared by its unit holders in proportion
              to the number of units owned by the investors.
            </p>
            <br />
          </div>
          <div className="mf-mainInner">
            <div className="mf-mainFirst">
              <h1 className="text-gray-500">MORE ABOUT MUTUAL FUND</h1>
              {/* <Image
                src={pensil}
                alt="Pensil Line"
                className="pensil"
                width={200}
                height={15}
              /> */}
            </div>
            <div className="mf-container">
              <div className="mf-items">
                <AnimatePresence>
                  {isVisible &&
                    SECTIONS.map((section) => (
                      <motion.div
                        key={section.id}
                        className="mf-item drop-shadow-lg text-gray-500"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <button
                          onClick={() => openPopup(section)}
                          className="mf-btn"
                        >
                          {section.title}
                        </button>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
              {isOpen && selectedSection && (
                <Popup
                  isOpen={isOpen}
                  onRequestClose={closePopup}
                  title={selectedSection.title}
                  description={selectedSection.desc}
                />
              )}
            </div>
            <div></div>
          </div>
          <div className="mf-desDown">
            <h1 className="text-gray-700">
              What are the advantages of mutual fund?
            </h1>
            {/* card component */}
            <CardComponent data={data} />
            <div className="mf-typeSec">
              <h1 className="text-gray-700">
                WHAT ARE THE DIFFERENT TYPES OF FUND
              </h1>
              {/* <Image
                src={pensil}
                alt="Pensil Line"
                className="pensil"
                width={200}
                height={15}
              /> */}
              <br />
              <Image
                src={Type}
                alt="Different Types of fund"
                className="Types-of-fund-img"
                width={900}
                height={500}
              />
            </div>
            <br />
            {/* card component */}
            <CardComponent data={fundsData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
