/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import facepaint from "facepaint";
import { breakpoints } from "components/rootStyles/styles";
import { default as rootStyles } from "components/rootStyles/styles";

const { colors } = rootStyles;

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const flexStyle = css(
  mq({
    display: "flex",
    flexDirection: ["column", "column", "row"],
    marginBottom: '100px'
  })
);

const descriptionStyle = css({
    minHeight: '100px',
    marginBottom: '20px',
    textAlign: 'left',
})

const BoxStyle = css(
    {
        marginRight: '100px'
    }
)

const flexCostStyle = css(
  mq({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  })
);

const mainBoxStyles = css(
  mq({
    borderBottom: `1px solid ${colors.cultured}`,
    marginBottom: '15px'
  })
);

const styles = { flexStyle, flexCostStyle, mainBoxStyles, BoxStyle, descriptionStyle};

export default styles;
