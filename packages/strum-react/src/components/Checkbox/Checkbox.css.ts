import { style } from '@vanilla-extract/css';
import { atoms } from '../../css';
import { disabledStateStyle } from '../../css/utilityClasses.css';

export const checkboxStyle = style([
  atoms({
    alignItems: 'center',
    backgroundColor: {
      base: 'neutral3',
      hoverStrict: 'neutral4',
      focus: 'neutral5',
    },
    borderColor: {
      base: 'neutral7',
      focus: 'accent9',
      hoverStrict: 'neutral8',
    },
    borderRadius: 'medium',
    borderStyle: 'solid',
    borderWidth: '2',
    cursor: 'default',
    display: 'flex',
    justifyContent: 'center',
    transitionDuration: '150',
    transitionProperty: 'colors',
    transitionTimingFunction: 'inOut',
  }),
  {
    outline: 'none',
    height: 25,
    width: 25,
  },
  disabledStateStyle,
]);

export const checkboxIndicatorStyle = atoms({
  color: 'neutral12',
  display: 'flex',
});

export const checkboxLabelStyle = atoms({
  cursor: 'default',
});
