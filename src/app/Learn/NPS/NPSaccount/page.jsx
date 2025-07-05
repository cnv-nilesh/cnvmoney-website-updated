import React from "react";

const page = () => {
  return (
    <div>
      <p className="text-gray-500 nps_para">
        You can enrol for NPS online in paperless process through our website
        from the convenience of your home / office. The prime objective of the
        scheme is to provide all citizens of India with an attractive long-term
        savings avenue to plan for retirement through safe and reasonable
        market-based returns. The account can be opened by all Indian Citizens
        between 18 to 70 Years.
      </p>
      <h1 className="text-gray-700 nps_heading">
        Steps for online account opening:
      </h1>
      <p className="text-gray-500 nps_para mt-2">
        1. You can enrol for NPS by clicking on &apos;Apply Now&apos; option
        under NPS (National Pension System)
      </p>
      <p className="text-gray-500 nps_para mt-2">
        2. You can choose any one CRA to open the account (K-Fin Private Limited
        or NSDL e-governance infrastructure LTD.).
      </p>
      <p className="text-gray-500 nps_para mt-2">
        3. You will get online form, which needs to be filled with mandatory
        fields.
      </p>
      <p className="text-gray-500 nps_para mt-2">
        4. Acknowledgement Id for your registration (account opening) will be
        generated. There will be provision to complete the registration (account
        opening form) later, but within 15 days, based on acknowledgement number
        search.
      </p>
      <div className="text-gray-500 nps_para mt-2">
        5. Modes of KYC
        <li>
          Pan based HDFC Bank will verify KYC on the basis of details maintained
          in your account with Bank. (Hence details being input in NPS should be
          exactly as per bank account).
        </li>
        <li>
          Offline Aadhaar .XML KYC KYC details will be taken from the database
          of UIDAI.
        </li>
      </div>
      <p className="text-gray-500 nps_para mt-2">
        6. You need to share detail like Bank details, scheme details, nominee
        details etc.
      </p>
      <p className="text-gray-500 nps_para mt-2">
        7. You need to upload photograph, specimen signature, cancelled cheque /
        bank statement / passbook copy and PAN copy as per file size
        permissible.
      </p>
      <p className="text-gray-500 nps_para mt-2">
        8. You need to make initial contribution of min Rs. 500.
      </p>
      <p className="text-gray-500 nps_para mt-2">
        9. You will be directed to online payment platform wherein you will
        complete the payment through HDFC Bank NetBanking or payment gateway.
      </p>
      <p className="text-gray-500 nps_para mt-2">
        10. On successful payment, 12-digit PRAN will be allotted to you and PDF
        form will be generated based on data given.
      </p>
      <p className="text-gray-500 nps_para mt-2">
        11. PRAN will be communicated to you via registered email and SMS.
      </p>
      <p className="text-gray-500 nps_para mt-2">
        12. E-Sign/OTP You will have to complete online e-sign or OTP based
        confirmation once registration process is completed. This is to avoid
        physical submission of registration form.
      </p>
    </div>
  );
};

export default page;
