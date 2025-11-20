// app/wakatime/page.tsx
import { getWakaTimeStats, getWakaTimeDailySummaries } from "./wakaData";
import WeeklyActivityChart from "./WeeklyActivityGraph";
import WakaSummary from "./WakaSummary";
import WakaProjects from "./WakaProj";

export const revalidate = 3600;

export default async function WakaTimePage() {
  try {
    const [stats, dailyData] = await Promise.all([
      getWakaTimeStats(),
      getWakaTimeDailySummaries()
    ]);

    return (
      <div className="bg-transparent text-white space-y-1 h-fit">
        <section>
          <div className="border-t mt-4 w-screen absolute left-0"></div>
          <h2 className="text-xl font-maven tracking-tighter pt-4 text-gray-600 dark:text-gray-400">
            Activity Logs
          </h2>
          <div className="border-t w-screen absolute left-0"></div>
          <br />
          <WeeklyActivityChart dailyData={dailyData} />
          <div className="border-t w-screen absolute left-0"></div>
        </section>
        <section className="flex flex-col">
          <WakaSummary stats={stats} />
          <WakaProjects projects={stats?.projects || []} />
        </section>
      </div>
    );
  } catch (error) {
    console.error('Error loading WakaTime stats:', error);
    return (
      <div className="bg-transparent text-white space-y-1 h-fit p-4">
        <p className="text-gray-600 dark:text-gray-400">Unable to load activity stats at this time.</p>
      </div>
    );
  }
}
