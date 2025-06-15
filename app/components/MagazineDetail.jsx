'use client'
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";


export default function MagazineViewer() {
  const [iframeSrc, setIframeSrc] = useState("");
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    const magazineUrl = searchParams.get("magazineUrl") || "";
    setIframeSrc(magazineUrl);
    const timer = setTimeout(() => {
      if (magazineUrl === "") {
        setNotFound(true);
      }
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, [searchParams]);

  if (!iframeSrc) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col items-center justify-center md:py-16 min-h-screen  text-gray-800">
    

      {iframeSrc && (
        <iframe
          width="100%"
          height="575"
          src={iframeSrc}
          seamless
          allowtransparency="true"
          allowFullScreen={true}
        ></iframe>
      )}
    </div>
  );
}


const NotFound = () => (
  <div className="flex flex-col items-center justify-center py-10 min-h-screen bg-gray-700 text-white">
    <img
      src="/404.svg" 
      alt="Not Found"
      className="w-64 h-64 mb-4"
    />
    <h2 className="text-2xl font-bold mb-2">404 - Magazine Not Found</h2>
    <p className="">
      Sorry, the magazine you are looking for does not exist.
    </p>
  </div>
);


const Spinner = () => (
  <div className="flex items-center justify-center py-10">
    <svg className="animate-spin h-10 w-10 text-gray-500" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  </div>
);

