"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./../NPS/nps.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const link = [
  {
    name: "HOME",
    link: "/Learn/NPS",
  },
  {
    name: "FEATURES",
    link: "/Learn/NPS/features",
  },
  {
    name: "INVESTMENT OPTION",
    link: "/Learn/NPS/investment-option",
  },
  {
    name: "HOW TO OPEN NPS ACCOUNT",
    link: "/Learn/NPS/NPSaccount",
  },
  {
    name: "CORPORATE BENEFIT",
    link: "/Learn/NPS/corporate-benefit",
  },
];

export const DropComponent = () => {
  const pathname = usePathname();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        className="text-gray-500 drop_icon shadow-lg"
        style={{ backgroundColor: "#0143a2", color: "white" }}
      >
        Know more about NPS
      </AccordionSummary>
      <AccordionDetails>
        {link.map((item, id) => (
          <li key={id} className="text-gray-500 nps_para p-1">
            <Link
              href={item.link}
              className={`${pathname === item.link ? "link_active" : ""}`}
            >
              {item.name}
            </Link>
            <hr className="p-1"></hr>
          </li>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default DropComponent;
