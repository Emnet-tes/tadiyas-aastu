"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
const team = [
  {
    name: "Maria Asfaw",
    role: "Co-Founder & Editor-in-Chief",
    image: "/Mariati.jpg",
  },
  {
    name: "Meron Anley",
    role: "Co-Founder & Graphic Designer",
    image: "/Meronti.jpg",
  },
  {
    name: "Hiwot Getnet",
    role: "Co-Founder & Creative Director",
    image: "/hiwoti.jpg",
  },
  {
    name: "Ruth Habtewold",
    role: "Co-Founder & Graphic Designer",
    image: "/Ruthti.jpg",
  },
  {
    name: "Makda Yoseph",
    role: "Co-Founder & Project Manager",
    image: "/makedati.jpg",
  },
  {
    name: "Emnet Teshome",
    role: "Co-Founder & Website Developer",
    image: "/emneti.png",
  },
  {
    name: "Anteneh Sintayehu",
    role: "Content Writer",
    image: "/antenehti.jpg",
  },
  {
    name: "Omega Teklu",
    role: "Digital Artist",
    image: "/ometi.jpg",
  },
  {
    name: "Yeabsira Taye",
    role: "Graphic Designer",
    image: "/yeabsirati.jpg",
  },
  {
    name: "Kidist Mehari",
    role: "Graphic Designer",
    image: "/Kidistti.jpg",
  },
  {
    name: "Leul Teshager",
    role: "Digital Artist",
    image: "/leulti.jpg",
  },
  {
    name: "Kaleab Getachew",
    role: "Graphic Designer",
    image: "/kal.jpg",
  },

  {
    name: "Eyoel Shewayirga",
    role: "Graphic Designer",
    image: "/Eyoelti.jpg",
  },
  {
    name: "Bereket Tizazu",
    role: "Graphic Designer",
    image: "/bereketi.jpg",
  },
  {
    name: "Kalkidan Getahun",
    role: "Graphic Designer",
    image: "/Kalkidanti.jpg",
  },
  {
    name: "Yoftahea Tenessa",
    role: "Graphic Designer",
    image: "/yoftaheati.jpg",
  },
  {
    name: "Faiz Getaneh",
    role: "Digital Artist",
    image: "/Faizti.jpg",
  },
  {
    name: "Hiwot Tadesse",
    role: "Event Coordinator",
    image: "/hiwiti.png",
  },
  {
    name: "Hewan Alemayehu",
    role: "Event Coordinator",
    image: "/hewanti.jpg",
  },
  {
    name: "Kaleab Yohannes",
    role: "Photographer",
    image: "/Kaleabti.jpg",
  },
  {
    name: "Abey Bekalu",
    role: "Story Writer",
    image: "/abeyti.jpg",
  },
  {
    name: "JJ.",
    role: "Writer",
    image: "/jj.jpg",
  },
];

const About = () => {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);
  const { theme } = useTheme();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    router.push("/contact");
  };

  const coFounders = team.filter((member) =>
    member.role.toLowerCase().includes("founder")
  );

  const membersToShow = showAll ? team : coFounders;

  // Conditional classes based on theme
  const bgColorMain = theme === "dark" ? "bg-gray-800" : "bg-gray-50";
  const bgColorTeamSection = theme === "dark" ? "bg-gray-800" : "bg-white";
  const textColor = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const textSubColor = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const btnBgColor = theme === "dark" ? "bg-gray-700" : "bg-gray-900";
  const btnHoverBgColor = theme === "dark" ? "hover:bg-gray-600" : "hover:bg-gray-800";

  return (
    <div className={`${bgColorMain} min-h-screen`}>
      {/* Hero Section */}
      <section className="pt-24 ">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className={`text-5xl font-bold ${textColor}`}>About Us</h1>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className={`py-16 ${bgColorMain}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className={`text-4xl font-bold ${textColor}`}>Our Vision</h2>
              <p className={`text-lg leading-relaxed ${textSubColor}`}>
                Our vision is to create a space at AASTU where students can
                explore their passions and express their creativity. We want to
                bring people together, encourage new ideas, and help students
                grow through collaboration and innovation.
              </p>
              <Link
                href="/contact"
                onClick={handleContactClick}
                className={`inline-flex items-center px-6 py-3 ${btnBgColor} text-white rounded-lg ${btnHoverBgColor} transition-colors group`}
              >
                Get in Touch
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/hometi.jpg"
                alt="Our Vision"
                className="w-full h-full object-cover"
                width={800}
                height={600}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`${bgColorTeamSection} py-20 overflow-hidden`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className={`text-4xl font-bold mb-4 ${textColor}`}>Our Team</h2>
            <p className={`text-lg ${textSubColor}`}>
              We have background, proven track record, and vision to succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {membersToShow.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={`text-lg font-semibold ${textColor}`}>
                  {member.name}
                </h3>
                <p className={`text-sm ${textSubColor}`}>{member.role}</p>
              </div>
            ))}
          </div>

          {/* Show More / Less Button */}
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`px-6 py-2 ${btnBgColor} text-white rounded-lg ${btnHoverBgColor} transition cursor-pointer`}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
