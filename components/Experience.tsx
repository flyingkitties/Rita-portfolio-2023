import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-lft md:flex-row 
      max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px]
       text-gray-500 text-2xl "
      >
        Experience
      </h3>

      <div
        className=" mt-20 w-full flex space-x-5  overflow-x-scroll 
      p-10 snap-x snap-mandatory  scrollbar-thin scrollbar-track-gray-600/20
       scrollbar-thumb-[#f7ab0a]/70"
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;
