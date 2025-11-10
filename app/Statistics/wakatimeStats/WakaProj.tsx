// components/WakaProjects.tsx
export default function WakaProjects({ projects }: { projects: any[] }) {
  return (
    <div className="p-4 border-l text-gray-200 w-100">
      <h3 className="text-lg font-semibold mb-4">Top 5 Projects</h3>
      <ul className="space-y-2">
        {projects.slice(0, 5).map((proj) => (
          <li key={proj.name} className="flex justify-between">
            <span>{proj.name}</span>
            <span className="text-gray-400">{proj.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
