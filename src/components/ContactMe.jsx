import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // for smooth scroll

export default function Footer() {
  const socialLinks = [
    { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/gideonsoala/" },
    { icon: <FaInstagram />, label: "Instagram", url: "https://www.instagram.com/gideonsoala/" },
    { icon: <FaGithub />, label: "GitHub", url: "https://github.com/gideonsoala" },
  ];

  const menuLinks = [
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <footer className="bg-black dark:bg-black py-16 px-6 flex flex-col md:flex-row justify-center gap-20">
      {/* Social Links Stack */}
      <div className="flex flex-col items-start space-y-4">
        <h3 className="text-gray-400 text-xl font-semibold mb-4">Connect</h3>
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:bg-white/10"
          >
            <span className="text-gray-200 text-2xl">{link.icon}</span>
            <span className="text-gray-300 font-medium">{link.label}</span>
          </a>
        ))}
      </div>

      {/* Menu Links Stack */}
      <div className="flex flex-col items-start space-y-2">
        <h3 className="text-gray-400 text-xl font-semibold mb-4">Menu</h3>
        {menuLinks.map((link, idx) => (
          <ScrollLink
            key={idx}
            to={link.to}
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-300 font-medium hover:text-white hover:scale-105 transition-all duration-300"
          >
            {link.label}
          </ScrollLink>
        ))}
      </div>

      {/* Copyright */}
      <div className="flex flex-col items-center mt-10 md:mt-0 md:ml-20">
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Gideon Soala</p>
        <p className="text-gray-500 text-sm">All rights reserved</p>
      </div>
    </footer>
  );
}