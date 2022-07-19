/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import facepaint from 'facepaint';
import { breakpoints } from 'components/rootStyles/styles';

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const styledMenu = css(
  mq({
    position: 'fixed',
    display: 'flex',
    left: '0',
    top: '0',
    width: '100vw',
    flexDirection: 'column',
    backgroundColor: 'white',
    boxShadow: 'inset 0px 1px 10px grey',
    padding: ['20px', '52px'],
    marginTop: '64px',
  }),
);

const linkStyle = css(
  mq({
    textDecoration: 'none',
    marginBottom: '20px',
    borderBottom: '1px solid #E0E0E0',
  }),
);

const menuItemStyle = css(
  mq({
    textTransform: 'uppercase',
    fontWeight: '700',
    color: 'black',
    fontSize: ['10px', '20px'],
    lineHeight: ['13px', '40px'],
    '&:hover': {
      color: '#004ED7',
    },
  }),
);

const logoutStyle = css({
  color: 'grey',
});

const paragraphStyle = css(
  mq({
    marginBottom: '20px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontWeight: '700',
    color: 'black',
    fontSize: ['10px', '20px'],
    lineHeight: ['13px', '40px'],
    borderBottom: '1px solid #E0E0E0',
    '&:hover': {
      color: '#004ED7',
    },
  }),
);

const numberStyle = css(
  mq({
    backgroundColor: '#EC0013',
    color: 'white',
    fontSize: ['8px', '15px'],
    fontWeight: 'bold',
    borderRadius: '50%',
    padding: ['0 4px', '0 6px'],
    marginLeft: ['5px', '10px'],
  }),
);

const redCircleIcon = css(
  mq({
    marginLeft: ['8px', '15px'],
  }),
);

const styles = {
  styledMenu,
  linkStyle,
  paragraphStyle,
  logoutStyle,
  numberStyle,
  redCircleIcon,
  menuItemStyle,
};

export default styles;
