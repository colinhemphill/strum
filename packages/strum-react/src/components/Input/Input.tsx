import { AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import * as RadixLabel from '@radix-ui/react-label';
import * as React from 'react';
import { Box } from '../../layouts';
import { Text } from '../Text';
import * as styles from './Input.css';

type NativeInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'id'
>;

type InputProps = {
  /** String to display if an error is present */
  error?: string;
  /** Ties the label to the input field */
  id: string;
  /** Description of the field */
  label: string;
  /** onChange callback for a controlled input */
  onChange?: React.InputHTMLAttributes<HTMLInputElement>['onChange'];
  /** The value of a controlled input */
  value?: React.InputHTMLAttributes<HTMLInputElement>['value'];
} & NativeInputProps &
  styles.InputRecipe;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      error,
      id,
      label,
      onChange,
      size = 'medium',
      type = 'text',
      value,
      ...props
    },
    ref,
  ) => {
    const errorId = error ? `${id}-error` : undefined;

    return (
      <Box>
        <RadixLabel.Root className={styles.inputLabel} htmlFor={id}>
          {label}
        </RadixLabel.Root>

        <Box alignItems="center" display="flex" position="relative">
          <input
            aria-invalid={!!error}
            aria-errormessage={errorId}
            className={styles.inputRecipe({
              state: error ? 'error' : undefined,
              size,
            })}
            id={id}
            onChange={onChange}
            ref={ref}
            type={type}
            value={value}
            {...props}
          />

          {/* Feedback icon */}
          {error && (
            <Box
              color="error11"
              display="flex"
              position="absolute"
              right="4"
              pointerEvents="none"
            >
              <AccessibleIcon label="Red exclamation point">
                <ExclamationTriangleIcon />
              </AccessibleIcon>
            </Box>
          )}
        </Box>

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

Input.displayName = 'Input';
