"use client";
import { useState } from "react";
import * as React from "react";
import TypeofNps from "./nps-accordions/TypeofNps";
import NpsEntities from "./nps-accordions/NpsEntities";
import NpsCharges from "./nps-accordions/NpsCharges";
import NpsBenefit from "./nps-accordions/NpsBenefit";
import NpsDisclaimers from "./nps-accordions/NpsDisclaimers";
import { motion, AnimatePresence } from "framer-motion";

export default function NPS()  {
  const [isVisible, setIsvisible] = useState(true);
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <TypeofNps></TypeofNps>
            <NpsEntities></NpsEntities>
            <NpsCharges></NpsCharges>
            <NpsBenefit></NpsBenefit>
            <NpsDisclaimers></NpsDisclaimers>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
