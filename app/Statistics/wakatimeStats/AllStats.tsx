// app/wakatime/page.tsx
import { getWakaTimeStats, getWakaTimeDailySummaries } from "./wakaData";
import WeeklyActivityChart from "./WeeklyActivityGraph";
import WakaSummary from "./WakaSummary";
import WakaProjects from "./WakaProj";

export const revalidate = 3600;

export default async function WakaTimePage() {
  const stats = await getWakaTimeStats();
  const dailyData = await getWakaTimeDailySummaries();

  return (
    <div className="bg-transparent text-white space-y-1 h-fit">
      <section>
        <div className="border-t mt-4 w-screen absolute left-0"></div>
        <h2 className="text-xl  font-maven tracking-tighter pt-4 text-foreground opacity-60">Activity Logs</h2>
        <div className="border-t w-screen absolute left-0"></div>
        <br />
        <WeeklyActivityChart dailyData={dailyData} />
        <div className="border-t w-screen absolute left-0"></div>
      </section>
      <section className="flex flex-col lg:flex-row gap-4">
        <WakaSummary stats={stats} />
        <WakaProjects projects={stats?.projects || []} />
      </section>
    </div>
  );
}
