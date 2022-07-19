/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import facepaint from 'facepaint';
import { breakpoints } from 'components/rootStyles/styles';

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const footerStyles = css(
  mq({
    display: 'flex',
    flexDirection: ['column', 'column', 'row', 'row'],
    alignItems: 'center',
    padding: '0.5rem 0.75rem 0.5rem 0.75rem',
    marginTop: 'auto',
    width: '100%',
    minHeight: '120px',
    boxShadow: '0 -4px 8px -2px rgba(115,115,115,0.75)',
    backgroundColor: 'black',
    zIndex: 5,
  }),
);

const flexColumn = css(
  mq({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: ['10px', '20px', '0'],
  }),
);

const imgBoxStyles = css(
  mq({
    paddingTop: '20px',
    maxHeight: '75px',
    marginLeft: ['0', '0', '2.75rem'],
    maxWidth: ['130px', '130px', '130px'],
    '&:hover': {
      cursor: 'pointer',
    },
  }),
);

const mottoStyles = css(
  mq({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: ['center', 'center', 'flex-start'],
    marginBottom: '25px',
    marginLeft: ['0', '0', '25px'],
    textAlign: ['center', 'center', 'left'],
  }),
);

const copyrightTypographyStyles = css(
  mq({
    whiteSpace: 'nowrap',
    marginLeft: ['0', '0', '2.75rem'],
    marginTop: '1rem',
  }),
);

const hoverableTypography = css({
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    color: 'ActiveCaption',
  },
});

const iconBoxStyle = css(
  mq({
    marginRight: ['8px', '12px', '24px'],
    marginLeft: ['8px', '12px', '24px'],
  }),
);

const iconStyles = css(
  mq({
    width: ['20px', '20px', '24px'],
    '&:hover': {
      color: 'ActiveCaption',
    },
  }),
);

const contactUsButtonContainerStyles = css(
  mq({
    display: 'flex',
    alignItems: 'center',
    paddingRight: ['0px', '0px', '70px'],
  }),
);

const contactsInfoWrapperStyles = css(
  mq({
    display: 'flex',
    alignItems: 'center',
    flexDirection: ['column', 'column', 'row'],
    justifyContent: 'center',
    height: '100%',
  }),
);

const socialIconsWrapperStyles = css(
  mq({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginLeft: ['0', '0', '50px'],
  }),
);

const containerStyle = css({ marginBottom: '10px' });

const styles = {
  footerStyles,
  imgBoxStyles,
  mottoStyles,
  copyrightTypographyStyles,
  flexColumn,
  hoverableTypography,
  iconStyles,
  contactUsButtonContainerStyles,
  contactsInfoWrapperStyles,
  socialIconsWrapperStyles,
  iconBoxStyle,
  containerStyle,
};

export default styles;
