import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as React from 'react';
import * as styles from './Select.css';

type SelectProps = {
  /** Set the disabled state of the select */
  disabled?: boolean;
  /** An accessible name to describe the trigger button for the select */
  name?: string;
  /** Visual placeholder text for an incomplete select */
  placeholder?: string;
  /** The value of a controlled input */
  value?: SelectPrimitive.SelectProps['value'];
  /** onChange callback for a controlled input */
  onValueChange?: SelectPrimitive.SelectProps['onValueChange'];
} & SelectPrimitive.SelectProps;

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    { children, disabled = false, name, placeholder, ...primitiveProps },
    ref,
  ) => (
    <SelectPrimitive.Root {...primitiveProps}>
      <SelectPrimitive.Trigger
        aria-label={name}
        disabled={disabled}
        className={styles.triggerStyle}
        name={name}
        ref={ref}
      >
        <SelectPrimitive.Value
          aria-label={primitiveProps.value}
          placeholder={placeholder}
        >
          {primitiveProps.value}
        </SelectPrimitive.Value>
        <SelectPrimitive.Icon className={styles.iconStyle}>
          <ChevronDownIcon height="1em" width="100%" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className={styles.contentStyle}>
          <SelectPrimitive.ScrollUpButton
            className={styles.scrollUpButtonStyle}
          >
            <ChevronUpIcon height="1em" width="100%" />
          </SelectPrimitive.ScrollUpButton>

          <SelectPrimitive.Viewport className={styles.viewportStyle}>
            {children}
          </SelectPrimitive.Viewport>

          <SelectPrimitive.ScrollDownButton
            className={styles.scrollDownButtonStyle}
          >
            <ChevronDownIcon height="1em" width="100%" />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  ),
);

Select.displayName = 'Select';

type SelectItemProps = {
  disabled?: boolean;
  text: string;
  value: string;
};

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ disabled, text, value }, ref) => (
    <SelectPrimitive.Item
      className={styles.itemStyle}
      value={value}
      disabled={disabled}
      ref={ref}
    >
      <SelectPrimitive.ItemText>{text}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className={styles.itemIndicatorStyle}>
        <CheckIcon height="1em" width="100%" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  ),
);

SelectItem.displayName = 'SelectItem';

export const SelectGroup = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren
>(({ children }, ref) => (
  <SelectPrimitive.Group ref={ref}>{children}</SelectPrimitive.Group>
));

SelectGroup.displayName = 'SelectGroup';

type SelectLabelProps = {
  text: string;
};

export const SelectLabel = React.forwardRef<HTMLDivElement, SelectLabelProps>(
  ({ text }, ref) => (
    <SelectPrimitive.Group className={styles.labelStyle} ref={ref}>
      {text}
    </SelectPrimitive.Group>
  ),
);

SelectLabel.displayName = 'SelectLabel';

export const SelectSeparator = React.forwardRef<HTMLDivElement>((_, ref) => (
  <SelectPrimitive.Separator className={styles.separatorStyle} ref={ref} />
));

SelectSeparator.displayName = 'SelectSeparator';
