import React from "react";
import MagazineCard from "../components/MagazineCard";
import data from "@/public/data.json";

const Magazines: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-4">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mt-2 mb-4 text-gray-900">
            Our Magazines
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of student magazines, featuring the
            latest thoughts and inspiring stories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.magazines.map((magazine) => (
            <MagazineCard key={magazine.id} {...magazine} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Magazines;
