// components/WakaSummary.tsx
export default function WakaSummary({ stats }: { stats: any }) {
  const editor = stats.editors?.[0]?.name || "Unknown";
  const os = stats.operating_systems?.[0]?.name || "Unknown";
  const avg = stats.human_readable_daily_average;

  return (
    <div className="border-b h-fit flex items-center justify-between gap-2 sm:gap-4 py-2">
      <div className="px-2 sm:px-6">
        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-maven font-medium">
          Editor
        </p>
        <p className="text-sm sm:text-xl md:text-2xl font-bold font-jura text-black dark:text-white">
          {editor}
        </p>
      </div>
      <div className="px-2 sm:px-6">
        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-maven font-medium">
          Daily Avg
        </p>
        <p className="text-xs sm:text-xl md:text-2xl font-bold font-jura text-black dark:text-white whitespace-nowrap">
          {avg}
        </p>
      </div>
      <div className="px-2 sm:px-6">
        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-maven font-medium">
          OS
        </p>
        <p className="text-sm sm:text-xl md:text-2xl font-bold font-jura text-black dark:text-white">
          {os}
        </p>
      </div>
    </div>
  );
}
