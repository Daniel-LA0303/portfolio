import React from 'react'

const Card = ({project}) => {
    return (
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
                        View {link.type === 'Demo' ? link.type : link.type + ' Repository'}
                      </a>
                      {
                        link.type === 'Demo' ? ''
                        : <img
                        src="/images/githubblack.png"
                        className=" rounded"
                        alt="github"
                        width={20}
                        />
                      }
                    </button>
                  ))}
            </div>
        </div>
    )
}

export default Card