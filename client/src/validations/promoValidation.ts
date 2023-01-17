interface PromoValidation {
  active: boolean;
  startTime: Date;
  endTime: Date;
}

export const promoValidation = ({
  active,
  endTime,
  startTime,
}: PromoValidation) => {
  if (!active) return false;
  const now = Date.now();

  const start = new Date(startTime).valueOf();
  const end = new Date(endTime).valueOf();

  return start < now && end > now;
};
