import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-20 pr-6 h-auto border-b-[1px] border-b-black flex justify-center items-center">
      <div className="flex flex-row items-center justify-center gap-8">
        <img className="w-28" src={logo} alt="logo" />
        <div className="flex gap-4">
          <a
            href="https://github.com/itsyoboysumit"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sumit-kumar-a12b17360/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/itsyoboysumit"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer