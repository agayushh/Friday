import React from "react";
import AllStats from "../Statistics/wakatimeStats/AllStats";
import GitHubGraphWithSuspense from "../Statistics/githubStats/GitStats";

const Stats = () => {
  return (
    <div className="mt-10 m-2">
      <h2 className="text-2xl tracking-wide font-jura text-muted-foreground font-medium">REPORT</h2>
      <div className="border-b absolute left-0 w-screen"></div>
      <br />
      <div className="scrollbar-hide overflow-x-auto">
        <GitHubGraphWithSuspense/>
        <AllStats />
      </div>
    </div>
  );
};

export default Stats;
