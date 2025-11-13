// components/WakaProjects.tsx
export default function WakaProjects({ projects }: { projects: any[] }) {
  return (
    <div className="text-gray-200 w-[360px] h-fit">
      <h3 className="text-lg font-semibold mb-4">Ongoing Operations</h3>
      <ul>
        {projects.slice(0, 5).map((proj) => (
          <li key={proj.name} className="flex justify-between border-t py-2 w-[360px] ">
            <span>{proj.name}</span>
            <span className="text-gray-400">{proj.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
