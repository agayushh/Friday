// components/WakaSummary.tsx
export default function WakaSummary({ stats }: { stats: any }) {
  const editor = stats.editors?.[0]?.name || "Unknown";
  const os = stats.operating_systems?.[0]?.name || "Unknown";
  const avg = stats.human_readable_daily_average;

  return (
    <div className=" border-b h-fit flex items-center justify-between gap-4 py-2 ">
      <div className="px-6 ">
        <p className="text-sm text-gray-500 uppercase tracking-wider font-maven font-medium">
          Editor
        </p>
        <p className="sm:text-xl md:text-2xl font-bold text-md  font-jura text-black dark:text-white">
          {editor}
        </p>
      </div>
      <div className="px-6">
        <p className="text-sm text-gray-500 uppercase tracking-wider font-maven font-medium">
          Daily Avg
        </p>
        <p className="sm:text-xl md:text-2xl text-md font-bold font-jura text-black dark:text-white">
          {avg}
        </p>
      </div>
      <div className="px-6">
        <p className="text-sm text-gray-500 uppercase tracking-wider font-maven font-medium">
          OS
        </p>
        <p className="sm:text-xl md:text-2xl text-lg font-bold font-jura text-black dark:text-white">
          {os}
        </p>
      </div>
    </div>
  );
}
