// components/WakaProjects.tsx
export default function WakaProjects({ projects }: { projects: any[] }) {
  return (
    <div className="text-gray-200 h-fit mt-3">
      <h3 className="text-lg font-semibold text-center font-jura tracking-wider">
        ONGOING OPERATIONS
      </h3>
      <ul className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        {projects.slice(0, 5).map((proj) => (
          <li key={proj.name} className=" flex justify-between border-t py-2">
            <a
              className="font-maven uppercase tracking-wider hover:underline"
              href={`https://github.com/agayushh/${proj.name}`}
              target="_blank"
            >
              {proj.name}
            </a>
            <span className="font-maven text-gray-400">{proj.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
