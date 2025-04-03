import React from "react";
import { FaInstagram} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { BiLogoTelegram } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 px-6">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="text-2xl font-bold text-black">
              <Image
                src="/logo1.png"
                width={70}
                height={70}
                alt="logo of tadiyas aastu"
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-4 text-gray-600">
              Discover the first student magazine in AASTU
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/magazines"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Magazines
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">
              Categories
            </h3>
            <ul className="space-y-2 text-black">
              <li>Art & Life-Style</li>
              <li>Literature</li>
              <li>Photography</li>
              <li>Others</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://t.me/tadiyas_aastu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <BiLogoTelegram size="1.5rem" />
              </Link>

              <Link
                href="https://www.instagram.com/tadiyas_aastu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaInstagram size="1.5rem" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/tadiyas-aastu-magazine/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <CiLinkedin size="1.5rem" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-100 text-center text-gray-600">
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
