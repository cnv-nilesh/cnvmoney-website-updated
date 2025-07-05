import React from "react";
import "./MFPopup.css";

function Dividend() {
  return (
    <div className="MFPopup">
      <h1>How do I get dividends?</h1>
      <p>
        Dividends would be paid by cheques, drawn in the name of the sole
        holder/first-named holder (as determined by the account and mailed to
        the last address recorded in the books). The Bank name and the Account
        no. as specified in the records will also be mentioned in the cheque.
        The cheque will be payable at par in all the cities designated by the
        Fund. In case of other cities, you will be paid by a Demand Draft after
        deducting the demand draft charges (if any and depending upon the
        concerned AMC).
      </p>
      <h1>What are Dividend re-investment plans? Do loads prevail?</h1>
      <p>
        It is combination feature of both growth and dividend plan. Dividends
        are declared as in a dividend plan. But are not received instead are
        reinvested in the scheme <br />
        No, there is no load on re-investment of dividends into the same fund.
        In a dividend reinvestment plan, the dividend is reinvested in the
        scheme itself. Hence instead of receiving dividend, the unit holders
        receive units. Thus units would be allotted under the dividend
        reinvestment.
      </p>
      <h1>I have not received my dividends what do I do?</h1>
      <p>Write a letter to AMC for not receiving the dividend.</p>
    </div>
  );
}

export default Dividend;
