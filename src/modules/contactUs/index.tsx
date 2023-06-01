/** @jsxImportSource @emotion/react */
import React from "react";
import { Box, Typography } from "@mui/material";

// import { Contacts } from "./contacts";
import styles from "./styles";
// import vebinar from "../../assets/vebinar.png";
// import { RecordButton } from "components/recordButton";

interface HomeProps {}

export function ContactUsLayout(props: HomeProps) {
  return (
    <Box css={styles.wrapperStyle}>
      <Box css={styles.welcomeContainerStyle}>
        <Box css={styles.welcomeTextStyle} className="welcomeText">
          <h2 css={styles.welcomeTextTitleStyle}>О НАС!</h2>
        </Box>
      </Box>
      <Box css={styles.wrapperDescrStyles}>
        <Box css={styles.mapsTitleContainerStyle}>
          <Typography
            sx={{ fontSize: "40px", fontWeight: 600, width: "400px" }}
          >
            ПОЧЕМУ ВЫБИРАЮТ СТУДИЮ ZAGAR
          </Typography>
        </Box>
        <Box>
          <Box sx={{ display: "flex" }}>
            <Box padding={5}>
              <h1>2013</h1>
              <Typography>
                Компания ZAGAR была основана в году 2013 и укомплектована
                отраслевыми экспертами.
              </Typography>
            </Box>
            <Box padding={5}>
              <h1>0</h1>
              <Typography>
                Мы начали с нуля и построили успешный бизнес эко загара.{" "}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box padding={5}>
              <h1>Обучение</h1>
              <Typography>
                Мы прошли многочисленные обучения в России, Великобритании,
                Америке, Австралии.
              </Typography>
            </Box>
            <Box padding={5}>
              <h1>Подход</h1>
              <Typography>
                Обучение знаниям и практическим навыкам охватывает науку,
                лежащую в основе загара без солнца, методы обеспечения
                естественного загара для каждого клиента, а также инструменты и
                способы построения успешного бизнеса в сфере автозагара.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* <Box css={styles.aboutUsBlock} sx={{ width: "20%" }}>
          <Typography css={styles.aboutUsText}>
           
          </Typography>
        </Box>
        <Box css={styles.aboutUsBlock} sx={{ width: "20%" }}>
          <Typography css={styles.aboutUsText}>
            Мы начали с нуля и построили успешный бизнес эко загара.
          </Typography>
        </Box>
        <Box css={styles.aboutUsBlockLeft} sx={{ width: "20%" }}>
          <Typography css={styles.aboutUsText}>
            Мы прошли многочисленные обучения в России, Великобритании, Америке,
            Австралии.
          </Typography>
        </Box>
        <Box css={styles.aboutUsBlockLeft} sx={{ width: "33%" }}>
          <Typography css={styles.aboutUsText}>
            Обучение знаниям и практическим навыкам охватывает науку, лежащую в
            основе загара без солнца, методы обеспечения естественного загара
            для каждого клиента, а также инструменты и способы построения
            успешного бизнеса в сфере автозагара.
          </Typography>
        </Box> */}
      </Box>
      {/* <Box css={styles.mapsTitleContainerStyle}>
        <h1>ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ВЕБИНАР</h1>
      </Box>
      <Box css={styles.wrapperVebinarStyle}>
        <Box
          css={styles.vebinarStyle}
          component="img"
          alt="vebinar"
          src={vebinar}
        />
        <Box>
          <RecordButton />
        </Box>
      </Box>
      <Contacts /> */}
      <Box css={styles.mapsContainerStyle}>
        <Box css={styles.mapsTitleContainerStyle}>
          <Typography variant="h3" fontWeight={500}>
            ГДЕ МЫ НАХОДИМСЯ?
          </Typography>
        </Box>
        <Box width="85vw" height="40vh">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1mo2QgEiayBbvH7XvrdUS2Fvlec0fo5M&ehbc=2E312F"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Box>
    </Box>
  );
}
