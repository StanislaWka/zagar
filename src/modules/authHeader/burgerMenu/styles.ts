/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import facepaint from 'facepaint';
import { breakpoints } from 'components/rootStyles/styles';

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const wrapperStyle = css(
  mq({
    display: ['block', 'block', 'none', 'none'],
  }),
);

const mainBoxStyle = css(
  mq({
    display: ['flex', 'flex', 'none', 'none'],
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: ['20px', '32px'],
    height: ['20px', '32px'],
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    margin: '0 20px',
  }),
);

const burgerItemStyle = css(
  mq({
    background: 'black',
    borderRadius: '10px',
    transition: 'all 0.3s linear',
    position: 'relative',
    transformOrigin: '1px',
  }),
);

const largeStyle = css(
  mq({
    width: ['20px', '32px'],
    height: ['2px', '3px'],
  }),
);

const shortStyle = css(
  mq({
    width: ['14px', '26px'],
    height: ['2px', '3px'],
    marginRight: '0',
    marginLeft: 'auto',
  }),
);

const firstItemOpen = css({
  transform: 'rotate(45deg)',
});

const secondItemOpen = css({
  opacity: '0',
});

const thirdItemOpen = css({
  transform: 'rotate(-45deg)',
});

const styles = {
  mainBoxStyle,
  wrapperStyle,
  burgerItemStyle,
  largeStyle,
  shortStyle,
  firstItemOpen,
  secondItemOpen,
  thirdItemOpen,
};

export default styles;
