/** @jsxImportSource @emotion/react */
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { BaseTextFieldProps, Box, TextField } from '@mui/material';
import { SerializedStyles } from '@emotion/react';

import styles from './styles';

interface InputProps extends BaseTextFieldProps {
  errorMsg?: string;
  label?: string;
  name: string;
  id?: string;
  register?: UseFormRegister<FieldValues>;
  InputProps?: any;
  variant?: 'standard' | 'outlined' | 'filled';
  boxStyles?: SerializedStyles;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ errorMsg, label, register, name, id, variant = 'standard', boxStyles, ...props }, ref) => {
    return (
      <Box css={boxStyles || styles.wrapperStyles}>
        <TextField
          id={id}
          label={label}
          variant={variant}
          {...(register && register(name))}
          error={!!errorMsg}
          helperText={errorMsg || null}
          inputProps={{ sx: styles.inputProps }}
          {...props}
        />
      </Box>
    );
  },
);
