/** @jsxImportSource @emotion/react */
import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./styles";

interface Props {
  text: string;
}

export function GridItem({ text }: Props) {
  return (
    <Box css={styles.gridItemStyle}>
      <Typography sx={{fontSize: '20px', fontWeight: '300'}}>{text}</Typography>
    </Box>
  );
}
