/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import facepaint from "facepaint";
import { breakpoints } from "components/rootStyles/styles";
import { default as rootStyles } from "components/rootStyles/styles";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { colors } = rootStyles;

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const greyStyle = css(
  mq({
    backgroundColor: "#EFEFEF",
    padding: "100px",
  })
);

const afterCourseName = css(
  mq({
    fontSize: "30px",
    fontWeight: "300",
  })
);

const styles = {
  greyStyle,
  afterCourseName,
};

export default styles;
