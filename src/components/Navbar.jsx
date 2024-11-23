import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-primary text-secondary flex justify-between items-center px-6 py-4 shadow-md">
      <h1 className="text-2xl font-playfair font-bold">Christopher Rateng</h1>
      <div className="flex space-x-6">
        {['home', 'about', 'experience', 'projects', 'certificates', 'contact'].map((section) => (
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
    </nav>
  );
};

export default Navbar;
