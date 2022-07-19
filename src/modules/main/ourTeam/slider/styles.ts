import { css } from "@emotion/react";
import facepaint from "facepaint";
import { breakpoints } from "components/rootStyles/styles";

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const slidesContainerStyle = css(
  mq({
    "& .splide__arrow--next": {
      right: ["-60px", "-100px", "-170px"],
    },
    "& .splide__arrow--prev": {
      left: ["-60px", "-100px", "-170px"],
    },
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    background: "#F2F2F2",
    padding: "15px 30px",
  })
);

const styles = {
  slidesContainerStyle,
};

export default styles;
