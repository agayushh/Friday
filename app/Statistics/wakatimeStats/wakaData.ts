// lib/wakatime.ts
export async function getWakaTimeStats() {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/api/wakatime/stats`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to fetch WakaTime stats");
  }

  return await res.json();
}

export async function getWakaTimeDailySummaries() {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/api/wakatime/summaries`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to fetch WakaTime summaries");
  }

  return await res.json();
}
