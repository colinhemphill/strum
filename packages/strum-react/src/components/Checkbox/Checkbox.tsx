import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import * as RadixLabel from '@radix-ui/react-label';
import * as React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import * as styles from './Checkbox.css';

type CheckboxProps = {
  /** The checked state of a controlled input */
  checked?: RadixCheckbox.CheckboxProps['checked'];
  /** Ties the label to the input field */
  id: string;
  /** Description of the field */
  label: string;
  /** onChange callback for a controlled input */
  onCheckedChange?: RadixCheckbox.CheckboxProps['onCheckedChange'];
} & Omit<RadixCheckbox.CheckboxProps, 'id' | 'onChange' | 'value'>;

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      checked,
      defaultChecked,
      defaultValue,
      disabled = false,
      id,
      label,
      onCheckedChange,
      ...primitiveProps
    },
    ref,
  ) => {
    return (
      <Box alignItems="center" display="flex" gap="4">
        <RadixCheckbox.Checkbox
          checked={checked}
          className={styles.checkboxStyle}
          defaultChecked={defaultChecked}
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          onCheckedChange={onCheckedChange}
          ref={ref}
          {...primitiveProps}
        >
          <RadixCheckbox.CheckboxIndicator
            className={styles.checkboxIndicatorStyle}
          >
            <CheckIcon />
          </RadixCheckbox.CheckboxIndicator>
        </RadixCheckbox.Checkbox>
        <RadixLabel.Root className={styles.checkboxLabelStyle} htmlFor={id}>
          <Text color={disabled ? 'neutral11' : 'neutral12'}>{label}</Text>
        </RadixLabel.Root>
      </Box>
    );
  },
);

Checkbox.displayName = 'Checkbox';
