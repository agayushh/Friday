// components/WakaProjects.tsx
interface Project {
  name: string;
  text: string;
}

export default function WakaProjects({ projects }: { projects: Project[] }) {
  return (
    <div className="h-fit mt-3">
      <h3 className="text-lg font-semibold text-center font-jura tracking-wider text-black dark:text-white">
        ONGOING OPERATIONS
      </h3>
      <ul className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        {projects.slice(0, 5).map((proj) => (
          <li key={proj.name} className="flex justify-between border-t py-2">
            <a
              className="font-maven uppercase tracking-wider hover:underline text-black dark:text-white"
              href={`https://github.com/agayushh/${proj.name}`}
              target="_blank"
            >
              {proj.name}
            </a>
            <span className="font-maven text-gray-600 dark:text-gray-400">{proj.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
