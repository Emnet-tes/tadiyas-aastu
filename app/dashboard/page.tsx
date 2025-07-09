"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MagazineCard from "../components/MagazineCard";
import { magazines } from "../../public/data.json";
import { useTheme } from "../context/ThemeContext"; // import the hook

export default function Dashboard() {
  const { theme } = useTheme();
  const [showMobilePopup, setShowMobilePopup] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || "";

    const isMobile = /Mobi|Android|iPhone/i.test(ua);
    const isBlockedApp = /Instagram|FBAN|FBAV|LinkedIn/i.test(ua); // Instagram, Facebook App, LinkedIn App

    if (isMobile && !isBlockedApp) {
      setShowMobilePopup(true);
    }
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      {/* ✅ Simple Dismissible Popup */}
      {showMobilePopup && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] bg-white border border-gray-300 text-black shadow-md rounded-lg px-4 py-3 max-w-sm w-[90%] text-sm flex justify-between items-center">
          <span>
            If you&apos;re viewing this inside in-app browser, which may cause
            issues. <br />
            Please tap the <strong>three dots (⋮)</strong> at the top right and
            select <strong>“Open in Browser”</strong> to continue.
          </span>
          <button
            onClick={() => setShowMobilePopup(false)}
            className="ml-4 text-red-600 font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start px-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/websit-04.png")' }}
        ></div>
        <div className="absolute inset-0 bg-opacity-50"></div>

        <div className="relative z-10 max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl text-left"
          >
            <h1 className="text-6xl font-bold mb-6">
              Discover Tadiyas AASTU Magazine
            </h1>
            <p className="text-xl mb-8">
              Discover the first student magazine in Addis Ababa Science and
              Technology University through our platform.
            </p>
            <Link
              href="/magazines"
              className="inline-block px-8 py-4 text-md text-white bg-red-700 rounded-lg transition-colors hover:bg-white hover:text-black"
            >
              View All
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Magazines */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-10">
          <h2
            className={`text-2xl font-bold mb-8 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Featured Magazines
          </h2>
          <div className="grid grid-cols-grow grid-cols-2 lg:grid-cols-4 gap-4">
            {magazines.map((file) => (
              <MagazineCard
                key={file.fileId}
                id={file.fileId}
                title={file.title}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
