import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { CardProps } from './CardProps';

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
      className="sectionContainer"
    >
      <h1 className="sectionTitle">Experience</h1>

      <div className="cardsContainer">
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
