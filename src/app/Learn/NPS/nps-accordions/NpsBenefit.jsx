import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const NpsBenefit = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        className="text-gray-500"
        style={{ color: "gray" }}
      >
        BENEFITS OF SIP
      </AccordionSummary>
      <hr className=""></hr>
      <AccordionDetails>
        <p className="text-gray-500 nps_para mt-1">
          HDFC Bank gives you a platform to invest or contribute in your NPS
          account through SIP (Systematic Investment Plan).Systematic Investment
          Plan (SIP) is an approach which involves investing a set amount at
          regular intervals rather than investing a larger lump sum amount in
          one shot.
        </p>
        <p className="text-gray-500 nps_para mt-1">
          1. Using SIP as a mode of investments makes it simple and hassle free
        </p>
        <p className="text-gray-500 nps_para mt-1">
          2. SIP allows you the convenience of timely and small investments on a
          regular basis. Ideal for subscribers looking to invest a specified
          amount on a regular basis and is lighter on your wallet too
        </p>
        <p className="text-gray-500 nps_para mt-1">
          {" "}
          3. Helps you plan for your goals better as with the setting up of SIP
          you no longer will need to make lump sum payments for your NPS account
        </p>
        <p className="text-gray-500 nps_para mt-1">
          4. SIP helps you reap benefits of the &apos;Power of Compounding&apos;
          by investing regularly over a long period of time
        </p>
        <p className="text-gray-500 nps_para mt-1">
          5. With Rupee Cost Averaging you need not time the market anymore
        </p>
      </AccordionDetails>
    </Accordion>
  );
};

export default NpsBenefit;
