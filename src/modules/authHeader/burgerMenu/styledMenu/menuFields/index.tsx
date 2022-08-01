/** @jsxImportSource @emotion/react */
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ButtonsProps } from "constants/buttons";

import styles from "../styles";

interface MenuFieldsProps {
  clickHandler: (e: React.MouseEvent<HTMLLIElement>) => Promise<void>;
  buttonsArray: ButtonsProps[];
}

export function MenuFields({ clickHandler, buttonsArray }: MenuFieldsProps) {
  return (
    <Box css={styles.styledMenu}>
      <Typography
        css={styles.menuItemStyle}
        sx={{
          width: "100%",
          textDecoration: "none",
          marginBottom: "20px",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        ул. Притыцкого 34 1 подъезд 1 этаж ст.м. Пушкинская
      </Typography>
      {buttonsArray.map(({ path, value, action }: ButtonsProps) => (
        <Link key={path} to={path} css={styles.linkStyle}>
          <Typography
            key={path}
            css={styles.menuItemStyle}
            onClick={clickHandler}
            data-action={action}
            data-path={path}
          >
            {value}
          </Typography>
        </Link>
      ))}
    </Box>
  );
}
