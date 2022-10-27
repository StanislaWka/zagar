/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const rootStyles = css`
  code span {
    font-family: monospace !important;
    background-color: #eee;
    padding: 3px;
    font-size: 100%;
    font-size: 1rem;
  }
  p {
    font-weight: 400;
    font-size: 100%;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    font-style: initial;
  }
  blockquote {
    border-left: 2px solid #ddd;
    padding-left: 10px;
    color: #aaa;
    font-style: italic;
  }
  * {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif !important;
    margin: 0;
    border: 0;
    vertical-align: baseline;
  }
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    padding: 0;
    max-width: 100vw;
  }
  #root {
    display: flex;
    flex-direction: column;
  }
`;

const colors = {
  mainDark: '#000000',
  mainBlue: '#000000',
  mainGray: '#F2F2F2',
  eerieBlack: '#222222',
  cultured: '#371C10',
  lightGray: '#bfbfbf',
  modalGray: '#091e4214',
  darkOrange: '#FF8C00',
  silver: '#CCCCCC',
  white: '#FFFFFF',
  gray: '#808080',
  taskBorderColor: '#C4C4C4',
  darkRed: '#921313',
  firebrick: '#c71818',
};

const styles = {
  rootStyles,
  colors,
};
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
export const breakpoints = [600, 900, 1200];

export default styles;
