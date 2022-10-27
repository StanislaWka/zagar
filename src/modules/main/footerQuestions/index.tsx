/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ArrowDownward as ArrowDownwardIcon } from "@mui/icons-material";

import { APP_ROUTES } from "constants/appRoutes";
import { useEnhancedNavigate } from "hooks";

import styles from "./styles";
import { mainData } from "../services";

export function FooterQuestions() {
  const [expanded, setExpanded] = React.useState("");

  const { scrollNavigate } = useEnhancedNavigate();

  useEffect(() => {
    scrollNavigate({ top: 0, left: 0, path: APP_ROUTES.HOME_PAGE });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const usersQuestions = mainData.usersQuestions;

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box css={styles.freqQuestionsContainerStyle}>
      <Box css={styles.freqQuestionsTitleContainerStyle}>
        <h2>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
      </Box>
      <Box
        css={styles.questionsContainerStyle}
        className="questionsContainerStyle"
      >
        {usersQuestions.map((q, index) => {
          return (
            <Accordion
              disableGutters
              elevation={0}
              square
              key={q.id}
              data-testid="main_freq-question"
              expanded={expanded === `panel${index}`}
              css={
                expanded === `panel${index}`
                  ? styles.questionActiveContainer
                  : styles.questionContainerStyle
              }
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary
                css={styles.questionHeaderContainerStyle}
                expandIcon={
                  <ArrowDownwardIcon
                    css={
                      expanded === `panel${index}`
                        ? styles.questionActiveArrowStyles
                        : styles.questionArrowStyles
                    }
                    className="arrowIcon"
                  />
                }
              >
                <Box css={styles.questionTextContainerStyle}>
                  <p className="questionText"> {q.question}</p>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box css={styles.questionAnswerActiveContainerStyle}>
                  {q.answer.map((answer, index) => (
                    <p className="questionText">{answer}</p>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
}
