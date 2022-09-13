/** @jsxImportSource @emotion/react */
import { Box, Typography } from "@mui/material";
import { CustomButton } from "components";
import React from "react";

import styles from "./styles";

export function Cost() {
  return (
    <>
      <Typography variant="h3" sx={{ marginBottom: "40px" }}>
        ЦЕНЫ
      </Typography>
      <Box id="cost">
        <Box css={styles.BoxStyle}>
          <Box css={styles.mainBoxStyles}>
            <Box css={styles.flexCostStyle}>
              <Typography variant="h1">45</Typography>
              <Typography>BYN</Typography>
            </Box>
            <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
              МОМЕНТАЛЬНЫЙ ЗАГАР
            </Typography>
          </Box>
          <Typography css={styles.descriptionStyle}>
            <p>
              - Любой оттенок на все тело независимо от роста, веса и
              особенностей кожи
            </p>
            <p>- Стикини, полный набор одноразового белья</p>
            <p>- Консультация от профессионалов</p>
          </Typography>
          <CustomButton fullWidth color="primary" variant="contained">
            Записаться
          </CustomButton>
        </Box>
        <Box>
          <Box css={styles.mainBoxStyles}>
          <Box css={styles.flexCostStyle}>
              <Typography variant="h1"> 7</Typography>
              <Typography>BYN</Typography>
            </Box>
            <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
              ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ:
            </Typography>
          </Box>
          <Typography css={styles.descriptionStyle}>
            <p>— Жидкий пилинг</p>
            <p>— Опудривание на все тело с эффектом мерцания</p>
            <p>— Капли-усилитель для загара</p>
            <p>— Жидкий пилинг</p>
          </Typography>
          <CustomButton color="primary" variant="contained" fullWidth sx={{marginBottom: '100px'}}>
            Записаться
          </CustomButton>
        </Box>
      </Box>
    </>
  );
}
