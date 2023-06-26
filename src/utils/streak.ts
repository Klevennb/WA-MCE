import { Entry } from "types/types";

export function countStreak(entries: Entry[], currentTime: string): number {
  let consecutiveDays = 0;
  let previousDay: number | null = null;

  entries.forEach((entry) => {
    const submissionTime = new Date(entry.submission_time);
    const currentDay = new Date(currentTime).setHours(0, 0, 0, 0);

    if (previousDay === null || submissionTime.getTime() === previousDay - 86400000) {
      consecutiveDays = consecutiveDays + 1;
    } else if (submissionTime.getTime() < previousDay - 86400000) {
      consecutiveDays = 1;
    }

    previousDay = submissionTime.getTime();
    if (submissionTime.getTime() >= currentDay) {
      return undefined; // Stop counting if an entry's submission_time exceeds currentTime
    }
    return undefined
  })
  return consecutiveDays;
}
