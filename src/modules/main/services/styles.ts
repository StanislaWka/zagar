import { css } from "@emotion/react";

import facepaint from "facepaint";
import { breakpoints } from "components/rootStyles/styles";

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const servicesContainerStyle = css(
  mq({
    margin: ["0px 0px", "20px 0px", "40px 0px", "100px 0px"],
    display: "flex",
    flexDirection: ["column", "column", "row", "row"],
    justifyContent: "center",
    alignItems: "center",
  })
);

const servicesStyle = css(mq({
  padding: "20px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  width: ["30%","30%","40%","60%"],
}));

const serviceItemStyle = css({
  "&: hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
  "&: hover .round": {
    width: "25px",
    height: "25px",
    background: "#fff",
  },
  "&: hover .serviceText": {
    opacity: "1",
  },
  display: "flex",
  flexDirection: "column",
  border: "2px solid rgba(226, 221, 221, 0.795)",
  cursor: "pointer",
  width: "350px",
  height: "180px",
  borderRadius: "3px",
  margin: "10px 20px",
  padding: "10px",
  transition: "all 0.3s",
});

const serviceTitleContainerStyle = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "270px",
  height: "80px",
  padding: "50px 30px 0px 40px",
});

const serviceIconContainer = css({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginRight: "30px",
});

const roundStyle = css({
  position: "absolute",
  zIndex: "1",
  left: "12px",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  background: "#000",
  transition: "all 0.3s",
});

const serviceIconStyle = css({
  width: "20px",
  height: "20px",
  zIndex: "2",
});

const serviceTitleTextStyle = css({
  margin: "0",
  textTransform: "uppercase",
});

const serviceTextContainerStyle = css({
  opacity: "0",
  padding: "15px 40px",
  transition: "opacity 0.3s",
});

const servicesDescriptionContainerStyle = css({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  width: "270px",
});

const servicesDescriptionTitleContainerStyle = css({
  "& h3": {
    margin: "10px 0px",
  },
  textTransform: "uppercase",
  color: "#000",
  fontSize: "20px",
});

const servicesDescriptionTextContainerStyle = css({
  "& p": {
    margin: " 0px",
  },
  color: "gray",
  fontSize: "15px",
});

const linkStyle = css({
  textDecoration: 'none!important',
  lineHeight: '2',
  color: '#FFF',
});

const styles = {
  servicesContainerStyle,
  servicesStyle,
  serviceItemStyle,
  serviceTitleContainerStyle,
  serviceIconContainer,
  roundStyle,
  serviceIconStyle,
  serviceTitleTextStyle,
  serviceTextContainerStyle,
  servicesDescriptionContainerStyle,
  servicesDescriptionTitleContainerStyle,
  servicesDescriptionTextContainerStyle,
  linkStyle,
};

export default styles;
