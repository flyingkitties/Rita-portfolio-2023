import React from 'react';
import { ProjectProps } from './CardProps';
import ProjectCards from './ProjectCards';

interface Props {
  projectData: Array<ProjectProps>;
}

const Projects = ({ projectData }: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div
      className="h-screen relative flex  flex-col 
    text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      <h3
        className="absolute top-24 uppercase tracking-[20px]
       text-gray-500 text-2xl ">
        Projects
      </h3>

      <div
        className="relative w-full flex  overflow-y-hidden 
      snap-x snap-mandatory mt-20 space-x-5 p-10 z-20 scrollbar-thin scrollbar-track-gray-600/20
      scrollbar-thumb-[#f7ab0a]/60">
        {projectData?.map((projectData) => (
          <ProjectCards key={projectData.key} projectData={projectData} />
        ))}

        {/* project maping */}
      </div>

      <div
        className="w-full absolute top-[30%] bg-[rgb(48,48,48)] h-[500px]
      -skew-y-12"></div>
    </div>
  );
};

export default Projects;
