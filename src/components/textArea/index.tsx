/** @jsxImportSource @emotion/react */
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { Box, StandardTextFieldProps, TextField } from '@mui/material';
import { SerializedStyles } from '@emotion/react';

import styles from './styles';

interface InputProps extends StandardTextFieldProps {
  errorMsg?: string;
  label?: string;
  name: string;
  id?: string;
  placeholder?: string;
  rows?: number;
  maxRows?: number;
  register: UseFormRegister<FieldValues>;
  textAreaStyles?: SerializedStyles;
}

export const TextArea = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { errorMsg, label, register, name, id, placeholder, rows, maxRows, textAreaStyles, ...props },
    ref,
  ) => {
    return (
      <Box css={styles.wrapperStyles}>
        <TextField
          css={textAreaStyles}
          id={id}
          label={label}
          placeholder={placeholder}
          multiline
          rows={rows}
          maxRows={maxRows}
          {...register(name)}
          error={!!errorMsg}
          helperText={errorMsg || null}
          {...props}
        />
      </Box>
    );
  },
);
