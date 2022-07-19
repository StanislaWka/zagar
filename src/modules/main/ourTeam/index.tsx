/** @jsxImportSource @emotion/react */
import React from 'react';
import { Box } from '@mui/material';

import { Slider } from './slider';
import styles from './styles';

export function OurTeam() {
  return (
    <Box css={styles.ourTeamContainerStyle}>
      <Box css={styles.ourTeamHeaderStyle}>
        <h2>НАШИ РАБОТЫ</h2>
      </Box>
      <Slider />
    </Box>
  );
}
