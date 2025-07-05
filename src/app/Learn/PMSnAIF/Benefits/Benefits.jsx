import React from "react";
import "../CategoriesAIF.css";

function Customizable() {
  return (
    <div className="AIFPopup">
      <p>
        The structure of an AIF can be tailored to fit a specific investing
        strategy, whether it&apos;s exposure to a single sector or diversification
        across asset classes.
      </p>
    </div>
  );
}

function Flexibility() {
  return (
    <div className="AIFPopup">
      <p>
        The AIF may raise funds from any investor, whether Indian, foreign, or
        non-resident Indian (NRI)
      </p>
    </div>
  );
}

function LargeCorpus() {
  return (
    <div className="AIFPopup">
      <p>
        Because AIFs act like mutual funds, they pool capital to create a larger
        corpus. The collected capital might be used to meet certain investment
        goals
      </p>
    </div>
  );
}

export { Customizable, Flexibility, LargeCorpus };
