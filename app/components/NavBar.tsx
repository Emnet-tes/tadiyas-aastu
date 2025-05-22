"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white/90 dark:bg-gray-600/90 backdrop-blur-sm fixed w-full z-50 border-b border-gray-100 dark:border-gray-800 px-4">

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-black dark:text-white">
            <Image
              src="/logo1.png"
              width={50}
              height={50}
              alt="Tadiyas AASTU Logo"
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {["/", "/magazines", "/about", "/contact"].map((path, index) => {
              const labels = ["Home", "Magazines", "About", "Contact"];
              return (
                <Link
                  key={path}
                  href={path}
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  {labels[index]}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute right-6 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="py-2">
                {["/", "/magazines", "/about", "/contact"].map((path, index) => {
                  const labels = ["Home", "Magazines", "About", "Contact"];
                  return (
                    <Link
                      key={path}
                      href={path}
                      className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {labels[index]}
                    </Link>
                  );
                })}
             
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
