import { error } from './error';
import { success } from './success';
import { warning } from './warning';

export const contextColors = {
  error,
  success,
  warning,
};

export type ContextColor = keyof typeof contextColors;
