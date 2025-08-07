import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-0 lgl:gap-20 lgl:h-[800px]"
    >
      {/* part one */}
      <div className="w-full h-full lgl:w-1/2 ">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Secondary Education"
            subTitle="MMSSVM MADHUPUR (2017 - 2019)"
            result="94.6%"
            des="I have passed my Senior Secondary Examination from the CBSE Board, which laid a strong academic foundation. It instilled discipline, critical thinking, and a lifelong passion for learning in me."
          />
          <ResumeCard
            title="Senior Secondary Education"
            subTitle="PT. B N JHA MEMORIAL INT COLLEGE DEOGHAR (2019 - 2021)"
            result="77.6%"
            des="I have completed my Senior Secondary Education from the Jharkhand Academic Council (JAC) Board, which strengthened my academic roots. It helped me develop resilience, consistency, and a focused approach toward my goals."
          />
        </div>
      </div>

      {/* part two */}
      <div className="w-full h-full lgl:w-1/2 ">
        <div className="mt-0 lgl:mt-20 py-0 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* Optional heading or leave empty */}
        </div>
        <div className="pt-10 lgl:pt-0 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in the Department of IT"
            subTitle="ASANSOL ENGINEERING COLLEGE (2022 - present)"
            result="8.4 CGPA"
            des="I am currently pursuing my Bachelor's degree in Information Technology from Asansol Engineering College, affiliated with MAKAUT University. This journey is enhancing my technical skills and shaping me into a disciplined, solution-oriented professional."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Internet (2024 - present)"
            result="Growing"
            des="I began my web development journey in 2024, after dedicating time to building a strong foundation in various programming languages and essential technical skills. This groundwork has enabled me to approach web development with clarity."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
