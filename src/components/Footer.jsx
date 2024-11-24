import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaStackOverflow } from 'react-icons/fa';
import { SiOrcid, SiPeerlist } from 'react-icons/si'; // Peerlist and ORCID icons
import logo from '../assets/images/logo-veriwoks.png'; // Path to your logo image

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary py-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-6">
        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/christopher-rateng/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:christopher.rateng@example.com"
            className="hover:text-accent transition"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://peerlist.io/crateng"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
            aria-label="Peerlist"
          >
            <SiPeerlist size={24} />
          </a>
          <a
            href="https://github.com/ItsKris62"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://stackoverflow.com/users/27868627/christopher-rateng"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
            aria-label="Stack Overflow"
          >
            <FaStackOverflow size={24} />
          </a>
          <a
            href="https://orcid.org/0009-0001-0615-9528"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
            aria-label="ORCID"
          >
            <SiOrcid size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="font-quicksand text-sm text-center">
          &copy; {new Date().getFullYear()} Christopher Rateng. All Rights Reserved.
        </p>

        {/* Logo */}
        <img src={logo} alt="Christopher Rateng Logo" className="w-24 h-auto" />
      </div>
    </footer>
  );
};

export default Footer;
