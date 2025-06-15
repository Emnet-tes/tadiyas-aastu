"use client";

import React from "react";
import MagazineCard from "../components/MagazineCard";
import { magazines } from "../../public/data.json";
import { useTheme } from "../context/ThemeContext";

const Magazines: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen pt-4 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1
            className={`text-4xl font-bold mt-2 mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Our Magazines
          </h1>
          <p
            className={`max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Discover our curated collection of student magazines, featuring the
            latest thoughts and inspiring stories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {magazines.map((file) => (
            <MagazineCard
              key={file.fileId}
              id={file.fileId}
              title={file.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Magazines;
