"use client";

import { useTheme } from "@/app/providers/themeProvider";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <div className="mt-20">
      <div className="text-center">
        {/* Logo mengikuti theme */}
        <Image
          src={isDark ? assets.logo_dark : assets.logo}
          alt="logo"
          className="w-36 mx-auto mb-2"
        />

        <div
          className={`w-max flex items-center gap-2 mx-auto ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <Image src={assets.mail_icon} alt="mail" className="w-6" />
          pinot1701@gmail.com
        </div>
      </div>

      <div
        className={`
          text-center sm:flex items-center justify-between 
          mx-[10%] mt-12 py-6 border-t 
          ${isDark ? "border-gray-600 text-gray-300" : "border-gray-400 text-gray-700"}
        `}
      >
        <p>© 2025 Ahmad Alfin. All rights reserved</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/alf1001"
              className={isDark ? "hover:text-white" : "hover:text-black"}
            >
              Github
            </a>
          </li>

          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ahmadalfinnurhakim/"
              className={isDark ? "hover:text-white" : "hover:text-black"}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
