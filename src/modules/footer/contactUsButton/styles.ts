/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const contactButton = css({
  minHeight: '2rem',
  minWidth: '9rem',
  borderRadius: '30px',
  border: '1px solid #FFF',
  color: 'white',
  animationDuration: '0.5s',
  '&:hover': {
    backgroundColor: '#FFF',
    color: 'black',
  },
});

const linkStyle = css({
  textDecoration: 'none',
});

const styles = { contactButton, linkStyle };
export default styles;
