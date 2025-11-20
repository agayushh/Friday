import React, { Suspense } from "react";
import AllStats from "../Statistics/wakatimeStats/AllStats";
import GitHubGraphWithSuspense from "../Statistics/githubStats/GitStats";

// Loading components for better UX
function GitHubStatsLoading() {
  return (
    <div className="h-48 flex items-center justify-center border rounded-lg bg-muted/10">
      <div className="text-sm text-gray-600 dark:text-gray-400">Loading GitHub stats...</div>
    </div>
  );
}

function WakaTimeStatsLoading() {
  return (
    <div className="h-48 flex items-center justify-center border rounded-lg bg-muted/10">
      <div className="text-sm text-gray-600 dark:text-gray-400">Loading activity stats...</div>
    </div>
  );
}

const Stats = () => {
  return (
    <div className="mt-10 m-2">
      <h2 className="text-2xl tracking-wide font-jura text-gray-600 dark:text-gray-400 font-medium">REPORT</h2>
      <div className="border-b absolute left-0 w-screen"></div>
      <br />
      <div className="scrollbar-hide overflow-x-auto space-y-4">
        <Suspense fallback={<GitHubStatsLoading />}>
          <GitHubGraphWithSuspense/>
        </Suspense>
        <Suspense fallback={<WakaTimeStatsLoading />}>
          <AllStats />
        </Suspense>
      </div>
    </div>
  );
};

export default Stats;
