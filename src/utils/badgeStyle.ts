import type { TimeslotToken } from "./time";

export type BadgeStyle = {
  label: "Morning" | "Afternoon" | "Evening";
  bgColor: string;
  textColor: string;
  borderColor: string;
};

//TODO: Use MUI theme styles instead of these
export const timeslotBadgeStyles: Record<TimeslotToken, BadgeStyle> = {
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
