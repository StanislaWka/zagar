/** @jsxImportSource @emotion/react */
import React from "react";
import { Box } from "@mui/material";

import { FooterQuestions } from "./footerQuestions";
import { OurTeam } from "./modelsZagar";
import { Services } from "./services";
import styles from "./styles";
import { Cost } from "./cost";

interface HomeProps {}

export function MainLayout(props: HomeProps) {
  return (
    <Box css={styles.wrapperStyle}>
      <Box css={styles.welcomeContainerStyle}>
        <Box css={styles.welcomeTextStyle} className="welcomeText">
          <h2 css={styles.welcomeTextTitleStyle}>
            Студия моментального загара!
          </h2>
        </Box>
      </Box>
      <Services />
      <Cost />
      <OurTeam />
      <FooterQuestions />
    </Box>
  );
}
