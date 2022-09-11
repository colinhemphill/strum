import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { atoms, vars } from '../../css';

export const avatarContainerRecipe = recipe({
  base: {
    alignItems: 'center',
    backgroundColor: vars.neutral.neutral3,
    borderColor: vars.neutral.neutral6,
    borderStyle: 'solid',
    borderWidth: vars.borderWidths[1],
    display: 'inline-flex',
    justifyContent: 'center',
    overflow: 'hidden',
    userSelect: 'none',
    verticalAlign: 'middle',
  },
  defaultVariants: {
    shape: 'circle',
  },
  variants: {
    shape: {
      circle: atoms({
        borderRadius: 'full',
      }),
      rounded: atoms({
        borderRadius: 'large',
      }),
      square: atoms({ borderRadius: 'none' }),
    },
  },
});

export const avatarStyle = style({
  borderRadius: 'inherit',
  height: '100%',
  objectFit: 'cover',
  width: '100%',
});

export const avatarFallbackStyle = style({
  alignItems: 'center',
  backgroundColor: vars.accent.accent9,
  color: vars.colors.white,
  display: 'flex',
  fontSize: '1em',
  fontWeight: vars.fontWeights.medium,
  height: '100%',
  justifyContent: 'center',
  lineHeight: 1,
  width: '100%',
});

export type AvatarContainerRecipe = RecipeVariants<
  typeof avatarContainerRecipe
>;
