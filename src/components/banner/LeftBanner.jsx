import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "MERN Stack Web Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize ">Sumit Kumar</span>
        </h1>
        <h2 className="text-4xl font-bold text-white custom:min-h-[80px] ">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am an engineering graduate from the Information Technology
          department. I have a strong foundation in software development,
          problem-solving, and web technologies. My focus is on building
          efficient and scalable solutions, with a keen interest in front-end
          development.
        </p>
      </div>
      <div className="flex flex-col gap-10 justify-between md:flex-row lgl:gap-4 ">
        <div>
          <h2 className="text-center md:text-left uppercase font-titleFont mb-4 ">
            Find me in
          </h2>
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/itsyoboysumit" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/sumit-kumar-a12b17360/"
              target="blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100009674650254"
              target="blank"
            >
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://x.com/itsyoboysumit" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-center md:text-left uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4 justify-center">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
