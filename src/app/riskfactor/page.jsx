
export default function InvestmentDisclaimer() {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          {/* Main Disclaimer */}
          <div className="space-y-5 text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              Investments in Mutual Funds are subject to Market Risks. Read all
              scheme related documents carefully before investing. Mutual Fund
              Schemes do not assure or guarantee any returns. Past performances
              of any Mutual Fund Scheme may or may not be sustained in future.
              There is no guarantee that the investment objective of any
              suggested scheme shall be achieved.
            </p>

            <p>
              All existing and prospective investors are advised to check and
              evaluate the Exit loads and other cost structure (TER) applicable
              at the time of making the investment before finalizing on any
              investment decision for Mutual Funds schemes.
            </p>

            <p>
              We deal in Regular Plans only for Mutual Fund Schemes and earn a
              Trailing Commission on client investments. Disclosure For
              Commission earnings is made to clients at the time of investments.
            </p>

            <p>
              Option of Direct Plan for every Mutual Fund Scheme is available to
              investors offering advantage of lower expense ratio. We are not
              entitled to earn any commission on Direct plans. Hence we do not
              deal in Direct Plans.
            </p>
          </div>

          {/* Information Disclaimer */}
          <div className="mt-8 border-t border-slate-200 pt-8">
            <h2 className="mb-4 text-lg font-semibold text-slate-900 sm:text-xl">
              Information Disclaimer
            </h2>

            <div className="space-y-5 text-sm leading-7 text-slate-700 sm:text-base">
              <p>
                The information on this site is for informational purposes
                only. Credit and Vault Financial Services, its affiliates and
                content licensors assume no liability for any inaccurate,
                delayed or incomplete information, nor for any actions taken in
                reliance thereon.
              </p>

              <p>
                The information contained about each individual and firm has
                been supplied by such individual or firm without verification
                by us. Prior to making any investment decision, it is
                recommended that you consult directly with the individual or
                firm and seek advice from a qualified investment advisor.
              </p>
            </div>
          </div>

          {/* Fixed Deposit Disclaimer */}
          <div className="mt-8 border-t border-slate-200 pt-8">
            <h2 className="mb-4 text-lg font-semibold text-slate-900 sm:text-xl">
              Fixed Deposit Disclaimer
            </h2>

            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              Credit and Vault Financial Services is only acting as a
              broker/manager to the fixed deposit schemes and other deposits of
              the companies. We shall, in no manner whatsoever, be responsible
              for repayment of deposit, payment of interest or any other
              deficiency in service by the company.
            </p>
          </div>

          {/* General Mutual Fund Disclaimer */}
          <div className="mt-8 border-t border-slate-200 pt-8">
            <p className="text-sm font-medium leading-7 text-slate-700 sm:text-base">
              Mutual funds are subject to market risk. Please read the offer
              document carefully before investing. Past performance may or may
              not be sustained in future.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="mt-8 rounded-xl bg-slate-900 px-5 py-6 text-center sm:px-8 sm:py-8">
            <p className="text-sm leading-6 text-slate-300 sm:text-base">
              To avail our services or more information, please contact us.
            </p>

            <a
              href="/Contact"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

