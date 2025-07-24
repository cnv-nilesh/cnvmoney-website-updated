import Link from "next/link";
import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className="container p-2 mt-5 mx-auto">
      <h1 className="w-50 p-2 text-center bg-slate-200">
        Verify your KYC Status
      </h1>
      <div className="max-w-1/2 bg-white p-4 mx-auto mt-5 flex flex-col gap-2 flex-wrap">
        <Link href="/Services/kycStatus/checkStatus">
          <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
            <h1>Check your KYC Status:</h1>
            <FaExternalLinkSquareAlt />
          </div>
        </Link>
        <Link href="/Services/kycStatus/kycValidation">
          <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
            <h1>KYC Validation Links:</h1>
            <FaExternalLinkSquareAlt />
          </div>
        </Link>
        <Link href="/Services/kycStatus/kycModification">
          <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
            <h1>AMCs wise Online KYC Modification:</h1>
            <FaExternalLinkSquareAlt />
          </div>
        </Link>
        <Link href="/Services/kycStatus/CKYC_Card">
          <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
            <h1>View your CKYC Card</h1>
            <FaExternalLinkSquareAlt />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
