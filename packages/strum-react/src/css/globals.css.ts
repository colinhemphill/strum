import { globalStyle } from '@vanilla-extract/css';
import { vars } from './vars.css';

globalStyle('body', {
  backgroundColor: vars.neutral.neutral1,
  color: vars.neutral.neutral12,
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'underline',
  textDecorationColor: vars.accent.accent9,
  textUnderlineOffset: '0.125em',
  textDecorationThickness: '0.125em',
});

globalStyle('a:hover', {
  textDecorationColor: 'inherit',
});

globalStyle('::selection', {
  backgroundColor: vars.accent.accentTransparent,
  color: vars.neutral.neutral12,
});
