/** @jsxImportSource @emotion/react */
import { CustomButton } from "components/button";
import React from "react";
import { Link } from "react-router-dom";
import styles from "modules/buttonsMenu/styles";
import { APP_ROUTES } from "constants/appRoutes";

export function RecordButton() {
  const scrollToForm = () => {
    const element = document.getElementById('form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Link
      css={styles.linkStyle}
      to={APP_ROUTES.HOME_PAGE}
      target="_self"
      rel="noopener noreferrer"
      color="dark"
    >
      <CustomButton variant="contained" value="записаться" fullWidth onClick={scrollToForm} />
    </Link>
  );
}
