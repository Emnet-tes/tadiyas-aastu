"use client";

import React from "react";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { BiLogoTelegram } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  // Determine classes based on theme
  const bgClass = theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
  const textClass = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const headingClass = theme === "dark" ? "text-white" : "text-black";
  const linkHoverClass = theme === "dark" ? "hover:text-white" : "hover:text-black";

  return (
    <footer className={`${bgClass} border-t px-6`}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className={`text-2xl font-bold ${headingClass}`}>
              <Image
                src="/logo white.png"
                width={70}
                height={70}
                alt="logo of tadiyas aastu"
                className="h-20 w-auto"
              />
            </Link>
            <p className={`mt-4 ${textClass}`}>
              Discover the first student magazine in AASTU
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${headingClass}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Magazines", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className={`${textClass} ${linkHoverClass} transition-colors`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${headingClass}`}>
              Categories
            </h3>
            <ul className={`${textClass} space-y-2`}>
              <li>Art & Life-Style</li>
              <li>Literature</li>
              <li>Photography</li>
              <li>Others</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${headingClass}`}>
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <Link
                href="https://t.me/tadiyas_aastu"
                target="_blank"
                rel="noopener noreferrer"
                className={`${textClass} ${linkHoverClass} transition-colors`}
              >
                <BiLogoTelegram size="1.5rem" />
              </Link>

              <Link
                href="https://www.instagram.com/tadiyas_aastu/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${textClass} ${linkHoverClass} transition-colors`}
              >
                <FaInstagram size="1.5rem" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/tadiyas-aastu-magazine/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${textClass} ${linkHoverClass} transition-colors`}
              >
                <CiLinkedin size="1.5rem" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-12 pt-6 border-t ${theme === "dark" ? "border-gray-700" : "border-gray-100"} text-center ${textClass}`}>
          <p>
            &copy; {new Date().getFullYear()} Tadiyas AASTU. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
