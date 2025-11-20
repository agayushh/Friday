import { Projects_List } from "../config/projects";
import Image from "next/image";
import { VscGithubAlt } from "react-icons/vsc";
import { FaLink } from "react-icons/fa6";

export const Project = () => {
  return (
    <section id="projects" aria-label="Projects showcase">
      <h2 className="text-2xl pl-3 text-gray-600 dark:text-gray-400 tracking-wide font-jura">
        PROJECTS
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-3">
        {Projects_List.map((project, index) => (
          <article key={`${project.title}-${index}`} className="border rounded-lg p-4">
            <Image
              src={project.banner}
              alt={`${project.title} project screenshot`}
              className="w-full h-fit object-cover rounded-xl mb-4 border"
              width={500}
              height={300}
              loading={index < 2 ? "eager" : "lazy"}
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZSIvPjwvc3ZnPg=="
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-jura">{project.title}</h3>
                <p className="text-sm dark:text-white text-black font-maven">
                  <time dateTime={project.period}>Timeline: {project.period}</time>
                </p>
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <VscGithubAlt size={20} aria-hidden="true" />
                </a>
                <a
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  aria-label={`View ${project.title} live demo`}
                >
                  <FaLink size={18} aria-hidden="true" />
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
              <div className="flex flex-wrap gap-2 mt-2" role="list">
                {project.stack.map((tech, techIndex) => (
                  <span
                    key={`${tech}-${techIndex}`}
                    role="listitem"
                    className="text-sm dark:bg-gray-900/50 bg-gray-200/50 tracking-wide rounded-lg font-maven border px-2 py-1 dark:text-gray-300 text-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
