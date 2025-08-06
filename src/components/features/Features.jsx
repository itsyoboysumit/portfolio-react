import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { PiPlantBold } from "react-icons/pi";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="From Design to Deployment"
          des="As a Full-Stack MERN Developer, I take pride in building responsive and intuitive user interfaces that connect seamlessly with powerful backends. I focus on creating clean, modern designs using React and Tailwind CSS, ensuring every interface is not just beautiful—but functional and performant."
         
        />
        <Card
          title="Learning & Evolving"
          des="As an IT engineering student, I’m constantly exploring new technologies — from frontend frameworks like React and Vite to backend basics and database integration. I learn by growing with every challenge."
          icon={<AiFillAppstore />}
        />
        <Card
          title=" Curious Soul"
          des="Outside the screen, I dive into geopolitics, psychology, and good music. I follow sports passionately and find time for books that open new perspectives. These interests keep me grounded, and connected to the world."
          icon={<PiPlantBold />}
        />
    

      </div>
    </section>
  );
}

export default Features