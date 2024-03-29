/** @jsxImportSource @emotion/react */
import React, { SelectHTMLAttributes } from 'react';
import { Control, Controller } from 'react-hook-form';
import { FormControl, MenuItem, FormHelperText, Box, Select, InputLabel } from '@mui/material';
import { SerializedStyles } from '@emotion/react';

import styles from './styles';

interface selectOptionType {
  value: string;
  label: string;
}

interface SelectPropsType extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<selectOptionType>;
  label?: string;
  name: string;
  helperText?: string;
  control: Control<any, object> | undefined;
  boxStyles?: SerializedStyles;
  styleForSelect?: SerializedStyles;
  styleForErrorText?: SerializedStyles;
  id: string;
  dataTestId?: string;
  defaultValue?: string;
  disabled?: boolean;
}

export const CustomSelect = React.forwardRef<HTMLSelectElement, SelectPropsType>((props, ref) => {
  const {
    options,
    label,
    name,
    helperText,
    control,
    boxStyles,
    styleForSelect,
    styleForErrorText,
    id,
    dataTestId,
    defaultValue,
    disabled,
  } = props;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Box css={boxStyles}>
          <FormControl fullWidth>
            <InputLabel id="select-label">{label}</InputLabel>
            <Select
              disabled={disabled}
              css={styleForSelect}
              labelId="select-label"
              id={id}
              value={value}
              label={label}
              inputProps={{
                MenuProps: { disableScrollLock: true, sx: styles.inputProps },
                sx: styles.inputProps,
              }}
              data-testid={dataTestId}
              onChange={onChange}>
              {options.map((option) => {
                return (
                  <MenuItem value={option.value} key={option.value} css={styles.inputProps}>
                    {option.label}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText css={styleForErrorText} error={!!error}>
              {helperText}
            </FormHelperText>
          </FormControl>
        </Box>
      )}
    />
  );
});
