import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className="container p-2 mt-5 mx-auto">
      <h1 className="w-50 p-2 text-center bg-slate-200">
        KYC Validation Links
      </h1>
      <div className="p-2 flex w-full justify-evenly flex-row flex-wrap">
        <div className="w-1/3 bg-white p-4 mx-auto mt-5 flex flex-col gap-2 flex-wrap">
          <h1>KYC Contact details Validation Links</h1>
          <a href="https://camskra.com/emvalidation.aspx">
            <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
              <h1>CVL – KRA</h1>
              <FaExternalLinkSquareAlt />
            </div>
          </a>
          <a href="https://validate.cvlindia.com/CVLKRAVerification_V1/">
            <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
              <h1>CVL KRA</h1>
              <FaExternalLinkSquareAlt />
            </div>
          </a>
          <a href="https://kra.ndml.in/kra/ckyc/#/initiate">
            <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
              <h1>NDML KRA</h1>
              <FaExternalLinkSquareAlt />
            </div>
          </a>
          <a href="https://www.karvykra.com/KYC_Validation/Default.aspx">
            <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
              <h1>KARVY KRA</h1>
              <FaExternalLinkSquareAlt />
            </div>
          </a>
        </div>
        <div className="w-1/3 bg-white p-4 mx-auto mt-5 flex flex-col gap-2 flex-wrap">
          <h1>KYC PAN Aadhaar Validation Links</h1>
          <a href="https://camskra.com/pan_aadhaarlink.aspx">
            <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
              <h1>CAMS KRA</h1>
              <FaExternalLinkSquareAlt />
            </div>
          </a>
          <a href="https://validate.cvlindia.com/CVLKRAVerification_V1/">
            <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
              <h1>CVL KRA</h1>
              <FaExternalLinkSquareAlt />
            </div>
          </a>
          <a href="https://kra.ndml.in/kra/ckyc/#/initiate">
            <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
              <h1>NDML KRA</h1>
              <FaExternalLinkSquareAlt />
            </div>
          </a>
          <a href="https://www.karvykra.com/KYC_Validation/Default.aspx">
            <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
              <h1>KARVY KRA</h1>
              <FaExternalLinkSquareAlt />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
