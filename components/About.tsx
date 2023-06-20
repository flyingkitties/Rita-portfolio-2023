import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profilePic2 from '../pages/images/rita2.jpeg';

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
  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
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
        src="https://live.staticflickr.com/65535/52488679029_6382831232_m.jpg"
        className=" w-20 h-20 sm:w-40 sm:h-40 rounded-full -mb-20 md:mb-0 flex-shrink-0 
        object-cover md:w-64 md:h-64 lg:h-[320px] lg:w-[320px] mt-16 sm:mt-10 "
      />

      <div className="space-y-5 px-5 sm:px-12 md:px-10 lg:px-20 lg:space-y-10">
        <h4 className="md:text-4xl sm:text-3xl text-2xl font-semibold py-2 sm:py-5 ">
          Here is a{' '}
          <span className="underline decoration-[#f7AB0A]/50">little</span>
          {''} {''}background
        </h4>
        <p className=" font-light text-gray-400 tracking-wide text-xs sm:text-base text-justify lg:tracking-[3px]">
          Dedicated and versatile Web Developer with over 3 years experience
          including product management and UI/UX Design.
        </p>
        <p className=" font-light text-gray-400 tracking-wide text-xs sm:text-base text-justify lg:tracking-[3px]">
          Over the past 2 years I have focused on Full-stack Web Development and
          fell in love with the challenge. Problem solving is truly one of my
          passions.
        </p>

        <p className=" font-light text-gray-400 tracking-wide text-xs sm:text-base  text-justify lg:tracking-[3px] ">
          I&apos;m proficient in managing teams, eager to lean and collaborate
          in rapidly changing environments. I possess an excellent can-do
          attitude and thrive in fast-paced settings. Highly motivated, reliable
          and proactive with a strong work ethic.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
