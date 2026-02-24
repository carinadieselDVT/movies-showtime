export type TimeslotToken = "morning" | "afternoon" | "evening";

export function getTimeslot(hour: number): TimeslotToken {
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "afternoon";
  return "evening";
}

// Format a 24h hour as "h:00 AM/PM" (e.g., instead of 14 -> "2:00 PM")
export function formatHour(hour: number): string {
  const h = ((hour + 11) % 12) + 1;
  const suffix = hour >= 12 ? "PM" : "AM";
  return `${h}:00 ${suffix}`;
}
