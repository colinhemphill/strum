import * as RadixLabel from '@radix-ui/react-label';
import * as RadixRadio from '@radix-ui/react-radio-group';
import * as React from 'react';
import { Stack } from '../Stack';
import * as styles from './Radio.css';

type RadioGroupProps = {
  /** Description of the field */
  label: string;
  /** onChange callback for a controlled input */
  onChange?: RadixRadio.RadioGroupProps['onValueChange'];
  /** The value of a controlled input group */
  value?: RadixRadio.RadioGroupProps['value'];
} & RadixRadio.RadioGroupProps;

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ children, label, ...primitiveProps }, ref) => {
    return (
      <RadixRadio.Root aria-label={label} ref={ref} {...primitiveProps}>
        <Stack alignItems="flex-start" direction="vertical">
          {children}
        </Stack>
      </RadixRadio.Root>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';

type RadioItemProps = {
  /** Ties the label to the input field */
  id: string;
  /** Text of the option */
  label: string;
} & RadixRadio.RadioGroupItemProps;

export const RadioItem = React.forwardRef<HTMLButtonElement, RadioItemProps>(
  ({ id, label, value, ...primitiveProps }, ref) => {
    return (
      <Stack alignItems="center" direction="horizontal">
        <RadixRadio.Item
          className={styles.radioStyle}
          id={id}
          ref={ref}
          value={value}
          {...primitiveProps}
        >
          <RadixRadio.Indicator className={styles.indicatorStyle} />
        </RadixRadio.Item>
        <RadixLabel.Label className={styles.radioLabelStyle} htmlFor={id}>
          {label}
        </RadixLabel.Label>
      </Stack>
    );
  },
);

RadioItem.displayName = 'RadioItem';
