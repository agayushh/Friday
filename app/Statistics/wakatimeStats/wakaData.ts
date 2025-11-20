// lib/wakatime.ts
export async function getWakaTimeStats() {
  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/api/wakatime/stats`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Failed to fetch WakaTime stats:', error);
    return { projects: [], editors: [], operating_systems: [] };
  }
}

export async function getWakaTimeDailySummaries() {
  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/api/wakatime/summaries`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Failed to fetch WakaTime summaries:', error);
    return [0, 0, 0, 0, 0, 0, 0]; // Return 7 days of zeros as fallback
  }
}
