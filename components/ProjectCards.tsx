import React from "react";
import { SocialIcon } from "react-social-icons";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

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
    <div
      className="z-10 flex flex-col rounded-lg items-center bg-[rgb(36,36,36)]
    space-y-7 hover:opacity-100 flex-shrink-0 w-[450px] mt-10 p-7 text-center 
    opacity-60  transition-opacity duration-200  hover:-translate-y-2"
    >
      <div className=" relative md:px-10 p-5 mx-5 space-y-7">
        <div className="absolute flex h-25 w-25 top-0 right-0 ">
          <SocialIcon
            className="hover:bg-white hover:rounded-full"
            url={url1}
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            className="hover:bg-white hover:rounded-full"
            url={url2}
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
        <h4 className="text-xl font-bold cursor-pointer">{title}</h4>
        <p className="font-light text-l mt-1 text-justify cursor-pointer">
          {description}
        </p>
        <div className="flex text-sm space-x-4 pt-5 font-extralight cursor-pointer">
          <p className="hover:underline ">{technology1}</p>
          <p className="hover:underline">{technology2}</p>
          <p className="hover:underline">{technology3}</p>
          <p className="hover:underline">{technology4}</p>
          <p className="hover:underline">{technology5}</p>
          <p className="hover:underline">{technology6}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
