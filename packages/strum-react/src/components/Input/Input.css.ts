import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { atoms, vars } from '../../css';
import { disabledStateStyle } from '../../css/utilityClasses.css';

export const inputLabel = atoms({
  color: 'neutral11',
  cursor: 'default',
  display: 'inline-block',
  marginBottom: '2',
});

export const inputRecipe = recipe({
  base: [
    atoms({
      backgroundColor: {
        base: 'neutral3',
        hoverStrict: 'neutral4',
        focus: 'neutral5',
      },
      borderColor: {
        base: 'neutral7',
        focus: 'accent9',
        hoverStrict: 'neutral8',
      },
      borderRadius: 'medium',
      borderStyle: 'solid',
      borderWidth: '2',
      color: 'neutral12',
      transitionDuration: '150',
      transitionProperty: 'colors',
      transitionTimingFunction: 'inOut',
      width: 'full',
    }),
    {
      lineHeight: '1',
      outline: 'none',
      '::placeholder': {
        color: vars.neutral.neutral11,
      },
    },
    disabledStateStyle,
  ],
  defaultVariants: {
    size: 'medium',
  },
  variants: {
    state: {
      error: {
        borderColor: vars.error.error9,
        selectors: {
          '&:hover:not(:disabled):not(:focus)': {
            borderColor: vars.error.error9,
          },
        },
      },
    },
    size: {
      small: atoms({
        fontSize: 'small',
        paddingX: '3',
        paddingY: '2',
      }),
      medium: atoms({
        fontSize: 'base',
        paddingX: '4',
        paddingY: '3',
      }),
      large: atoms({
        fontSize: 'extraLarge',
        paddingX: '4',
        paddingY: '3',
      }),
    },
  },
});

export type InputRecipe = RecipeVariants<typeof inputRecipe>;
