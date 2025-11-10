import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { GITHUB_USERNAME } from "@/app/config/info";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export async function getGitHubContributions(): Promise<Activity[]> {
  try {
    const url = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;
    console.log("Fetching GitHub contributions from:", url);

    const res = await fetch(url, {
      next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
    });

    if (!res.ok) {
      console.error("GitHub API response not OK:", res.status, res.statusText);
      throw new Error(`GitHub API responded with status: ${res.status}`);
    }

    const data = (await res.json()) as GitHubContributionsResponse;

    if (!data.contributions || !Array.isArray(data.contributions)) {
      console.error("Invalid response format:", data);
      return [];
    }

    return data.contributions;
  } catch (error) {
    console.error("Failed to fetch GitHub contributions:", error);
    // Return empty array instead of throwing to prevent page crash
    return [];
  }
}
