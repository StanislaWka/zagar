import { css } from "@emotion/react";
import facepaint from "facepaint";
import { breakpoints } from "components/rootStyles/styles";
import welcomeImg from "assets/welcome.jpeg";

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));


const wrapperStyle = css({
  padding: "20px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
});

const welcomeContainerStyle = css({
  "&: hover": {
    backgroundSize: "100% ",
  },
  "&: hover .welcomeText": {
    opacity: "1",
    backgroundColor: "rgba(0, 0, 0, 0.288)",
  },
  width: "100%",
  height: "560px",
  backgroundImage: `url(${welcomeImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "120%",
  backgroundPositionX: "50%",
  backgroundPositionY: "55%",
  cursor: "pointer",
  overflow: "hidden",
  transition: "background-size 1s ease-in",
});

const welcomeTextStyle = css({
  opacity: "0",
  width: "100%",
  height: "100%",
  fontSize: "40px",
  color: "#fff",
  textTransform: "uppercase",
  transition: "all 0.4s ease-in-out",
});

const welcomeTextTitleStyle = css(
  mq({
    margin: "0",
    fontSize: ["32px", "32px", "54px"],
    padding: ["50px 0px 0px 50px","50px 0px 0px 50px","250px 0px 0px 70px"],
  })
);

const styles = {
  wrapperStyle,
  welcomeContainerStyle,
  welcomeTextStyle,
  welcomeTextTitleStyle,
};

export default styles;
