import React from "react";

const page = () => {
  return (
    <div>
      <p className="text-gray-500 nps_para">
        You have the option to select fund allocation pattern for your
        investment across various asset classes vide exercising (i) Active
        Choice (ii) Auto Choice.
      </p>
      <p className="text-gray-500 nps_para mt-2">
        <b>Active Choice:</b>&nbsp;This option allows you the freedom to design
        the portfolio by voluntarily distributing investments among 4 asset
        classes as below:
      </p>
      <p className="text-gray-500 nps_para mt-2">
        <b>Equity (E):</b>&nbsp;This is a &apos;High risk – High Return&apos;
        option as the funds are invested in equity Subscriber can choose to
        invest up to 75% in this asset class.
      </p>
      <p className="text-gray-500 nps_para mt-2">
        <b>Corporate Bonds (C):</b>&nbsp;Funds are invested in fixed income
        bearing debt instruments.
      </p>
      <p className="text-gray-500 nps_para mt-2">
        <b>Government Securities (G):</b>&nbsp;Funds are invested in Government
        Securities.
      </p>
      <p className="text-gray-500 nps_para mt-2">
        <b>Alternate Assets (A): </b>&nbsp;Funds are invested in real estate and
        infrastructure funds. Maximum capping is 5% investment since this is an
        extremely risky investment.
      </p>
      <p className="text-gray-500 nps_para mt-2">
        <b>Auto Choice- Life Cycle Fund:: </b>&nbsp;In case &apos;Active
        Choice&apos; as described above is not selected, the contribution funds
        will be invested in a pre-defined proportion depending on your age. The
        exposure will be higher in equity at a younger age and will be moderated
        progressively to get a balance among high, medium and low risk
        investment.
      </p>
      <p className="text-gray-500 nps_para mt-2">
        For example, allocation in equity till the age of 36 years is 50% in
        &quot;E&quot; , 30% in &quot;C&quot; and 20% in &quot;G&quot; asset
        class. After the age of 36, asset allocation starts decreasing from
        &quot;E&quot; and &quot;C&quot; and increases in &quot;G&quot; till it
        reaches 10% in &quot;E&quot; & &quot;C&quot; and 80% in &quot;G&quot;
        asset class.
      </p>
      <h1 className="text-gray-700 nps_heading">
        You have three pre-defined option under Auto Choice,
      </h1>
      <p className="text-gray-500 nps_para mt-2">
        <b>LC 75 (Aggressive)</b>
        <br />
        <b>LC 50 (Moderate)</b>
        <br />
        <b>LC 25 (Conservative)</b>
      </p>
      <p className="text-gray-500 nps_para mt-1">
        You may select the Auto Choice investment option as per your risk
        appetite. LC stand for Life Cycle and the number represents the maximum
        equity exposure. Refer to the following table to understand your
        investment pattern as per your age.
      </p>
      <p className="text-gray-500 nps_para mt-1">
        If you choose Auto Choice LC 75 (Aggressive), till the age of 35 your
        equity exposure is maximum at 75%. As your age increases the equity
        exposures automatically decreases and Debt investment (Government
        Security and Corporate Bonds) automatically increases.
      </p>
    </div>
  );
};

export default page;
