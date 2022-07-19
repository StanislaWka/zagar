/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

import { APP_ROUTES } from 'constants/appRoutes';
import styles from './styles';

interface ContactUsProps {
  onClick: () => void;
}

export function ContactUs({ onClick }: ContactUsProps) {
  return (
    <Box>
      <Typography
        component={RouterLink}
        to={APP_ROUTES.CONTACT}
        css={styles.linkStyle}
        onClick={onClick}>
        <Button css={styles.contactButton}>Contact us</Button>
      </Typography>
    </Box>
  );
}
