import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { CardProps } from './CardProps';
import index from '../pages/index';

interface Props {
  data: Array<CardProps>;
}

const Experience = ({ data }: Props): JSX.Element => {
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
      className="h-screen relative flex  flex-col 
      text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h1
        className="absolute top-24 uppercase tracking-[20px]
           text-gray-500 text-2xl "
      >
        Experience
      </h1>

      <div
        className=" relative w-full flex overflow-y-hidden 
      snap-x snap-mandatory mt-20 space-x-5 p-10 z-20 scrollbar-thin scrollbar-track-gray-600/20
      scrollbar-thumb-[#f7ab0a]/60"
      >
        {data?.map((data) => (
          <ExperienceCard
            key={data.key}
            data={data}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
