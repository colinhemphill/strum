import { Select, SelectItem, useTheme } from '@strum/react';
import { AccentColor } from '@strum/react/dist/types/tokens';

const AccentSelect: React.FC = () => {
  const { accent, accents, setAccent, themeIsReady } = useTheme();

  if (!themeIsReady) return null;

  return (
    <Select
      name="Accent color"
      onValueChange={(value: AccentColor) => setAccent(value)}
      placeholder="Select accent color"
      value={accent}
    >
      {accents.map((accentName) => (
        <SelectItem key={accentName} text={accentName} value={accentName} />
      ))}
    </Select>
  );
};

export default AccentSelect;
