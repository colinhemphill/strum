import { createVar, keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { atoms, motionSafe, vars } from '../../css';

export const TOAST_VIEWPORT_PADDING = '2rem';
const translateDistance = calc.add('100%', TOAST_VIEWPORT_PADDING);

const colorPrimary = createVar();
const colorSecondary = createVar();

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: {
    transform: `translateX(${translateDistance})`,
  },
  to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(${translateDistance})` },
});

export const toastRecipe = recipe({
  base: [
    atoms({
      alignItems: 'center',
      borderRadius: 'medium',
      boxShadow: 'medium',
      borderStyle: 'solid',
      borderWidth: '1',
      display: 'flex',
      padding: '4',
    }),
    {
      columnGap: vars.space[2],

      ...motionSafe({
        selectors: {
          '&[data-state="open"]': {
            animationName: slideIn,
            animationDuration: vars.transitionDurations[300],
            animationTimingFunction: vars.transitionEasingFunctions.out,
          },
          '&[data-state="closed"]': {
            animationName: hide,
            animationDuration: vars.transitionDurations[150],
            animationTimingFunction: vars.transitionEasingFunctions.in,
          },
          '&[data-swipe="move"]': {
            transform: 'translateX(var(--radix-toast-swipe-move-x))',
          },
          '&[data-swipe="cancel"]': {
            transform: 'translateX(0)',
            transitionProperty: 'transform',
            transitionDuration: vars.transitionDurations[300],
            transitionTimingFunction: vars.transitionEasingFunctions.out,
          },
          '&[data-swipe="end"]': {
            animationName: swipeOut,
            animationDuration: vars.transitionDurations[150],
            animationTimingFunction: vars.transitionEasingFunctions.out,
          },
        },
      }),
    },
  ],
  defaultVariants: {
    color: 'neutral',
  },
  variants: {
    color: {
      accent: [
        atoms({
          backgroundColor: 'accent3',
          borderColor: 'accent6',
        }),
        {
          vars: {
            [colorPrimary]: vars.accent.accent12,
            [colorSecondary]: vars.accent.accent11,
          },
        },
      ],
      neutral: [
        atoms({
          backgroundColor: 'neutral3',
          borderColor: 'neutral6',
        }),
        {
          vars: {
            [colorPrimary]: vars.neutral.neutral12,
            [colorSecondary]: vars.neutral.neutral11,
          },
        },
      ],
      error: [
        atoms({
          backgroundColor: 'error3',
          borderColor: 'error6',
        }),
        {
          vars: {
            [colorPrimary]: vars.error.error12,
            [colorSecondary]: vars.error.error11,
          },
        },
      ],
      warning: [
        atoms({
          backgroundColor: 'warning3',
          borderColor: 'warning6',
        }),
        {
          vars: {
            [colorPrimary]: vars.warning.warning12,
            [colorSecondary]: vars.warning.warning11,
          },
        },
      ],
      success: [
        atoms({
          backgroundColor: 'success3',
          borderColor: 'success6',
        }),
        {
          vars: {
            [colorPrimary]: vars.success.success12,
            [colorSecondary]: vars.success.success11,
          },
        },
      ],
    },
  },
});

export const toastTitleStyle = style([
  atoms({
    fontSize: 'base',
    fontWeight: 'medium',
    marginBottom: '2',
  }),
  { color: colorPrimary },
]);

export const toastDescriptionStyle = style([
  atoms({
    fontSize: 'small',
    margin: '0',
  }),
  {
    color: colorSecondary,
  },
]);

export type ToastRecipe = RecipeVariants<typeof toastRecipe>;
