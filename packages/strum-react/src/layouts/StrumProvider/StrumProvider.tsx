import * as RadixToast from '@radix-ui/react-toast';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import * as React from 'react';
import { strumTheme } from '../../css';
import {
  AccentColor,
  ColorScheme,
  ColorSchemeSetting,
  NeutralColor,
} from '../../tokens';
import { accents as accentTokens } from '../../tokens/accents';
import { neutrals as neutralTokens } from '../../tokens/neutrals';
import {
  getAccent,
  getNeutral,
  getSystemTheme,
  getTheme,
  setStored,
} from './helpers';
import type { StrumProviderProps, UseThemeProps } from './types';

const darkThemeClass = strumTheme({ theme: 'dark' });
const lightThemeClass = strumTheme({ theme: 'light' });

export const themeAttribute = 'data-theme';
export const MEDIA = '(prefers-color-scheme: dark)';
const themeKeyBase = 'theme';
const accentKeyBase = 'accent';
const neutralKeyBase = 'neutral';

export const themes: ColorSchemeSetting[] = ['system', 'dark', 'light'];
export const accents = Object.keys(accentTokens) as AccentColor[];
export const neutrals = Object.keys(neutralTokens) as NeutralColor[];

const ThemeContext = React.createContext<UseThemeProps | undefined>(undefined);
const defaultContext: UseThemeProps = {
  accents,
  neutrals,
  setAccent: () => null,
  setNeutral: () => null,
  setTheme: () => null,
  themeIsReady: false,
  themes,
};

export const useTheme = () => React.useContext(ThemeContext) ?? defaultContext;

export const StrumProvider: React.FC<StrumProviderProps> = (props) => {
  const context = React.useContext(ThemeContext);
  if (context) return <React.Fragment>{props.children}</React.Fragment>;
  return <Theme {...props} />;
};

const Theme: React.FC<StrumProviderProps> = ({
  defaultTheme = 'system',
  defaultAccent = 'blue',
  defaultNeutral = 'mauve',
  children,
  keyPrefix = 'strum',
  nonce,
}) => {
  const themeKey = `${keyPrefix}-${themeKeyBase}`;
  const accentKey = `${keyPrefix}-${accentKeyBase}`;
  const neutralKey = `${keyPrefix}-${neutralKeyBase}`;

  const [theme, setThemeState] = React.useState<ColorSchemeSetting | undefined>(
    () => getTheme(themeKey, defaultTheme),
  );
  const [systemTheme, setSystemTheme] = React.useState<ColorScheme>();
  const [resolvedTheme, setResolvedTheme] = React.useState<
    ColorScheme | undefined
  >();
  const [accent, setAccentState] = React.useState<AccentColor | undefined>(() =>
    getAccent(accentKey, defaultAccent),
  );
  const [neutral, setNeutralState] = React.useState<NeutralColor | undefined>(
    () => getNeutral(neutralKey, defaultNeutral),
  );
  const [themeIsReady, setThemeIsReady] = React.useState(false);

  React.useEffect(() => {
    const resolved = theme === 'system' ? systemTheme : theme;
    setResolvedTheme(resolved);
  }, [systemTheme, theme]);

  const applyTheme = React.useCallback(() => {
    if (!resolvedTheme || !accent || !neutral) return;

    const d = document.documentElement;
    const classes = strumTheme({ accent, neutral, theme: resolvedTheme });
    d.className = classes;

    setThemeIsReady(true);
  }, [accent, neutral, resolvedTheme]);

  const setTheme = React.useCallback(
    (theme: ColorSchemeSetting) => {
      setThemeState(theme);
      setStored(themeKey, theme);
    },
    [themeKey],
  );

  const setAccent = React.useCallback(
    (accent: AccentColor) => {
      setAccentState(accent);
      setStored(accentKey, accent);
    },
    [accentKey],
  );

  const setNeutral = React.useCallback(
    (neutral: NeutralColor) => {
      setNeutralState(neutral);
      setStored(neutralKey, neutral);
    },
    [neutralKey],
  );

  const handleMediaQuery = React.useCallback(
    (e: MediaQueryListEvent | MediaQueryList) => {
      const systemTheme = getSystemTheme(e);
      setSystemTheme(systemTheme);
    },
    [],
  );

  // always listen to System preference
  React.useEffect(() => {
    const media = window.matchMedia(MEDIA);

    media.addEventListener('change', handleMediaQuery);
    handleMediaQuery(media);

    return () => media.removeEventListener('change', handleMediaQuery);
  }, [handleMediaQuery]);

  // localStorage event handling
  React.useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === themeKey) {
        const theme = e.newValue || defaultTheme;
        setTheme(theme as ColorSchemeSetting);
      } else if (e.key === accentKey) {
        const accent = e.newValue || defaultAccent;
        setAccent(accent as AccentColor);
      } else if (e.key === neutralKey) {
        const neutral = e.newValue || defaultAccent;
        setNeutral(neutral as NeutralColor);
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [
    accentKey,
    defaultAccent,
    defaultTheme,
    neutralKey,
    setAccent,
    setNeutral,
    setTheme,
    themeKey,
  ]);

  // whenever theme or accent changes, apply it
  React.useEffect(() => {
    if (resolvedTheme && accent) {
      applyTheme();
    }
  }, [accent, applyTheme, resolvedTheme, theme]);

  return (
    <ThemeContext.Provider
      value={{
        accent,
        accents,
        neutral,
        neutrals,
        setAccent,
        setNeutral,
        setTheme,
        resolvedTheme,
        systemTheme,
        theme,
        themeIsReady,
        themes,
      }}
    >
      <ThemeScript
        {...{
          themeKey,
          defaultTheme,
          nonce,
        }}
      />
      <RadixToast.Provider swipeDirection="right">
        <RadixTooltip.Provider>{children}</RadixTooltip.Provider>
      </RadixToast.Provider>
    </ThemeContext.Provider>
  );
};

const ThemeScript = React.memo(
  ({
    defaultTheme,
    nonce,
    themeKey,
  }: {
    themeKey: string;
  } & StrumProviderProps) => {
    const defaultSystem = defaultTheme === 'system';

    // code-golfing the amount of characters in the script
    const optimization = (() => {
      return `var d=document.documentElement,s='className';`;
    })();

    const updateDOM = (name: ColorScheme) => {
      const classes = name === 'dark' ? darkThemeClass : lightThemeClass;

      let text = '';
      if (name) {
        text += `d[s]='${classes}'`;
      }

      return text;
    };

    const scriptSrc = (() => {
      return `!function() {try {${optimization}e=localStorage.getItem('${themeKey}');if (e === 'system' || (!e&&${defaultSystem})) {var t = '${MEDIA}';var m = window.matchMedia(t);if (m.media!==t || m.matches) {${updateDOM(
        'dark',
      )}} else {${updateDOM(
        'light',
      )}}} else if (e) {if (e === 'dark') {${updateDOM(
        'dark',
      )}} else {${updateDOM('light')}}}${
        !defaultSystem
          ? `else{` + updateDOM(defaultTheme as ColorScheme) + '}'
          : ''
      }} catch (error) {}}()`;
    })();

    return (
      <script nonce={nonce} dangerouslySetInnerHTML={{ __html: scriptSrc }} />
    );
  },
  // never re-render this component
  () => true,
);

ThemeScript.displayName = 'ThemeScript';
