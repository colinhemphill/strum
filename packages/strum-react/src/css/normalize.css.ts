import { globalStyle } from '@vanilla-extract/css';

// Modern Normalize
// converted with https://github.com/activeguild/css-to-vanilla-extract

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle(':-moz-focusring', {
  outline: '1px dotted ButtonText',
});

globalStyle(':-moz-ui-invalid', {
  boxShadow: 'none',
});

globalStyle('::-moz-focus-inner', {
  borderStyle: 'none',
  padding: '0',
});

globalStyle('::-webkit-file-upload-button', {
  WebkitAppearance: 'button',
  font: 'inherit',
});

globalStyle('::-webkit-inner-spin-button', {
  height: 'auto',
});

globalStyle('::-webkit-outer-spin-button', {
  height: 'auto',
});

globalStyle('::-webkit-search-decoration', {
  WebkitAppearance: 'none',
});

globalStyle('::after', {
  boxSizing: 'border-box',
});

globalStyle('::before', {
  boxSizing: 'border-box',
});

globalStyle("[type='button']", {
  WebkitAppearance: 'button',
});

globalStyle("[type='reset']", {
  WebkitAppearance: 'button',
});

globalStyle("[type='search']", {
  WebkitAppearance: 'textfield',
  outlineOffset: '-2px',
});

globalStyle("[type='submit']", {
  WebkitAppearance: 'button',
});

globalStyle('abbr[title]', {
  textDecoration: 'underline dotted',
});

globalStyle('b', {
  fontWeight: 'bolder',
});

globalStyle('body', {
  margin: '0',
  fontFamily:
    'system-ui , -apple-system , Segoe UI , Roboto , Helvetica , Arial , sans-serif , Apple Color Emoji , Segoe UI Emoji',
});

globalStyle('button', {
  fontFamily: 'inherit',
  fontSize: '100%',
  lineHeight: '1.15',
  margin: '0',
  textTransform: 'none',
  WebkitAppearance: 'button',
});

globalStyle('code', {
  fontFamily:
    'ui-monospace , SFMono-Regular , Consolas , Liberation Mono , Menlo , monospace',
  fontSize: '1em',
});

globalStyle('hr', {
  height: '0',
  color: 'inherit',
});

globalStyle('html', {
  lineHeight: '1.15',
  WebkitTextSizeAdjust: '100%',
  MozTabSize: '4',
  tabSize: '4',
});

globalStyle('input', {
  fontFamily: 'inherit',
  fontSize: '100%',
  lineHeight: '1.15',
  margin: '0',
});

globalStyle('kbd', {
  fontFamily:
    'ui-monospace , SFMono-Regular , Consolas , Liberation Mono , Menlo , monospace',
  fontSize: '1em',
});

globalStyle('legend', {
  padding: '0',
});

globalStyle('optgroup', {
  fontFamily: 'inherit',
  fontSize: '100%',
  lineHeight: '1.15',
  margin: '0',
});

globalStyle('pre', {
  fontFamily:
    'ui-monospace , SFMono-Regular , Consolas , Liberation Mono , Menlo , monospace',
  fontSize: '1em',
});

globalStyle('progress', {
  verticalAlign: 'baseline',
});

globalStyle('samp', {
  fontFamily:
    'ui-monospace , SFMono-Regular , Consolas , Liberation Mono , Menlo , monospace',
  fontSize: '1em',
});

globalStyle('select', {
  fontFamily: 'inherit',
  fontSize: '100%',
  lineHeight: '1.15',
  margin: '0',
  textTransform: 'none',
});

globalStyle('small', {
  fontSize: '80%',
});

globalStyle('strong', {
  fontWeight: 'bolder',
});

globalStyle('sub', {
  fontSize: '75%',
  lineHeight: '0',
  position: 'relative',
  verticalAlign: 'baseline',
  bottom: '-0.25em',
});

globalStyle('summary', {
  display: 'list-item',
});

globalStyle('sup', {
  fontSize: '75%',
  lineHeight: '0',
  position: 'relative',
  verticalAlign: 'baseline',
  top: '-0.5em',
});

globalStyle('table', {
  textIndent: '0',
  borderColor: 'inherit',
});

globalStyle('textarea', {
  fontFamily: 'inherit',
  fontSize: '100%',
  lineHeight: '1.15',
  margin: '0',
});

// My own margin reset for headings

globalStyle('h1, h2, h3, h4, h5, h6', {
  marginBlockStart: 0,
  marginBlockEnd: 0,
});
