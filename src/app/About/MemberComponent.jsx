"use client";
import { useEffect } from "react";
import React from "react";
import "./about.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";

const MemberComponent = ({ data }) => {
  useEffect(() => {
    const loadScrollReveal = async () => {
      const sr = (await import("scrollreveal")).default();
      sr.reveal(".member_CartSection", {
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
    <div className="flex flex-wrap -mx-4">
      {data.map((item, id) => (
        <div className="w-full sm:w-1/2 lg:w-1/2 px-4 mb-5 mt-16" key={id}>
          <div className="member_CartSection w-full">
            <div className="pseudo-partial-border" style={{ margin: "25px" }}>
              <Image
                src={item.img}
                width={250}
                height={400}
                className="member_img"
                alt="image"
              ></Image>
            </div>
            <div className="details_member relative">
              <span
                className="name_section"
                style={{ fontSize: "15px", fontWeight: "500" }}
              >
                {item.name}
              </span>
              <span className="position_" style={{ fontWeight: "500" }}>
                {item.position}
              </span>

              <Link href={item.linkedInUrl}>
                <BsLinkedin
                  style={{ color: "#0161ff" }}
                  // className="Linkedin"
                ></BsLinkedin>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemberComponent;
