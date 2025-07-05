import React from "react";
import "./MFPopup.css";
import bDot from "../../../assets/Dot-Icon-Blue.webp";
import Image from "next/image";

function SIP() {
  return (
    <div className="MFPopup">
      <h1>What is Systematic Investment Plan (SIP)?</h1>
      <p>
        A Systematic Investment Plan (SIP) is a simple method of investing, used
        across the world as a means to accumulate wealth. It works the same way
        as a recurring deposit account. SIP involves investing a fixed sum of
        money in a specific investment scheme, on a regular basis, for a
        pre-determined number of periods.
      </p>
      <h1>What are the advantages of investing in SIP?</h1>
      <ul>
        <li>
          <Image width={10} height={10} src={bDot} alt="Point" className="PointBlueImg" />
          Helps you to invest disposable funds each month.
        </li>
        <li>
          <Image width={10} height={10} src={bDot} alt="Point" className="PointBlueImg" />
          Gives you the benefits of rupee-cost averaging
        </li>
        <li>
          <Image width={10} height={10} src={bDot} alt="Point" className="PointBlueImg" />
          Relieves you of trying to time the market
        </li>
        <li>
          <Image width={10} height={10} src={bDot} alt="Point" className="PointBlueImg" />
          Helps you to reach your financial goals
        </li>
      </ul>
      <h1>How do I apply for SIP?</h1>
      <ul>
        <li>
          <Image width={10} height={10} src={bDot} alt="Point" className="PointBlueImg" />
          Fill up a single SIP form, and a single application form.
        </li>
        <li>
          <Image width={10} height={10} src={bDot} alt="Point" className="PointBlueImg" />
          Draw post-dated cheques (minimum 5 cheques).
        </li>
        <li>
          <Image width={10} height={10} src={bDot} alt="Point" className="PointBlueImg" />
          Per cheque minimum SIP amount, there are many funds that have their
          minimum amount as low as can be as low as Rs 500/-
        </li>
        <li>
          <Image width={10} height={10} src={bDot} alt="Point" className="PointBlueImg" />
          Auto Debit Facility
        </li>
      </ul>
      <h1>
        Are there any minimum amount limits for subsequent purchase in same
        scheme?
      </h1>
      <p>
        Yes, there is a minimum amount limits for subsequent purchase in same
        scheme.
      </p>
    </div>
  );
}

export default SIP;
