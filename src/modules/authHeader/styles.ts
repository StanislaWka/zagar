/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import facepaint from 'facepaint';
import { breakpoints } from 'components/rootStyles/styles';

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const appBarStyles = css({
  '& header': {
    padding: '0px',
  },
  display: 'flex',
  height: '64px',
  zIndex: 700,
});

const toolBarStyles = css({
  display: 'flex',
  maxHeight: '7.75rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem 0',
  height: '100%',
});

const innerStyles = css({
  display: 'flex',
  width: '100vw',
  alignItems: 'center',
});

const navigationBox = css(
  mq({
    display: ['none', 'none', 'flex', 'flex'],
    marginLeft: '1rem',

    '& button': {
      margin: ['0 8px', '0 8px', '0 8px', '0 16px'],
    },
  }),
);

const profileMenuStyle = css(
  mq({
    flexDirection: 'column',
    justifyContent: 'space-between',
    display: ['none', 'none', 'flex', 'flex'],
  }),
);

const imgBoxStyles = css(
  mq({
    marginLeft: ['20px', '28px', '28px', '28px'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '52px',
    maxWidth: '130px',
    '&:hover': {
      cursor: 'pointer',
    },
  }),
);

const linkStyle = css({
  lineHeight: '0',
});
const styles = {
  imgBoxStyles,
  appBarStyles,
  toolBarStyles,
  navigationBox,
  innerStyles,
  linkStyle,
  profileMenuStyle,
};

export default styles;
