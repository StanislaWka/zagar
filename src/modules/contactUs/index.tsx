/** @jsxImportSource @emotion/react */
import React from "react";
import { Box } from "@mui/material";

import { Contacts } from "./contacts";
import styles from "./styles";

interface HomeProps {}

export function ContactUsLayout(props: HomeProps) {
  return (
    <Box css={styles.wrapperStyle}>
      <Box css={styles.welcomeContainerStyle}>
        <Box css={styles.welcomeTextStyle} className="welcomeText">
          <h2 css={styles.welcomeTextTitleStyle}>О НАС!</h2>
        </Box>
      </Box>
      <Contacts />
      <Box css={styles.mapsContainerStyle}>
        <Box css={styles.mapsTitleContainerStyle}>
          <h2>Где мы находимся?</h2>
        </Box>
        <Box width="85vw" height="40vh">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.1853153828906!2d27.490569094007622!3d53.91068279132336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc54620e7aef3%3A0xd1b1cd31484b6535!2z0YPQuy4g0J_RgNC40YLRi9GG0LrQvtCz0L4gMzQsINCc0LjQvdGB0Lo!5e0!3m2!1sru!2sby!4v1657904790527!5m2!1sru!2sby"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
}
