"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = [
    { name: "Mutual Fund", url: "/Learn/MutualFund" },
    { name: "Insurance", url: "/Learn/Insurance" },
    { name: "Stock Broking", url: "/Learn/StockBroking" },
    { name: "Fixed Deposite", url: "/Learn/FixedDeposite" },
    { name: "Loans", url: "/Learn/Loans" },
    { name: "PMS & AIF", url: "/Learn/PMSnAIF" },
    { name: "NPS", url: "/Learn/NPS" },
  ];

  const router = usePathname();

  return (
    <div className="pt-10 px-5 bg-slate-50">
      <div className="flex justify-center ">
        <ul className="flex justify-center flex-wrap">
          {menu.map(({ name, url }, index) => (
            <li
              key={index}
              className={`text-gray-700 m-2 header_tag ${
                router === url ? "text-red-500 font-extrabold" : "text-gray-500"
              }`}
            >
              <Link className="header_tag" href={url}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
}
