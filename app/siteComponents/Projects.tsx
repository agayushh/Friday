import { Projects_List } from "../config/projects";
import Image from "next/image";
import { VscGithubAlt } from "react-icons/vsc";
import { FaLink } from "react-icons/fa6";

export const Project = () => {
  return (
    <div>
      <div className="text-2xl pl-3 text-muted-foreground tracking-wide font-jura">
        PROJECTS
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-3">
        {Projects_List.map((project, index) => (
          <div key={index} className="border rounded-lg p-4">
            <Image
              src={project.banner}
              alt={project.title}
              className="w-full h-fit object-cover rounded-xl mb-4 border"
              width={500}
              height={300}
            />
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-jura">{project.title}</h2>
                <p className="text-sm dark:text-white text-black font-maven">
                  Timeline: {project.period}
                </p>
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <VscGithubAlt size={20} />
                </a>
                <a
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <FaLink size={18} />
                </a>
              </div>
            </div>

            <p className="dark:text-white text-black mb-4 font-jura">
              {project.description}
            </p>
            <div>
              <span className="text-sm dark:text-white text-black mr-2 font-maven">
                Tech Stack:
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-sm dark:bg-gray-900/50 opacity-60 bg-gray-200/25 tracking-wide rounded-lg font-maven border px-2 py-1 dark:text-gray-300 text-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
