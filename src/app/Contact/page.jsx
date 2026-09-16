"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { GiRotaryPhone } from "react-icons/gi";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
const page = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="pt-4 px-5 flex flex-col md:flex-row justify-center bg-white mb-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="container mx-auto px-4 my-10">
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
              {/* Head Office */}
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-md w-full lg:w-1/3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color="red"
                  size="2x"
                  className="mt-1"
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-semibold text-gray-800">
                    Head Office
                  </h4>
                  <p className="text-sm text-gray-600 font-bold">Address:</p>
                  <p className="text-sm text-gray-600">
                    Micheal Palace, Shop No 2-4, Mudwadi Mulgaon , Vasai
                    West, Thane, Maharashtra - 401201
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                    <Link
                      href="mailto:info@cnvmoney.com"
                      className="flex items-center gap-2"
                    >
                      <MdOutlineEmail className="text-gray-500" />
                      <span>info@cnvmoney.com</span>
                    </Link>
                    <Link
                      href="tel:+917057233394"
                      className="flex items-center gap-2"
                    >
                      <GiRotaryPhone className="text-gray-500" />
                      <span>+91 7057233394</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-md w-full lg:w-1/3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color="red"
                  size="2x"
                  className="mt-1"
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-semibold text-gray-800">
                    Borivali Branch
                  </h4>
                  <p className="text-sm text-gray-600 font-bold">Address:</p>
                  <p className="text-sm text-gray-600">
                    805, Parvati Hub, 8th Floor, Off Chandavarkar Road, Opp-
                    Bunti Juice, Roshan Nagar, Borivali - West, Mumbai – 400092.
                  </p>
                  <div className="mt-4 text-sm text-gray-500">
                    <Link
                      href="mailto:info@cnvmoney.com"
                      className="flex items-center gap-2 mb-2"
                    >
                      <MdOutlineEmail className="text-gray-500" />
                      <span>info@cnvmoney.com</span>
                    </Link>
                    <div className="flex items-center gap-2">
                      <GiRotaryPhone className="text-gray-500" />
                      <span>+91 7057233394</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gujarat Office */}
              {/* <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-md w-full lg:w-1/3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color="red"
                  size="2x"
                  className="mt-1"
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-semibold text-gray-800">
                    Gujarat Branch
                  </h4>
                  <p className="text-sm text-gray-600 font-bold">Address:</p>
                  <p className="text-sm text-gray-600">
                    628, Broadway Empire, Near Nilamber Circle ,Opposite
                    Nilamber Bellissimo 3, Vasna Bhayli Main Road, Vadodara,
                    Gujarat - 391410.
                  </p>
                  <div className="mt-4 text-sm text-gray-500">
                    <Link
                      href="mailto:info@cnvmoney.com"
                      className="flex items-center gap-2 mb-2"
                    >
                      <MdOutlineEmail className="text-gray-500" />
                      <span>rina.patel@cnvmoney.com</span>
                    </Link>
                    <div className="flex items-center gap-2">
                      <GiRotaryPhone className="text-gray-500" />
                      <span>+91 9925039676</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GiRotaryPhone className="text-gray-500" />
                      <span>+91 7874877727</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default page;
