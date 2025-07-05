import React from "react";
import "./MFPopup.css";
import bDot from "../../../assets/Dot-Icon-Blue.webp";
import Image from "next/image";

function AccountStatement() {
  return (
    <div className="MFPopup">
      <h1>What is statement of account?</h1>
      <p>
        A document issued by the mutual fund, which gives details of their
        transactions and holdings of an investor.
      </p>
      <h1>
        Within how much time a person should receive the Account Statement?
      </h1>
      <p>
        Mutual funds are required to dispatch certificates or statements of
        accounts within six weeks from the date of closure of the initial
        subscription of the scheme. In case of close-ended schemes, the
        investors would get either a demat account statement or unit
        certificates as these are traded in the stock exchanges. In case of
        open-ended schemes, a statement of account is issued by the mutual fund
        within 30 days from the date of closure of initial public offer of the
        scheme. The procedure of repurchase is mentioned in the offer document
      </p>
      <h1>Can I get my account statement and other communication on email?</h1>
      <p>
        Yes, you can get email communication instead of the physical
        communication of the following: <br />
        Account Statement, OR <br />
        Quarterly Newsletter & Annual Report, OR <br />
        Communication on change of Address, Bank, etc. <br />
        You need to provide your email id and subscribe for the above at the
        time of investing by ticking at the relevant column of the application
        form / common transaction form.
      </p>
      <h1>I have multiple accounts in a fund. Can I consolidate?</h1>
      <p>
        Yes, you can consolidate multiple accounts in a fund. The pre-requisite
        for consolidation is that all static details like Address, Bank, Mode of
        Holding; Unit holders etc… have to be identical across all accounts in a
        fund. Upon receipt of a valid request, consolidation into a single
        account would take place.
      </p>
      <h1>How do I get a duplicate account statement?</h1>
      <p>An account statement can be obtained from the following sources: -</p>
      <ul>
        <li>
          <Image width={10} height={10} src={bDot} alt="Point" className="PointBlueImg" />
          Requesting any of the CAMS SERVICE Centers
        </li>
        <li>
          <Image width={10} height={10} src={bDot} alt="Point" className="PointBlueImg" />
          Writing / email / phone to back office at CAMS or its SERVICE Centers
        </li>
        <li>
          <Image width={10} height={10} src={bDot} alt="Point" className="PointBlueImg" />
          Requesting through CAMS Website under Account Information -
        </li>
        <li>
          <Image width={10} height={10} src={bDot} alt="Point" className="PointBlueImg" />
          Email robot service sends the account statement to the registered
          email id in no time
        </li>
        <li>
          <Image width={10} height={10} src={bDot} alt="Point" className="PointBlueImg" />
          Requesting through CAMS Website under Query / Complaints -
        </li>
        <li>
          <Image width={10} height={10} src={bDot} alt="Point" className="PointBlueImg" />
          Email / physical account statement would be sent to the Investor at
          their registered address
        </li>
      </ul>
      <h1>I have changed my residence. What should I do?</h1>
      <p>
        You have to inform the nearest CAMS SERVICE CENTRE / concerned AMC in
        writing, appropriately signed, so that they can make changes in the
        database. Alternatively, you can submit a request at the CAMS website to
        record the change by logging on to the Account Information with a PIN
        reference under Investors section. An acknowledgement will be sent
        reflecting the change
      </p>
      <h1>I have a new bank account. What should I do?</h1>
      <p>
        You have to inform the nearest CAMS SERVICE CENTRE / concerned AMC in
        writing, appropriately signed, so that they can make the changes in
        their database. Alternatively, you can submit a request at the CAMS
        website to record the change by logging on to the Account Information
        with a PIN reference under Investors section. An acknowledgement will be
        sent reflecting the change.
      </p>
    </div>
  );
}

export default AccountStatement;
