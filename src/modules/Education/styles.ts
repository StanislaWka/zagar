import { css } from "@emotion/react";
import facepaint from "facepaint";
import { breakpoints } from "components/rootStyles/styles";

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const mainStyle = css(mq({}));

const gridItemStyle = css(
  mq({
    backgroundColor: "white",
    padding: "30px",
    height: "210px",
    wordBreak: "break-word",
    boxShadow: "4px 4px 38px 0px rgba(34, 60, 80, 0.2)",
    position: "relative",
    top: "0px",
    overflow: 'auto',
    transition: "all 0.3s ease-out",
    "&: hover": {
      top: "-10px",
    },
  })
);

const styles = {
  mainStyle,
  gridItemStyle,
};

export default styles;
