"use client";
import Link from "next/link";
import "./Insurance.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = [
    { name: "Health Insurance", url: "/Learn/Insurance/HealthInsurance" },
    { name: "Life Insurance", url: "/Learn/Insurance/LifeInsurance" },
    { name: "Motor Insurance", url: "/Learn/Insurance/MotorInsurance" },
    { name: "Travel Insurance", url: "/Learn/Insurance/TravelInsurance" },
  ];

  const router = usePathname();

  return (
    <div className="flex justify-center p-5">
      <div className="InsuranceNav">
        <div className="flex justify-center mb-6">
          <ul className="flex flex-wrap">
            {menu.map(({ name, url }, index) => (
              <li
                key={index}
                className={`text-gray-700 m-2 ${
                  router === url ? "text-red-500 font-extrabold" : "text-black"
                }`}
              >
                <Link href={url}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {children}
      </div>
    </div>
  );
}
