import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Alvina Atmadja
        </h1>
        
        {/* Subheading */}
        <div className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          <p className="mb-2">Jack-of-all-trades, master of all.</p>
          <p>Professional troubleshooter with a practical knack for blending design and functionality.</p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/assets/AlvinaAtmadja_resume_2025_prod.pdf" 
            target="_blank"
            className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">View Resume</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/aatmadja/" 
            target="_blank"
            className="group relative px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">LinkedIn</span>
          </a>
        </div>
        
      </div>
    </div>
  );
}