import clsx from 'clsx';
import { AccentColor, ColorScheme, NeutralColor } from '../tokens';
import { accentThemes, neutralThemes } from './vars.css';

// Generate theme classes
export const strumTheme = (
  neutral: NeutralColor = 'mauve',
  accent: AccentColor = 'blue',
  theme: ColorScheme = 'light',
) => {
  return clsx(neutralThemes[neutral][theme], accentThemes[accent][theme]);
};
