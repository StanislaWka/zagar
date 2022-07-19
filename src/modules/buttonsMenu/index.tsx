/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";

import { CustomButton } from "components";
import {
  BUTTON_SCROLL_TO_THE_TOP_ACTION,
  buttonsArray,
  ButtonsProps,
} from "constants/buttons";
import styles from "./styles";

interface ButtonsMenuProps {}

export function ButtonsMenu(props: ButtonsMenuProps) {
  const clickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { path, action } = e.currentTarget.dataset;
    if (path) {
      if (action && action === BUTTON_SCROLL_TO_THE_TOP_ACTION) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <a href='/#cost' css={styles.linkStyle}>
        <CustomButton
          boxStyle={styles.boxStyle}
          css={styles.menuStyles}
          onClick={clickHandler}
          value="ЦЕНЫ"
        />
      </a>
      {buttonsArray.map(({ path, value, action, key }: ButtonsProps) => (
        <Link
          key={path}
          to={{
            pathname: path,
            search: key,
          }}
          css={styles.linkStyle}
        >
          <CustomButton
            boxStyle={styles.boxStyle}
            css={styles.menuStyles}
            key={path}
            onClick={clickHandler}
            value={value}
            data-action={action}
            data-path={path}
          />
        </Link>
      ))}
    </>
  );
}
