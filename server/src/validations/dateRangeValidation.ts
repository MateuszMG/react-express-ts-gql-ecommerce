interface DateRangeValidation {
  active: boolean;
  startTime: Date;
  endTime: Date;
}

export const dateRangeValidation = ({
  active,
  endTime,
  startTime,
}: DateRangeValidation) => {
  if (!active) return;

  const start = new Date(startTime).valueOf();
  const end = new Date(endTime).valueOf();

  if (end <= start) throw 'The start time must be before the end time';
};
