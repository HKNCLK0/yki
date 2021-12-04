import React from "react";
import { FaReact } from "react-icons/fa";
import { SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";
const Footer = () => {
  return (
    <footer>
      <div className="text-textColor font-bold font-Montserrat flex flex-col items-center">
        <h1 className="opacity-30 font-semibold text-sm">Powered By</h1>
        <div className="flex gap-1 py-1">
          <a
            className="transform transition hover:scale-110"
            href="https://www.mongodb.com/"
          >
            <SiMongodb size={36} color="#f0ffff" />
          </a>
          <a
            className="transform transition hover:scale-110"
            href="https://expressjs.com/"
          >
            <SiExpress size={36} color="#f0ffff" />
          </a>
          <a
            className="transform transition hover:scale-110"
            href="https://reactjs.org/"
          >
            <FaReact size={36} color="#f0ffff" />
          </a>
          <a
            className="transform transition hover:scale-110"
            href="https://nodejs.org/en/"
          >
            <SiNodedotjs size={36} color="#f0ffff" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
