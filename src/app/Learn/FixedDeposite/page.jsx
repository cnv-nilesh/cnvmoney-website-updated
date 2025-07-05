import React from "react";
import TableOfContents from "../../components/Table of Content/TableOfContents";

import "./FixedDeposits.css";
import FixedDepositComponent from "./FixedDepositComponent";
import { fixedDepositeData } from "./FixedDepositData";

const headers = [
  { title: "What is Fixed Deposits ?", id: "header1" },
  {
    title:
      "Difference Between Corporate Fixed Deposits and Bank Fixed Deposits",
    id: "header2",
  },
  { title: "Rate of Interest", id: "header3" },
  { title: "Tenure Period", id: "header4" },
  { title: "Risk Investment", id: "header5" },
  { title: "Premature Withdrawal Penalty", id: "header6" },
  { title: "Taxation", id: "header7" },
  { title: "Conclusion", id: "header8" },
];
function FixedDeposits() {
  return (
    <>
      <div className="FD-mainContainer">
        {/* <CustomPopup /> */}
        <div>
          <TableOfContents headers={headers} />
          <FixedDepositComponent
            data={fixedDepositeData}
          ></FixedDepositComponent>
        </div>
      </div>
    </>
  );
}

export default FixedDeposits;
