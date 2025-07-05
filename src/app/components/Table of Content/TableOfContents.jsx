"use client";
import React, { useState } from "react";
import "./TableOfContents.css";
import TOC from "./list-color.png";
import bDot from "../../assets/Dot-Icon-Blue.webp";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const TableOfContents = ({ headers }) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed-toc"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h2 className="text-gray-700">
            <Image src={TOC} alt="TABLE OF CONTENT" width={50} height={50} />{" "}
            TABLE OF CONTENT
          </h2>
          <ul>
            {headers &&
              headers.map((header, index) => (
                <li key={index}>
                  <Link href={`#${header.id}`} className="text-gray-500">
                    <Image
                      src={bDot}
                      alt="Blue Dot"
                      className="BlueDot"
                      width={20}
                      height={20}
                    />
                    {header.title}
                  </Link>
                </li>
              ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TableOfContents;
