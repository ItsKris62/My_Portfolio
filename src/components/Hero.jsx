import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/me_official.jpg';

const Hero = () => {
  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-primary to-secondary text-secondary text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src={profileImage}
        alt="Christopher Rateng"
        className="rounded-full w-48 h-48 mb-6 shadow-lg border-4 border-accent"
      />
      <motion.h1
        className="text-4xl font-edu font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Hi, I'm Christopher Rateng
      </motion.h1>
      <motion.p
        className="text-lg font-quicksand"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        IT Specialist | Network Administrator | Support Engineer
      </motion.p>
    </motion.div>
  );
};

export default Hero;
