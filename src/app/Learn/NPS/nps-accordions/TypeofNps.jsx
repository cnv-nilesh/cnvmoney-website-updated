import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const TypeofNps = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        className="text-gray-500"
        style={{ color: "gray" }}
      >
        TYPE OF NPS ACCOUNT
      </AccordionSummary>
      <hr className=""></hr>
      <AccordionDetails>
        <h1 className="text-gray-700 nps_heading">
          You have the option to open two sub accounts under the same Permanent
          Retirement Account Number (PRAN). These sub accounts are called as
          tiers in NPS:
        </h1>
        <p className="text-gray-500 nps_para mt-1">
          Tier I: It is also called as pension account. Contributions upto Rs.
          50,000 made in this account are eligible for additional deduction from
          taxable income under section 80CCD (1B). This is over and above limit
          of Rs 1.5 lakhs- under section 80C. Withdrawals are restricted and
          subject to terms and conditions.
        </p>
        <p className="text-gray-500 nps_para mt-1">
          Tier II: You can invest an additional amount in Tier II NPS account.
          Subscriber is free to withdraw his entire accrued corpus under Tier II
          at any point of time. In case you have not contributed even the
          initial contribution towards Tier II a/c, it will be automatically
          deactivated as per process. No tax benefits are available in this
          account. Funds from Tier II can be transferred to Tier I
        </p>
        <h1 className="text-gray-700 nps_heading">Models of NPS Accounts</h1>
        <p className="text-gray-500 nps_para mt-1">
          NPS accounts are primarily of two types, Individual NPS account (All
          Citizens Model) and Corporate NPS account.
        </p>
        <h1 className="text-gray-700 nps_heading"> All Citizen Model</h1>
        <p className="text-gray-500 nps_para mt-1">
          In an Individual NPS account, the subscriber (Account holder) is the
          only contributor. All selections pertaining to Scheme preference,
          Investment choice, Annuity Service Provider, etc. are done by the
          subscriber alone. Any citizen of India can voluntarily choose to open
          an Individual NPS account to avail tax benefits on investments and to
          ensure regular income post retirement. Entry age is from 18 to 70
          years.
        </p>
        <h1 className="text-gray-700 nps_heading"> Corporate Model</h1>
        <p className="text-gray-500 nps_para mt-1">
          In Corporate NPS account, the subscriber and the employer can both
          contribute to the subscriber&apos;s NPS account. A corporate entity
          will have to register for corporate NPS for the employees to be able
          to avail corporate NPS benefit. Know more about corporate NPS
        </p>
      </AccordionDetails>
    </Accordion>
  );
};

export default TypeofNps;
