/** @jsxImportSource @emotion/react */
import React from "react";
import { Box } from "@mui/material";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

import styles from "./styles";

interface TeamCardProps {
  avatar: string;
}

export function Slide({ avatar }: TeamCardProps) {
  return (
    <SplideSlide>
      <Box>
        <Box css={styles.avatarImgStyle}>
          <img alt="teammate" src={avatar} />
        </Box>
      </Box>
    </SplideSlide>
  );
}
