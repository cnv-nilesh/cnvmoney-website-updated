"use client";

import { useMemo, useState } from "react";

const amcs = [
  ["360 ONE Mutual Fund (Formerly IIFL)", "MF/067/11/02"],
  ["Aditya Birla Sun Life Mutual Fund", "MF/020/94/8"],
  ["Axis Mutual Fund", "MF/061/09/2"],
  ["Bajaj Finserv Mutual Fund", "MF/079/23/02"],
  ["Bandhan Mutual Fund (Formerly IDFC)", "MF/042/00/3"],
  ["Baroda BNP Paribas Mutual Fund", "MF/049/04/5"],
  ["Canara Robeco Mutual Fund", "MF/004/93/4"],
  ["DSP Mutual Fund", "MF/036/96/1"],
  ["Edelweiss Mutual Fund", "MF/058/08/2"],
  ["Franklin Templeton Mutual Fund", "MF/026/96/8"],
  ["Groww Mutual Fund (Formerly Indiabulls)", "MF/068/11/03"],
  ["HDFC Mutual Fund", "MF/044/00/6"],
  ["Helios Mutual Fund", "MF/081/23/04"],
  ["HSBC Mutual Fund", "MF/046/02/5"],
  ["ICICI Prudential Mutual Fund", "MF/003/93/3"],
  ["Invesco India Mutual Fund", "MF/052/06/1"],
  ["JM Financial Mutual Fund", "MF/015/94/6"],
  ["Kotak Mahindra Mutual Fund", "MF/038/98/6"],
  ["LIC Mutual Fund", "MF/012/94/5"],
  ["Mahindra Manulife Mutual Fund", "MF/071/16/01"],
  ["Mirae Asset Mutual Fund", "MF/055/08/1"],
  ["Motilal Oswal Mutual Fund", "MF/063/09/4"],
  ["Navi Mutual Fund", "MF/069/12/01"],
  ["Nippon India Mutual Fund", "MF/035/95/4"],
  ["NJ Mutual Fund", "MF/075/21/01"],
  ["Old Bridge Mutual Fund", "MF/082/23/05"],
  ["PGIM India Mutual Fund", "MF/065/10/02"],
  ["PPFAS Mutual Fund (Parag Parikh)", "MF/073/12/03"],
  ["Quant Mutual Fund", "MF/057/08/2"],
  ["Samco Mutual Fund", "MF/077/21/03"],
  ["SBI Mutual Fund", "MF/009/93/3"],
  ["Shriram Mutual Fund", "MF/017/94/8"],
  ["Sundaram Mutual Fund", "MF/034/96/2"],
  ["Tata Mutual Fund", "MF/023/95/2"],
  ["Taurus Mutual Fund", "MF/002/93/2"],
  ["Trust Mutual Fund", "MF/074/21/02"],
  ["UTI Mutual Fund", "MF/048/03/2"],
  ["WhiteOak Capital Mutual Fund", "MF/078/22/01"],
];

