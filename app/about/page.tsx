"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const team = [
  {
    name: "Maria Asfaw",
    role: "Founder & Editor-in-Chief",
    image: "/joy.jpg",
  },
  {
    name: "Hiwot Getnet",
    role: "Creative Director",
    image: "/envy.jpeg",
  },
  {
    name: "Meron Anley",
    role: "Graphic Designer",
    image: "/disgust.jpg",
  },
  {
    name: "Ruth Habtewold",
    role: "Graphic Designer",
    image: "/anxiety.jpg",
  },
  {
    name: "Anteneh Sintayehu",
    role: "Content Writer",
    image: "/fear.jpg",
  },
  {
    name: "Yabsra Gashaw",
    role: "Content Writer",
    image: "/anger.jpg",
  },
  {
    name: "Makda Yoseph",
    role: "Project Manager",
    image: "/nostaliga.jpg",
  },
  {
    name: "Emnet Teshome",
    role: "Website Developer",
    image: "/sad.jpg",
  },

];

const scrollingTeam = [...team, ...team];

const About = () => {
  const router = useRouter();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    router.push("/contact");
  };

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
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our vision is to create a space at AASTU where students can
                  explore their passions and express their creativity. We want
                  to bring people together, encourage new ideas, and help
                  students grow through collaboration and innovation.
                </p>
              
              </div>
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
                src="/home.jpg"
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Core Team
            </h2>
            <p className="text-lg text-gray-600">
              We have background, proven track record, and vision to succeed
            </p>
          </div>

          {/* Auto-scrolling Team Avatars */}
          {/* Auto-scrolling Team Avatars */}
          <div className="relative w-full overflow-x-auto">
            <motion.div
              className="flex space-x-12"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                ease: "linear",
                duration: 30,
                repeat: Infinity,
              }}
              style={{
                display: "flex",
                width: scrollingTeam.length * 150 + "px",
                minWidth: "100%",
              }}
            >
              {scrollingTeam.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center mx-8"
                  style={{ minWidth: "150px" }}
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
                  <h3 className="text-lg font-semibold text-gray-900 mt-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 text-center">
                    {member.role}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
