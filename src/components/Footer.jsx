import React from "react";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left */}
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Fuad Ibrahin. All rights reserved.
        </p>

        {/* Right - Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/fuaad-lab"
            className="hover:text-white transition"
          >
            <FaGithub className="w-[30px] h-[30px]" />
          </a>
          <a
            href="https://x.com/fuaadi174"
            className="hover:text-white transition"
          >
            <FaSquareXTwitter className="w-[30px] h-[30px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/fuaad-ibraahin-4738b4387/?trk=flagship3_open_to_hiring_creation_upsell"
            className="hover:text-white transition"
          >
            <FaLinkedin className="w-[30px] h-[30px]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;