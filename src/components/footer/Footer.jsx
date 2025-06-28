import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black flex justify-center items-center">
      <div className="flex flex-row items-center justify-center gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=100009674650254"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/itsyoboysumit"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/sumit-kumar-a12b17360/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer