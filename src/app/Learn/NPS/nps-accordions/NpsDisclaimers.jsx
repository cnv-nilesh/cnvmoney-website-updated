import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NpsDisclaimers = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        className="text-gray-500"
        style={{ color: "gray" }}
      >
        DISCLAIMERS
      </AccordionSummary>
      <hr className=""></hr>
      <AccordionDetails>
        <p className="text-gray-500 nps_para">
          Please refer to the following T&C for NPS
        </p>
        <p className="text-gray-500 nps_para mt-2">
          1. HDFC Bank only facilitates NPS account opening by subscribers.
          Participation by customers for registration of National Pension System
          (NPS) is purely voluntary.
        </p>
        <p className="text-gray-500 nps_para mt-2">
          2. HDFC Bank shall not be liable for any disputes with respect to the
          services provided by Central Recordkeeping Agencies “Protean eGov
          Limited” and &quot;K-Fintech&quot; to customer.
        </p>
        <p className="text-gray-500 nps_para mt-2">
          3. While filling details for PAN based registration on HDFC
          Bank&apos;s website, all KYC details must be filled as per Bank
          records. In case of details in NPS and Bank do not match, the KYC
          authorization will be declined.
        </p>
        <p className="text-gray-500 nps_para mt-2">
          4. On rejection of KYC authorization, subscriber will have to re-apply
          with correct details or get form and documents verified by Bank Branch
          and send to CRAs
        </p>
        <p className="text-gray-500 nps_para mt-2">
          5. If the minimum annual contribution is not done for Tier 1 or Tier 2
          accounts, the accounts are &apos;freezed&apos; as per guidelines.
          Funds cannot be transferred from Tier 1 to Tier 2 accounts.
        </p>
        <p className="text-gray-500 nps_para mt-2">
          6. An incomplete enrolment will be available for completing later
          basis the acknowledgement ID. However, the ID will be active only for
          15 days.
        </p>
        <p className="text-gray-500 nps_para mt-2">
          7. Any Indian Citizen, OCI, NRI between the age of 18 to 70 years can
          register for NPS account as per PFRDA.
        </p>
        <p className="text-gray-500 nps_para mt-2">
          {" "}
          -You cannot have multiple NPS account. If your existing account is not
          accessible due to any issue, please contact your POP for resolution.
        </p>
        <p className="text-gray-500 nps_para mt-2">
          - On clicking on any NPS application link on HDFC Bank website, you
          will be redirected to the selected CRA&apos;s portal. This facility is
          provided only for the convenience of the customer and HDFC Bank shall
          not be liable for any disputes with respect to the said service
          provided by the selected CRA (Protean eGov Limited or K-Fin Pvt. Ltd.)
          to the customer.
        </p>
      </AccordionDetails>
    </Accordion>
  );
};

export default NpsDisclaimers;
