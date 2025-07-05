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
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-md w-full lg:w-2/3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color="orange"
                  size="2x"
                  className="mt-1"
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-semibold text-gray-800">
                    Head Office
                  </h4>
                  <p className="text-sm text-gray-600 font-medium">Address</p>
                  <p className="text-sm text-gray-600">
                    B-207, Gopal CHS, Ambadi Road, Opp- 60 Feet Road, Vasai
                    West, Palghar, Maharashtra - 401202
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
                      href="tel:+918806604430"
                      className="flex items-center gap-2"
                    >
                      <GiRotaryPhone className="text-gray-500" />
                      <span>+91 8806604430</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Gujarat Office */}
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-md w-full lg:w-1/3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color="orange"
                  size="2x"
                  className="mt-1"
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-semibold text-gray-800">
                    Gujarat Office
                  </h4>
                  <p className="text-sm text-gray-600 font-medium">Address</p>
                  <p className="text-sm text-gray-600">
                    Broadway Empire, Sixth floor. Opp Nilamber Bellissiomo-III,
                    Near Nilamber Circle, Vasna Bhayli Main Road, Vadodara -
                    390021, Gujarat, India
                  </p>
                  <div className="mt-4 text-sm text-gray-500">
                    <Link
                      href="mailto:info@cnvmoney.com"
                      className="flex items-center gap-2 mb-2"
                    >
                      <MdOutlineEmail className="text-gray-500" />
                      <span>info@cnvmoney.com</span>
                    </Link>
                    <Link
                      href="tel:+918806604430"
                      className="flex items-center gap-2"
                    >
                      <GiRotaryPhone className="text-gray-500" />
                      <span>+91 8806604430</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default page;
