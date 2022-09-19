import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import * as RadixLabel from '@radix-ui/react-label';
import * as React from 'react';
import { Stack } from '../Stack';
import { Text } from '../Text';
import * as styles from './Checkbox.css';

type CheckboxProps = {
  /** The checked state of a controlled input */
  checked?: RadixCheckbox.CheckboxProps['checked'];
  /** String to display if an error is present */
  error?: string;
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
      error,
      id,
      label,
      onCheckedChange,
      ...primitiveProps
    },
    ref,
  ) => {
    return (
      <Stack alignItems="center" direction="horizontal">
        <RadixCheckbox.Checkbox
          checked={checked}
          className={styles.checkboxRecipe({
            state: error ? 'error' : undefined,
          })}
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
        {error && (
          <Text color="error11" size="small">
            {error}
          </Text>
        )}
      </Stack>
    );
  },
);

Checkbox.displayName = 'Checkbox';
