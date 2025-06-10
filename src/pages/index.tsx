// import Head from "next/head";
// import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
//import Background from "@/components/background";

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
    <section   className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/assets/glistening_water_by_sini_ko.gif')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div> */}

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 inset-0 bg-slate-900/65 rounded-lg shadow-lg backdrop-blur-md max-w-3xl mx-auto">
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
            className="group relative px-8 py-4 bg-transparent font-semibold text-lg hover:text-italic transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Resume</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/aatmadja/" 
            target="_blank"
            className="group relative px-8 py-4 bg-transparent font-semibold text-lg hover: transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}