import React from "react";
import { FaReact } from "react-icons/fa";
import { SiFirebase, SiArduino, SiTailwindcss } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="lg:pt-4">
      <div className="text-textColor font-bold font-Montserrat flex flex-col items-center">
        <h1 className="opacity-30 font-semibold text-xs lg:text-sm">
          Powered By
        </h1>
        <div className="flex gap-1 py-1">
          <a
            className="transform transition hover:scale-110"
            href="https://reactjs.org/"
          >
            <FaReact size={30} color="#f0ffff" />
          </a>
          <a
            className="transform transition hover:scale-110"
            href="https://firebase.google.com/"
          >
            <SiFirebase size={30} color="#f0ffff" />
          </a>
          <a
            className="transform transition hover:scale-110"
            href="https://arduino.cc/"
          >
            <SiArduino size={30} color="#f0ffff" />
          </a>
          <a
            className="transform transition hover:scale-110"
            href="https://tailwindcss.com/"
          >
            <SiTailwindcss size={30} color="#f0ffff" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
