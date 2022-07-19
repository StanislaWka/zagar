/** @jsxImportSource @emotion/react */
import React from 'react';
import { Box, Typography } from '@mui/material';

import { Slider } from './slider';
import styles from './styles';

export function OurTeam() {
  return (
    <Box css={styles.ourTeamContainerStyle}>
      <Typography variant="h3" sx={{marginBottom: '40px'}}>НАШИ РАБОТЫ</Typography>
      <Slider />
    </Box>
  );
}
