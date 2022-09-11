import * as radixColors from '@radix-ui/colors';
import { hsl } from 'polished';
import { baseColors } from '../color';

const custom9 = hsl(358, 0.65, 0.48);

export const error = {
  dark: {
    error1: radixColors.redDark.red1,
    error2: radixColors.redDark.red2,
    error3: radixColors.redDark.red3,
    error4: radixColors.redDark.red4,
    error5: radixColors.redDark.red5,
    error6: radixColors.redDark.red6,
    error7: radixColors.redDark.red7,
    error8: radixColors.redDark.red8,
    // error9: radixColors.redDark.red9,
    error9: custom9,
    error10: radixColors.redDark.red10,
    error11: radixColors.redDark.red11,
    error12: radixColors.redDark.red12,
    errorContrast: baseColors.white,
    errorTransparent: radixColors.redDarkA.redA6,
  },
  light: {
    error1: radixColors.red.red1,
    error2: radixColors.red.red2,
    error3: radixColors.red.red3,
    error4: radixColors.red.red4,
    error5: radixColors.red.red5,
    error6: radixColors.red.red6,
    error7: radixColors.red.red7,
    error8: radixColors.red.red8,
    // error9: radixColors.red.red9,
    error9: custom9,
    error10: radixColors.red.red10,
    error11: radixColors.red.red11,
    error12: radixColors.red.red12,
    errorContrast: baseColors.white,
    errorTransparent: radixColors.redDarkA.redA6,
  },
};
