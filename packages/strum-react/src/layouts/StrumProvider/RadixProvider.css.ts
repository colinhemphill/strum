import { style } from '@vanilla-extract/css';
import { TOAST_VIEWPORT_PADDING } from '../../components/Toast/Toast.css';
import { atoms } from '../../css';

export const toastViewportStyle = style([
  atoms({
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    gap: '4',
    position: 'fixed',
    margin: '0',
    maxWidth: '100vw',
    right: '0',
    zIndex: '100',
  }),
  {
    listStyle: 'none',
    outline: 'none',
    padding: TOAST_VIEWPORT_PADDING,
    width: '24rem',
  },
]);
