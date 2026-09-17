
"use client";

import React from "react";

const commissionData = [
  ["360 ONE Mutual Fund", "0.21%-1.13%", "0.04%-0.21%", "0.21%"],
  ["Aditya Birla Sun Life Mutual Fund", "0.6%-1.2%", "0.08%-0.7%", "0.70%"],
  ["Bandhan Mutual Fund", "0.76%-1.23%", "0.1%-0.85%", "0.89%"],
  ["DSP Mutual Fund", "0.63%-0.86%", "0.04%-0.60%", "0.65%"],
  ["Franklin Templeton Mutual Fund", "0.10%-1.05%", "0.04%-0.30%", "1.05%"],
  ["HDFC Mutual Fund", "0.53%-1.14%", "0.09%-0.68%", "0.78%"],
  ["Helios Mutual Fund", "0.85%-1.32%", "0.04%", ""],
  ["HSBC Mutual Fund", "0.54%-1.14%", "0.07%-0.55%", "1.00%"],
  ["ICICI Prudential Mutual Fund", "0.5%-1.29%", "0.04%", "0.75%"],
  ["Kotak Mahindra Mutual Fund", "0.15%-1.25%", "0.08%-0.82%", "0.91%"],
  ["Mahindra Manulife Mutual Fund", "0.93%-1.27%", "0.04%-0.84%", "1.10%"],
  ["PPFAS Mutual Fund", "0.3%-0.34%", "0.08%-0.34%", "1%"],
  ["SBI Mutual Fund", "0.34%-1.24%", "0.04%-0.72%", "0.85%"],
  ["Tata Mutual Fund", "0.95%-1.40%", "0.25%-0.70%", "1.05%"],
  ["WhiteOak Capital Mutual Fund", "0.80%-1.45%", "0.45%", "1.45%"],
  ["Union Mutual Fund", "1.01%-1.42%", "0.08%-0.56%", "1.08%"],
  ["Abakkus Mutual Fund", "0.93%-1.10%", "0.07%", ""],
  ["Axis Mutual Fund", "0.50%-0.97%", "0.17%-0.81%", "0.50%"],
  ["Bajaj Finserv Mutual Fund", "0.51%-1.32%", "0.04%-0.59%", "1.32%"],
  ["Bank of India Mutual Fund", "1.10%-1.45%", "0.03%-0.8%", "1.15%"],
  ["Baroda BNP Paribas Mutual Fund", "0.51%-1.61%", "0.04%-1.02%", "1.23%"],
  ["Canara Mutual Fund", "0.95%-1.55%", "0.41%-1.30%", "0.95%"],
  ["Edelweiss Mutual Fund", "0.34%-1.40%", "0.04%-0.65%", "1.27%"],
  ["Groww Mutual Fund", "0.20%-1.40%", "0.08%-0.86%", "1.35%"],
  ["Invesco Mutual Fund", "0.81%-1.19%", "0.13%-0.72%", "1.02%"],
  ["ITI Mutual Fund", "1.12%-1.45%", "0.07%-0.75%", "1.45%"],
  ["JM Financial Mutual Fund", "0.97%-1.47%", "0.38%-0.51%", "1.40%"],
  ["LIC Mutual Fund", "0.68%", "0.02%-0.42%", "0.68%"],
  ["Mirae Asset Mutual Fund", "0.42%-1.14%", "0.04%-0.59%", "0.59%"],
  ["Motilal Oswal Mutual Fund", "0.77%-1.3%", "0.1%-0.8%", "0.85%"],
  ["Nippon India Mutual Fund", "0.40%-0.85%", "0.17%-0.81%", "0.64%"],
  ["Old Bridge Mutual Fund", "0.72%-1.27%", "", ""],
  ["PGIM India Mutual Fund", "0.85%-1.50%", "0.05%-1.00%", "1.35%"],
  ["Quant Mutual Fund", "0.51%-0.97%", "0.76%", "0.64%"],
  ["Quantum Mutual Fund", "0.81%-1.14%", "0.30%", "1.14%"],
  ["Samco Mutual Fund", "1.1%-1.19%", "0.17%", "1.19%"],
  ["Sundaram Mutual Fund", "0.47%-1.14%", "0.17%-1.02%", "1.14%"],
  ["The Wealth Company Mutual Fund", "1.35%-1.60%", "0.15%", ""],
  ["Trust Mutual Fund", "1.09%-1.44%", "0.03%-0.42%", ""],
  ["UTI Mutual Fund", "0.85%-1.45%", "0.25%-0.95%", "1.05%"],
];

