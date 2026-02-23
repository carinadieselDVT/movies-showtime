// Time and formatting utilities for movie showtimes

export type PeriodToken = "morning" | "afternoon" | "evening";

export type BadgeStyle = {
  label: "Morning" | "Afternoon" | "Evening";
  bgColor: string;
  textColor: string;
  borderColor: string;
};

export const periodStyles: Record<PeriodToken, BadgeStyle> = {
  morning: {
    label: "Morning",
    bgColor: "#FFF7CC",
    textColor: "#8A6D00",
    borderColor: "#FFEA8A",
  },
  afternoon: {
    label: "Afternoon",
    bgColor: "#D1E9FF",
    textColor: "#0B4A6F",
    borderColor: "#A6D4FF",
  },
  evening: {
    label: "Evening",
    bgColor: "#E9D5FF",
    textColor: "#5B21B6",
    borderColor: "#C4B5FD",
  },
};

// Classify an hour (0–23) into a period token.
export function getPeriod(hour: number): PeriodToken {
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "afternoon";
  return "evening";
}

// Format a 24h hour as "h:00 AM/PM" (e.g., 14 -> "2:00 PM").
export function formatHour(hour: number): string {
  const h = ((hour + 11) % 12) + 1;
  const suffix = hour >= 12 ? "PM" : "AM";
  return `${h}:00 ${suffix}`;
}
