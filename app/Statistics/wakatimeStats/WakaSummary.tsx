// components/WakaSummary.tsx
export default function WakaSummary({ stats }: { stats: any }) {
  const editor = stats.editors?.[0]?.name || "Unknown";
  const os = stats.operating_systems?.[0]?.name || "Unknown";
  const avg = stats.human_readable_daily_average;

  return (
    <div className="border-r w-60 h-60 text-gray-200 grid grid-row-3 gap-6 text-center">
      <div className="p-3">
        <p className="text-gray-400">Editor</p>
        <p className="text-xl font-semibold">{editor}</p>
      </div>
      <div>
        <p className="text-gray-400">Daily Avg</p>
        <p className="text-xl font-semibold">{avg}</p>
      </div>
      <div>
        <p className="text-gray-400">OS</p>
        <p className="text-xl font-semibold">{os}</p>
      </div>
    </div>
  );
}
