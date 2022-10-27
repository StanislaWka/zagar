import { css } from "@emotion/react";
import facepaint from "facepaint";
import { breakpoints } from "components/rootStyles/styles";

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const freqQuestionsContainerStyle = css(
  mq({
    display: "flex",
    flexDirection: ["column", "column", "row"],
    margin: "150px 0px",
    alignItems: "center",
  })
);

const freqQuestionsTitleContainerStyle = css({
  margin: "100px",
  width: "300px",
  fontSize: "22px",
  color: "gray",
  textTransform: "uppercase",
  textAlign: "center",
});

const questionsContainerStyle = css(
  mq({
    borderTop: "2px solid #F2F2F2",
    display: "flex",
    flexDirection: "column",
    width: ["450px", "600px"],
  })
);

const questionContainerStyle = css({
  "&:hover": {
    background: "#000",
    transition: "all 0.6s ease",
    cursor: "pointer",
    color: "#fff",
  },
  "&:hover .questionText": {
    color: "#fff",
  },
  "&:hover .arrowIcon": {
    color: "#fff",
  },
  "& .MuiAccordionDetails-root": {
    padding: "0px",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "&:before": {
    display: "none",
  },
  "& . MuiSvgIcon-root-FooterQuestions": {
    color: "#fff",
  },
  display: "flex",
  flexDirection: "column",
  padding: "0px 50px",
  borderBottom: "2px solid #F2F2F2",
  position: "relative",
  marginRight: "10px",
});

const questionActiveContainer = css({
  "& .MuiAccordionDetails-root": {
    padding: "0px",
  },
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  padding: "10px 50px",
  color: "white",
  background: "#000",
  borderBottom: "2px solid #F2F2F2",
  marginRight: "10px",
});

const questionHeaderContainerStyle = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const questionAnswerActiveContainerStyle = css({
  borderTop: "1px solid #fff",
  width: "100%",
  maxHeight: "300px",
});

const questionTextContainerStyle = css({
  fontWeight: "bold",
  textTransform: "uppercase",
  fontSize: "14px",
});

const questionArrowStyles = css({
  color: "#000",
});

const questionActiveArrowStyles = css({
  color: "#fff",
});

const styles = {
  freqQuestionsContainerStyle,
  freqQuestionsTitleContainerStyle,
  questionsContainerStyle,
  questionContainerStyle,
  questionActiveContainer,
  questionHeaderContainerStyle,
  questionAnswerActiveContainerStyle,
  questionTextContainerStyle,
  questionArrowStyles,
  questionActiveArrowStyles,
};

export default styles;
