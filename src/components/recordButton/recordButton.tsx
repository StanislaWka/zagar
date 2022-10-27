/** @jsxImportSource @emotion/react */
import { CustomButton } from "components/button";
import React from "react";
import { Link } from "react-router-dom";
import styles from "modules/buttonsMenu/styles";

export function RecordButton() {
  return (
    <Link
      css={styles.linkStyle}
      to={``}
      target="_blank"
      rel="noopener noreferrer"
      color="dark"
    >
      <CustomButton variant="contained" value="записаться" fullWidth />
    </Link>
  );
}
