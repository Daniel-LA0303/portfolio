import React from "react";
import projects from "../../helpers/projects";
import { projectsFullstack, projectsAPI, projectsMVC } from "../../helpers/projectsAPI";
import Card from "../Card/Card";

const Projects = () => {
  return (
    <div className="my-10" id="projects">
      <div className="px-5  w-full md:w-4/6 my-5">
        <p className="text-green-500 text-5xl mb-4">Projects</p>
        <p className="text-white text-xl">
          I have done several projects in both backend and frontend, however,
          today I consider myself a backend developer in the area of
          microservices, for more information I have put a link to the direct
          repository of my projects.
        </p>
      </div>

      <div className="text-white  flex items-center justify-center ">
        <div className="container mx-auto p-4">

          <p className="text-green-500 text-3xl mb-4 my-10">Projects FullStack</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-10">
            {projectsFullstack.map((project, index) => (
              <Card project={project} key={index} />
            ))}
          </div>

          <p className="text-green-500 text-3xl mb-4 my-10">Projects Backend</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-10">
            {projectsAPI.map((project, index) => (
              <Card project={project} key={index} />
            ))}
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-10">
            {projectsMVC.map((project, index) => (
              <Card project={project} key={index} />
            ))}
          </div>

          <p className="text-green-500 text-3xl mb-4 my-10">Projects Frontend</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-10">
            {projects.map((project, index) => (
              <Card project={project} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
