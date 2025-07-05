"use client";
import React from "react";
import TableOfContents from "../../components/Table of Content/TableOfContents";
import bDot from "../../assets/Dot-Icon-Blue.webp";
import Image from "next/image";

const headers = [
  { title: "What is Health Insurance ?", id: "header1" },
  {
    title: "Types of Health Insurance Policies",
    id: "header2",
  },
  { title: "Benefits of Health Insurance Policies", id: "header3" },
  { title: "Conclusion", id: "header4" },
];
function HealthInsurance() {
  return (
    <>
      <div>
        <TableOfContents headers={headers} />
        <div className="Insurance-main">
          <h1 id="header1">What is Health Insurance ?</h1>
          <p>
            Health insurance is an insurance policy that provides financial
            assistance for medical and hospital expenses. Pays the secretary for
            medical expenses incurred due to illness or injury, according to the
            terms and conditions of the policy. Health insurance policies in
            India are provided by various public and private insurance
            companies. These policies are designed to cover a wide range of
            medical expenses, including hospital fees, medical expenses, medical
            examinations, surgeries, and other medical expenses.
          </p>
          <h1 id="header2">Types of Health Insurance Policies</h1>
          <ul>
            <li>
              <h3>
                <Image src={bDot} alt="Point" width={40} height={40} />{" "}
                Individual Health Insurance Policy :{" "}
              </h3>
              <p>
                This policy covers the medical expenses of an individual. The
                insured pays the premium and receives the specified health
                benefits.
              </p>
            </li>
            <li>
              <h3>
                <Image src={bDot} alt="Point" width={40} height={40} /> Family
                Floater Health Insurance Policy :{" "}
              </h3>
              <p>
                {" "}
                This policy covers the health expenses of the whole family. The
                insured pay only one premium and the whole family is insured.
              </p>
            </li>
            <li>
              <h3>
                <Image src={bDot} alt="Point" width={40} height={40} /> Senior
                Citizen Health Insurance Policy :{" "}
              </h3>
              <p>
                {" "}
                This policy is designed for the elderly. It covers medical
                expenses related to age-related diseases.
              </p>
            </li>
            <li>
              <h3>
                <Image src={bDot} alt="Point" width={40} height={40} /> Critical
                Health Policy :{" "}
              </h3>
              <p>
                This policy covers cancer, heart disease, kidney failure, etc.
                Covers critical medical expenses such as The right to an income
                payment if the insured is diagnosed with a medical condition.
              </p>
            </li>
            <li>
              <h3>
                <Image src={bDot} alt="Point" width={40} height={40} /> Group
                Health Insurance Policy :{" "}
              </h3>
              <p>
                This policy applies to groups such as employees of an
                organization. Wages are paid by the institution and the
                employee.
              </p>
            </li>
          </ul>
          <h1 id="header3">Benefits of Health Insurance Policies</h1>
          <ul>
            <li>
              <h3>
                <Image src={bDot} alt="Point" width={40} height={40} /> Cashless
                Hospitalization :{" "}
              </h3>
              <p>
                Most of the health insurance plans provide cashless
                hospitalization. Any insured hospital network can receive
                treatment without paying cash.
              </p>
            </li>
            <li>
              <h3>
                <Image src={bDot} alt="Point" width={40} height={40} /> Tax
                Benefits :{" "}
              </h3>
              <p>
                {" "}
                Premiums paid for health insurance are eligible for tax relief
                under section 80D of the Income Tax Act.
              </p>
            </li>
            <li>
              <h3>
                <Image src={bDot} alt="Point" width={40} height={40} /> Coverage
                for Pre-Existing Diseases :{" "}
              </h3>
              <p>
                It is a health insurance policy that covers existing diseases
                after a waiting period of 2-4 years.
              </p>
            </li>
            <li>
              <h3>
                <Image src={bDot} alt="Point" width={40} height={40} />{" "}
                Additional Coverage :{" "}
              </h3>
              <p>
                {" "}
                Some health insurance, critical illness, ambulance fee, etc.
                provides additional coverage for
              </p>
            </li>
            <li>
              <h3>
                <Image src={bDot} alt="Point" width={40} height={40} /> Lifetime
                Renewal :{" "}
              </h3>{" "}
              <p>
                The Health Insurance Policy is renewable for life. This ensures
                that policyholders are insured for their entire life.
              </p>
            </li>
          </ul>

          <div id="header4">
            <h2>In Summary,</h2>
            <p>
              Health Insurance is an important financial instrument that
              protects individuals and families from high medical costs. There
              are many health insurance policies available in India so it is
              important to choose a policy based on one{"'"}s needs and budget.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthInsurance;
