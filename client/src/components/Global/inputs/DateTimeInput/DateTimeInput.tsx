import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Control, Controller } from 'react-hook-form';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';

interface DateTimeInputProps {
  control: Control<any>;
  error?: string;
  label?: string;
  name: string;
}

export const DateTimeInput = ({
  control,
  error,
  label,
  name,
}: DateTimeInputProps) => {
  return (
    <Controller
      name={name}
      defaultValue={dayjs().toISOString()}
      control={control}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            {...field}
            label={label}
            onChange={(event) => {
              field.onChange(dayjs(event.$d).toISOString());
              //   console.log('event', dayjs(event.$d).toISOString());
            }}
            renderInput={(params) => <TextField {...params} error={!!error} />}
          />
        </LocalizationProvider>
      )}
    />
  );
};
