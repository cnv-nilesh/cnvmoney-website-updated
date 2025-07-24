import React from "react";

const page = () => {
  return (
    <div className="container p-4 drop-shadow-md mt-4  mx-auto">
      <h2 className="mt-4 p-2 bg-slate-200 max-w-52 text-center">
        Transcation Status
      </h2>
      <div className="bg-white drop-shadow-md p-4 w-full mt-5">
        <h2>Check Transaction Status</h2>
        <div className="flex flex-row gap-4 mt-5">
          <a href="https://www.camsonline.com/Investors/Transactions/Other-services/Transaction-Status-Enquiry">
            <button className="p-2 bg-[#0143a2] rounded-md shadow-md w-25 text-white cursor-pointer">
              cams
            </button>
          </a>
          <a href="https://mfs.kfintech.com/investor/General/InvTransactionStatusNew">
            <button className="p-2 bg-[#0143a2] rounded-md shadow-md w-25 text-white cursor-pointer">
              Karvi
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
