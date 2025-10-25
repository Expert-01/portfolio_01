import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function ContactLinks() {
  const links = [
    { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/gideonsoala/" },
    { icon: <FaInstagram />, label: "Instagram", url: "https://www.instagram.com/gideonsoala/" },
    { icon: <FaGithub />, label: "GitHub", url: "https://github.com/gideonsoala" },
  ];

  return (
    <footer className="mt-16 py-8 flex justify-center w-full">
      <div className="flex flex-col items-center bg-white/20 dark:bg-gray-900/30 backdrop-blur-lg border border-white/20 dark:border-gray-500/20 rounded-xl shadow-lg px-6 py-4 space-y-4">
        <ul className="flex space-x-6">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-white/10 dark:hover:bg-gray-700/30"
              >
                <span className="text-gray-200 dark:text-gray-300 text-2xl">{link.icon}</span>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="text-gray-400 dark:text-gray-500 text-sm mt-4">
          &copy; {new Date().getFullYear()} Gideon Soala. All rights reserved.
        </p>
      </div>
    </footer>
  );
}