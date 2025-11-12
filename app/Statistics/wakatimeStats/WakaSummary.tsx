// components/WakaSummary.tsx
export default function WakaSummary({ stats }: { stats: any }) {
  const editor = stats.editors?.[0]?.name || "Unknown";
  const os = stats.operating_systems?.[0]?.name || "Unknown";
  const avg = stats.human_readable_daily_average;

  return (
    <div className="border-r border-gray-800/50 w-60 h-fit grid grid-rows-3 gap-8 py-6">
      <div className="px-6 space-y-2">
        <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Editor</p>
        <p className="text-2xl font-bold text-white">{editor}</p>
      </div>
      <div className="px-6 space-y-2">
        <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Daily Avg</p>
        <p className="text-2xl font-bold text-white">{avg}</p>
      </div>
      <div className="px-6 space-y-2">
        <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">OS</p>
        <p className="text-2xl font-bold text-white">{os}</p>
      </div>
    </div>
  );
}