export default function CodeOfConduct() {
  const [search, setSearch] = useState("");

  const filteredAMCs = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return amcs;

    return amcs.filter(([name, registrationNumber]) =>
      `${name} ${registrationNumber}`.toLowerCase().includes(value)
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              AMFI Code of Conduct
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Code of Conduct &amp; Operational Master Guidelines
            </h1>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Regulatory guidelines and professional standards applicable to
              Mutual Fund Distributors, covering investor dealings, compliance,
              infrastructure, client obligations and industry integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_280px]">
          {/* Content */}
          <article className="min-w-0">
            {/* Source Information */}
            <div className="mb-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Circular Source
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-800">
                    Association of Mutual Funds in India (AMFI)
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Release Date
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-800">
                    January 14, 2026
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Framework Scope
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    MFD Registration, Empanelment, &amp; Fiduciary Protocols,
                    MFI/MFD-CIR/32/2025-26 — Statutory Compilation Compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Regulatory Overview */}
            <section className="mb-10">
              <div className="rounded-xl border-l-4 border-blue-600 bg-blue-50 p-5 sm:p-6">
                <h2 className="text-base font-bold text-slate-900">
                  Regulatory Directive Overview
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                  Pursuant to Chapter 15 of the SEBI Master Circular and Clause
                  15.7 of the SEBI Mutual Funds Framework, all entities engaged
                  in the distribution and marketing of mutual fund units must
                  be formally registered with AMFI, hold a valid ARN/EUIN code
                  mapping, and strictly fulfill the operational boundaries of
                  the industry Code of Conduct.
                </p>
              </div>
            </section>

            {/* Section I */}
            <section className="mb-12">
              <SectionHeading>
                I. Purpose and Scope of the Code
              </SectionHeading>

              <div className="space-y-5 text-sm leading-7 text-slate-700 sm:text-base">
                <p>
                  <strong className="text-slate-900">a.</strong> This Code of
                  Conduct ("Code") requires Mutual Fund Distributors to
                  demonstrate the core values of being a fiduciary by
                  establishing professional standards in their dealings with
                  the investors, Asset Management Companies ("AMCs"), and other
                  distributors so as to exemplify the values of transparency,
                  competency, fairness, integrity and thereby seek to inspire
                  and maintain trustworthiness in the profession of
                  distribution of Mutual Fund schemes.
                </p>

                <p>
                  <strong className="text-slate-900">b.</strong> This Code
                  applies to all persons and entities who are registered with
                  the Association of Mutual Funds in India (AMFI) as mutual
                  fund distributors i.e. holders of AMFI Registration Number
                  ("ARN") (referred to as "MFDs" in this Code) and is binding on
                  all the Directors/partners, members, sub-distributors,
                  employees and representatives of the MFDs (collectively
                  referred to as "Representatives" in this Code).
                </p>

                <p>
                  The term "MFDs" is deemed to include the sales personnel of
                  the MFDs engaged in marketing, sale and distribution of
                  mutual fund products.
                </p>
              </div>
            </section>

            {/* Section II */}
            <section className="mb-12">
              <SectionHeading>
                II. Obligations of the MFDs
              </SectionHeading>

              {/* 1 */}
              <SubSectionHeading>
                1. Fundamental Fiduciary Principles (Chapter 7)
              </SubSectionHeading>

              <ContentBlock title="A. Paramount Client Interest">
                <p>
                  Distributors must prioritize the investor&apos;s interest
                  above all commercial objectives, executing meticulous
                  objective matching and independent due diligence across all
                  product mapping functions. Recommendation structures must be
                  aligned solely with asset suitability parameters rather than
                  individual scheme financial incentives or commercial targets.
                </p>

                <p>
                  MFDs should try to avoid conflict of interest as far as
                  possible, and when it cannot be avoided, they shall ensure
                  that appropriate disclosures are made to the investors, and
                  that the investors are treated fairly. Further, while selling
                  Mutual Fund products of their group/affiliate/associates, MFDs
                  shall make appropriate disclosures to the investors regarding
                  the conflict of interest arising from distribution of such
                  Mutual Fund scheme.
                </p>
              </ContentBlock>

              <ContentBlock title="B. Prohibitions on Rebating & Inducements">
                <p>
                  MFDs shall not rebate or pass-back commission to investors and
                  shall refrain from attracting investors through inducement of
                  rebate or gifts / gift-vouchers etc. MFDs are explicitly
                  prohibited from passing back, splitting, or rebating
                  commission components to the investor, either directly or
                  indirectly.
                </p>

                <p>
                  Attracting investment traffic through gifts, gift vouchers,
                  cash handbacks, or artificial side incentives is treated as a
                  major ethical violation under AMFI protocols.
                </p>
              </ContentBlock>

              <ContentBlock title="C. Prevention of Churning and Malpractices">
                <p>
                  Intermediaries must strictly abstain from market manipulation
                  setups, including over-transacting, asset churning to
                  accumulate transaction codes, splitting applications to
                  bypass systematic thresholds, or participating in parameter
                  defaults or misrepresentative layout disclosures.
                </p>

                <p>
                  MFDs shall not collude or undertake malpractices such as:
                </p>

                <BulletList
                  items={[
                    "encouraging over transacting and churning of investments to earn higher commissions.",
                    "splitting applications to earn higher transaction charges / commissions.",
                    "participating in payment defaults (such as dishonoring of cheques) or diversion of funds.",
                    "making false claims for or participating in wrongful dividend / redemption payouts.",
                    "carrying out unethical practices such as churning, selling unsuitable products to clients, selling of units of schemes of any mutual fund, directly or indirectly, by making false or misleading statements, concealing or omitting material facts of the scheme, concealing the associated risk factors of the schemes, etc.",
                  ]}
                />
              </ContentBlock>

              {/* 2 */}
              <SubSectionHeading>
                2. Compliance Related Obligations
              </SubSectionHeading>

              <BulletList
                items={[
                  "MFDs shall adhere to Securities and Exchange Board of India (Mutual Funds) Regulations, 1996 (\"Mutual Fund Regulations\") and guidelines/circulars issued by SEBI and AMFI from time to time, pertaining to distributors, selling, distribution and advertising practices and code of conduct.",
                  "MFDs must also adhere to restrictions prescribed under other SEBI Regulations as may be applicable to their marketing, selling and distribution activities.",
                  "MFDs shall comply with the Know Your Distributor (\"KYD\") norms prescribed by AMFI.",
                  "MFDs should endeavor to be fully conversant with the key provisions of the Scheme Information Document (\"SID\"), Statement of Additional Information (\"SAI\") and Key Information Memorandum (\"KIM\").",
                  "MFDs should seek information from their clients about their financial status, investment experience and investment objectives in order to assess suitability.",
                  "MFDs shall ensure that their Representatives have the necessary education and experience to perform their respective services.",
                  "MFDs and their Representatives shall maintain confidentiality of all information relating to the AMCs and investors.",
                  "MFDs and their Representatives shall comply with the Data Sharing Principles prescribed by AMFI and applicable laws on Personal Data Protection.",
                  "MFDs shall adhere to contractual agreements with AMC relating to data privacy.",
                  "MFDs shall ensure that they and their sub-distributors are compliant with SEBI regulations, AMFI guidelines and code of conduct at all times.",
                ]}
              />

              {/* 3 */}
              <SubSectionHeading>
                3. Infrastructure, Record Keeping and Other Related Obligations
              </SubSectionHeading>

              <div className="space-y-6">
                <ContentBlock title="Physical Infrastructure">
                  <p>
                    MFDs should maintain necessary infrastructure to support the
                    AMCs in maintaining high service standards to investors and
                    ensure that critical operations such as
                    forwarding/submission of forms and cheques etc. to
                    AMCs/RTAs are appropriately supported.
                  </p>
                </ContentBlock>

                <ContentBlock title="Digital Infrastructure">
                  <p>
                    In view of increased initiatives towards digitization of
                    mode of performance of services, including new client
                    on-boarding, transaction processing and ongoing servicing
                    for investors, MFDs should adopt adequate information
                    technology related infrastructure, including cyber security
                    measures to maintain confidentiality of electronic data
                    during collection, transmission and storage.
                  </p>
                </ContentBlock>

                <ContentBlock title="Internal Control, Financial and Operational Resources">
                  <p>
                    The MFDs should have internal control procedures and
                    financial and operational systems and processes which can
                    be reasonably expected to detect and prevent mis-selling as
                    well as mitigate financial loss arising from fraud and
                    other dishonest acts, professional misconduct or omissions,
                    theft, or force majeure events.
                  </p>
                </ContentBlock>

                <ContentBlock title="Record Keeping">
                  <p>
                    MFDs should maintain adequate records in relation to
                    clients, whether in physical or digital form, as applicable,
                    in compliance with applicable laws and SEBI regulations,
                    including KYC records as well as correspondence with the
                    investors on particular scheme or transaction suitability
                    and consent/dissent of the investors.
                  </p>
                </ContentBlock>
              </div>

              {/* 4 */}
              <SubSectionHeading>
                4. Client Related Obligations
              </SubSectionHeading>

              <BulletList
                items={[
                  "MFDs shall provide full and updated information on schemes, as provided to them by the AMCs, to the investors including SAI, SID, addenda, performance reports, fact sheets, portfolio disclosures and brochures.",
                  "MFDs shall highlight risk factors of each scheme to their investors, desist from making any misrepresentation or exaggerated statements or conceal associated risk factors of a scheme.",
                  "MFDs shall disclose to the investors all material information including all commissions received or receivable by them for different competing schemes.",
                  "MFDs shall disclose to their clients the list of mutual funds they are affiliated with and inform clients that the information provided is limited to products being distributed/promoted by the MFDs.",
                  "If the MFD is an associate/group company/sponsor of AMC, the MFD shall disclose all material information about its association and the total amount of commission received/receivable.",
                  "MFDs cannot deal in Direct Plans and shall ensure that digital platforms clearly disclose that the scheme is a Regular Plan involving payment of commission.",
                  "MFDs shall not provide any indicative portfolio or indicative yield or indicative return for any particular scheme or transaction.",
                  "MFDs shall not mis-sell mutual fund products on the basis of indicative or assured return or regular income.",
                  "It shall be explained to clients that MF investments are not guaranteed or assured return products and that the principal amount may be exposed to risk of loss.",
                  "MFDs shall endeavor to resolve investor grievances/complaints arising out of marketing, sale and distribution activities.",
                  "MFDs shall use marketing material provided by AMCs and shall not design their own marketing materials without prior written approval.",
                  "MFDs shall ensure that comparisons, if any, are made with similar and comparable schemes/products along with complete facts.",
                ]}
              />

              {/* Application Forms */}
              <ContentBlock title="Prevention of Fraudulent or Incorrect Applications">
                <p>
                  To prevent submission of fraudulent, incomplete, tampered or
                  incorrect forms or applications, MFDs shall set up adequate
                  training and processes to ensure that:
                </p>

                <BulletList
                  nested
                  items={[
                    "information in application forms is filled diligently with the investor's own, accurate and complete information.",
                    "any additions or revisions to investor contact details are done only upon receipt of such information from the investor or authorized person.",
                    "application forms submitted by investors are not tampered with by inserting, deleting or modifying information.",
                    "EUIN of the concerned employee of the MFD is written on application forms for identification.",
                  ]}
                />
              </ContentBlock>

              {/* 5 */}
              <SubSectionHeading>
                5. Other Obligations
              </SubSectionHeading>

              <BulletList
                items={[
                  "Individual MFDs shall obtain NISM certification and register themselves with AMFI and obtain ARN and EUIN from AMFI.",
                  "Non-individual MFDs shall register themselves with AMFI and obtain ARN and ensure their sales personnel hold valid NISM certification and AMFI registration / EUIN.",
                  "MFDs shall quote a valid ARN and EUIN in the client's application/transaction feed.",
                  "MFDs shall ensure that their Representatives undergo training on proper conduct for sales, marketing and distribution activities.",
                  "MFDs shall cooperate with and provide assistance to AMCs, AMFI, SEBI and competent authorities when required.",
                  "MFDs shall promptly intimate AMC and AMFI about changes in status, constitution, address, contact details or other information provided at the time of obtaining ARN.",
                  "MFDs shall refund to AMCs incentives or commissions subject to clawback as per applicable regulations or AMC terms.",
                  "MFDs shall immediately notify AMC and AMFI if any Representative has committed an act amounting to moral turpitude or financial irregularities.",
                  "MFDs shall not use terms such as Adviser, Advisor, Financial Adviser, Investment Adviser, Wealth Adviser, Wealth Manager or similar names unless registered with SEBI as an Investment Adviser.",
                  "The name of an MFD should reflect the registration held by the entity and should not create an impression of performing a role for which the entity is not registered.",
                  "MFDs shall mention/display the tagline \"AMFI-registered Mutual Fund Distributor\" along with or below their name in all forms of communication.",
                ]}
              />

              {/* 6 */}
              <SubSectionHeading>
                6. Obligations Towards Integrity of the Mutual Fund Industry
              </SubSectionHeading>

              <BulletList
                items={[
                  "MFDs shall not indulge in fraudulent or unfair trade practices of any kind while marketing, selling or distributing any Mutual Fund scheme.",
                  "MFDs shall refrain from making false or defamatory statements about any AMC, AMFI, Mutual Fund schemes or other MFDs in any private or public forum.",
                  "MFDs shall maintain professional decorum, provide fair and balanced perspective and not participate in transmitting untrue statements or rumors.",
                  "Any written or oral communication should be based on facts and be presented in an unbiased manner so as not to mislead the public.",
                ]}
              />
            </section>

            {/* AMC Directory */}
            <section id="amc-directory">
              <SectionHeading>
                III. Empanelled Asset Management Companies Directory
              </SectionHeading>

              <p className="mb-6 text-sm leading-7 text-slate-600 sm:text-base">
                In adherence to multiple alliance visibility directives, below
                is a directory containing active SEBI identification markers
                across primary Indian fund houses empanelled with Credit & Vault.
              </p>

              {/* Search */}
              <div className="mb-5">
                <label
                  htmlFor="amc-search"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Search AMC
                </label>

                <div className="relative">
                  <input
                    id="amc-search"
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by AMC name or registration number..."
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-slate-500">
                  Showing{" "}
                  <span className="font-semibold text-slate-800">
                    {filteredAMCs.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-slate-800">
                    {amcs.length}
                  </span>{" "}
                  AMCs
                </p>
              </div>

              {/* Responsive Table */}
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-100">
                        <th className="px-4 py-4 text-xs font-bold uppercase tracking-wide text-slate-600 sm:px-6">
                          Asset Management Company (AMC) Name
                        </th>

                        <th className="px-4 py-4 text-xs font-bold uppercase tracking-wide text-slate-600 sm:px-6">
                          Mutual Fund SEBI Registration Number
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                      {filteredAMCs.length > 0 ? (
                        filteredAMCs.map(
                          ([name, registrationNumber], index) => (
                            <tr
                              key={registrationNumber}
                              className="transition hover:bg-slate-50"
                            >
                              <td className="px-4 py-4 text-sm font-medium text-slate-800 sm:px-6">
                                <div className="flex items-start gap-3">
                                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700">
                                    {index + 1}
                                  </span>

                                  <span>{name}</span>
                                </div>
                              </td>

                              <td className="px-4 py-4 font-mono text-sm text-slate-600 sm:px-6">
                                {registrationNumber}
                              </td>
                            </tr>
                          )
                        )
                      ) : (
                        <tr>
                          <td
                            colSpan={2}
                            className="px-6 py-12 text-center text-sm text-slate-500"
                          >
                            No AMC found matching your search.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </article>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                On this page
              </p>

              <nav className="mt-4 space-y-1 text-sm">
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 font-medium text-blue-700 hover:bg-blue-50"
                >
                  Purpose &amp; Scope
                </a>

                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50"
                >
                  Fundamental Principles
                </a>

                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50"
                >
                  Compliance Obligations
                </a>

                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50"
                >
                  Infrastructure
                </a>

                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50"
                >
                  Client Obligations
                </a>

                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50"
                >
                  Other Obligations
                </a>

                <a
                  href="#amc-directory"
                  className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50"
                >
                  AMC Directory
                </a>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

/* --------------------------------
   Reusable Components
--------------------------------- */

function SectionHeading({ children }) {
  return (
    <h2 className="mb-6 border-b border-slate-200 pb-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
      {children}
    </h2>
  );
}

function SubSectionHeading({ children }) {
  return (
    <h3 className="mb-5 mt-10 text-xl font-bold text-slate-900 sm:text-2xl">
      {children}
    </h3>
  );
}

function ContentBlock({ title, children }) {
  return (
    <div className="mb-7 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h4 className="mb-4 text-base font-bold text-slate-900 sm:text-lg">
        {title}
      </h4>

      <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
        {children}
      </div>
    </div>
  );
}

function BulletList({ items, nested = false }) {
  return (
    <ul
      className={`space-y-3 text-sm leading-7 text-slate-700 sm:text-base ${
        nested
          ? "ml-5 list-[circle] sm:ml-7"
          : "ml-5 list-disc sm:ml-7"
      }`}
    >
      {items.map((item, index) => (
        <li key={index} className="pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}
