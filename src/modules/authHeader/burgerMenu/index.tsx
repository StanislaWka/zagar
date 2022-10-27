/** @jsxImportSource @emotion/react */
import { Box } from "@mui/material";
import React from "react";
import { StyledMenu } from "./styledMenu";
import styles from "./styles";

interface StylesBurgerMenuInterface {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function StyledBurgerMenu({
  open,
  setOpen,
}: StylesBurgerMenuInterface) {
  let firstOpenStyle;
  let secondOpenStyle;
  let thirdOpenStyle;

  if (open) {
    firstOpenStyle = styles.firstItemOpen;
    secondOpenStyle = styles.secondItemOpen;
    thirdOpenStyle = styles.thirdItemOpen;
  }

  return (
    <Box css={styles.wrapperStyle}>
      <Box css={[styles.mainBoxStyle]} onClick={() => setOpen((prev) => !prev)}>
        <Box
          css={[styles.burgerItemStyle, styles.largeStyle, firstOpenStyle]}
        />
        <Box
          css={[styles.burgerItemStyle, styles.shortStyle, secondOpenStyle]}
        />
        <Box
          css={[styles.burgerItemStyle, styles.largeStyle, thirdOpenStyle]}
        />
      </Box>
      {open && <StyledMenu setOpen={setOpen} />}
    </Box>
  );
}
