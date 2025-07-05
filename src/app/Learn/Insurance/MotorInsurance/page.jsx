"use client";
import React from "react";
import TableOfContents from "../../../components/Table of Content/TableOfContents";
import "../Insurance.css";
import bDot from "../../../assets/Dot-Icon-Blue.webp";
import Image from "next/image";

const headers = [
  { title: "What is Motor Insurance ?", id: "header1" },
  {
    title: "Types of Motor Insurance Policies",
    id: "header2",
  },
  { title: "Benefits of Motor Insurance Policies", id: "header3" },
  { title: "Conclusion", id: "header4" },
];

function MotorInsurance() {
  return (
    <>
      <div className="Insurance-mainContainer">
        <div>
          <TableOfContents headers={headers} />
          <div className="Insurance-main">
            <h1 id="header1">What is Motor Insurance ?</h1>
            <p>
              Motor Insurance is a type of insurance policy that provides
              financial protection against loss or damage to a vehicle and any
              third-party liability arising from the use of the vehicle. In
              India, it is mandatory for every vehicle owner to have a motor
              insurance policy.
            </p>
            <h1 id="header2">Types of Motor Insurance Policies</h1>
            <ul>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} />{" "}
                  Third-Party Liability Insurance :{" "}
                </h3>
                <p>
                  This policy provides coverage for any third-party liability
                  arising from the use of the vehicle, including property
                  damage, injury, or death. It is mandatory for every vehicle
                  owner to have this policy.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} />{" "}
                  Comprehensive Insurance :{" "}
                </h3>
                <p>
                  {" "}
                  This policy provides coverage for loss or damage to the
                  insured vehicle due to accidents, natural calamities, theft,
                  fire, or any other external event. It also includes
                  third-party liability coverage.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} />{" "}
                  Personal Accident Cover :{" "}
                </h3>
                <p>
                  This add-on covers the policyholder in case of an accident,
                  providing compensation for disability, death, or permanent
                  injuries.
                </p>
              </li>
            </ul>
            <br></br>
            <h1 id="header3">Benefits of Motor Insurance Policies</h1>
            <ul>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} />{" "}
                  Financial Protection :{" "}
                </h3>
                <p>
                  {" "}
                  Motor insurance provides financial protection against loss or
                  damage to the insured vehicle and any third-party liability
                  arising from the use of the vehicle.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} /> Legal
                  Compliance :{" "}
                </h3>
                <p>
                  {" "}
                  It is mandatory for every vehicle owner to have at least a
                  third-party liability insurance policy to comply with the
                  Motor Vehicles Act.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} /> Add-On
                  Covers :{" "}
                </h3>
                <p>
                  {" "}
                  Motor insurance policies offer add-on covers such as personal
                  accident cover, zero depreciation cover, engine protection
                  cover, etc., providing additional protection for the
                  policyholder.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} />{" "}
                  Cashless Claims :{" "}
                </h3>
                <p>
                  Many motor insurance policies offer cashless claims
                  facilities, allowing policyholders to get their vehicle
                  repaired at network garages without paying cash.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} /> No
                  Claim Bonus :{" "}
                </h3>{" "}
                <p>
                  {" "}
                  Policyholders can avail of a no-claim bonus for every
                  claim-free year, reducing their premium amount during policy
                  renewal.
                </p>
              </li>
            </ul>

            <div id="header4">
              <h2>In Summary,</h2>Motor Insurance is an essential requirement
              for every vehicle owner in India, providing financial protection
              against loss or damage to the vehicle and any third-party
              liability. It is important to choose the right policy based on
              individual requirements and budget, and to maintain a clean
              driving record to avail of the benefits of the policy.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MotorInsurance;
