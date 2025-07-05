import React from "react";
import "./about.css";
import Image from "next/image";
import MemberComponent from "./MemberComponent";

const data = [
  {
    name: "Rahul Pandey",
    position: "Business Head",
    img: "/aboutimage/3.png",
    linkedInUrl: "https://www.linkedin.com/in/rahulcnvmoney/",
  },
  {
    name: "Manali Pandey",
    position: "Research Analyst",
    img: "/aboutimage/4.png",
    linkedInUrl: "https://www.linkedin.com/in/manalipandey/",
  },
];
const Members = () => {
  return (
    <div className="relative mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MemberComponent data={data}></MemberComponent>
      </div>
    </div>
  );
};

export default Members;
