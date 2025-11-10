// components/charts/WeeklyActivityChart.tsx
"use client";
import ReactECharts from "echarts-for-react";

export default function WeeklyActivityChart({
  dailyData,
}: {
  dailyData: number[];
}) {
  // Convert decimal hours to hours and minutes format
  const formatTime = (hours: number) => {
    const totalMinutes = Math.round(hours * 60);
    const hrs = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;

    if (hrs === 0) {
      return `${mins} mins`;
    } else if (mins === 0) {
      return `${hrs} hr${hrs > 1 ? "s" : ""}`;
    } else {
      return `${hrs} hr${hrs > 1 ? "s" : ""} ${mins} mins`;
    }
  };

  // Generate last 7 days labels (including today)
  const getLast7Days = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const labels = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      labels.push(days[date.getDay()]);
    }

    return labels;
  };

  const last7Days = getLast7Days();
  // Assuming dailyData is already ordered for the last 7 days
  const last7DaysData = dailyData.slice(-7);

  const option = {
    backgroundColor: "transparent",
    textStyle: { color: "#ddd" },
    grid: {
      left: "5%",
      right: "5%",
      top: "15%",
      bottom: "15%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      formatter: (params: any) => {
        const hours = params[0].value;
        return `${params[0].name}: ${formatTime(hours)}`;
      },
    },
    xAxis: {
      type: "category",
      data: last7Days,
      axisLine: { lineStyle: { color: "#555" } },
    },
    yAxis: {
      type: "value",
      name: "Time",
      axisLine: { lineStyle: { color: "#555" } },
      splitLine: { lineStyle: { color: "#333" } },
      axisLabel: {
        formatter: (value: number) => {
          const totalMinutes = Math.round(value * 60);
          const hrs = Math.floor(totalMinutes / 60);
          const mins = totalMinutes % 60;

          if (hrs === 0) {
            return `${mins}m`;
          } else if (mins === 0) {
            return `${hrs}h`;
          } else {
            return `${hrs}h ${mins}m`;
          }
        },
      },
    },
    series: [
      {
        data: last7DaysData,
        type: "line",
        smooth: true,
        lineStyle: { color: "#00bcd4", width: 2 },
        areaStyle: { color: "rgba(0,188,212,0.2)" },
        symbol: "circle",
        symbolSize: 8,
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "300px", width: "100%" }}
      opts={{ renderer: "canvas" }}
    />
  );
}
