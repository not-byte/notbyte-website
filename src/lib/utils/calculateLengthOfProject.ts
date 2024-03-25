//used in plans section

export function calculateProjectWidth(
  startDate: Date,
  endDate: Date,
  totalTimelineDays: number
): string {
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
  const durationInDays = (endDate.getTime() - startDate.getTime()) / oneDay;
  const widthInVw = (durationInDays / totalTimelineDays) * 100;

  return widthInVw.toFixed(0);
}
