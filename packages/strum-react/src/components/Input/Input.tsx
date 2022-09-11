import { AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import * as Label from '@radix-ui/react-label';
import * as React from 'react';
import { Box } from '../Box';
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
} & NativeInputProps &
  styles.InputRecipe;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, id, label, size = 'medium', type = 'text', ...props }, ref) => {
    const errorId = error ? `${id}-error` : undefined;

    return (
      <Box>
        <Label.Root className={styles.inputLabel} htmlFor={id}>
          {label}
        </Label.Root>

        <Box alignItems="center" display="flex" position="relative">
          <input
            aria-invalid={!!error}
            aria-errormessage={errorId}
            className={styles.inputRecipe({
              state: error ? 'error' : undefined,
              size,
            })}
            id={id}
            ref={ref}
            type={type}
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
