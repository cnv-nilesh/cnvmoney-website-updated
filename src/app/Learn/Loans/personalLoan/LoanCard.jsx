"use client";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const LoanCard = ({ data, openModal }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 ">
        <AnimatePresence>
          {isVisible &&
            data.map((item, id) => (
              <motion.div
                className="bg-white p-6 rounded-lg overflow-y-auto  hover_effect"
                style={{ maxHeight: "250px" }}
                key={id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                whileHover={{ scale: 0.9 }}
                onClick={() => openModal(item)}
              >
                <div className="flex justify-between card_container flex-wrap">
                  <h2 className="text-gray-700 mb-2 loan_header">
                    {item.header}
                  </h2>
                  <Image
                    src={item.icon}
                    width={35}
                    height={35}
                    alt="/loan.png"
                  />
                </div>
                <div className="flex justify-start flex-col mt-5">
                  <p className="loan_para text-wrap">{item.detail}</p>
                  <p className="card_para flex">Know More</p>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default LoanCard;
