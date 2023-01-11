import { forwardRef } from 'react';
import { separateString } from '../../../../helpers/strings';
import { TextField, TextFieldProps } from '@mui/material';

type TextInputProps = TextFieldProps & {
  message?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, message, ...rest }: TextInputProps, ref) => {
    return (
      <TextField
        {...rest}
        error={!!message}
        label={label || separateString(rest.name || '')}
        ref={ref}
        variant={'standard'}
        helperText={message}
      />
    );
  },
);
