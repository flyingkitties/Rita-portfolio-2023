import React from 'react';
import { ProjectProps } from './CardProps';
import ProjectCards from './ProjectCards';

interface Props {
  projectData: Array<ProjectProps>;
}

const Projects = ({ projectData }: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="sectionContainer">
      <h1 className="sectionTitle">Projects</h1>

      <div className="cardsContainer">
        {projectData?.map((projectData) => (
          <ProjectCards
            key={projectData.key}
            projectData={projectData}
          />
        ))}

        {/* project maping */}
      </div>

      <div className="backgroundStripe"></div>
    </div>
  );
};

export default Projects;
