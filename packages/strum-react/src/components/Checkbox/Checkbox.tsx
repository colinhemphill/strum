import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import * as RadixLabel from '@radix-ui/react-label';
import * as React from 'react';
import { Box } from '../Box';
import * as styles from './Checkbox.css';

type CheckboxProps = {
  /** Ties the label to the input field */
  id: string;
  /** Description of the field */
  label: string;
  /** onChange callback for a controlled input */
  onChange?: RadixCheckbox.CheckboxProps['onCheckedChange'];
  /** The value of a controlled input */
  value?: RadixCheckbox.CheckboxProps['checked'];
} & Omit<RadixCheckbox.CheckboxProps, 'id' | 'onChange' | 'value'>;

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      defaultChecked,
      defaultValue,
      disabled = false,
      id,
      label,
      onChange,
      value,
      ...primitiveProps
    },
    ref,
  ) => {
    return (
      <Box alignItems="center" display="flex" gap="4">
        <RadixCheckbox.Checkbox
          checked={value}
          className={styles.checkboxStyle}
          defaultChecked={defaultChecked}
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          onCheckedChange={onChange}
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
          {label}
        </RadixLabel.Root>
      </Box>
    );
  },
);

Checkbox.displayName = 'Checkbox';
