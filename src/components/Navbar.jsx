import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  // Framer Motion animation variants
  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary text-secondary shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-playfair font-bold">Christopher Rateng</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <span className="text-lg font-bold">✖</span> // Close Icon
          ) : (
            <span className="text-lg font-bold">☰</span> // Menu Icon
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {[
            "home",
            "about",
            "academic",
            "experience",
            "projects",
            "certificates",
            "contact",
          ].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer font-playwrite hover:text-accent transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-primary overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-4 py-4">
              {[
                "home",
                "about",
                "academic",
                "experience",
                "projects",
                "certificates",
                "contact",
              ].map((section) => (
                <li key={section} className="text-center">
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)} // Close menu on click
                    className="cursor-pointer font-playwrite hover:text-accent transition block"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
