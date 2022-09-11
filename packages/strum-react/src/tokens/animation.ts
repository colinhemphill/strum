export const transitionDurations = {
  '150': '150ms',
  '300': '300ms',
  '600': '600ms',
  '3000': '3000ms',
};

export const transitionProperties = {
  none: 'none',
  all: 'all',
  default:
    'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
  colors: 'background-color, border-color, color, fill, stroke',
  opacity: 'opacity',
  shadow: 'box-shadow',
  transform: 'transform',
};

export const transitionEasingFunctions = {
  linear: 'linear',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
};
