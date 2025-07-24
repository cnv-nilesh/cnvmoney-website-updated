import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className="container p-2 mt-5 mx-auto">
      <h1 className="w-50 p-2 text-center bg-slate-200">
        Verify your KYC Status
      </h1>
      <div className="p-2 flex w-full justify-evenly flex-row flex-wrap">
        <div className="w-1/3 bg-white p-4 mx-auto mt-5 flex flex-col gap-2 flex-wrap">
          <a href="https://www.cvlkra.com/Default.aspx">
            <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
              <h1>CVL – KRA</h1>
              <FaExternalLinkSquareAlt />
            </div>
          </a>
          <a href="https://kra.ndml.in/kra-web/jsps/pos/KYCClientInquiry.jsp">
            <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
              <h1>NDML – KRA</h1>
              <FaExternalLinkSquareAlt />
            </div>
          </a>
          <a href="https://www.nsekra.com/">
            <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
              <h1>NSE – KRA (DOTEX)</h1>
              <FaExternalLinkSquareAlt />
            </div>
          </a>
        </div>
        <div className="w-1/3 bg-white p-4 mx-auto mt-5 flex flex-col gap-2 flex-wrap">
          <a href="https://camskra.com/">
            <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
              <h1>CAMS – KRA</h1>
              <FaExternalLinkSquareAlt />
            </div>
          </a>
          <a href="https://www.karvykra.com/upansearchglobalwithpanexempt.aspx">
            <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
              <h1>KARVY - KRA</h1>
              <FaExternalLinkSquareAlt />
            </div>
          </a>
          <a href="https://www.mutualfundssahihai.com/en/kyc-check">
            <div className="p-2 flex justify-between mt-2 mb-2 drop-shadow-md bg-white cursor-pointer">
              <h1>KYC Status –AMFI</h1>
              <FaExternalLinkSquareAlt />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
