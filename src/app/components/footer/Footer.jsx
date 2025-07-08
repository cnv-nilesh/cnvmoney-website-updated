import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import React from "react";
import amfiImage from "./AMFI.jpg";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Logo from "./Logo.png";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="flex flex-wrap justify-between gap-8">
            <div className="mb-6 md:mb-0">
              <a href="/" className="">
                <Image src={Logo} width={150} height={50} alt="cnvmoney Logo" />
              </a>
              <div className="mt-4">
                <span className="text-black font-medium">Head Office : </span>
                <p className="text-slate-600 text-sm">
                  B-207, Gopal CHS, Ambadi Road, Opp- 60 Feet Road,
                </p>
                <p className="text-slate-600 text-sm">
                  Vasai West, Palghar, Maharashtra - 401202
                </p>
                <div className="mt-2">
                  <div className="flex just items-center gap-1.5">
                    <MdOutlineMail size={20} color="gray" />
                    <p className="text-slate-600 text-sm">info@cnvmoney.com</p>
                  </div>
                  <div className="flex just items-center gap-1.5 mt-2">
                    <FaPhoneAlt size={20} color="gray" />
                    <p className="text-slate-600 text-sm">+91 8806604430</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[300px] flex flex-col items-center flex-wrap">
              <Image
                src={amfiImage}
                width={70}
                height={10}
                alt="logo"
                className="flex justify-center items-center"
              />
              <p className="text-wrap text-slate-600 text-sm">
                ASSOCIATION OF MUTUAL FUNDS IN INDIA
              </p>
              <p className="text-wrap text-slate-600 text-sm">
                REGISTERED MUTUAL FUND DISTRIBUTOR
              </p>
              <p className="text-wrap text-slate-600 text-sm mt-2">
                CREDIT AND VAULT FINANCIAL SERVICES
              </p>
              <p className="text-wrap text-slate-600 text-sm">ARN: - 114773</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Product
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-1">
                  <a href="/Learn/MutualFund" className="hover:underline">
                    Mutual Funds
                  </a>
                </li>
                <li className="mb-1">
                  <Link href="/Learn/StockBroking" className="hover:underline">
                    Stock Broking
                  </Link>
                </li>
                <li className="mb-1">
                  <a href="/Learn/Insurance" className="hover:underline">
                    Insurance
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/Learn/FixedDeposite" className="hover:underline">
                    Fixed Deposits
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/Learn/PMSnAIF" className="hover:underline">
                    PMS/AIF
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/Learn/Loans" className="hover:underline">
                    Loans
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Quick Links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-1">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Home
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Blog
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-row flex-wrap">
          <label className="text-slate-600 p-2">Download Links : </label>
          <div className="btn_color flex gap-2 items-center p-2 cursor-pointer rounded-md">
            <FaGooglePlay color="white" />
            <span className="text-sm text-white">Play Store</span>
          </div>
          <div className="flex gap-2 items-center footer-download p-2 bg-slate-200 cursor-pointer rounded-md">
            <FaAppStore />
            <span className="text-sm text-white">App Store</span>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © 2025 All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/cnvmoney"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebook />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/cnvmoney"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaInstagramSquare />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://x.com/cnvmoney"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaXTwitter />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/company/cnvmoney/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaLinkedin />
              <span className="sr-only">Linkedin</span>
            </a>
            <a
              href="https://www.youtube.com/@cnvmoney"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaYoutube />

              <span className="sr-only">Youtube</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
