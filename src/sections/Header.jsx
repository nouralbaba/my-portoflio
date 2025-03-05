"use client";
import { motion } from 'framer-motion';
import React from 'react'


export const Header = () => {

  return (
    <div className="container">
      <div className="fixed top-0 left-0 right-0 z-10 flex justify-center items-center gap-6 mt-6">
        <motion.div
          className="text-white/80 text-xl lg:text-2xl sm:text-lg font-bold font-serif hover:text-white"
        >
          Nour Albaba
        </motion.div>
  
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          <a href="#Home" className="px-4 py-1.5 rounded-full text-white/70 text-sm md:text-lg lg:text-lg font-semibold hover:text-white transition duration-300 hover:bg-white/10">
            Home
          </a>
          <a href="#Projects" className="px-4 py-1.5 rounded-full text-white/70 text-sm md:text-lg lg:text-lg font-semibold hover:text-white transition duration-300 hover:bg-white/10">
            Projects
          </a>
          <a href="#About" className="px-4 py-1.5 rounded-full text-white/70 text-sm md:text-lg lg:text-lg font-semibold hover:text-white transition duration-300 hover:bg-white/10">
            About
          </a>
          <a href="#Contact" className="px-4 py-1.5 rounded-full text-sm md:text-lg lg:text-lg font-semibold bg-white text-gray-900 hover:bg-white/90 hover:text-gray-900">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};
export default Header;

