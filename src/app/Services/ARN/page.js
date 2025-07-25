import Link from "next/link";
import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className="container p-2 mt-5 mx-auto">
      <h1 className="w-50 p-2 text-center bg-slate-200">
        NISM ARN Registration
      </h1>
      <div className="max-w-1/2 bg-white p-4 mx-auto mt-5 flex flex-col gap-2 flex-wrap">
        <Link href="https://cert.nism.ac.in/">
          <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
            <h1>Register and Enroll for NISM Exam</h1>
            <FaExternalLinkSquareAlt />
          </div>
        </Link>
        <Link href="https://www.nism.ac.in/exam-centres/">
          <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
            <h1>View NISM Exam Schedule</h1>
            <FaExternalLinkSquareAlt />
          </div>
        </Link>
        <Link href="https://www.nism.ac.in/forthcoming-cpe-programmes/">
          <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
            <h1>View Scheduled NISM CPE Programs</h1>
            <FaExternalLinkSquareAlt />
          </div>
        </Link>
        <Link href="https://www.amfiindia.com/page-not-found?aspxerrorpath=/distributor-corner/become-mutual-fund-distributor">
          <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
            <h1>ARN Registration & Renewal Process</h1>
            <FaExternalLinkSquareAlt />
          </div>
        </Link>
        <Link href="https://www.camsonline.com/Distributors/AMFI-Services/KYD-Status">
          <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
            <h1>ARN Status & KYD Status</h1>
            <FaExternalLinkSquareAlt />
          </div>
        </Link>
        <Link href="https://amfi.camsonline.com/amfi-online/sessions/login#/sessions/login">
          <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
            <h1>Online Registration and Renewal of ARN / EUIN</h1>
            <FaExternalLinkSquareAlt />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
