import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { FaExternalLinkAlt } from "react-icons/fa";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-0 lgl:gap-20"
    >
      {/* Left Section */}
      <div className="w-full h-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-0  lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
          {/* Card 1 */}
          <div className="relative">
            <ResumeCard
              title="React: All You Need to Know With Practical Projects"
              subTitle="Udemy"
              result="Success"
              des="This course gave me a solid understanding of React fundamentals along with hands-on experience through real-world projects. It helped me build dynamic and interactive user interfaces with confidence."
            />
            <a
              href="https://www.udemy.com/certificate/UC-1cae1e06-6ca0-4684-8c45-80d7891bed53/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-4 text-designColor text-xl hover:text-blue-500 transition opacity-60"
            >
              <FaExternalLinkAlt />
            </a>
          </div>

          {/* Card 2 */}
          <div className="relative">
            <ResumeCard
              title="HTML CSS JavaScript For Beginners"
              subTitle="Udemy"
              result="Success"
              des="This course provided me with a strong foundation in front-end web development using HTML5, CSS3, and JavaScript. I gained hands-on experience building responsive and interactive web pages from scratch."
            />
            <a
              href="https://www.udemy.com/certificate/UC-5a7abaab-b91e-4925-8fcb-f26453a85976/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-4 text-designColor text-xl hover:text-blue-500 transition opacity-60"
            >
              <FaExternalLinkAlt />
            </a>
          </div>

          {/* Card 3 */}
          <div className="relative">
            <ResumeCard
              title="Teamwork Skills: Communicating Effectively in Groups"
              subTitle="University of Colorado Boulder"
              result="Success"
              des="This course helped me understand the importance of active listening, clear communication, and collaboration within a team. It enhanced my ability to contribute effectively in group settings and resolve conflicts constructively."
            />
            <a
              href="https://www.coursera.org/account/accomplishments/verify/K6MGYPFE9QZJ"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-4 text-designColor text-xl hover:text-blue-500 transition opacity-60"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full h-full lgl:w-1/2 mt-0 lgl:mt-32">
        <div className="mt-0 lgl:mt-14 pt-10 lgl:pt-0 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

          {/* Card 4 */}
          <div className="relative">
            <ResumeCard
              title="PHP OOP's With MySQL: Build Restaurant Management System"
              subTitle="Udemy"
              result="Success"
              des="This course strengthened my understanding of PHP using object-oriented programming concepts and MySQL integration. I developed a functional restaurant management system, enhancing my skills in backend development and database operations."
            />
            <a
              href="https://www.udemy.com/certificate/UC-94c69ed5-d665-4a29-b027-cb369eadd621/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-4 text-designColor text-xl hover:text-blue-500 transition opacity-60"
            >
              <FaExternalLinkAlt />
            </a>
          </div>

          {/* Card 5 */}
          <div className="relative">
            <ResumeCard
              title="Introduction to Python Programming"
              subTitle="University of Pennsylvania"
              result="Success"
              des="This course introduced me to the fundamentals of Python, including variables, loops, functions, and data structures. It helped me build a strong programming foundation and problem-solving skills essential for future development work."
            />
            <a
              href="https://www.coursera.org/account/accomplishments/verify/A4HPUF5GTKKA"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-4 text-designColor text-xl hover:text-blue-500 transition opacity-60"
            >
              <FaExternalLinkAlt />
            </a>
          </div>

          {/* Card 6 */}
          <div className="relative">
            <ResumeCard
              title="Data Structure and OOP's with C++"
              subTitle="Udemy"
              result="Success"
              des="This course provided a thorough foundation in C++ programming, covering essential data structures and object-oriented principles. I gained practical experience implementing key algorithms and structures, improving my problem-solving and coding efficiency in C++."
            />
            <a
              href="https://www.udemy.com/certificate/UC-68d826d8-f7ed-4935-a449-d0d478926156/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-4 text-designColor text-xl hover:text-blue-500 transition opacity-60"
            >
              <FaExternalLinkAlt />
            </a>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
