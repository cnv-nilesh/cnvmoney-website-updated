"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ceoData = [
  {
    name: "Anil Mendonca",
    position: "Chairman & CO-Founder",
    url: "https://www.linkedin.com/in/anil-mendonca-1180261a/",
    imageUrl: "/aboutimage/1.png",
    quote:
      "Great leadership is about building trust and empowering others to rise together.",
  },
  {
    name: "Sheryl Mendonca",
    position: "CO-Founder",
    url: "https://www.linkedin.com/in/sherylmendonca/",
    imageUrl: "/aboutimage/2.png",
    quote:
      "Empathy and clarity are the foundation of every successful and resilient team.",
  },
];

const CeoSection = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative Stars */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <svg
          className="absolute top-10 left-10 w-12 h-12 text-purple-300 animate-pulse"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L13.09 8.26L19 8.27L14 12.14L15.18 18.02L12 14.77L8.82 18.02L10 12.14L5 8.27L10.91 8.26L12 2Z" />
        </svg>
        <svg
          className="absolute bottom-10 right-16 w-8 h-8 text-indigo-200 animate-ping"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="4" />
        </svg>
      </div>

      <div className="container mx-auto px-4 space-y-20">
        {ceoData.map((person, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Motion Image Block */}
            <motion.div
              className="relative w-full md:w-1/2 h-[350px] flex justify-center items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <svg
                viewBox="0 0 250 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-150 h-100 text-indigo-200"
                style={{ zIndex: 1 }}
              >
                <path
                  fill="currentColor"
                  d="M51.9,-65.5C65.7,-52.8,75.5,-36.2,76.6,-19.3C77.7,-2.5,70.1,14.7,60.5,27.9C50.8,41.1,39.1,50.4,25.6,57.4C12.1,64.4,-3.2,69.2,-17.4,65.3C-31.7,61.4,-44.9,48.8,-55.2,34.4C-65.4,20,-72.7,3.8,-70.5,-11.3C-68.2,-26.3,-56.3,-40.2,-43,-53.3C-29.7,-66.3,-14.8,-78.4,2.4,-81.3C19.7,-84.2,39.3,-77.9,51.9,-65.5Z"
                  transform="translate(100 110)"
                />
              </svg>
              <div className="relative z-10 w-60 h-60 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={person.imageUrl}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Motion Text Content */}
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-indigo-700 mb-4">
                Meet Our CEO
              </h3>
              <div className="text-4xl text-purple-500 mb-4">“</div>
              <p className="text-lg text-gray-700 italic mb-4">
                {person.quote}
              </p>
              <p className="text-base text-gray-600 font-medium">
                — {person.name},{" "}
                <span className="text-indigo-500">{person.position}</span>
              </p>
              <div className="mt-4 flex justify-center md:justify-start">
                <Link
                  href={person.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
                    width={30}
                    height={30}
                    className="hover:scale-110 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CeoSection;
