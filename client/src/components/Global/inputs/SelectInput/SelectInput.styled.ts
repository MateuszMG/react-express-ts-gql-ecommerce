import { GroupBase, StylesConfig } from 'react-select';

export const reactSelectStyles: StylesConfig<any, false, GroupBase<any>> = {
  input: (provided) => ({
    ...provided,
  }),
  container: (provided) => ({
    ...provided,
    minWidth: '200px',
    ':focus': {
      outline: 'none',
      border: 'none',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #30dafb',
    color: state.isSelected ? '#30dafb' : 'black',
  }),

  control: (provided) => {
    const style = {
      width: '100%',
      borderRadius: '8px',
      outline: 'none',
      ':focus': {
        outline: 'none',
        border: 'none',
      },
    };

    return {
      ...provided,
      ...style,
    };
  },
};
