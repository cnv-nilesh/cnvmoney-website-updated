import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const NpsEntities = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        className="text-gray-500"
        style={{ color: "gray" }}
      >
        ENTITIES INVOLVED IN NPS
      </AccordionSummary>
      <hr className=""></hr>
      <AccordionDetails>
        <h1 className="text-gray-700 nps_heading">
          Regulator has appointed multiple agencies for different NPS services
          to ensure better transparency and efficiency.
        </h1>
        <p className="text-gray-500 nps_para mt-2">
          <b>Pension Fund Regulatory and Development Authority (PFRDA)</b> -
          PFRDA is a regulator for NPS which was set up by the Government of
          India on August 23, 2003. PFRDA promotes old age income security by
          establishing, developing and regulating pension funds and protects the
          interests of subscribers in schemes of pension funds and related
          matters.{" "}
        </p>
        <p className="text-gray-500 nps_para mt-2">
          <b> NPS Trust - </b>
          This is the Trust body formed for NPS. It is responsible for taking
          care of the funds under NPS by prudently monitoring / auditing
          portfolio of Pension Fund Manager on regular basis to ensure
          subscriber interests.
        </p>
        <p className="text-gray-500 nps_para mt-2">
          <b>Central Recordkeeping Agency (CRA) -</b> The regulator PFRDA has
          appointed K-Fin Technology Private Ltd & NSDL e-Governance
          Infrastructure Limited to maintain data and records of NPS
          subscribers. They are responsible for recordkeeping, administration
          and customer service functions for all subscribers of NPS.
        </p>
        <p className="text-gray-500 nps_para mt-2">
          <b>Point of Presence (POP) -</b>HDFC Bank Ltd. is registered with
          PFRDA as a Point of Presence (POP). We are the first point of
          interaction between You and the NPS architecture. We shall facilitate
          the subscriber registration, submission of contributions, request for
          any modification or exit/withdrawal.
        </p>
        <p className="text-gray-500 nps_para mt-2">
          <b>Pension Fund Manager (PFMs) (As on November 21, 2022) -</b>Your
          contributions are managed by the PFMs who are appointed by PFRDA and
          are governed by regulatory guidelines. You have complete flexibility
          to choose any of the following 10 PFMs:
        </p>
        <li className="text-gray-500 nps_para mt-1">
          Aditya Birla SunLife Pension Management Limited
        </li>
        <li className="text-gray-500 nps_para mt-1">
          Axis Pension Fund Management Limited
        </li>
        <li className="text-gray-500 nps_para mt-1">
          HDFC Pension Management Company Limited
        </li>
        <li className="text-gray-500 nps_para mt-1">
          ICICI Prudential Pension Funds Management Company Limited
        </li>
        <li className="text-gray-500 nps_para mt-1">
          Kotak Mahindra Pension Fund Limited
        </li>
        <li className="text-gray-500 nps_para mt-1">
          LIC Pension Fund Limited
        </li>
        <li className="text-gray-500 nps_para mt-1">
          Max Life Pension Fund Management Limited.
        </li>
        <li className="text-gray-500 nps_para mt-1">
          SBI Pension Funds Private Limited
        </li>
        <li className="text-gray-500 nps_para mt-1">
          Tata Pension Management Limited.
        </li>
        <li className="text-gray-500 nps_para mt-1">
          UTI Retirement Solutions Limited
        </li>
        <h1 className="text-gray-500 nps_heading mt-2">
          Annuity Service Providers (ASPs) (As on April 28, 2022) -
        </h1>
        <p className="text-gray-500 nps_para mt-1">
          After completion of 60 years of age, you will have option to select
          Annuity Plans offered by below mentioned Annuity Service Providers
          appointed by PFRDA :
        </p>
        <li className="text-gray-500 nps_para mt-1">
          HDFC Life Insurance Company Limited
        </li>
        <li className="text-gray-500 nps_para mt-1">
          Life Insurance Corporation of India Limited
        </li>
        <li className="text-gray-500 nps_para mt-1">
          ICICI Prudential Life Insurance Company Limited
        </li>
        <li className="text-gray-500 nps_para mt-1">
          SBI Life Insurance Company Limited
        </li>
        <li className="text-gray-500 nps_para mt-1">
          Star Union Dai-Ichi Life Insurance Co. Ltd
        </li>
        <li className="text-gray-500 nps_para mt-1">
          Bajaj Allianz Life Insurance Company Limited
        </li>
        <li className="text-gray-500 nps_para mt-1">
          Edelweiss Tokio Life Insurance Company Limited
        </li>
        <li className="text-gray-500 nps_para mt-1">
          India First Life Insurance Company Limited
        </li>
        <li className="text-gray-500 nps_para mt-1">
          Canara HSBC Oriental Bank of Commerce Life Insurance Company Limited
        </li>
        <li className="text-gray-500 nps_para mt-1">
          Kotak Mahindra Life Insurance Company Limited
        </li>
        <li className="text-gray-500 nps_para mt-1">
          Max Life Insurance Co. ltd.
        </li>
        <li className="text-gray-500 nps_para mt-1">
          Tata AIA Life Insurance Company Limited
        </li>
        <li className="text-gray-500 nps_para mt-1">
          PNB MetLife India Insurance Co. Ltd
        </li>
      </AccordionDetails>
    </Accordion>
  );
};

export default NpsEntities;
