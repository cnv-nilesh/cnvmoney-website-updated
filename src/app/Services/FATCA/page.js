import Link from "next/link";
import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className="container p-2 mt-5 mx-auto">
      <h1 className="w-50 p-2 text-center bg-slate-200">
        FATCA Details Update
      </h1>
      <div className="max-w-1/2 bg-white p-4 mx-auto mt-5 flex flex-col gap-2 flex-wrap">
        <Link href="https://www.camsonline.com/Investors/Service-requests/GoGreen/FATCA&CRS">
          <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
            <h1>CAMS</h1>
            <FaExternalLinkSquareAlt />
          </div>
        </Link>
        <Link href="https://mfs.kfintech.com/fatcaupdate">
          <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
            <h1>KFINTECH</h1>
            <FaExternalLinkSquareAlt />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
