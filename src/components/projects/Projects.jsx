import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" This project is a feature-rich social media clone designed to replicate the core functionalities of popular networking platforms. It enables users to connect, share content, and interact seamlessly in a dynamic digital space."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="This e-commerce platform is designed to deliver a seamless online shopping experience, with robust features for browsing, purchasing, and order tracking. It offers a scalable solution for modern retailers and tech-savvy consumers alike."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des="This chatting app offers real-time messaging with a clean, user-friendly interface, enabling users to connect and communicate effortlessly. It supports features like group chats, media sharing, and secure authentication for a smooth conversation experience."
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects