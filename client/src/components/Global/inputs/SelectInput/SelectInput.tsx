import { Control, Controller } from 'react-hook-form';
import ReactSelect, { Options } from 'react-select';
import { separateString } from '../../../../helpers/strings';
import { InputBox } from '../../InputBox/InputBox';
import { reactSelectStyles } from './SelectInput.styled';

interface SelectInputProps {
  control: Control<any>;
  error?: string;
  label?: string;
  name: string;
  options: Options<{ label: string; value: string }>;
}

export const SelectInput = ({
  control,
  error,
  label,
  name,
  options,
}: SelectInputProps) => {
  return (
    <InputBox label={label || separateString(name)} error={error}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ReactSelect
            {...field}
            options={options}
            isClearable
            styles={reactSelectStyles}
            defaultValue={options[0]}
            value={options.find((c) => c.value === field.value)}
            onChange={(val) => field.onChange(val.value)}
          />
        )}
      />
    </InputBox>
  );
};
