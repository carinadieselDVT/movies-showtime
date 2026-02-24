import type { TimeslotToken } from "./time";

export type BadgeStyle = {
  label: "Morning" | "Afternoon" | "Evening";
  variant: "primary" | "warning" | "success";
};

export const timeslotBadgeStyles: Record<TimeslotToken, BadgeStyle> = {
  morning: {
    label: "Morning",
    variant: "primary",
  },
  afternoon: {
    label: "Afternoon",
    variant: "warning",
  },
  evening: {
    label: "Evening",
    variant: "success",
  },
};
