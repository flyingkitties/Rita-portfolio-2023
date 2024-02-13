import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
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
      className="flex flex-col relative h-screen 
  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h2 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h2>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
        }}
        animate={{}}
        loading="lazy"
        alt="Profile image"
        src="https://live.staticflickr.com/65535/52488679029_6382831232_m.jpg"
        className=" w-20 h-20 sm:w-40 sm:h-40 rounded-full -mb-20 md:mb-0 flex-shrink-0 
        object-cover md:w-64 md:h-64 lg:h-[320px] lg:w-[320px] mt-16 sm:mt-10 "
      />

      <div className="space-y-5 px-5 sm:px-12 md:px-10 lg:px-20 lg:space-y-10">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold py-2 sm:py-5">
          Here is a{' '}
          <span className="underline decoration-[#f7AB0A]/50">little</span>
          {''} {''}background
        </h1>
        <p className="text-gray-300 tracking-wide text-xs sm:text-sm md:text-base lg:text-lg text-justify">
          I am a dedicated and versatile Web Engineer with over 3 years of
          experience, including product management and UI/UX Design. Over the
          past 2 years, I have deliberately immersed myself in the intricate art
          of Full-stack Web Development, and have grown to love the challenge of
          problem-solving.
        </p>
        <p className="text-gray-300 tracking-wide text-xs sm:text-sm md:text-base lg:text-lg text-justify">
          My proficiency extends to team management, and I possess a strong
          desire to learn and collaborate effectively in dynamic, ever-evolving
          environments. My approach is characterized by an unwavering can-do
          attitude, and I thrive in fast-paced settings. I am highly motivated,
          reliable, proactive, and bring a robust work ethic to every project.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
