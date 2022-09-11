import { Select, SelectItem, useTheme } from '@strum/react';
import { ColorSchemeSetting } from '@strum/react/dist/types/tokens';

const ThemeSelect: React.FC = () => {
  const { setTheme, theme, themes } = useTheme();

  return (
    <Select
      name="Dark or light theme"
      onValueChange={(value: ColorSchemeSetting) => setTheme(value)}
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
