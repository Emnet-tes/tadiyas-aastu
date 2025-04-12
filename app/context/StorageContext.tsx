"use client";

import { storage } from "@/app/lib/appwrite";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Models } from "appwrite"; // assuming you're using Appwrite SDK types

interface StorageContextType {
  files: Models.File[]; // ✅ Strongly typed
  loading: boolean;
  error: string | null;
}

const StorageContext = createContext<StorageContextType>({
  files: [],
  loading: true,
  error: null,
});

export const StorageProvider = ({ children }: { children: ReactNode }) => {
  const [files, setFiles] = useState<Models.File[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const BUCKET_ID = "67fa159e0030e7e3ae7f";

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await storage.listFiles(BUCKET_ID);
        setFiles(response.files);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch files");
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return (
    <StorageContext.Provider value={{ files, loading, error }}>
      {children}
    </StorageContext.Provider>
  );
};

export const useStorage = () => useContext(StorageContext);
