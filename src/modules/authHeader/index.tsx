/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import darkLogo from "assets/dark_logo.png";
import { APP_ROUTES } from "constants/appRoutes";
import styles from "./styles";
import { StyledBurgerMenu } from "./burgerMenu";
import { ButtonsMenu } from "modules/buttonsMenu";
import { RecordButton } from "components/recordButton";

interface AuthHeaderProps {}

export function AuthHeader(props: AuthHeaderProps) {
  const [open, setOpen] = React.useState(false);

  // const [modal, setModal] = useState(false);

  return (
    <AppBar css={styles.appBarStyles} color="inherit" position="sticky">
      <Toolbar css={styles.toolBarStyles}>
        <Box css={styles.innerStyles}>
          <Link to={APP_ROUTES.HOME_PAGE} css={styles.linkStyle}>
            <Box
              css={styles.imgBoxStyles}
              component="img"
              src={darkLogo}
              alt="Sunmait logo"
            />
          </Link>
          <Box component="div" css={styles.navigationBox}>
            <ButtonsMenu />
          </Box>
          <RecordButton />
          <Typography css={styles.addressStyle} sx={{ width: "100%", textAlign: "right" }}>
            ул. Притыцкого 34 1 подъезд 1 этаж ст.м. Пушкинская
          </Typography>
        </Box>
        <StyledBurgerMenu open={open} setOpen={setOpen} />
      </Toolbar>
    </AppBar>
  );
}
