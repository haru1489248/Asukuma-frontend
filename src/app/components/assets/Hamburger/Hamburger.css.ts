import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/common.css';

export const hamburgerButton = style({
    padding: '8px',
    backgroundColor: vars.color.backgroundGrey,
    borderRadius: '8px',
    cursor: 'pointer',
});
