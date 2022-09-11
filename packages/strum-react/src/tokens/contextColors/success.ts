import * as radixColors from '@radix-ui/colors';
import { hsl } from 'polished';
import { baseColors } from '../color';

const custom9 = hsl(151, 0.65, 0.3);

export const success = {
  dark: {
    success1: radixColors.greenDark.green1,
    success2: radixColors.greenDark.green2,
    success3: radixColors.greenDark.green3,
    success4: radixColors.greenDark.green4,
    success5: radixColors.greenDark.green5,
    success6: radixColors.greenDark.green6,
    success7: radixColors.greenDark.green7,
    success8: radixColors.greenDark.green8,
    // success9: radixColors.greenDark.green9,
    success9: custom9,
    success10: radixColors.greenDark.green10,
    success11: radixColors.greenDark.green11,
    success12: radixColors.greenDark.green12,
    successContrast: baseColors.white,
    successTransparent: radixColors.greenDarkA.greenA6,
  },
  light: {
    success1: radixColors.green.green1,
    success2: radixColors.green.green2,
    success3: radixColors.green.green3,
    success4: radixColors.green.green4,
    success5: radixColors.green.green5,
    success6: radixColors.green.green6,
    success7: radixColors.green.green7,
    success8: radixColors.green.green8,
    // success9: radixColors.green.green9,
    success9: custom9,
    success10: radixColors.green.green10,
    success11: radixColors.green.green11,
    success12: radixColors.green.green12,
    successContrast: baseColors.white,
    successTransparent: radixColors.greenDarkA.greenA6,
  },
};
