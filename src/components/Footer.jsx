import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary py-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-4">
        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="font-quicksand text-sm text-center">
          &copy; {new Date().getFullYear()} Christopher Rateng. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
