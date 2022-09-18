import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { atoms } from '../../css';

export const badgeRecipe = recipe({
  base: {
    fontSize: '0.75em',
    lineHeight: '1',
    verticalAlign: 'baseline',
  },
  defaultVariants: {
    color: 'accent',
  },
  variants: {
    color: {
      accent: atoms({
        backgroundColor: 'accent9',
        color: 'white',
      }),
      neutral: atoms({
        backgroundColor: 'neutral3',
        color: 'neutral12',
      }),
      error: atoms({
        backgroundColor: 'error9',
        color: 'errorContrast',
      }),
      warning: atoms({
        backgroundColor: 'warning9',
        color: 'warningContrast',
      }),
      success: atoms({
        backgroundColor: 'success9',
        color: 'successContrast',
      }),
    },
  },
});

export type BadgeRecipe = RecipeVariants<typeof badgeRecipe>;
