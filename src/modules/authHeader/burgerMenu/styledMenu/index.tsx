/** @jsxImportSource @emotion/react */
import {
  BUTTON_SCROLL_TO_THE_TOP_ACTION,
  buttonsArray,
} from 'constants/buttons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuFields } from './menuFields';

interface StylesMenuProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function StyledMenu({
  setOpen,
}: StylesMenuProps) {
  const navigate = useNavigate();

  const clickHandler = async (e: React.MouseEvent<HTMLLIElement>) => {
    const { path, action } = e.currentTarget.dataset;
    if (path) {
      navigate(path);
      if (action && action === BUTTON_SCROLL_TO_THE_TOP_ACTION) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    }
    setOpen(false);
  };

  return (
    <MenuFields
      clickHandler={clickHandler}
      buttonsArray={buttonsArray}
    />
  );
}