export default function CommissionDisclosures() {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">

        {/* Main Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* Header */}
          <div className="border-b border-slate-200 bg-white px-5 py-6 sm:px-8 sm:py-8 lg:px-10">

            <div className="mb-4 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-blue-600" />

              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Commission Disclosures
              </h1>
            </div>

            <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                As per SEBI guidelines, we have disclosed the various
                commissions received by Credit and Vault Financial Services
                from mutual fund companies below. The level of service provided
                or any recommendations made by Credit and Vault Financial
                Services are not influenced by the number of commissions
                received.
              </p>

              <p>
                The table below shows the commission structure applicable to
                Credit and Vault Financial Services from mutual fund companies.
              </p>
            </div>
          </div>

          {/* Table Section */}
          <div className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8">

            {/* Mobile Scroll Hint */}
            <div className="mb-3 flex items-center justify-between gap-3 lg:hidden">
              <p className="text-xs text-slate-500">
                Swipe horizontally to view all columns
              </p>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {commissionData.length} AMCs
              </span>
            </div>

            {/* Responsive Table */}
            <div className="overflow-hidden rounded-xl border border-slate-200">

              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] border-collapse text-left">

                  {/* Table Header */}
                  <thead>
                    <tr className="bg-slate-900 text-white">

                      <th className="sticky left-0 z-10 min-w-[280px] border-r border-slate-700 bg-slate-900 px-4 py-4 text-sm font-semibold sm:px-6">
                        AMC Name
                      </th>

                      <th className="min-w-[160px] px-4 py-4 text-center text-sm font-semibold sm:px-6">
                        Equity Funds
                      </th>

                      <th className="min-w-[160px] px-4 py-4 text-center text-sm font-semibold sm:px-6">
                        Debt Funds
                      </th>

                      <th className="min-w-[140px] px-4 py-4 text-center text-sm font-semibold sm:px-6">
                        ELSS
                      </th>

                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody className="divide-y divide-slate-200">

                    {commissionData.map(
                      ([amc, equity, debt, elss], index) => (
                        <tr
                          key={amc}
                          className="group transition-colors hover:bg-blue-50/50"
                        >

                          {/* AMC */}
                          <td className="sticky left-0 z-[1] border-r border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-800 group-hover:bg-blue-50 sm:px-6">
                            <div className="flex items-center gap-3">

                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-500">
                                {index + 1}
                              </span>

                              <span className="leading-6">
                                {amc}
                              </span>

                            </div>
                          </td>

                          {/* Equity */}
                          <td className="px-4 py-4 text-center text-sm font-medium text-slate-700 sm:px-6">
                            {equity || "—"}
                          </td>

                          {/* Debt */}
                          <td className="px-4 py-4 text-center text-sm font-medium text-slate-700 sm:px-6">
                            {debt || "—"}
                          </td>

                          {/* ELSS */}
                          <td className="px-4 py-4 text-center text-sm font-medium text-slate-700 sm:px-6">
                            {elss || "—"}
                          </td>

                        </tr>
                      )
                    )}

                  </tbody>
                </table>
              </div>
            </div>

            {/* Notes */}
            <div className="mt-8 space-y-4">

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <div className="space-y-3 text-sm leading-7 text-slate-600">

                  <p>
                    <strong className="font-semibold text-slate-900">
                      Equity-oriented schemes
                    </strong>{" "}
                    also include equity-oriented hybrid funds and equity
                    arbitrage funds.
                  </p>

                  <p>
                    <strong className="font-semibold text-slate-900">
                      Debt-oriented scheme
                    </strong>{" "}
                    includes all the schemes that do not fall under
                    equity-oriented schemes (except ELSS).
                  </p>

                </div>
              </div>
              <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
               Dear investors please note that investing / transacting through Regular Plans under mutual fund scheme involves distributor commission paid by the AMC’s .
              </p>

              <p>
               Direct Plans under mutual funds available without distributor commission directly via AMC website or MF Central portal. Please connect us for procedural guidance to transact directly on AMC /RTA portals.
              </p>
            </div>
              {/* Contact CTA */}
              <div className="flex flex-col gap-4 rounded-xl bg-slate-900 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">

                <div>
                  <h2 className="text-base font-semibold text-white sm:text-lg">
                    Need detailed commission information?
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    You may reach us for AMC / Scheme Wise Brokerage Structure
                    in detail.
                  </p>
                </div>

                <a
                  href="/Contact"
                  className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  Contact Us
                </a>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
