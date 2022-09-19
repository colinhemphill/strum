import { Select, SelectItem, useTheme } from '@strum/react';
import { ColorSchemeSetting } from '@strum/react/dist/types/tokens';

const ThemeSelect: React.FC = () => {
  const { setTheme, theme, themes, themeIsReady } = useTheme();

  if (!themeIsReady) return null;

  return (
    <Select
      name="Dark or light theme"
      onChange={(value: ColorSchemeSetting) => setTheme(value)}
      placeholder="Select a theme"
      value={theme}
    >
      {themes.map((themeName) => (
        <SelectItem key={themeName} text={themeName} value={themeName} />
      ))}
    </Select>
  );
};

export default ThemeSelect;
