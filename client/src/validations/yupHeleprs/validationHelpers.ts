import { AnyObject } from 'yup/lib/object';
import * as yup from 'yup';

export const dateTimeRangeValidation = (
  val: any,
  ctx: yup.TestContext<AnyObject>,
) => {
  if (!ctx.parent.active) return true;
  const startTime = new Date(ctx.parent.startTime).valueOf();
  const endTime = new Date(ctx.parent.endTime).valueOf();

  if (endTime <= startTime)
    return ctx.createError({
      message: 'The start time must be before the end time',
    });

  return true;
};
