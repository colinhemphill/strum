import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { atoms, vars } from '../../css';

const emphasisBackgroundColor = createVar();
const emphasisBorderColor = createVar();

const alertRecipeBase = style({
  borderRadius: vars.radii.medium,
  borderStyle: 'solid',
  position: 'relative',
});

export const alertRecipe = recipe({
  base: alertRecipeBase,
  defaultVariants: {
    color: 'accent',
    size: 'medium',
  },
  variants: {
    color: {
      accent: {
        backgroundColor: vars.accent.accent2,
        color: vars.accent.accent11,
        borderColor: vars.accent.accent6,
        vars: {
          [emphasisBackgroundColor]: vars.accent.accent3,
          [emphasisBorderColor]: vars.accent.accent9,
        },
      },
      error: {
        backgroundColor: vars.error.error2,
        color: vars.error.error11,
        borderColor: vars.error.error6,
        vars: {
          [emphasisBackgroundColor]: vars.error.error3,
          [emphasisBorderColor]: vars.error.error9,
        },
      },
      success: {
        backgroundColor: vars.success.success2,
        color: vars.success.success11,
        borderColor: vars.success.success6,
        vars: {
          [emphasisBackgroundColor]: vars.success.success3,
          [emphasisBorderColor]: vars.success.success9,
        },
      },
      warning: {
        backgroundColor: vars.warning.warning2,
        color: vars.warning.warning11,
        borderColor: vars.warning.warning6,
        vars: {
          [emphasisBackgroundColor]: vars.warning.warning3,
          [emphasisBorderColor]: vars.warning.warning9,
        },
      },
    },
    emphasis: {
      left: {
        backgroundColor: emphasisBackgroundColor,
        borderLeftColor: emphasisBorderColor,
        borderLeftWidth: '0.375rem',
      },
    },
    size: {
      extraSmall: atoms({
        borderWidth: '1',
        fontSize: 'small',
        padding: '2',
      }),
      small: atoms({
        borderWidth: '1',
        fontSize: 'small',
        padding: '3',
      }),
      medium: atoms({
        borderWidth: '1',
        fontSize: 'base',
        padding: '4',
      }),
      large: atoms({
        borderWidth: '2',
        fontSize: 'large',
        padding: '4',
      }),
      extraLarge: atoms({
        borderWidth: '2',
        fontSize: 'extraLarge',
        padding: '5',
      }),
    },
  },
});

export const alertIconRecipe = recipe({
  defaultVariants: {
    size: 'medium',
  },
  variants: {
    size: {
      extraSmall: {
        height: vars.fontSizes.small,
        width: 'auto',
      },
      small: {
        height: vars.fontSizes.small,
        width: 'auto',
      },
      medium: {
        height: vars.fontSizes.base,
        width: 'auto',
      },
      large: {
        height: vars.fontSizes.large,
        width: 'auto',
      },
      extraLarge: {
        height: vars.fontSizes.extraLarge,
        width: 'auto',
      },
    },
  },
});

globalStyle(`${alertRecipeBase} a`, {
  fontWeight: vars.fontWeights.semiBold,
  textDecorationColor: 'inherit',
  textUnderlineOffset: 'unset',
});

export type AlertRecipe = RecipeVariants<typeof alertRecipe>;
