import React from 'react';
import { motion } from 'framer-motion';
import { CardProps } from './CardProps';
import Experience from './Experience';
import index from '../pages/index';

const ExperienceCard = ({ data }: any) => {
  const {
    key,
    img,
    title,
    company,
    startDate,
    endDate,
    summary1,
    summary2,
    summary3,
    summary4,
    summary5,
  } = data;
  return (
    <article
      className="flex flex-col rounded-lg items-center bg-[rgb(65,65,65)]
    space-y-7 hover:opacity-100 flex-shrink-0 overflow-scroll w-[280px] sm:w-[350px] md:w-[400px] mt-10 p-3 md:p-7 text-center 
    opacity-75 cursor-pointer transition-opacity duration-200  hover:-translate-y-2 "
    >
      <div className="p-3 md:px-5 xl:px-10 w-full h-full">
        <h1 className="text-lg md:text-xl font-light">{title}</h1>
        <p className="font-bold text-lg md:text-xl mt-1">{company}</p>
        <div className="flex space-x-2 my-2">{/* teck used */}</div>
        <p className=" pb-5 text-gray-300 text-xs lg:text-sm uppercase font-light">
          {startDate} - {endDate}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-xs md:text-sm xl:text-base text-left">
          <li>{summary1}</li>
          <li>{summary2}</li>
          <li>{summary3}</li>
          <li>{summary4}</li>
          <li>{summary5}</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
