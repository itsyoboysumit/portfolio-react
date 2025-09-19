import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full pt-10 pb-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="YOUTUBE CLONE"
          des="A full-stack YouTube clone built with the MERN stack, featuring video uploads, subscriptions, like, comment, playlists, search, authentication, and responsive UI - delivering smooth video playback and intuitive user experience across devices."
          src={projectOne}
          progress="Deployed"
          githubLinks={[
            "https://github.com/itsyoboysumit/YouTube-frontend-",
            "https://github.com/itsyoboysumit/backend_project"
          ]}
          liveLink="https://miniyoutube459.netlify.app/"
        />
        <ProjectsCard
          title="PORTFOLIO WEBSITE"
          des="A fast, responsive portfolio built with React and Vite, showcasing my MERN stack projects, skills, and experience. Designed for clean UI, smooth navigation, and a professional developer presence with modern design aesthetics."
          src={projectTwo}
          progress="Deployed"
          githubLinks={[
            "https://github.com/itsyoboysumit/portfolio-react"
          ]}
          liveLink="https://sumit2004.netlify.app/"
        />
        <ProjectsCard
          title="REBOX"
          des="A smart product exchange platform that estimates the value of unused household items and suggests exchange options within a similar price range. Users can browse, search, customize, and categorize available items for seamless bartering."
          src={projectThree}
          progress="In Development"
          githubLinks={[
            "https://github.com/itsyoboysumit/rebox"
          ]}
          liveLink=""
        />
        <ProjectsCard
          title="ZERODHA CLONE"
          des="Tradelyst is a front-end application I built to grasp large-scale website architecture. It highlights React, clean component structure, routing, and responsive UI. Completed as a learning effort to deepen my front-end expertise."
          src={projectFour}
          progress="Deployed"
          githubLinks={[
            "https://github.com/itsyoboysumit/tradelyst/tree/main/frontend"
          ]}
          liveLink="https://spectacular-cobbler-8d722c.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
