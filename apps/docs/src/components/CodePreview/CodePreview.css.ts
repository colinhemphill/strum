import { globalStyle, style } from '@vanilla-extract/css';

export const codeEditorContainerStyle = style({});

globalStyle(`${codeEditorContainerStyle} textarea`, {
  outline: 'none',
});
