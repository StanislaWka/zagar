import React from 'react';

import { APP_ROUTES } from './appRoutes';

export type ButtonsProps = {
  value: string;
  path: string;
  action?: string;
  icon?: React.ReactNode;
  key?: string;
};

export const BUTTON_SCROLL_TO_THE_TOP_ACTION = 'SCROLL_TOP';

export const buttonsArray: ButtonsProps[] = [
  { value: 'О нас', path: APP_ROUTES.CONTACT, action: BUTTON_SCROLL_TO_THE_TOP_ACTION },
  { value: 'ОБУЧЕНИЕ', path: APP_ROUTES.EDUCATION, action: BUTTON_SCROLL_TO_THE_TOP_ACTION },
];
