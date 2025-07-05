"use client";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export const CardComponent = ({ data }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="container mx-auto py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence>
          {isVisible &&
            data.map((item, id) => (
              <motion.div
                className="bg-white drop-shadow-lg p-4 rounded-lg overflow-y-auto scroll_btn"
                style={{ maxHeight: "200px" }}
                key={id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <h2 className="text-gray-700 mb-2">{item.heading}</h2>
                <p className="text-gray-500"> {item.info}</p>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CardComponent;
