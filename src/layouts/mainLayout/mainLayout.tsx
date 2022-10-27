/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState, useEffect } from "react";
import { Box, CssBaseline, IconButton, ThemeProvider } from "@mui/material";
import { ArrowForwardIos as ArrowForwardIosIcon } from "@mui/icons-material";

import { useEnhancedNavigate } from "hooks";
import { AuthHeader, Footer } from "modules";
import { theme } from "./theme";
import styles from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: LayoutProps) {
  const [showButton, setShowButton] = useState(false);
  const { scrollNavigate } = useEnhancedNavigate();
  const WINDOW_SIZE = 100;

  const windowHandler = () => {
    if (window.pageYOffset > WINDOW_SIZE) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    let cleanupFunction = false;
    if (!cleanupFunction) {
      window.addEventListener("scroll", windowHandler);
    }
    return () => {
      window.removeEventListener("scroll", windowHandler);
      cleanupFunction = true;
    };
  }, []);

  const pageUpHandler = () => {
    scrollNavigate({ top: 0, left: 0 });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box css={styles.layoutStyle}>
        <AuthHeader />
        {children}
        {showButton && (
          <IconButton
            onClick={pageUpHandler}
            css={styles.pageUpButtonWrapperStyles}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
