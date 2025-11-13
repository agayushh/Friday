// components/WakaSummary.tsx
export default function WakaSummary({ stats }: { stats: any }) {
  const editor = stats.editors?.[0]?.name || "Unknown";
  const os = stats.operating_systems?.[0]?.name || "Unknown";
  const avg = stats.human_readable_daily_average;

  return (
    <div className="border-r border-gray-800/50 w-60 h-fit grid grid-rows-3 gap-4 py-6">
      <div className="px-6 ">
        <p className="text-sm text-gray-500 uppercase tracking-wider font-maven font-medium">
          Editor
        </p>
        <p className="text-2xl font-bold  font-jura text-black dark:text-white">{editor}</p>
      </div>
      <div className="px-6">
        <p className="text-sm text-gray-500 uppercase tracking-wider font-maven font-medium">
          Daily Avg
        </p>
        <p className="text-2xl font-bold font-jura text-black dark:text-white">{avg}</p>
      </div>
      <div className="px-6">
        <p className="text-sm text-gray-500 uppercase tracking-wider font-maven font-medium">
          OS
        </p>
        <p className="text-2xl font-bold font-jura text-black dark:text-white">{os}</p>
      </div>
    </div>
  );
}
