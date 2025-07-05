"use client";
import React, { useEffect } from "react";
import "./about.css";
import Image from "next/image";
import { color } from "framer-motion";

const data = [
  {
    header1: "OUR",
    header2: "VISION",
    img: "/Target/vision.png",
    info: "To be a leading force in empowering individuals and families to achieve financial security and freedom.",
    color: "#0161ff",
  },
  {
    header1: "OUR",
    header2: "MISSION",
    img: "/Target/mission.png",
    info: "We deliver innovative financial solutions and personalized guidance, fostering financial literacy and confidence for our clients on their journey to financial well-being.",
    color: "#e21c1c",
  },
  {
    header1: "OUR",
    header2: "VALUE",
    img: "/Target/value.png",
    info: " A financial company should prioritize understanding and exceeding their clients' needs and financial goals. This means putting the client's interests first and acting as a fiduciary.",
    color: "#00d382",
  },
];
const Target = () => {
  useEffect(() => {
    const loadScrollReveal = async () => {
      const sr = (await import("scrollreveal")).default();
      sr.reveal(".target_section", {
        delay: 300,
        distance: "100px",
        origin: "bottom",
        duration: 1000,
        easing: "ease",
        reset: false,
      });
    };

    if (typeof window !== "undefined") {
      loadScrollReveal();
    }
  }, [data]);
  return (
    <div className="container w-full  mx-auto p-6 mb-2 mt-2 ">
      <div className="flex flex-wrap -mx-4">
        {data.map((items, id) => (
          <div
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-4 mb-4 "
            key={id}
          >
            <div className="bg-slate-100">
              <div className="p-4 target_section">
                <Image
                  src={items.img}
                  width={80}
                  height={80}
                  alt={items.img}
                ></Image>
                <div className="target_text_content">
                  <h3 className="target_header">
                    <span className="text-gray-600">{items.header1}</span>
                    &nbsp;
                    <span style={{ color: items.color }}>{items.header2}</span>
                  </h3>
                  <span className="text-gray-500" style={{ fontSize: "14px" }}>
                    {items.info}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Target;
