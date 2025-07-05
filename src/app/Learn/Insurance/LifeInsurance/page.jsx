"use client";
import React from "react";
import TableOfContents from "../../../components/Table of Content/TableOfContents";
import "../Insurance.css";
import bDot from "../../../assets/Dot-Icon-Blue.webp";
import Image from "next/image";

const headers = [
  { title: "What is Life Insurance ?", id: "header1" },
  {
    title: "Types of Life Insurance Policies",
    id: "header2",
  },
  { title: "Benefits of Life Insurance Policies", id: "header3" },
  { title: "Conclusion", id: "header4" },
];

function LifeInsurance() {
  return (
    <>
      <div className="Insurance-mainContainer">
        <div>
          <TableOfContents headers={headers} />
          <div className="Insurance-main">
            <h1 id="header1">What is Life Insurance ?</h1>
            <p>
              Life insurance is a type of insurance policy that provides
              financial protection to the policyholder{"'"}s family or
              dependents in case of the policyholder{"'"}s death. It pays a lump
              sum amount to the nominee or beneficiary of the policy in case of
              the policyholder{"'"}s demise during the policy term.In India,
              life insurance policies are offered by several public and private
              insurance companies. These policies are designed to provide
              financial security to the policyholder{"'"}s family in case of
              unexpected events.
            </p>
            <h1 id="header2">Types of Life Insurance Policies</h1>
            <ul>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} /> Term
                  Insurance Policy :{" "}
                </h3>
                <p>
                  This policy provides coverage for a specified term or
                  duration. It pays a lump sum amount to the nominee or
                  beneficiary of the policy in case of the policyholder{"'"}s
                  death during the policy term. It is the most affordable type
                  of life insurance policy.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} /> Whole
                  Life Insurance Policy :{" "}
                </h3>
                <p>
                  {" "}
                  This policy provides coverage for the entire life of the
                  policyholder. It pays a lump sum amount to the nominee or
                  beneficiary of the policy in case of the policyholder{"'"}s
                  death.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} />{" "}
                  Endowment Insurance Policy :{" "}
                </h3>
                <p>
                  This policy provides coverage for a specified term or
                  duration. It pays a lump sum amount to the nominee or
                  beneficiary of the policy in case of the policyholder{"'"}s
                  death during the policy term. Additionally, it also pays a
                  maturity benefit if the policyholder survives the policy term.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} /> Money
                  Back Insurance Policy :{" "}
                </h3>
                <p>
                  {" "}
                  This policy provides coverage for a specified term or
                  duration. It pays a part of the sum assured at regular
                  intervals during the policy term. It also pays a lump sum
                  amount to the nominee or beneficiary of the policy in case of
                  the policyholder{"'"}s death.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} />{" "}
                  Unit-Linked Insurance Plan (ULIP) :{" "}
                </h3>
                <p>
                  This policy provides coverage for a specified term or
                  duration. It also allows the policyholder to invest in
                  different funds such as equity, debt, or balanced funds. The
                  returns from these investments are linked to the market
                  performance.
                </p>
              </li>
            </ul>
            <br></br>
            <h1 id="header3">Benefits of Life Insurance Policies</h1>
            <ul>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} />{" "}
                  Financial Security :{" "}
                </h3>
                <p>
                  Life insurance policies provide financial security to the
                  policyholder{"'"}s family or dependents in case of the
                  policyholder{"'"}s death.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} /> Tax
                  Benefits :{" "}
                </h3>
                <p>
                  Premiums paid towards life insurance policies are eligible for
                  tax deductions under Section 80C of the Income Tax Act.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} /> Loan
                  Against Policy :{" "}
                </h3>
                <p>
                  Policyholders can avail loans against their life insurance
                  policies in case of financial emergencies.
                </p>
              </li>
              <li>
                <h3>
                  <Image src={bDot} alt="Point" width={40} height={40} /> Wealth
                  Creation :{" "}
                </h3>
                <p>
                  {" "}
                  Some life insurance policies such as endowment policies and
                  ULIPs provide the opportunity for wealth creation by investing
                  in different funds.
                </p>
              </li>
            </ul>

            <div id="header4">
              <h2>In Summary,</h2>Life Insurance is an important financial tool
              that provides financial security to the policyholder{"'"}s family
              or dependents in case of unexpected events. With a wide range of
              life insurance policies available in India, it is important to
              choose the right policy based on individual requirements and
              budget.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LifeInsurance;
