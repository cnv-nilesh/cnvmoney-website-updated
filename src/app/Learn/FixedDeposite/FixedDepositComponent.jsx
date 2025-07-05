import React from "react";
import "./FixedDeposits.css";
export const FixedDepositComponent = ({ data }) => {
  return (
    <div className="FD-main">
      {data.map((items, id) => (
        <div key={id} className="FD-main">
          <h1 id={items.headerId} className=" text-gray-700">
            <span className="header_background">{items.header}</span>
          </h1>
          <p className="text-gray-500 fixed_para">{items.info}</p>
        </div>
      ))}
    </div>
  );
};

export default FixedDepositComponent;
