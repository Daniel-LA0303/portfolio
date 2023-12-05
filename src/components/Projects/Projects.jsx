import React from "react";
import projects from "../../helpers/projects";
import projectsBackend from "../../helpers/projectsBackend";

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div className="bg-black-card rounded-lg p-4">
                <img
                  src={project.img}
                  alt="Placeholder Image"
                  className="w-full h-48 rounded-md object-cover"
                />
                <div className="px-1 py-4">
                  <div className="font-bold text-xl mb-2">{project.name}</div>
                  <p className="text-base">{project.description}</p>
                </div>
                <div className="px-1 py-4">
                  <p>Skills:</p>
                  <div className="flex flex-wrap mb-3">
                    {project.skills.map((skill, index) => (
                      <span
                        style={{ color: skill.color }}
                        className="py-1 rounded-lg text-sm mr-2"
                        key={skill.id}
                      >
                        #{skill.name}
                      </span>
                    ))}
                  </div>
                  <button className="bg-green-500 w-10/12 flex justify-between  mb-2 hover:bg-green-700 py-2 px-3 rounded transition duration-300 ease-in-out text-sm">
                    <a
                      href={project.linkRepo}
                      target="_blank"
                      className="block"
                    >
                      View Repository
                    </a>
                    <img
                      src="/images/githubblack.png"
                      className=" rounded"
                      alt="github"
                      width={20}
                    />
                  </button>
                  <button className="bg-green-500 text-left  w-10/12 hover:bg-green-700 py-2 px-3 rounded transition duration-300 ease-in-out text-sm">
                    <a href={project.link} target="_blank">
                      View Project
                    </a>
                  </button>

                </div>
              </div>
            ))}
          </div>

          <p className="text-green-500 text-5xl mb-4 my-10">Projects Backend</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {projectsBackend.map((project, index) => (
              <div className="bg-black-card rounded-lg p-4">
                <img
                  src={project.img}
                  alt="Placeholder Image"
                  className="w-full h-48 rounded-md object-cover"
                />
                <div className="px-1 py-4">
                  <div className="font-bold text-xl mb-2">{project.name}</div>
                  <p className="text-base">{project.description}</p>
                </div>
                <div className="px-1 py-4">
                  <p>Skills:</p>
                  <div className="flex flex-wrap mb-3">
                    {project.skills.map((skill, index) => (
                      <span
                        style={{ color: skill.color }}
                        className="py-1 rounded-lg text-sm mr-2"
                        key={skill.id}
                      >
                        #{skill.name}
                      </span>
                    ))}
                  </div>


                  {project.linksRepo.map((link, index) => (
                    <button className="bg-green-500 w-10/12 flex justify-between  mb-2 hover:bg-green-700 py-2 px-3 rounded transition duration-300 ease-in-out text-repo">
                      <a
                        href={link.link}
                        target="_blank"
                        className="block"
                      >
                        View {link.type} Repository
                      </a>
                      <img
                        src="/images/githubblack.png"
                        className=" rounded"
                        alt="github"
                        width={20}
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
