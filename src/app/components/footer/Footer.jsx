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
import playStore from "./playstore.webp";
import appStore from "./appStore.png";

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
                  Micheal Palace,Shop No 2-4, Mudwadi Mulgaon,
                </p>
                <p className="text-slate-600 text-sm">
                  Vasai West, Thane, Maharashtra - 401201
                </p>
                <div className="mt-2">
                  <div className="flex just items-center gap-1.5">
                    <MdOutlineMail size={20} color="gray" />
                    <p className="text-slate-600 text-sm">info@cnvmoney.com</p>
                  </div>
                  <div className="flex just items-center gap-1.5 mt-2">
                    <FaPhoneAlt size={20} color="gray" />
                    <p className="text-slate-600 text-sm">+91 7057233394</p>
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
              <p className="text-nowrap text-slate-600 text-sm">
                AMFI - REGISTERED MUTUAL FUND DISTRIBUTOR
              </p>
              <p className="text-wrap text-slate-600 text-sm mt-2">
                CREDIT AND VAULT FINANCIAL SERVICES
              </p>
              <p className="text-wrap text-slate-600 text-sm mt-2">ARN: - 114773</p>
               <p className="text-wrap text-slate-600 text-sm">ARN Valid From : 15 Sep 2025</p>
               <p className="text-wrap text-slate-600 text-sm">ARN Valid Till : 14 Sep 2028</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:gap-4 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Product
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-1">
                  <a href="/Learn/MutualFund" className="hover:underline text-sm">
                    Mutual Funds
                  </a>
                </li>
                <li className="mb-1">
                  <Link href="/Learn/StockBroking" className="hover:underline text-sm">
                    Stock Broking
                  </Link>
                </li>
                <li className="mb-1">
                  <a href="/Learn/Insurance" className="hover:underline text-sm">
                    Insurance
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/Learn/FixedDeposite" className="hover:underline text-sm">
                    Fixed Deposits
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/Learn/PMSnAIF" className="hover:underline text-sm">
                    PMS/AIF
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/Learn/Loans" className="hover:underline text-sm">
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
                  <a href="/" className="hover:underline text-sm ">
                    Home
                  </a>
                </li>

                <li className="mb-1">
                  <a href="/About" className="hover:underline text-sm">
                    About Us
                  </a>
                </li>

                <li className="mb-1">
                  <a href="/Contact" className="hover:underline text-sm">
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
                  <Link href="/PrivacyPolicy" className="hover:underline text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/TermsConditions">Terms & Conditions</Link>
                </li>
                <li className="mb-1">
                  <a href="https://www.sebi.gov.in/filings/mutual-funds.html" target="blank" className="hover:underline text-sm">
                    SID / SAI / KIM Sheets
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/CodeofConduct" className="hover:underline text-sm">
                    Code of Conduct
                  </a>
                </li>
                 <li className="mb-1">
                  <a href="/disclaimer" className="hover:underline text-sm">
                    Disclaimer
                  </a>
                </li>
                 <li className="mb-1">
                  <a href="https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=1&ssid=7&smid=0" target="blank" className="hover:underline text-sm">
                    Risk Factor
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/CommissionDisclosures" className="hover:underline text-sm text-nowrap">
                    Commission Disclosures
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-row flex-wrap">
          <label className="text-slate-600 p-2">Download Links : </label>
          <Link href="https://play.google.com/store/apps/details?id=com.iw.creditnvault&hl=en">
            <div className="flex gap-2 items-center p-2 cursor-pointer rounded-md">
              <Image
                src={playStore}
                alt="playstore"
                width={120}
                height={60}
              ></Image>
            </div>
          </Link>
          <Link href="https://apps.apple.com/in/app/cnvmoney-mutual-fund-sip/id6759793756">
            <div className="flex gap-2 items-center p-2 cursor-pointer rounded-md">
              <Image
                src={appStore}
                alt="Appstore"
                width={120}
                height={60}
              ></Image>
            </div>
          </Link>
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
