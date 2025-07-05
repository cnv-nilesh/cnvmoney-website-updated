import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NpsCharges = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        className="text-gray-500"
        style={{ color: "gray" }}
      >
        FEES AND CHARGES
      </AccordionSummary>
      <hr className=""></hr>
      <AccordionDetails>
        <h1 className="text-gray-700 nps_heading">
          NPS has one of the lowest service charges among similar investment
          products. These charges are regulated by PFRDA.
        </h1>
        <p className="text-gray-500 nps_para">
          **Persistency fee is payable to such POPs to which the subscriber is
          associated for more than 6 months in a financial year
        </p>
        <p className="text-gray-500 nps_para">
          *GST and other levies, as applicable, will be levied as per the
          existing tax law
        </p>
        <p className="text-gray-500 nps_para">
          *KYC verification charges of eNPS application Rs 125 + taxes
        </p>
        <p className="text-gray-500 nps_para">
          *Processing of Exit / Withdrawal @0.125% of Corpus with Minimum ₹125/-
          and Max ₹500/- other taxes / regulatory levies applicable from time to
          time.
        </p>
        <h1 className="text-gray-700 nps_heading">NPS Facilities</h1>
        <p className="text-gray-500 nps_para">
          NPS on mobile Application: A mobile app for NPS Subscribers. You can
          view your NPS account, scheme holdings, latest Net Asset Value (NAV)
          and the total value of the schemes through this app. You can view the
          transaction statement for a particular financial year, as well as
          details of last five contributions. You can switch among fund
          managers, asset classes and change the allocation ratio.
        </p>
        <p className="text-gray-500 nps_para mt-1">
          You can login to your NPS account using the following links.
        </p>
        <h1 className="text-gray-700 nps_heading">
          Facilities available in Subscriber&apos;s login:
        </h1>
        <p className="text-gray-500 nps_para mt-1">View profile details</p>
        <p className="text-gray-500 nps_para mt-1">Transaction Statement</p>
        <p className="text-gray-500 nps_para mt-1">Statement of Holding</p>
        <p className="text-gray-500 nps_para mt-1">Contribution Statement</p>
        <p className="text-gray-500 nps_para mt-1">
          Transaction through OTP authentication
        </p>
        <p className="text-gray-500 nps_para mt-1">Contribution</p>
        <p className="text-gray-500 nps_para mt-1">Tier II withdrawal</p>
        <p className="text-gray-500 nps_para mt-1">Scheme Preference change</p>
        <p className="text-gray-500 nps_para mt-1">
          One Way Switch (from Tier II to Tier I)
        </p>
        <p className="text-gray-500 nps_para mt-1">Reprint of PRAN Card</p>
        <p className="text-gray-500 nps_para mt-1">Change of contact details</p>
        <p className="text-gray-500 nps_para mt-1">
          Change of address using Aadhaar authentication
        </p>
        <p className="text-gray-500 nps_para mt-1">Grievance facility</p>
        <p className="text-gray-500 nps_para mt-1">Various Views</p>
        <p className="text-gray-500 nps_para mt-1">E-PRAN view and download</p>
        <p className="text-gray-500 nps_para mt-1">NAV details</p>
        <p className="text-gray-500 nps_para mt-1">Tier II details</p>
        <p className="text-gray-500 nps_para mt-1">
          POP (Point Of Presence) details
        </p>
        <p className="text-gray-500 nps_para mt-1">Facilities outside login:</p>
        <p className="text-gray-500 nps_para mt-1">Contribution</p>
        <p className="text-gray-500 nps_para mt-1">Tier II activation</p>
        <p className="text-gray-500 nps_para mt-1">IPIN reset</p>
      </AccordionDetails>
    </Accordion>
  );
};

export default NpsCharges;
