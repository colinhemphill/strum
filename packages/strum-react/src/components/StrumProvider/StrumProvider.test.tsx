import {
  act,
  cleanup,
  Providers,
  render,
  renderHook,
  screen,
} from '../../../test';
import {
  accents,
  neutrals,
  StrumProvider,
  themes,
  useTheme,
} from './StrumProvider';

describe('<StrumProvider />', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(<StrumProvider>My themed app</StrumProvider>);
    expect(screen.getByText(/app/i)).toBeInTheDocument();
  });
});

describe('useTheme', () => {
  afterEach(cleanup);

  it('renders', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current).toStrictEqual({
      accent: 'blue',
      accents,
      neutral: 'mauve',
      neutrals,
      resolvedTheme: 'light',
      setAccent: expect.any(Function),
      setNeutral: expect.any(Function),
      setTheme: expect.any(Function),
      systemTheme: 'light',
      theme: 'system',
      themeIsReady: true,
      themes,
    });
  });

  it('sets mode', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('system');

    act(() => {
      result.current.setTheme('dark');
    });

    expect(result.current.theme).toBe('dark');
  });

  it('sets defaults', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <Providers
          themeProps={{
            defaultAccent: 'purple',
            defaultNeutral: 'slate',
            defaultTheme: 'dark',
          }}
        >
          {children}
        </Providers>
      ),
    });

    expect(result.current.accent).toBe('purple');
    expect(result.current.neutral).toBe('slate');
    expect(result.current.theme).toBe('dark');
  });
});
