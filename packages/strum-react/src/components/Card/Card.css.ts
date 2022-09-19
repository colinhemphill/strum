import { createVar, style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { atoms, vars } from '../../css';

const backgroundSecondary = createVar();
const borderColor = createVar();
const colorPrimary = createVar();
const colorSecondary = createVar();

export const cardRecipe = recipe({
  defaultVariants: {
    color: 'neutral2',
  },
  variants: {
    color: {
      neutral1: [
        atoms({
          backgroundColor: 'neutral1',
          borderColor: 'neutral6',
          color: 'neutral12',
        }),
        {
          vars: {
            [backgroundSecondary]: vars.neutral.neutral2,
            [borderColor]: vars.neutral.neutral6,
            [colorPrimary]: vars.neutral.neutral12,
            [colorSecondary]: vars.neutral.neutral11,
          },
        },
      ],
      neutral2: [
        atoms({
          backgroundColor: 'neutral2',
          borderColor: 'neutral6',
          color: 'neutral12',
        }),
        {
          vars: {
            [backgroundSecondary]: vars.neutral.neutral3,
            [borderColor]: vars.neutral.neutral6,
            [colorPrimary]: vars.neutral.neutral12,
            [colorSecondary]: vars.neutral.neutral11,
          },
        },
      ],
      neutral3: [
        atoms({
          backgroundColor: 'neutral3',
          borderColor: 'neutral6',
          color: 'neutral12',
        }),
        {
          vars: {
            [backgroundSecondary]: vars.neutral.neutral4,
            [borderColor]: vars.neutral.neutral6,
            [colorPrimary]: vars.neutral.neutral12,
            [colorSecondary]: vars.neutral.neutral11,
          },
        },
      ],
      accent: [
        atoms({
          backgroundColor: 'accent2',
          borderColor: 'accent6',
          color: 'accent12',
        }),
        {
          vars: {
            [backgroundSecondary]: vars.accent.accent3,
            [borderColor]: vars.accent.accent6,
            [colorPrimary]: vars.accent.accent12,
            [colorSecondary]: vars.accent.accent11,
          },
        },
      ],
      error: [
        atoms({
          backgroundColor: 'error2',
          borderColor: 'error6',
          color: 'error12',
        }),
        {
          vars: {
            [backgroundSecondary]: vars.error.error3,
            [borderColor]: vars.error.error6,
            [colorPrimary]: vars.error.error12,
            [colorSecondary]: vars.error.error11,
          },
        },
      ],
      warning: [
        atoms({
          backgroundColor: 'warning2',
          borderColor: 'warning6',
          color: 'warning12',
        }),
        {
          vars: {
            [backgroundSecondary]: vars.warning.warning3,
            [borderColor]: vars.warning.warning6,
            [colorPrimary]: vars.warning.warning12,
            [colorSecondary]: vars.warning.warning11,
          },
        },
      ],
      success: [
        atoms({
          backgroundColor: 'success2',
          borderColor: 'success6',
          color: 'success12',
        }),
        {
          vars: {
            [backgroundSecondary]: vars.success.success3,
            [borderColor]: vars.success.success6,
            [colorPrimary]: vars.success.success12,
            [colorSecondary]: vars.success.success11,
          },
        },
      ],
    },
  },
});

export const cardHeaderFooterStyle = style({
  backgroundColor: backgroundSecondary,
  borderColor,
});

export const cardSubtitleStyle = style({
  color: colorSecondary,
});

export type CardRecipe = RecipeVariants<typeof cardRecipe>;
