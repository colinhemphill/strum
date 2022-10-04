import * as RadixToast from '@radix-ui/react-toast';
import * as React from 'react';
import { Box } from '../../layouts';
import { Button } from '../Button';
import { ButtonProps } from '../Button/Button';
import * as styles from './Toast.css';

type PrimitiveProps = RadixToast.ToastProps;

type ToastBaseProps = {
  /** The toast message. */
  description: React.ReactNode;
  /** The time in milliseconds that should elapse before automatically closing the toast. */
  duration?: PrimitiveProps['duration'];
  /** Event handler called when the open state of the toast changes. */
  onOpenChange?: PrimitiveProps['onOpenChange'];
  /** The controlled open state of the toast. Must be used in conjunction with onOpenChange. */
  open?: PrimitiveProps['open'];
  /** An optional title for the toast. */
  title?: React.ReactNode;
  /** For toasts that are the result of a user action, choose foreground. Toasts generated from background tasks should use background. */
  type?: PrimitiveProps['type'];
} & PrimitiveProps &
  styles.ToastRecipe;

type ToastWithoutAction = {
  action?: never;
  actionDescription?: never;
  actionOnClick?: never;
};

type ToastWithAction = {
  /** Text of the action button. */
  action: string;
  /** Describe an alternative way to achieve the action for screen reader users who cannot access the toast easily. */
  actionDescription: string;
  /** Callback when user clicks the action button. */
  actionOnClick?: ButtonProps['onClick'];
};

export type ToastProps = ToastBaseProps &
  (ToastWithoutAction | ToastWithAction);

export const Toast = React.forwardRef<HTMLLIElement, ToastProps>(
  (
    {
      action,
      actionDescription,
      actionOnClick,
      color = 'neutral',
      description,
      duration = 5000,
      onOpenChange,
      open,
      title,
      type = 'foreground',
      ...primitiveProps
    },
    ref,
  ) => {
    return (
      <RadixToast.Root
        className={styles.toastRecipe({
          color,
        })}
        duration={duration}
        onOpenChange={onOpenChange}
        open={open}
        ref={ref}
        type={type}
        {...primitiveProps}
      >
        <Box flexGrow={1}>
          {title && (
            <RadixToast.ToastTitle className={styles.toastTitleStyle}>
              {title}
            </RadixToast.ToastTitle>
          )}

          <RadixToast.ToastDescription className={styles.toastDescriptionStyle}>
            {description}
          </RadixToast.ToastDescription>
        </Box>

        {action && (
          <Box>
            <RadixToast.ToastAction altText={actionDescription} asChild>
              <Button
                color={color === 'neutral' ? 'accent' : color}
                onClick={actionOnClick}
                size="small"
              >
                {action}
              </Button>
            </RadixToast.ToastAction>
          </Box>
        )}
      </RadixToast.Root>
    );
  },
);

Toast.displayName = 'Toast';
