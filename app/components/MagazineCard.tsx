import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import data from '../../public/data.json';
import { useTheme } from '../context/ThemeContext'; // 1. Import theme hook

interface MagazineCardProps {
  id: string;
  title: string;
  file: string;
}

const MagazineCard: React.FC<MagazineCardProps> = ({ file, id }) => {
  const magazine = data.magazines.find((mag) => mag.fileId === id);
  const { theme } = useTheme(); // 2. Use theme

  if (!magazine) return null;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-transparent transition-all duration-300"
    >
      <Link
        href={{
          pathname: `/magazineDetail/${id}`,
          query: { file },
        }}
        className="block"
      >
        {/* Cover Image */}
        <div className="relative" style={{ aspectRatio: '0.72' }}>
          <div className="w-full h-full overflow-hidden">
            <Image
              src={magazine.cover}
              alt={magazine.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Title */}
        <div className="pt-3 pb-2">
          <h3
            className={`text-md font-bold transition-colors ${
              theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'
            }`}
          >
            {magazine.title}
          </h3>
        </div>

        {/* Date */}
        <div className={`text-sm transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {magazine.date}
        </div>
      </Link>
    </motion.div>
  );
};

export default MagazineCard;
