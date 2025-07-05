"use client";
import React, { useState } from "react";
import SmallPopup from "../../components/Popup/small Popup/SmallPopup";
import "./PMSnAIF.css";

import {
  CategoryOneAIF,
  CategoryTwoAIF,
  CategoryThreeAIF,
} from "./Categories/CategoriesAIF";
import { Customizable, Flexibility, LargeCorpus } from "./Benefits/Benefits";
import TableOfContents from "../../components/Table of Content/TableOfContents";

const Categories = [
  {
    id: 1,
    title: "Category I",
    desc: <CategoryOneAIF />,
  },
  {
    id: 2,
    title: "Category II",
    desc: <CategoryTwoAIF />,
  },
  {
    id: 3,
    title: "Category III",
    desc: <CategoryThreeAIF />,
  },
];
const Benefits = [
  {
    id: 1,
    title: "Customizable",
    desc: <Customizable />,
  },
  {
    id: 2,
    title: "Raising Resources Flexibility",
    desc: <Flexibility />,
  },
  {
    id: 3,
    title: "Have a Large Corpus",
    desc: <LargeCorpus />,
  },
];
const AIFheaders = [
  {
    title: "Everything to Know about Alternative Investment Fund (AIF)",
    id: "header1",
  },
  {
    title: "Types of Alternative Investment Fund (AIF)",
    id: "header2",
  },
  { title: "Benefits of Investing in AIFs", id: "header3" },
  { title: "Bottom Line", id: "header4" },
  { title: "Categories of AIF", id: "header5" },
  { title: "Benefits of AIF", id: "header6" },
  { title: "FAQ", id: "header7" },
];

const PMSheaders = [
  {
    title: "What is Portfolio Management Services (PMS) ?",
    id: "header1",
  },
  {
    title: "Who is an ideal PMS investor ?",
    id: "header2",
  },
  {
    title: "What are the modes through which I can make investments in PMS ?",
    id: "header3",
  },
  { title: "What is the tax treatment in PMS investment ?", id: "header4" },
  { title: "What are the benefits of PMS ?", id: "header5" },
  { title: "Who can invest in PMS ?", id: "header6" },
  { title: "Are there risks associated with PMS investments ?", id: "header7" },
];

