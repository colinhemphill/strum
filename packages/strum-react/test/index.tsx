import {
  render as defaultRender,
  renderHook as defaultRenderHook,
  RenderHookOptions,
  RenderOptions,
} from '@testing-library/react';
import * as React from 'react';
import { StrumProvider, StrumProviderProps } from '../src';

type ProvidersProps = {
  children:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNode;
  themeProps?: StrumProviderProps;
};
export const Providers = ({ children, themeProps }: ProvidersProps) => {
  return <StrumProvider {...themeProps}>{children}</StrumProvider>;
};

const render = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => defaultRender(ui, { wrapper: Providers, ...options });

export const renderHook = <TProps = any, TResult = any>(
  hook: (props: TProps) => TResult,
  options?: RenderHookOptions<TProps>,
) => {
  let wrapper;
  if (!options?.wrapper) wrapper = Providers as any;
  return defaultRenderHook(hook, { wrapper, ...options });
};

export * from '@testing-library/react';
export { act as actHook } from '@testing-library/react-hooks';
export { default as userEvent } from '@testing-library/user-event';
export { render };
