"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import MagazineCard from "../components/MagazineCard";
import { useStorage } from "../context/StorageContext";
import { storage } from "../lib/appwrite";
export default function Dashboard() {
  const { files, loading, error } = useStorage();
  const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID || "";

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start px-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/home.jpg")',
          }}
        ></div>
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
              className="inline-block px-8 py-4 text-md text-black bg-white rounded-lg transition-colors hover:bg-black hover:text-white"
            >
              View All
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Magazines */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-2xl font-bold mb-8 text-black">
            Featured Magazines
          </h2>
          <div className="grid grid-cols-grow grid-cols-2 lg:grid-cols-4 gap-4">
            {loading ? (
              <div role="status">
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
          </div>
            ) : error ? (
              <div className="col-span-full text-center text-red-500">{error}</div>
            ) : (
              files.map((file) => (
                <MagazineCard
                  key={file.$id}
                    id={file.$id}
                  title={file.name}
                  url={storage.getFileView(BUCKET_ID, file.$id)}
                  mimeType={file.mimeType}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
