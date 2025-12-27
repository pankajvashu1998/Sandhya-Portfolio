import React from "react";
import { IoMdDownload } from "react-icons/io";

const Banner = ({ themeMode }) => {
  return (
    <section
      className={`w-full min-h-screen text-center md:text-left flex items-center pb-7 ${
        themeMode === "dark"
          ? "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white"
          : "bg-gradient-to-r from-gray-50 via-white to-gray-100 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto mt-20 sm:mt-0 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-5">
          <span className="tracking-widest text-amber-700 uppercase font-mono">
            Full Stack Web Developer
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Hi, I’m <span className="text-amber-700">SANDHYA KUMARI</span>
            <br />
            I Build Modern Web Applications
          </h1>

          <p className="text-base sm:text-lg max-w-xl">
            I design and develop modern, responsive, and high-performance
            websites that help businesses grow online.
          </p>

          <p className="text-sm sm:text-base">
            Specialized in React, Next.js, Node.js, Express, MongoDB, and REST
            APIs.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <button className="px-6 py-3 bg-amber-700 text-black font-semibold rounded-lg hover:bg-amber-600 transition">
              View Projects
            </button>

            <a
              href="#contact"
              className="flex justify-center items-center px-6 py-3 border border-amber-600 text-amber-700 rounded-lg hover:bg-amber-600 hover:text-black transition"
            >
              Contact Me
            </a>

            <a
              href="CV (Sandhya) (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center px-6 py-3 border border-amber-600 text-amber-700 rounded-lg hover:bg-amber-600 hover:text-black transition"
            >
              <span className="text-xl mr-2">
                <IoMdDownload />
              </span>
              Download CV
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent flex items-center justify-center">
            <div className="w-44 h-44 sm:w-56 sm:h-56 overflow-hidden rounded-full bg-slate-900 border border-amber-500/30">
              <img
                src="/sandhya.png"
                alt="sandhya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
