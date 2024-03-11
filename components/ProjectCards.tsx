import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import MdOutlineExitToApp from 'react-icons/md';
import AiFillGithub from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectCards = ({ projectData }: any) => {
  const {
    key,
    title,
    description,
    technology1,
    technology2,
    technology3,
    technology4,
    technology5,
    technology6,
    url1,
    url2,
  } = projectData;

  return (
    <div className="card z-10 ">
      <div className="w-full h-full sm:p-3 mx-10 space-y-7">
        <div className="absolute flex h-25 w-25 top-1 right-1">
          <SocialIcon
            className="hover:bg-white hover:rounded-full"
            url={url1}
            target="_blank"
            rel="noopener noreferrer"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            className="hover:bg-white hover:rounded-full"
            network="sharethis"
            url={url2}
            target="_blank"
            rel="noopener noreferrer"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>

        <h1 className="text-lg sm:text-xl font-bold cursor-pointer">{title}</h1>
        <p
          className="font-light text-sm md:text-base px-3 sm:px-2 
          mt-1 md:text-justify cursor-pointer text-justify"
        >
          {description}
        </p>
        <div
          className="grid grid-rows-2 grid-flow-col gap-3 sm:gap-4 text-[10px] sm:text-xs
        space-x-4 pt-5 font-extralight cursor-pointer justify-evenly"
        >
          <p className="hover:underline ">{technology1}</p>
          <p className="hover:underline">{technology2}</p>
          {technology3 && <p className="hover:underline">{technology3}</p>}
          {technology4 && <p className="hover:underline">{technology4}</p>}
          {technology5 && <p className="hover:underline">{technology5}</p>}
          {technology6 && <p className="hover:underline">{technology6}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
