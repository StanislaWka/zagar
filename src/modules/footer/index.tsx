/** @jsxImportSource @emotion/react */
import React from "react";
// import { Link as RouterLink } from "react-router-dom";
import { Box,Link, Typography } from "@mui/material";
// import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";

import Logo from "assets/logo.png";
import { APP_ROUTES } from "constants/appRoutes";
import { useEnhancedNavigate } from "hooks";
import { ContactUs as ContactUsButton } from "./contactUsButton";
import styles from "./styles";

function CopyrightLogo() {
  const { scrollNavigate } = useEnhancedNavigate();

  const returnHandler = (e: React.MouseEvent<HTMLDivElement>) =>
    scrollNavigate({
      top: 0,
      left: 0,
      path: APP_ROUTES.HOME_PAGE,
      behavior: "smooth",
    });

  return (
    <Box css={styles.flexColumn}>
      <Box
        onClick={returnHandler}
        component="img"
        src={Logo}
        css={styles.imgBoxStyles}
      />
      <Typography
        css={styles.copyrightTypographyStyles}
        color="neutral.main"
        variant="caption"
      >
        {`${new Date().getFullYear()} `}
        <Link color="neutral.main" target="_blank" href="#">
          СТУДИЯ МОМЕНТАЛЬНОГО ЗАГАРА
        </Link>{" "}
      </Typography>
    </Box>
  );
}

export function Footer() {
  // const handleScrollTop = (e: React.MouseEvent) =>
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const handleContactUs = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <Box bgcolor="black" css={styles.footerStyles} component="footer">
      <CopyrightLogo />
      {/* <Container maxWidth="sm" css={styles.containerStyle}>
        <Box css={styles.contactsInfoWrapperStyles}>
          <Box>
            <Typography
              color="neutral.main"
              component={RouterLink}
              to={APP_ROUTES.CONTACT}
              onClick={handleScrollTop}
              css={styles.hoverableTypography}
            >
              Контакты
            </Typography>
          </Box>
          <Box
            ml={10}
            display={{ xs: "none", sm: "none", md: "flex", lg: "flex" }}
          >
            <Typography color="neutral.main">Социальные сети</Typography>
          </Box>
          <Box css={styles.socialIconsWrapperStyles}>
            <Box display="flex" justifyContent="space-around">
              <Box css={styles.iconBoxStyle}>
                <IconButton
                  target="_blank"
                  href=""
                >
                  <LinkedIn css={styles.iconStyles} color="secondary" />
                </IconButton>
              </Box>
              <Box css={styles.iconBoxStyle}>
                <IconButton
                  target="_blank"
                  href=""
                >
                  <Facebook css={styles.iconStyles} color="secondary" />
                </IconButton>
              </Box>
              <Box css={styles.iconBoxStyle}>
                <IconButton
                  target="_blank"
                  href=""
                >
                  <Twitter css={styles.iconStyles} color="secondary" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box> */}
      {/* </Container> */}
      <Box css={styles.contactUsButtonContainerStyles}>
        <ContactUsButton onClick={handleContactUs} />
      </Box>
    </Box>
  );
}
