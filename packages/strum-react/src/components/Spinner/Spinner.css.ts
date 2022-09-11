import { keyframes } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { motionSafe, vars } from '../../css';

const rotateKeyframes = keyframes({
  '100%': { transform: 'rotate(1turn)', transformOrigin: 'center' },
});

export const spinnerRecipe = recipe({
  base: {
    display: 'flex',
    stroke: vars.colors.current,
    ...motionSafe({
      animation: `1.4s linear infinite ${rotateKeyframes}`,
    }),
  },
  variants: {
    size: {
      small: {
        height: '1.25em',
        strokeWidth: '2',
        width: '1.25em',
      },
      medium: {
        height: '1.5em',
        strokeWidth: '2',
        width: '1.5em',
      },
      large: {
        height: '2em',
        strokeWidth: '3',
        width: '2em',
      },
    },
  },
});

export type SpinnerRecipe = RecipeVariants<typeof spinnerRecipe>;
