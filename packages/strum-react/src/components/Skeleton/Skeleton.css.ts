import { keyframes } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { motionSafe, vars } from '../../css';

const glowKeyframes = keyframes({
  '50%': {
    opacity: vars.opacity[25],
  },
});

export const skeletonRecipe = recipe({
  base: {
    cursor: 'wait',
    minHeight: '1em',
    opacity: vars.opacity[50],
    verticalAlign: 'middle',
  },
  defaultVariants: {
    animation: 'glow',
  },
  variants: {
    animation: {
      none: {},
      glow: {
        ...motionSafe({
          animationName: glowKeyframes,
          animationDuration: vars.transitionDurations[3000],
          animationTimingFunction: vars.transitionEasingFunctions.inOut,
          animationIterationCount: 'infinite',
        }),
      },
    },
  },
});

export type SkeletonRecipe = RecipeVariants<typeof skeletonRecipe>;
