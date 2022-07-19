/** @jsxImportSource @emotion/react */
import { Box, Typography } from "@mui/material";
import { CustomButton } from "components";
import React from "react";

import styles from "./styles";

export function Cost() {
  return (
    <Box css={styles.flexStyle} id="cost">
      <Box css={styles.BoxStyle}>
        <Box css={styles.mainBoxStyles}>
          <Box css={styles.flexCostStyle}>
            <Typography>Br</Typography>
            <Typography variant="h1">40</Typography>
          </Box>
          <Typography sx={{fontWeight: 'bold'}}>МОМЕНТАЛЬНЫЙ ЗАГАР</Typography>
        </Box>
        <Typography css={styles.descriptionStyle}>
          <p>Любой оттенок на все тело</p>
          <p>Расходные материалы </p>
          <p>Стикини</p>
        </Typography>
        <CustomButton fullWidth color="info" variant="contained">Заказать</CustomButton>
      </Box>
      <Box>
        <Box css={styles.mainBoxStyles}>
          <Box css={styles.flexCostStyle}>
            <Typography>Br</Typography>
            <Typography variant="h1">45</Typography>
          </Box>
          <Typography sx={{textAlign: 'center', fontWeight: 'bold'}}>ВСЕ ВКЛЮЧЕНО:</Typography>
        </Box>
        <Typography css={styles.descriptionStyle}>
          <p>Любой оттенок на все тело </p>
          <p>Расходные материлы </p>
          <p>Стикини </p>
          <p>Жидкий пилинг</p>
        </Typography>
        <CustomButton color="info" variant="contained" fullWidth>
          Заказать
        </CustomButton>
      </Box>
    </Box>
  );
}
