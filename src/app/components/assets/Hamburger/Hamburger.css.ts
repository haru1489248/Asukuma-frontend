import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/common.css';

export const hamburgerButton = style({
  padding: '8px',
  borderRadius: '8px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: vars.color.backgroundGrey,
  },
});
