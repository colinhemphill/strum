import clsx from 'clsx';
import { AccentColor, ColorScheme, NeutralColor } from '../tokens';
import { accentThemes, neutralThemes } from './vars.css';

type StrumThemeProps = {
  accent?: AccentColor;
  neutral?: NeutralColor;
  theme?: ColorScheme;
};

// Generate theme classes
export const strumTheme = ({
  accent = 'blue',
  neutral = 'mauve',
  theme = 'light',
}: StrumThemeProps) => {
  return clsx(neutralThemes[neutral][theme], accentThemes[accent][theme]);
};
