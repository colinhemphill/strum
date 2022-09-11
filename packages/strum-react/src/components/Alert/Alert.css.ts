import { globalStyle, style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { atoms, vars } from '../../css';

const alertRecipeBase = style({
  borderRadius: vars.radii.medium,
  borderStyle: 'solid',
  borderWidth: vars.borderWidths[1],
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
      },
      error: {
        backgroundColor: vars.error.error2,
        color: vars.error.error11,
        borderColor: vars.error.error6,
      },
      success: {
        backgroundColor: vars.success.success2,
        color: vars.success.success11,
        borderColor: vars.success.success6,
      },
      warning: {
        backgroundColor: vars.warning.warning2,
        color: vars.warning.warning11,
        borderColor: vars.warning.warning6,
      },
    },
    size: {
      extraSmall: atoms({
        fontSize: 'small',
        padding: '2',
      }),
      small: atoms({
        fontSize: 'small',
        padding: '3',
      }),
      medium: atoms({
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
