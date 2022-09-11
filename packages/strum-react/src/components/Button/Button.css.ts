import { createVar } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { atoms, vars } from '../../css';
import { disabledStateStyle } from '../../css/utilityClasses.css';

const buttonBoxShadowColor = createVar();

export const buttonRecipe = recipe({
  base: [
    atoms({
      borderColor: 'transparent',
      borderRadius: 'medium',
      borderStyle: 'solid',
      borderWidth: '2',
      cursor: 'pointer',
      display: 'inline-block',
      fontFamily: 'sans',
      fontWeight: 'medium',
      lineHeight: '1.5',
      textAlign: 'center',
      transitionDuration: '150',
      transitionProperty: 'default',
      transitionTimingFunction: 'inOut',
    }),
    {
      outline: 'none',
      textAlign: 'center',
      textDecoration: 'none',
      userSelect: 'none',
      verticalAlign: 'middle',
      ':focus': {
        boxShadow: `0 0 0 0.188rem ${buttonBoxShadowColor}`,
      },
    },
    disabledStateStyle,
  ],
  compoundVariants: [
    {
      variants: {
        color: 'accent',
        fill: 'outline',
      },
      style: {
        backgroundColor: vars.accent.accent1,
        borderColor: vars.accent.accent7,
        color: vars.accent.accent11,
        ':hover': {
          backgroundColor: vars.accent.accent1,
          borderColor: vars.accent.accent8,
          color: vars.accent.accent11,
        },
        ':focus': {
          backgroundColor: vars.accent.accent9,
          borderColor: vars.accent.accent9,
          color: vars.accent.accentContrast,
        },
      },
    },
    {
      variants: {
        color: 'neutral',
        fill: 'outline',
      },
      style: {
        backgroundColor: vars.neutral.neutral1,
        borderColor: vars.neutral.neutral7,
        color: vars.neutral.neutral11,
        ':hover': {
          backgroundColor: vars.neutral.neutral1,
          borderColor: vars.neutral.neutral8,
          color: vars.neutral.neutral11,
        },
        ':focus': {
          backgroundColor: vars.neutral.neutral3,
          borderColor: vars.neutral.neutral3,
          color: vars.neutral.neutral12,
        },
      },
    },
    {
      variants: {
        color: 'error',
        fill: 'outline',
      },
      style: {
        backgroundColor: vars.error.error1,
        borderColor: vars.error.error7,
        color: vars.error.error11,
        ':hover': {
          backgroundColor: vars.error.error1,
          borderColor: vars.error.error8,
          color: vars.error.error11,
        },
        ':focus': {
          backgroundColor: vars.error.error9,
          borderColor: vars.error.error9,
          color: vars.error.errorContrast,
        },
      },
    },
    {
      variants: {
        color: 'warning',
        fill: 'outline',
      },
      style: {
        backgroundColor: vars.warning.warning1,
        borderColor: vars.warning.warning7,
        color: vars.warning.warning11,
        ':hover': {
          backgroundColor: vars.warning.warning1,
          borderColor: vars.warning.warning8,
          color: vars.warning.warning11,
        },
        ':focus': {
          backgroundColor: vars.warning.warning9,
          borderColor: vars.warning.warning9,
          color: vars.warning.warningContrast,
        },
      },
    },
    {
      variants: {
        color: 'success',
        fill: 'outline',
      },
      style: {
        backgroundColor: vars.success.success1,
        borderColor: vars.success.success7,
        color: vars.success.success11,
        ':hover': {
          backgroundColor: vars.success.success1,
          borderColor: vars.success.success8,
          color: vars.success.success11,
        },
        ':focus': {
          backgroundColor: vars.success.success9,
          borderColor: vars.success.success9,
          color: vars.success.successContrast,
        },
      },
    },
    {
      variants: { color: 'transparent', fill: 'outline' },
      style: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'inherit',
        ':hover': {
          backgroundColor: 'transparent',
          borderColor: vars.neutral.neutral4,
          color: 'inherit',
        },
        ':focus': {
          backgroundColor: vars.neutral.neutral3,
          borderColor: vars.neutral.neutral3,
          color: vars.neutral.neutral12,
        },
      },
    },
  ],
  defaultVariants: {
    color: 'accent',
    fill: 'solid',
    size: 'medium',
  },
  variants: {
    color: {
      accent: [
        {
          backgroundColor: vars.accent.accent9,
          color: vars.accent.accentContrast,
          ':focus': {
            backgroundColor: vars.accent.accent10,
          },
          ':hover': {
            backgroundColor: vars.accent.accent10,
          },
        },
        { vars: { [buttonBoxShadowColor]: vars.accent.accentTransparent } },
      ],
      neutral: [
        {
          backgroundColor: vars.neutral.neutral3,
          color: vars.neutral.neutral12,
          ':focus': {
            backgroundColor: vars.neutral.neutral4,
          },
          ':hover': {
            backgroundColor: vars.neutral.neutral4,
          },
        },
        { vars: { [buttonBoxShadowColor]: vars.neutral.neutralTransparent } },
      ],
      success: [
        {
          backgroundColor: vars.success.success9,
          color: vars.success.successContrast,
          ':focus': {
            backgroundColor: vars.success.success10,
          },
          ':hover': {
            backgroundColor: vars.success.success10,
          },
        },
        { vars: { [buttonBoxShadowColor]: vars.success.successTransparent } },
      ],
      error: [
        {
          backgroundColor: vars.error.error9,
          color: vars.error.errorContrast,
          ':focus': {
            backgroundColor: vars.error.error10,
          },
          ':hover': {
            backgroundColor: vars.error.error10,
          },
        },
        { vars: { [buttonBoxShadowColor]: vars.error.errorTransparent } },
      ],
      warning: [
        {
          backgroundColor: vars.warning.warning9,
          color: vars.warning.warningContrast,
          ':focus': {
            backgroundColor: vars.warning.warning10,
          },
          ':hover': {
            backgroundColor: vars.warning.warning10,
          },
        },
        { vars: { [buttonBoxShadowColor]: vars.warning.warningTransparent } },
      ],
      transparent: [
        atoms({
          backgroundColor: {
            base: 'transparent',
            hoverStrict: 'neutral3',
            focus: 'neutral3',
          },
          color: {
            base: 'inherit',
            hoverStrict: 'neutral12',
            focus: 'neutral12',
          },
        }),
        { vars: { [buttonBoxShadowColor]: vars.neutral.neutralTransparent } },
      ],
    },
    fill: {
      outline: {},
      solid: {},
    },
    size: {
      small: [
        atoms({
          fontSize: 'small',
          paddingX: '2',
          paddingY: '1',
        }),
      ],
      medium: [
        atoms({
          fontSize: 'base',
          paddingX: '4',
          paddingY: '2',
        }),
      ],
      large: [
        atoms({
          fontSize: 'large',
          paddingX: '5',
          paddingY: '2',
        }),
      ],
      extraLarge: [
        atoms({
          fontSize: 'extraLarge',
          paddingX: '5',
          paddingY: '3',
        }),
      ],
    },
  },
});

export type ButtonRecipe = RecipeVariants<typeof buttonRecipe>;
