import React from "react";
import "../CategoriesAIF.css";

function CategoryOneAIF() {
  return (
    <div className="AIFPopup">
      <p>
        AIFs that invest in start-ups or social enterprise funds, infrastructure
        funds, SME funds, and so on are classified as Category I AIF. For the
        government or regulators, they are frequently deemed socially or
        economically viable.
      </p>
    </div>
  );
}

function CategoryTwoAIF() {
  return (
    <div className="AIFPopup">
      <p>
        Funds that do not use leverage or borrow for any reason other than to
        cover operational needs that do not fall under Categories I or III. This
        is where Private Equity Funds usually fall.
      </p>
    </div>
  );
}

function CategoryThreeAIF() {
  return (
    <div className="AIFPopup">
      <p>
        Funds that engage in a variety of or complex trading techniques, such as
        investing in listed or unlisted derivatives, fall into Category III.
        Hedge funds are typically included in this category. Open-ended funds
        are classified as Category III AIFs whereas closed-ended funds are
        classified as Category I and II AIFs.
      </p>
    </div>
  );
}

export { CategoryOneAIF, CategoryTwoAIF, CategoryThreeAIF };
