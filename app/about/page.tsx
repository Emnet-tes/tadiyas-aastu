"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

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
    image: "/kaleabGti.jpg",
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

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    router.push("/contact");
  };

  const coFounders = team.filter((member) =>
    member.role.toLowerCase().includes("founder")
  );

  const membersToShow = showAll ? team : coFounders;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 ">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold  text-gray-900">About Us</h1>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our vision is to create a space at AASTU where students can
                explore their passions and express their creativity. We want to
                bring people together, encourage new ideas, and help students
                grow through collaboration and innovation.
              </p>
              <Link
                href="/contact"
                onClick={handleContactClick}
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors group"
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
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Team</h2>
            <p className="text-lg text-gray-600">
              We have background, proven track record, and vision to succeed
            </p>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-10">
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
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Show More / Less Button */}
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
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
