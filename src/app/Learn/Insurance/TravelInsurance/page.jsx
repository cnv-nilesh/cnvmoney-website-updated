"use client";
import React from "react";
import TableOfContents from "../../../components/Table of Content/TableOfContents";
import "../Insurance.css";
import bDot from "../../../assets/Dot-Icon-Blue.webp";
import Image from "next/image";

const headers = [
  { title: "What is Travel Insurance ?", id: "header1" },
  {
    title: "Types of Travel Insurance Policies",
    id: "header2",
  },
  { title: "Benefits of Travel Insurance Policies", id: "header3" },
  { title: "Conclusion", id: "header4" },
];

function TravelInsurance() {
  return (
    <>
      <div className="Insurance-mainContainer">
        <div>
          <TableOfContents headers={headers} />
          <div className="Insurance-main">
            <h1 id="header1">What is Travel Insurance ?</h1>
            <p>
              Travel insurance is an insurance policy that provides financial
              protection against unforeseen events that may occur during travel.
              It protects the insured against a variety of travel-related risks,
              including trip cancellations, flight delays or cancellations, loss
              of luggage, medical emergencies, and personal liability shifts.
              Travel insurance in India is provided by various public and
              private insurance companies. These policies are designed to cover
              domestic and international travel.
            </p>
            <h1 id="header2">Types of Travel Insurance Policies</h1>
            <ul>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} /> Single
                  Travel Insurance Policy : :
                </h3>
                <p>
                  This policy covers the insured for one trip and is valid for a
                  certain time.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} />{" "}
                  Multiple Insurance Policy: :{" "}
                </h3>
                <p>
                  This policy covers the insured who makes more than one trip in
                  a certain period.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} /> Family
                  Travel Insurance Policy :
                </h3>
                <p>
                  This policy covers the insured, their spouse, and children for
                  one or more trips.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} /> Senior
                  Citizen Travel Insurance Policy :
                </h3>
                <p>
                  This insurance is designed for seniors and covers the costs of
                  treatment related to age-related illnesses while traveling.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} />
                  Student Travel Insurance Policy :
                </h3>
                <p>
                  This insurance, issued for students studying abroad, covers
                  health expenses, personal injuries, and other travel-related
                  risks.
                </p>
              </li>
            </ul>
            <h1 id="header3">Benefits of Travel Insurance Policies</h1>
            <ul>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} /> Trip
                  Cancellation/Interruption :
                </h3>
                <p>
                  A travel insurance policy that covers the cancellation or
                  interruption of a trip due to various circumstances such as
                  illness, injury, or natural disaster.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} />
                  Medical Expenses :
                </h3>
                <p>
                  Travel insurance will cover medical expenses due to illness or
                  injury while traveling.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} />
                  Personal Accident Cover :
                </h3>
                <p>
                  It is a travel insurance policy that covers death and loss of
                  life during travel.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} />
                  Baggage and Personal Belongings :
                </h3>
                <p>
                  Travel insurance policies cover lost, stolen, or damaged
                  baggage and personal belongings.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} />
                  Emergency Assistance :
                </h3>
                <p>
                  The travel insurance policy provides 24/7 emergency
                  assistance, including emergency evacuation, repatriation, and
                  legal assistance.
                </p>
              </li>
            </ul>

            <div id="header4">
              <h2>In Summary,</h2>Travel Insurance is an important financial
              instrument that provides peace of mind and protection against
              unforeseen events that may occur during your travel.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TravelInsurance;
