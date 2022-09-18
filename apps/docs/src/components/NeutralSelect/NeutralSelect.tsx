import { Select, SelectItem, useTheme } from '@strum/react';
import { NeutralColor } from '@strum/react/dist/types/tokens';

const NeutralSelect: React.FC = () => {
  const { neutral, neutrals, setNeutral, themeIsReady } = useTheme();

  if (!themeIsReady) return null;

  return (
    <Select
      name="Neutral color"
      onChange={(value: NeutralColor) => setNeutral(value)}
      placeholder="Select neutral color"
      value={neutral}
    >
      {neutrals.map((neutralName) => (
        <SelectItem key={neutralName} text={neutralName} value={neutralName} />
      ))}
    </Select>
  );
};

export default NeutralSelect;
