import clsx, { ClassValue } from 'clsx';
import * as React from 'react';
import { Atoms, atoms } from '../../css';

type HTMLProperties = Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'as' | 'className' | 'color' | 'height' | 'width'
>;

type BaseBoxProps = Atoms &
  HTMLProperties & {
    as?: React.ElementType;
    className?: ClassValue;
  };

export const Box = React.forwardRef<HTMLElement, BaseBoxProps>(
  ({ as = 'div', className, ...props }, ref) => {
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    for (const key in props) {
      if (atoms.properties.has(key as keyof Omit<Atoms, 'reset'>)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const atomicClasses = atoms({
      ...atomProps,
    });

    return React.createElement(as, {
      className: clsx(atomicClasses, className),
      ...nativeProps,
      ref,
    });
  },
);

export type BoxProps = Parameters<typeof Box>[0];

Box.displayName = 'Box';
