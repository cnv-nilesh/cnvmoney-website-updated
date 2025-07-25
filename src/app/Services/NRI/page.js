import React from "react";

const data = [
  {
    srNo: 1,
    amcName: "Aditya Birla SL",
    restrictedCountry: "High Risk Countries Declared by FATF",
  },
  {
    srNo: 2,
    amcName: "Axis",
    restrictedCountry:
      "USA, CANADA & Other High Risk Countries Declared by FATF",
  },
  {
    srNo: 3,
    amcName: "Baroda MF",
    restrictedCountry: "USA, CANADA & High Risk Countries Declared by FATF",
  },
  {
    srNo: 4,
    amcName: "BNP PARIBAS",
    restrictedCountry: "USA, CANADA & High Risk Countries Declared by FATF",
  },
  {
    srNo: 5,
    amcName: "BOI Axa",
    restrictedCountry: "USA, CANADA & High Risk Countries Declared by FATF",
  },
  {
    srNo: 6,
    amcName: "Canara Robeco",
    restrictedCountry: "USA, CANADA & High Risk Countries Declared by FATF",
  },
  {
    srNo: 7,
    amcName: "DSP Blackrock",
    restrictedCountry: "CANADA and High Risk Countries Declared by FATF",
  },
  {
    srNo: 8,
    amcName: "Edelweiss",
    restrictedCountry: "Canada, High Risk Countries Declared by FATF",
  },
  {
    srNo: 9,
    amcName: "FRANKLIN TEMPLETON",
    restrictedCountry: "USA, CANADA & High Risk Countries Declared by FATF",
  },
  {
    srNo: 10,
    amcName: "HDFC AMC",
    restrictedCountry: "USA, CANADA, High Risk Countries Declared by FATF",
  },
  {
    srNo: 11,
    amcName: "HSBC",
    restrictedCountry: "USA, CANADA & High Risk Countries Declared by FATF",
  },
  {
    srNo: 12,
    amcName: "ICICI",
    restrictedCountry: "Canada, High Risk Countries Declared by FATF",
  },
  {
    srNo: 13,
    amcName: "IDBI",
    restrictedCountry: "High Risk Countries Declared by FATF",
  },
  {
    srNo: 14,
    amcName: "IDFC",
    restrictedCountry: "CANADA and High Risk Countries Declared by FATF",
  },
  {
    srNo: 15,
    amcName: "Invesco",
    restrictedCountry: "USA, CANADA & High Risk Countries Declared by FATF",
  },
  {
    srNo: 16,
    amcName: "ITI AMC",
    restrictedCountry:
      "USA AND CANADA and High Risk Countries Declared by FATF",
  },
  {
    srNo: 17,
    amcName: "Kotak AMC",
    restrictedCountry: "High Risk Countries Declared by FATF",
  },
  {
    srNo: 18,
    amcName: "L&T AMC",
    restrictedCountry: "High Risk Countries Declared by FATF",
  },
  {
    srNo: 19,
    amcName: "Mahindra Manulife",
    restrictedCountry: "USA, Canada and High Risk Countries Declared by FATF",
  },
  {
    srNo: 20,
    amcName: "Mirae",
    restrictedCountry: "USA, CANADA & High Risk Countries Declared by FATF",
  },
  {
    srNo: 21,
    amcName: "Motilal Oswal",
    restrictedCountry: "Canada, High Risk Countries Declared by FATF",
  },
  {
    srNo: 22,
    amcName: "Navi",
    restrictedCountry: "High Risk Countries Declared by FATF",
  },
  {
    srNo: 23,
    amcName: "Nippon AMC",
    restrictedCountry: "High Risk Countries Declared by FATF",
  },
  {
    srNo: 24,
    amcName: "PGIM",
    restrictedCountry: "USA, Canada & High Risk Countries Declared by FATF",
  },
  {
    srNo: 25,
    amcName: "PPFAS",
    restrictedCountry: "High Risk Countries Declared by FATF",
  },
  {
    srNo: 26,
    amcName: "Quant",
    restrictedCountry: "High Risk Countries Declared by FATF",
  },
  {
    srNo: 27,
    amcName: "Quantam",
    restrictedCountry: "USA, CANADA and High Risk Countries Declared by FATF",
  },
  {
    srNo: 28,
    amcName: "Samco",
    restrictedCountry: "High Risk Countries Declared by FATF",
  },
  {
    srNo: 29,
    amcName: "SBI",
    restrictedCountry: "High Risk Countries Declared by FATF",
  },
  {
    srNo: 30,
    amcName: "Sundaram",
    restrictedCountry: "High Risk Countries Declared by FATF",
  },
  {
    srNo: 31,
    amcName: "Tata",
    restrictedCountry: "USA, CANADA & High Risk Countries Declared by FATF",
  },
  {
    srNo: 32,
    amcName: "Union AMC",
    restrictedCountry: "USA, CANADA and High Risk Countries Declared by FATF",
  },
  {
    srNo: 33,
    amcName: "UTI",
    restrictedCountry: "High Risk Countries Declared by FATF",
  },
];

const RestrictedCountriesTable = () => {
  return (
    <div className="container mx-auto mt-5 p-4">
      <h1 className="w-50 p-2 text-center bg-slate-200 ml-4">
        NISM ARN Registration
      </h1>
      <div className="overflow-x-auto p-4">
        <table className="min-w-full border border-gray-300 rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-2 text-sm font-semibold border-b border-gray-300">
                Sr No
              </th>
              <th className="text-left p-2 text-sm font-semibold border-b border-gray-300">
                AMC Name
              </th>
              <th className="text-left p-2 text-sm font-semibold border-b border-gray-300">
                Restricted Country
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr
                key={item.srNo}
                className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="p-2 text-sm border-b border-gray-200">
                  {item.srNo}
                </td>
                <td className="p-2 text-sm border-b border-gray-200">
                  {item.amcName}
                </td>
                <td className="p-2 text-sm border-b border-gray-200">
                  {item.restrictedCountry}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-2 flex-wrap text-center p-4">
        <p>
          To check the list of the countries which have been categorized as high
          risk ones,
        </p>
        <a href="https://www.fatf-gafi.org/en/publications/high-risk-and-other-monitored-jurisdictions/documents/increased-monitoring-october-2021.html">
          <h1 className="font-bold text-blue-700 cursor-pointer">click here</h1>
        </a>
      </div>
    </div>
  );
};

export default RestrictedCountriesTable;
