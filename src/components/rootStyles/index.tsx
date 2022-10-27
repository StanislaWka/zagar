/** @jsxImportSource @emotion/react */
import React from 'react';
import { Global } from '@emotion/react';

import styles from './styles';

export function GlobalStyles() {
  return <Global styles={styles.rootStyles} />;
}
