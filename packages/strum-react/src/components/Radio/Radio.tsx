import * as RadixLabel from '@radix-ui/react-label';
import * as RadixRadio from '@radix-ui/react-radio-group';
import * as React from 'react';
import { Box, Stack } from '../../layouts';
import { Text } from '../Text';
import * as styles from './Radio.css';

type RadioGroupProps = {
  /** String to display if an error is present */
  error?: string;
  /** Description of the field */
  label?: string;
  /** onChange callback for a controlled input */
  onChange?: RadixRadio.RadioGroupProps['onValueChange'];
  /** The value of a controlled input group */
  value?: RadixRadio.RadioGroupProps['value'];
} & RadixRadio.RadioGroupProps;

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ children, error, label, onChange, value, ...primitiveProps }, ref) => {
    const errorId = error ? `${label}-error` : undefined;

    return (
      <>
        <RadixRadio.Root
          className={error ? styles.radioGroupWithErrorStyle : undefined}
          onValueChange={onChange}
          ref={ref}
          value={value}
          {...primitiveProps}
        >
          {label && (
            <Box marginBottom="4">
              <Text color="neutral12" size="base">
                {label}
              </Text>
            </Box>
          )}
          <Stack alignItems="flex-start" direction="vertical">
            {children}

            {/* Feedback text */}
            {error && (
              <Box id={errorId}>
                <Text color="error11" size="small">
                  {error}
                </Text>
              </Box>
            )}
          </Stack>
        </RadixRadio.Root>
      </>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';

type RadioItemProps = {
  /** Ties the label to the input field. The `value` field is used if not present. */
  id?: string;
  /** Text of the option */
  label: string;
} & RadixRadio.RadioGroupItemProps;

export const RadioItem = React.forwardRef<HTMLButtonElement, RadioItemProps>(
  ({ disabled, id, label, value, ...primitiveProps }, ref) => {
    const labelId = id || value;

    return (
      <Stack alignItems="center" direction="horizontal">
        <RadixRadio.Item
          className={styles.radioStyle}
          disabled={disabled}
          id={labelId}
          ref={ref}
          value={value}
          {...primitiveProps}
        >
          <RadixRadio.Indicator className={styles.indicatorStyle} />
        </RadixRadio.Item>
        <RadixLabel.Label className={styles.radioLabelStyle} htmlFor={labelId}>
          <Text color={disabled ? 'neutral11' : 'neutral12'}>{label}</Text>
        </RadixLabel.Label>
      </Stack>
    );
  },
);

RadioItem.displayName = 'RadioItem';
