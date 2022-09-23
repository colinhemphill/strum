import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import * as RadixSelect from '@radix-ui/react-select';
import * as React from 'react';
import { Box } from '../../layouts';
import { Text } from '../Text';
import * as styles from './Select.css';

type SelectProps = {
  /** Set the disabled state of the select */
  disabled?: boolean;
  /** String to display if an error is present */
  error?: string;
  /** An accessible name to describe the trigger button for the select */
  name?: string;
  /** onChange callback for a controlled input */
  onChange?: RadixSelect.SelectProps['onValueChange'];
  /** Visual placeholder text for an incomplete select */
  placeholder?: string;
  /** The value of a controlled input */
  value?: RadixSelect.SelectProps['value'];
} & RadixSelect.SelectProps;

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      children,
      disabled = false,
      error,
      name,
      onChange,
      placeholder,
      ...primitiveProps
    },
    ref,
  ) => {
    const errorId = error ? `${name}-error` : undefined;

    return (
      <Box>
        <RadixSelect.Root onValueChange={onChange} {...primitiveProps}>
          <RadixSelect.Trigger
            aria-invalid={!!error}
            aria-label={name}
            disabled={disabled}
            className={styles.triggerStyle({
              state: error ? 'error' : undefined,
            })}
            name={name}
            ref={ref}
            aria-errormessage={errorId}
          >
            <RadixSelect.Value
              aria-label={primitiveProps.value}
              placeholder={placeholder}
            >
              {primitiveProps.value}
            </RadixSelect.Value>
            <RadixSelect.Icon className={styles.iconStyle}>
              <ChevronDownIcon height="1em" width="100%" />
            </RadixSelect.Icon>
          </RadixSelect.Trigger>

          <RadixSelect.Portal>
            <RadixSelect.Content className={styles.contentStyle}>
              <RadixSelect.ScrollUpButton
                className={styles.scrollUpButtonStyle}
              >
                <ChevronUpIcon height="1em" width="100%" />
              </RadixSelect.ScrollUpButton>

              <RadixSelect.Viewport className={styles.viewportStyle}>
                {children}
              </RadixSelect.Viewport>

              <RadixSelect.ScrollDownButton
                className={styles.scrollDownButtonStyle}
              >
                <ChevronDownIcon height="1em" width="100%" />
              </RadixSelect.ScrollDownButton>
            </RadixSelect.Content>
          </RadixSelect.Portal>
        </RadixSelect.Root>

        {/* Feedback text */}
        {error && (
          <Box id={errorId} marginTop="2">
            <Text color="error11" size="small">
              {error}
            </Text>
          </Box>
        )}
      </Box>
    );
  },
);

Select.displayName = 'Select';

type SelectItemProps = {
  disabled?: boolean;
  text: string;
  value: string;
};

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ disabled, text, value }, ref) => {
    return (
      <RadixSelect.Item
        className={styles.itemStyle}
        value={value}
        disabled={disabled}
        ref={ref}
      >
        <RadixSelect.ItemText>{text}</RadixSelect.ItemText>
        <RadixSelect.ItemIndicator className={styles.itemIndicatorStyle}>
          <CheckIcon height="1em" width="100%" />
        </RadixSelect.ItemIndicator>
      </RadixSelect.Item>
    );
  },
);

SelectItem.displayName = 'SelectItem';

export const SelectGroup = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren
>(({ children }, ref) => {
  return <RadixSelect.Group ref={ref}>{children}</RadixSelect.Group>;
});

SelectGroup.displayName = 'SelectGroup';

type SelectLabelProps = {
  text: string;
};

export const SelectLabel = React.forwardRef<HTMLDivElement, SelectLabelProps>(
  ({ text }, ref) => {
    return (
      <RadixSelect.Group className={styles.labelStyle} ref={ref}>
        {text}
      </RadixSelect.Group>
    );
  },
);

SelectLabel.displayName = 'SelectLabel';

export const SelectSeparator = React.forwardRef<HTMLDivElement>((_, ref) => {
  return <RadixSelect.Separator className={styles.separatorStyle} ref={ref} />;
});

SelectSeparator.displayName = 'SelectSeparator';
