/** @jsxImportSource @emotion/react */
import React from "react";
import { Box } from "@mui/material";
import { Splide } from "@splidejs/react-splide";

import { mainData } from "../../services";
import { Slide } from "./slide";
import styles from "./styles";

export function Slider() {
  const usersComments = mainData.usersComments;
  const slide = usersComments.map((u) => {
    return (
      <Slide
        key={u.id}
        name={u.name}
        surname={u.surname}
        job={u.job}
        comment={u.comment}
        avatar={u.avatar}
      />
    );
  });

  let PER_PAGE;
  let SLIDER_WIDTH;

  if (window.innerWidth < 700) {
    SLIDER_WIDTH = 266;
    PER_PAGE = 1;
  } else if (window.innerWidth < 1000) {
    SLIDER_WIDTH = 534;
    PER_PAGE = 2;
  } else {
    SLIDER_WIDTH = 800;
    PER_PAGE = 3;
  }

  return (
    <Box css={styles.slidesContainerStyle}>
      <Splide
        options={{
          type: "loop",
          perPage: PER_PAGE,
          perMove: 1,
          arrows: true,
          pagination: false,
          width: SLIDER_WIDTH,
          gap: "10px",
        }}
      >
        {slide}
      </Splide>
    </Box>
  );
}
