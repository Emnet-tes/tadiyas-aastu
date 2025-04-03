"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MagazineCardProps {
  id: number;
  title: string;
  cover: string;
  description: string;
  date: string;
}

const MagazineCard: React.FC<MagazineCardProps> = ({
  id,
  title,
  cover,
  date,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-transparent transition-all duration-300"
    >
      <Link href={`/magazineDetail/${id}`} className="block">
        {/* Cover Image Container */}
        <div className="relative" style={{ aspectRatio: "0.77" }}>
          <div className="w-full h-full overflow-hidden">
            <Image
              src={cover}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Title Container */}
        <div className="pt-3 pb-2">
          <h3 className="text-lg font-bold text-gray-900 hover:text-gray-700 transition-colors">
            {title}
          </h3>
        </div>

        {/* Date */}
        <div className="text-sm text-gray-600">{date}</div>
      </Link>
    </motion.div>
  );
};

export default MagazineCard;
