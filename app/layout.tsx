import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from './context/ThemeContext'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tadiyas AASTU",
  description: "Discover Tadiyas AASTU Magazine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
  <Analytics />
  <ToastContainer />
  <Navbar />
  <main className={`min-h-screen ${geistMono.variable} ${geistSans.variable}`}>{children}</main>
  <Footer />
  
        </ThemeProvider>
      </body>
    </html>
  )
}

 
