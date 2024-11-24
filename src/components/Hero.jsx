import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/me_official.jpg";

const Hero = () => {
  return (
    <header
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-primary to-secondary text-secondary text-center"
      aria-labelledby="hero-title"
    >
      <motion.img
        src={profileImage}
        alt="Portrait of Christopher Rateng"
        className="rounded-full w-80 h-120 mb-6 shadow-lg border-4 border-accent z-10"
        loading="lazy" // Lazy loading for improved performance
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        id="hero-title"
        className="text-6xl font-playwrite font-bold mb-2 z-0"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Hi, <span className="sr-only">I'm</span> Christopher Rateng
      </motion.h1>
      <motion.p
        className="text-lg font-quicksand"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        IT Specialist | Network Administrator | Support Engineer
      </motion.p>
    </header>
  );
};

export default Hero;
