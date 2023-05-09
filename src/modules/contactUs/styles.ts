import { css } from "@emotion/react";
import welcomeImg from "assets/contactUs.jpeg";
import facepaint from "facepaint";
import { breakpoints } from "components/rootStyles/styles";

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const wrapperStyle = mq(
  css({
    padding: "20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  })
);

const welcomeContainerStyle = css({
  "&: hover": {
    backgroundSize: "100% ",
  },
  "&: hover .welcomeText": {
    opacity: "1",
    backgroundColor: "rgba(0, 0, 0, 0.288)",
  },
  width: "100%",
  height: "600px",
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

const welcomeTextTitleStyle = css({
  margin: "0",
  padding: "250px 0px 0px 70px",
});

const mapsContainerStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
});

const mapsTitleContainerStyle = css({
  fontSize: "18px",
  margin: "30px 0px",
});

const mapsStyle = css({
  border: "none",
  margin: "0",
  padding: "0",
});

const vebinarStyle = css({
  width: "300px",
  height: "400px",
});

const wrapperVebinarStyle = css(
  mq({
    padding: "20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: ["column", "column", "row"],
    width: "100%",
  })
);

const aboutUsText = css({
  background: "white",
  margin: "1px",
  padding: "10px",
  fontWeight: "200",
  fontSize: "19px",
});

const aboutUsBlock = css(
  mq({
    "&:hover": {
      top: "-20px",
    },
    transition: "all 0.2s ease-in-out",
    top: "0px",
    position: "relative",
    background: "linear-gradient(225deg, blue, black)",
    padding: "3px",
    borderRadius: "10px",
  })
);

const aboutUsBlockLeft = css(
  mq({
    "&:hover": {
      top: "-20px",
    },
    transition: "all 0.2s ease-in-out",
    top: "0px",
    position: "relative",
    background: "linear-gradient(45deg, blue, black)",
    padding: "3px",
    borderRadius: "10px",
  })
);

const wrapperDescrStyles = css(
  mq({
    padding: " 0 100px 50px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: ["column", 'column', "row"],
  })
);

const styles = {
  wrapperStyle,
  welcomeContainerStyle,
  welcomeTextStyle,
  welcomeTextTitleStyle,
  mapsContainerStyle,
  mapsTitleContainerStyle,
  mapsStyle,
  vebinarStyle,
  wrapperVebinarStyle,
  aboutUsBlock,
  aboutUsBlockLeft,
  aboutUsText,
  wrapperDescrStyles
};

export default styles;