const page = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const openPopup = (section) => {
    setSelectedSection(section);
    setIsOpen(true);
  };

  const closePopup = () => {
    setSelectedSection(null);
    setIsOpen(false);
  };
  return (
    <>
      <div className="PMSnAIF-mainContainer">
        <div className="tabs-container">
          <div
            className={`tab ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => handleTabClick("tab1")}
          >
            AIF
          </div>
          <div
            className={`tab ${activeTab === "tab2" ? "active shadow-lg" : ""}`}
            onClick={() => handleTabClick("tab2")}
          >
            PMS
          </div>
          <div style={{ left: activeTab === "tab1" ? "0%" : "50%" }}></div>
        </div>
        <div className="tabs-content">
          {activeTab === "tab1" && (
            <div className="AIF-mainContainer">
              <div className="AIF-main">
                <TableOfContents headers={AIFheaders} />
                <div className="AIF-Container text-gray-700 header_atf">
                  <p className="text-gray-500">
                    An Alternative Investment Fund, or AIF, is a confidentially
                    pooled investment vehicle developed or incorporated in India
                    that collects assets from expert investors, whether Indian
                    or global, for investing in line with a defined investment
                    policy for the welfare of its investors. AIFs can be formed
                    or incorporated as a corporation, trust, or other legal
                    entity (including limited liability partnerships). The SEBI
                    (Mutual Funds) Laws of 1996, the SEBI (Collective Investment
                    Schemes) Laws of 1999, or any other Board regulations
                    governing fund management do not apply to AIF.
                  </p>
                  <br />
                  <h1 id="header1" className="text-gray-700">
                    <span className="header_background">
                      Everything to Know about Alternative Investment Fund (AIF)
                    </span>
                  </h1>
                  <br />
                  <p className="text-gray-500">
                    The term &quot;alternative investment fund&quot;, refers to
                    the collection of pooled investment funds that infuse in
                    venture capital, private equity, hedge funds, managed
                    futures, and other types of investments. We can also say
                    that an AIF is a type of investment distinct from
                    traditional investment options such as stocks, bonds, and
                    other debt securities.
                    <br />
                    <br />
                    The Securities and Exchange Board of India{"'"}s Regulation
                    Act, 2012 defines an Alternative Investment Fund (SEBI).
                    AIFs can form as a corporation, a trust, or a Limited
                    Liability Partnership (LLP).
                    <br />
                    <br />
                    Generally, high-net-worth people and organizations engage in
                    Alternative Commitment Funds since, unlike Mutual Funds,
                    they need a large initial investment.
                  </p>
                  <br />
                  <h2 id="header2" className="text-gray-700 header_atf">
                    <span
                      className="header_background"
                      // style={{ transform: "skewX(-0.06turn)" }}
                    >
                      Types of Alternative Investment Fund (AIF)
                    </span>
                  </h2>
                  <br />
                  <p className="text-gray-500">
                    This category includes funds that invest in start-ups, small
                    and medium-sized firms (SMEs), and new businesses with
                    strong growth potential and is socially and economically
                    viable. Because these ideas have various effects on the
                    economy. With the terms of job and growth generation, the
                    government encourages with the plan of investment. These
                    funds have proved a lifeline for already-successful firms in
                    need of funding. Take a look at the many kinds of AIFs.
                  </p>
                  <br />
                  <h3 className="text-gray-700 header_atf">
                    {" "}
                    <span>1. Venture Capital Fund (VCF)</span>
                  </h3>
                  <br />
                  <p className="text-gray-500">
                    Venture Capital Funds invest in high-growth start-ups that
                    are experiencing cash constraints in the early stages of
                    their business and require capital to develop or expand
                    their operations. Because it is difficult for new firms and
                    entrepreneurs to get funds through the financial markets,
                    Venture Capital Funds have become the most popular option
                    for their funding needs.
                    <br />
                    <br />
                    They invest in a variety of businesses based on their
                    company characteristics, asset size, and product development
                    stage. Venture capital funds, unlike mutual funds and hedge
                    funds, concentrate on early-stage investments. Each investor
                    receives a proportional share in the firm that the VCF has
                    invested in, based on their investment.
                  </p>
                  <br />
                  <h3 className="text-gray-700 header_atf">
                    <span className="text-gray-700">
                      2. Infrastructure Fund (IF)
                    </span>
                  </h3>
                  <br />
                  <p className="text-gray-500">
                    The fund invests in public assets like road and rail
                    infrastructure, airports, and communication assets, among
                    other things. Investors that are positive about future
                    infrastructure growth can participate in the fund since the
                    infrastructure industry has high entry barriers and little
                    competition.
                    <br />
                    <br />
                    Infrastructure Fund investors might expect a mix of capital
                    growth and dividend income as a result of their investment.
                    When an Infrastructure Fund invests in initiatives that are
                    socially acceptable and practical, the government may offer
                    tax incentives.
                  </p>
                  <br />
                  <h3 className="text-gray-700 header_atf"> 3. Angel Fund</h3>
                  <br />
                  <p className="text-gray-500">
                    This is a sort of Venture Capital fund in which fund
                    managers combine money from a number of &quot;angel&quot;
                    investors to invest in early stage firms. Investors receive
                    dividends when new enterprises become profitable.
                    <br />
                    <br />
                    Units are distributed to angel investors in the case of
                    Angel Funds. An &quot;angel investor&quot; is a person who
                    wishes to invest in an angel fund and adds business
                    management knowledge to the table, therefore assisting the
                    company in its growth. Because of their growing
                    uncertainties, these investors usually invest in companies
                    that aren&apos;t sponsored by conventional venture capital
                    funds.
                  </p>
                  <br />
                  <h3 className="text-gray-700 header_atf">
                    {" "}
                    4. Social Venture Fund
                  </h3>
                  <br />
                  <p className="text-gray-500">
                    Socially responsible investment has spawned the Social
                    Venture Fund (SVF), which invests in firms with a strong
                    social consciousness and a desire to have a positive impact
                    on society. These businesses are focused on producing money
                    while also addressing environmental and social challenges.
                    Despite the fact that it is a philanthropic investment, one
                    may expect a return because the companies will still
                    generate money.
                  </p>
                  <br />
                  <h3 className="text-gray-700 header_atf">
                    {" "}
                    5. Private Equity (PE) Fund
                  </h3>
                  <br />
                  <p className="text-gray-500">
                    PE funds invest in private firms that aren&apos;t publicly
                    traded with stakeholders. Because the unlisted and
                    unauthorized private enterprises are unable to raise cash
                    with PE funds for help.
                    <br />
                    <br />
                    Furthermore, these organizations provide their clients with
                    a diverse portfolio of shares, lowering the investor&apos;s
                    risk. A defined investment horizon of 4 to 7 years is usual
                    for a PE fund. The company hopes to be able to exit the
                    investment with a decent profit after seven years.
                  </p>
                  <br />
                  <h2 id="header3" className="text-gray-700 header_atf">
                    <span className="header_background">
                      Benefits of Investing in AIFs
                    </span>
                  </h2>
                  <br />
                  <p className="text-gray-500">
                    People constantly evaluate the benefits of AIFs and other
                    funds when investing in a fund. Learn the benefits of
                    AIFs:&apos;
                  </p>
                  <br />
                  <h3 className="text-gray-700 header_atf">
                    1. Uncorrelated with Stock Market
                  </h3>
                  <br />
                  <p className="text-gray-500">
                    Every investor who has the stock market for a long time has
                    certainly had some large successes and some significant
                    losses. Anyone who is nearing retirement or has already
                    retired has felt the pain of watching their portfolio
                    decline, often dramatically. One of the key reasons
                    investors seek alternative investments is to diversify their
                    portfolios.
                    <br />
                    <br />
                    Many investors are discovered with private alternatives as a
                    method to diversify their portfolios and hedge against
                    volatility. As a result, if the stock market falls sharply,
                    they will have a hedge of protection, and their whole
                    investment portfolio will be unaffected. Even in a stable
                    economy, the stock market is notoriously unstable, and
                    alternatives are mostly immune to the public market&apos;s
                    volatility.
                  </p>
                  <br />
                  <h3 className="text-gray-700 header_atf">
                    &apos; 2. Look at the Direct Ownership
                  </h3>
                  <br />
                  <p className="text-gray-500">
                    What you&apos;re getting in most public investments is a
                    paper asset — the discounted value of future projected
                    earnings. You don&apos;t actually have any possessions. Even
                    after investment in REIT, you&apos;re still a long way from
                    having your name on the real estate property&apos;s deed.
                  </p>
                  <br />
                  <p className="text-gray-500">
                    When you purchase excellent wine or art, you are purchasing
                    the bottles of wine or the oil painting directly. If you
                    purchase a rental property, you own it outright. You have a
                    lien on a property if you acquire a mortgage note.
                  </p>
                  <br />
                  <h3 className="text-gray-700 header_atf">
                    {" "}
                    3. Know about the Tax Benefits
                  </h3>
                  <br />
                  <p className="text-gray-500">
                    Alternative investments might potentially offer significant
                    tax advantages. Because of the structure of many alternative
                    investments, you get to keep more of your profit. You should
                    be a part of the fund or syndicate in many private
                    alternative investments, and the tax benefits are passed on
                    to you directly.
                    <br />
                    <br />
                    Pass through depreciation and long-term capital gains
                    treatment are the two most major tax benefits. Depreciation
                    expenditure (a non-cash expense) is deducted from net income
                    by many real estate funds or syndications, lowering taxable
                    income. Depreciation/depletion tax treatment for oil and gas
                    assets is quite advantageous.
                  </p>
                  <br />
                  <h3 className="text-gray-700 header_atf">
                    {" "}
                    4. Identify the Passive Investments
                  </h3>
                  <br />
                  <p className="text-gray-500">
                    Most busy investors value their time highly, and actively
                    maintaining an asset or portfolio takes a significant amount
                    of effort. Let&apos;s look at real estate as an example,
                    because that&apos;s where most people assume they should
                    start investing. They rapidly discover how much effort is
                    necessary and how steep the learning curve is after becoming
                    enthusiastic about the thought of renting a single-family
                    house or even a modest multifamily apartment. There is a
                    limitless supply of instructors marketing their &quot;5 Step
                    Plan to Success,&quot; but recruiting co-investors, securing
                    money, structuring the deal, discovering and appraising
                    properties, and so on are all difficult tasks. Many
                    investors quit up at this stage and think that there are no
                    further possibilities.
                  </p>
                  <br />
                  <br />
                  <h2 id="header4" className="header_atf">
                    <span className="header_background">Bottom Line</span>
                  </h2>
                  <br />
                  <p className="text-gray-500">
                    After going through the factors and elements of AIF, it will
                    help you understand the benefits of investment and planning
                    on the fund.
                  </p>{" "}
                  <br />
                  <div className="AIF-mainInner">
                    <div className="AIF-mainFirst">
                      <h1 id="header5" className="text-gray-700">
                        Categories of AIF
                      </h1>
                      {/* <Image
                        src={pensil}
                        alt="Pensil Line"
                        className="pensil"
                      /> */}
                    </div>
                    <div className="AIF-containerInner">
                      <div className="AIF-items">
                        {Categories.map((section) => (
                          <div key={section.id} className="AIF-item">
                            <button
                              onClick={() => openPopup(section)}
                              className="AIF-btn shadow-lg text-gray-500"
                            >
                              {section.title}
                            </button>
                            {isOpen && selectedSection === section && (
                              <SmallPopup
                                isOpen={isOpen}
                                onRequestClose={closePopup}
                                title={section.title}
                                description={section.desc}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="AIF-mainInner">
                    <div className="AIF-mainFirst">
                      <h1 id="header6">Benefits of AIF</h1>
                      {/* <Image
                        src={pensil}
                        alt="Pensil Line"
                        className="pensil"
                      /> */}
                    </div>
                    <div className="AIF-containerInner">
                      <div className="AIF-items">
                        {Benefits.map((section) => (
                          <div key={section.id} className="AIF-item">
                            <button
                              onClick={() => openPopup(section)}
                              className="AIF-btn shadow-lg text-gray-500"
                            >
                              {section.title}
                            </button>
                            {isOpen && selectedSection === section && (
                              <SmallPopup
                                isOpen={isOpen}
                                onRequestClose={closePopup}
                                title={section.title}
                                description={section.desc}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="AIF-FAQ">
                  <div className="AIF-FAQHeader">
                    <h1 id="header7">FAQ</h1>
                    {/* <Image src={pensil} alt="Pensil Line" className="pensil" /> */}
                  </div>
                  <br />
                  <div>
                    <h2 className="text-grap-700">Q. What are AIF funds ?</h2>
                    <br />
                    <p className="text-gray-500">
                      Any fund established or incorporated in India that is a
                      privately pooled investment vehicle that collects funds
                      from sophisticated investors, whether Indian or foreign,
                      for investment in accordance with a defined investment
                      policy for the benefit of its investors is referred to as
                      an Alternative Investment Fund (AIF).
                    </p>
                    <br />
                    <h2 className="text-grap-700">
                      Q. Who can invest in alternative investment funds ?
                    </h2>
                    <br />
                    <p className="text-gray-500">
                      Investors that desire to diversify might pick Alternative
                      Investment Funds to invest. All Indians, including NRIs,
                      PIOs, and OCIs, are eligible to invest in AIFs. They must,
                      however, fulfill the qualifying requirements, which
                      include a minimum capital of Rs20 crore for each programme
                      and Rs10 crore for Angel Funds. Each investor shall make a
                      minimum investment of Rs1 crore or Rs25 lakh (in the case
                      of AIF employees, directors, and fund managers).
                    </p>
                    <br />
                    <h2 className="text-grap-700">
                      Q. How can I invest in AIF in india ?
                    </h2>
                    <br />
                    <p className="text-gray-500">
                      If you are a risk-taking investor who wants to diversify
                      his or her risk, you may invest in SEBI-registered
                      Alternative Investment Funds as well as join us and we
                      will assist you through the whole process
                    </p>
                    <br />
                    <h2 className="text-gray-700">
                      Q. Can alternative investment funds (AIF) give loans ?
                    </h2>
                    <br />
                    <p className="text-gray-500">
                      Alternative Investment Fund is a privately pooled
                      investment vehicle in which the funds supplied by
                      investors are not used to make loans.
                    </p>
                    <br />
                    <h2 className="text-grap-700">
                      Q. What is not included in Alternative Investment Fund ?
                    </h2>
                    <br />
                    <p className="text-gray-500">
                      An alternative investment is a financial asset that does
                      not fall into one of the conventional (stocks, bonds, and
                      cash) investment categories.
                    </p>
                    <br />
                    <h2>
                      Q. What is the Difference between mutual fund and
                      alternative investment fund ?
                    </h2>
                    <br />
                    <p className="text-gray-500">
                      A mutual fund is a pooled investment entity, with numerous
                      participants raising cash. Mutual investments include
                      stock, bonds and financial-market instruments, whereas
                      alternative investment funds (AIF) are distinct from
                      traditional standard investments such as stocks, debt
                      securities, etc. Investments in a wide range of assets.
                    </p>
                    <br />
                    <h2>Q. Are alternative investments high risk ?</h2>
                    <br />
                    <p className="text-gray-500">
                      They are also more volatile than traditional assets, like
                      equities, bonds and reciprocal funds. Most of them are
                      relatively not liquid and therefore hard to sell fast.
                      Most are complicated and frequently involve risks that are
                      larger than typical investments.
                    </p>
                    <br />
                    <h2>Q. Are alternative investments liquid ?</h2>
                    <br />
                    <p className="text-gray-500">
                      Aside from standard stocks and bonds, the phrase
                      &quot;alternative investment” refers to a wide range of
                      assets. Many are not publicly priced or traded, making
                      them difficult to trade. That is why they are said to as
                      lliquid.
                    </p>
                    <br />
                    <h2>Q. What are 4 types of investments ?</h2>
                    <br />
                    <p className="text-gray-500">
                      4 distinct types of investment are split into two
                      sub-categories, which are: <br /> 1. Growth investments:
                      Long-term investments in shares or property. <br /> 2.
                      Defensive investments: Consistently generated income such
                      as cash and bonds.
                    </p>
                    <br />
                    <h2>Q. What is the minimum investment in AIF ?</h2>
                    <br />
                    <p className="text-gray-500">
                      Angel funds require a minimum investment of INR 25 lakhs
                      per investor. If the AIF is not an angel fund, the minimum
                      amount of investment per investor is INR 1 crore.
                    </p>
                    <br />
                    <h2>
                      Q. What does Alternative Investment Funds stand for ?
                    </h2>
                    <br />
                    <p className="text-gray-500">
                      Any fund established or incorporated in India that is a
                      privately pooled investment vehicle that collects funds
                      from sophisticated investors, whether Indian or foreign,
                      for investing in accordance with a defined investment
                      policy for the benefit of its investors is referred to as
                      an Alternative Investment Fund (AIF).
                    </p>
                    <br />
                    <h2>
                      Q. What is the enrolment charge to be paid by an
                      Alternative Investment Fund ?
                    </h2>
                    <br />
                    <p className="text-gray-500">
                      The registration fee is set by SEBI Regulations and must
                      be paid by the applicant. The following is the AIF
                      registration fee schedule
                    </p>
                    <ul>
                      <br></br>
                      <li className="text-gray-500">
                        {/* <Image
                          src={bDot}
                          alt="Point"
                          width={20}
                          height={20}
                          className="BlueDotmain"
                        /> */}
                        - The registration fee for Category I Alternative
                        Investment Fund is Rs. 5, 00,000.
                      </li>
                      <li className="text-gray-500">
                        {/* <Image
                          src={bDot}
                          alt="Point"
                          width={20}
                          height={20}
                          className="BlueDotmain"
                        /> */}
                        - The registration fee for the Category II Alternative
                        Investment Fund is Rs. 10, 00,000.
                      </li>
                      <li className="text-gray-500">
                        {/* <Image
                          src={bDot}
                          alt="Point"
                          width={20}
                          height={20}
                          className="BlueDotmain"
                        /> */}
                        - The registration fee for Category III Alternative
                        Investment Fund is Rs. 15, 00,000.
                      </li>
                    </ul>
                    <br />
                    <br />
                    <h2>Q. What is the reason for investment in an AIF ?</h2>
                    <br />
                    <p className="text-gray-500">
                      High-net-worth individuals (HNIs) wishing to diversify
                      their investment portfolio might consider AIFs, which
                      provide a high return potential while also carrying a high
                      level of risk. AIFs invest in securities other than
                      stocks, bonds, mutual funds, and other traditional
                      investments, allowing investors to diversify their
                      portfolios and have access to higher-yielding assets.
                    </p>
                    <br />
                    <h2>Q. Who can invest in AIF ?</h2>
                    <br />
                    <p className="text-gray-500">
                      Any competent investor, whether Indian, foreign, or
                      non-resident Indian, can invest in an AIF if they have the
                      necessary capital and are ready to wager on unlisted and
                      illiquid stocks.
                    </p>
                    <br />
                    <h2>
                      Q. What is the minimum investment required for investing
                      in an AIF ?
                    </h2>
                    <br />
                    <p className="text-gray-500">
                      Except for angel funds, all types of AIFs in India need a
                      minimum investment of Rs. 1 crore. The sum for the angel
                      fund is Rs. 25 lakh.
                    </p>
                    <br />
                    <h2>
                      Q. What is the corpus of the Alternative Investment
                      Fund(AIF) ?
                    </h2>
                    <br />
                    <p className="text-gray-500">
                      The term “corpus” refers to the entire amount of money
                      that investors commit to an AIF in the form of a written
                      contract or another similar instrument.
                    </p>
                    <br />
                    <h2>
                      Q. Is there any limit of investors who can be a part of
                      the AIF scheme ?
                    </h2>
                    <br />
                    <p className="text-gray-500">
                      AIFs in all categories (excluding angel funds) can have up
                      to 1,000 investors. A maximum of 49 angel investors can be
                      found in an angel fund. Furthermore, AIF is unable to make
                      a public call for investors to subscribe to its units and
                      can only collect funds through private memorandum issuance
                      and other ways.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "tab2" && (
            <div className="PMS-mainContainer">
              <div className="PMS-main">
                <TableOfContents headers={PMSheaders} />
                <div className="PMS-Container">
                  <h2 id="header1" className="header_atf">
                    <span className="header_background text-gray-700">
                      What is Portfolio Management Services (PMS) ?
                    </span>
                  </h2>
                  <br />
                  <p className="text-gray-500">
                    Portfolio Management Services (PMS), service offered by the
                    Portfolio Manager, is an investment portfolio in stocks,
                    fixed income, debt, cash, structured products and other
                    individual securities, managed by a professional money
                    manager that can potentially be tailored to meet specific
                    investment objectives. When you invest in PMS, you own
                    individual securities unlike a mutual fund investor, who
                    owns units of the fund. You have the freedom and flexibility
                    to tailor your portfolio to address personal preferences and
                    financial goals. Although portfolio managers may oversee
                    hundreds of portfolios, your account may be unique.
                  </p>
                  <br />
                  <ul>
                    <li>
                      <strong className="text-gray-700">
                        Discretionary&nbsp;:&nbsp;
                      </strong>
                      &nbsp;&nbsp;
                      <p className="text-gray-500">
                        Under these services, the choice as well as the timings
                        of the investment decisions rest solely with the
                        Portfolio Manager.
                      </p>
                    </li>
                    <li>
                      <strong className="text-gray-700">
                        Non Discretionary&nbsp;:&nbsp;
                      </strong>
                      &nbsp;&nbsp;
                      <p className="text-gray-500">
                        Under these services, the portfolio manager only
                        suggests the investment ideas. The choice as well as the
                        timings of the investment decisions rest solely with the
                        Investor. However the execution of trade is done by the
                        portfolio manager.
                      </p>
                    </li>
                    <li>
                      <strong className="text-gray-700">
                        Advisory&nbsp;:&nbsp;
                      </strong>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <p className="text-gray-500">
                        Under these services, the portfolio manager only
                        suggests the investment ideas. The choice as well as the
                        execution of the investment decisions rest solely with
                        the Investor. Note: In India majority of Portfolio
                        Managers offer Discretionary Services.
                      </p>
                    </li>
                  </ul>
                  <br />
                  <h2 id="header2" className="header_atf">
                    <span className="header_background text-gray-700">
                      Who is an ideal PMS investor ?
                    </span>
                  </h2>
                  <br />
                  <p className="text-gray-500">
                    The Investment solutions provided by PMS cater to a niche
                    segment of clients. The clients can be Individuals or
                    Institutions entities with high net worth.
                    <br />
                    The offerings are usually ideal for investors: who are
                    looking to invest in asset classes like equity, fixed
                    income, structured products etc ,who desire personalised
                    investment solutions ,who desire long-term wealth creation
                    ,who appreciate a high level of service.
                  </p>
                  <br />
                  <h2 id="header3" className="header_rtf">
                    <span className="header_background text-gray-700">
                      What are the modes through which I can make investments in
                      PMS ?
                    </span>
                  </h2>
                  <br />
                  <p className="text-gray-500">
                    Apart from cash, the client can also hand over an existing
                    portfolio of stocks, bonds or mutual funds to a Portfolio
                    Manager that could be revamped to suit his profile. However
                    the Portfolio Manager may at his own sole discretion sell
                    the said existing securities in favour of fresh investments.
                  </p>
                  <br />
                  <h2 id="header4" className="header_rtf">
                    <span className="header_background text-gray-700">
                      What is the tax treatment in PMS investment ?
                    </span>
                  </h2>
                  <br />
                  <p className="text-gray-500">
                    The tax liability of a PMS investor would remain the same as
                    if the investor is accessing the capital market directly.
                    However, the investor should consult his tax advisor for the
                    same. The Portfolio Manager ideally provides audited
                    statement of accounts at the end of the financial year to
                    aid the investor in assessing his/ her tax liabilities.
                  </p>
                  <br />
                  <h2 id="header5" className="header_rtf">
                    <span className="header_background text-gray-700">
                      What are the benefits of PMS ?
                    </span>
                  </h2>
                  <br />
                  <ul>
                    <li>
                      <strong className="text-gray-700">
                        Professional Management&nbsp;:&nbsp;
                      </strong>
                      <br />
                      <p className="text-gray-500">
                        The service provides professional management of
                        portfolios with the objective of delivering consistent
                        long-term performance while controlling risk.
                      </p>
                    </li>
                    <li>
                      <strong className="text-gray-700">
                        Continuous Monitoring&nbsp;:&nbsp;
                      </strong>
                      <br />
                      <p className="text-gray-500">
                        It is important to recognise that portfolios need to be
                        constantly monitored and periodic changes made to
                        optimise the results.
                      </p>
                    </li>
                    <li>
                      <strong className="text-gray-700">
                        Risk Control&nbsp;:&nbsp;
                      </strong>
                      <br />
                      <p className="text-gray-500">
                        A research team responsible for establishing the client
                        s investment strategy and providing the PMS provider
                        real time information to support it, backs any
                        firm&apos;s portfolio managers.
                      </p>
                    </li>
                    <li>
                      <strong className="text-gray-700">
                        Hassle Free Operation&nbsp;:&nbsp;
                      </strong>{" "}
                      <br />
                      <p className="text-gray-500">
                        Portfolio Management Service provider gives the client a
                        customised service. The company takes care of all the
                        administrative aspects of the client&apos;s portfolio
                        with a periodic reporting (usually daily) on the overall
                        status of the portfolio and performance.
                      </p>
                    </li>
                    <li>
                      <strong className="text-gray-700">
                        Flexibility&nbsp;:&nbsp;
                      </strong>{" "}
                      <br />
                      <p className="text-gray-500">
                        The Portfolio Manager has fair amount of flexibility in
                        terms of holding cash (can go up to 100% also depending
                        on the market conditions). He can create a reasonable
                        concentration in the investor portfolios by investing
                        disproportionate amounts in favour of compelling
                        opportunities.
                      </p>
                    </li>
                    <li>
                      <strong className="text-gray-700">
                        Transparency&nbsp;:&nbsp;
                      </strong>
                      <p className="text-gray-500">
                        PMS provide comprehensive communications and performance
                        reporting. Investors will get regular statements and
                        updates from the firm. Web-enabled access will ensure
                        that client is just a click away from all information
                        relating to his investment. Your account statements will
                        give you a complete picture of which individual
                        securities you hold, as well as the number of shares you
                        own. It will also usually provide:
                      </p>
                      <br />
                      <br />
                      <p className="text-gray-500">
                        {" "}
                        - The current value of the securities you own. <br />
                        - The cost basis of each security. <br />
                        - Details of account activity (such as purchases, sales
                        and dividends paid out or reinvested). <br />- Your
                        portfolio&apos;s asset allocation. <br />- Your
                        portfolio &apos;s performance in comparison to a
                        benchmark. <br />
                        - Market commentary from your Portfolio Manager.
                        <br />
                      </p>
                    </li>
                    <li>
                      <strong className="text-gray-700">
                        Customised Advice&nbsp;:&nbsp;
                      </strong>{" "}
                      <br />
                      <p className="text-gray-500">
                        {" "}
                        PMS give select clients the benefit of tailor made
                        investment advice designed to achieve his financial
                        objectives. It can be structured to automatically
                        exclude investments you may own in another account or
                        investments you would prefer not to own. For example, if
                        you are a long-term employee in a company and you have
                        acquired concentrated stock positions over the years and
                        have become over exposed to few company&apos;s stock, a
                        separately managed account provides you with the ability
                        to exclude that stock from your portfolio.
                      </p>
                    </li>
                  </ul>
                  <br />
                  <h2 id="header6" className="header_rtf">
                    <span className="header_background text-gray-700">
                      Who can invest in PMS ?
                    </span>
                  </h2>
                  <br />
                  <p className="text-gray-500">
                    Individuals and Non-Individuals such as HUFs, partnerships
                    firms, sole proprietorship firms and Body Corporate.
                  </p>
                  <br />
                  <h2 id="header7" className="header_rtf">
                    <span className="header_background text-gray-700">
                      Are there risks associated with PMS investments ?
                    </span>
                  </h2>
                  <br />
                  <p className="text-gray-500">
                    Yes. All investments involve a certain amount of risk,
                    including the possible erosion of the principal amount
                    invested, which varies depending on the security selected.
                    For example, investments in small and mid-sized companies
                    tend to involve more risk than investments in larger
                    companies.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default page;
