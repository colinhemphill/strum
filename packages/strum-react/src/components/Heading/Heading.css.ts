import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { atoms } from '../../css';

const level = {
  '1': atoms({
    fontSize: 'headingOne',
    fontWeight: 'semiBold',
    lineHeight: '1.25',
  }),
  '2': atoms({
    fontSize: 'headingTwo',
    fontWeight: 'semiBold',
    lineHeight: '1.25',
  }),
  '3': atoms({
    fontSize: 'headingThree',
    fontWeight: 'semiBold',
    lineHeight: '1.25',
  }),
};

export const headingRecipe = recipe({
  variants: {
    level,
    responsive: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        level: '1',
        responsive: true,
      },
      style: atoms({
        fontSize: { xs: 'headingTwo', sm: 'headingOne' },
      }),
    },
    {
      variants: {
        level: '2',
        responsive: true,
      },
      style: atoms({
        fontSize: { xs: 'headingThree', sm: 'headingTwo' },
      }),
    },
    {
      variants: {
        level: '3',
        responsive: true,
      },
      style: atoms({
        fontSize: 'extraLarge',
      }),
    },
  ],
});

export type HeadingRecipe = RecipeVariants<typeof headingRecipe>;
