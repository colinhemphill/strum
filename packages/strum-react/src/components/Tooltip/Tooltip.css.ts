import { keyframes } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { atoms, motionSafe, vars } from '../../css';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const tooltipContentRecipe = recipe({
  base: [
    atoms({
      borderRadius: 'large',
      borderStyle: 'solid',
      borderWidth: '1',
      boxShadow: 'small',
      fontSize: 'small',
      paddingX: '3',
      paddingY: '2',
    }),
    {
      maxWidth: '16rem',
      userSelect: 'none',

      ...motionSafe({
        animationDuration: '150ms',
        animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
        willChange: 'transform, opacity',
        selectors: {
          '&[data-state="delayed-open"][data-side="top"]': {
            animationName: slideDownAndFade,
          },
          '&[data-state="delayed-open"][data-side="right"]': {
            animationName: slideLeftAndFade,
          },
          '&[data-state="delayed-open"][data-side="bottom"]': {
            animationName: slideUpAndFade,
          },
          '&[data-state="delayed-open"][data-side="left"]': {
            animationName: slideRightAndFade,
          },
        },
      }),
    },
  ],
  defaultVariants: {
    color: 'accent',
  },
  variants: {
    color: {
      accent: atoms({
        backgroundColor: 'accent1',
        borderColor: 'accent7',
        color: 'accent11',
      }),
      neutral: atoms({
        backgroundColor: 'neutral4',
        borderColor: 'neutral7',
        color: 'neutral11',
      }),
    },
  },
});

export const tooltipArrowRecipe = recipe({
  defaultVariants: {
    color: 'accent',
  },
  variants: {
    color: {
      accent: {
        fill: vars.accent.accent7,
      },
      neutral: {
        fill: vars.neutral.neutral7,
      },
    },
  },
});

export type TooltipContentRecipe = RecipeVariants<typeof tooltipContentRecipe>;
