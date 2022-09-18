import { style } from '@vanilla-extract/css';
import { atoms, vars } from '../../css';
import { disabledStateStyle } from '../../css/utilityClasses.css';

export const radioStyle = style([
  atoms({
    backgroundColor: {
      base: 'neutral3',
      hoverStrict: 'neutral4',
      focus: 'neutral5',
    },
    outlineColor: {
      base: 'neutral7',
      focus: 'accent9',
      hoverStrict: 'neutral8',
    },
    borderRadius: 'circle',
    borderStyle: 'none',
    cursor: 'default',
    transitionDuration: '150',
    transitionProperty: 'colors',
    transitionTimingFunction: 'inOut',
  }),
  {
    height: '1.5rem',
    outlineStyle: 'solid',
    outlineWidth: 2,
    width: '1.5rem',
  },
  disabledStateStyle,
]);

export const indicatorStyle = style([
  atoms({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  }),
  {
    ':after': {
      backgroundColor: vars.neutral.neutral11,
      borderRadius: '50%',
      content: '',
      display: 'block',
      height: '0.625rem',
      width: '0.625rem',
    },
  },
]);

export const radioLabelStyle = atoms({
  cursor: 'default',
});
