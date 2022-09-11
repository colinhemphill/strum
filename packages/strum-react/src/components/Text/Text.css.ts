import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { atoms } from '../../css';

const size = {
  extraLarge: atoms({
    fontSize: 'extraLarge',
    fontWeight: 'medium',
    lineHeight: '2',
  }),
  large: atoms({
    fontSize: 'large',
    fontWeight: 'normal',
    lineHeight: '2',
  }),
  base: atoms({
    fontSize: 'base',
    fontWeight: 'normal',
    lineHeight: '1.5',
  }),
  small: atoms({
    fontSize: 'small',
    fontWeight: 'normal',
    lineHeight: '1.375',
  }),
  extraSmall: atoms({
    fontSize: 'extraSmall',
    fontWeight: 'normal',
    lineHeight: '1.375',
  }),
};

export const textRecipe = recipe({
  variants: {
    size,
    ellipsis: {
      true: style([
        {
          textOverflow: 'ellipsis',
        },
        atoms({
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }),
      ]),
    },
  },
});

export type TextRecipe = RecipeVariants<typeof textRecipe>;
