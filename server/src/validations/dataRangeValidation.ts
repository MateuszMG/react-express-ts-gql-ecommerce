import { HttpException, HttpStatus } from '@nestjs/common';

interface DataRangeValidation {
  active: boolean;
  startTime: Date;
  endTime: Date;
}

export const dataRangeValidation = ({
  active,
  endTime,
  startTime,
}: DataRangeValidation) => {
  if (!active) return;

  const start = new Date(startTime).valueOf();
  const end = new Date(endTime).valueOf();

  if (end <= start)
    throw new HttpException(
      'The start time must be before the end time',
      HttpStatus.BAD_REQUEST,
    );
};
