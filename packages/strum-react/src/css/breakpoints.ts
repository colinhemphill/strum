export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1280,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const breakpointNames = Object.keys(breakpoints) as Breakpoint[];
