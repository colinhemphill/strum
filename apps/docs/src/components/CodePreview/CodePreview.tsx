import mdx from '@mdx-js/react';
import * as Components from '@strum/react';
import { Box, Text, VisuallyHidden } from '@strum/react';
import { kebabCase } from 'lodash';
import { PrismTheme } from 'prism-react-renderer';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { codeEditorContainerStyle } from './CodePreview.css';

interface CodePreviewProps {
  code: string;
  /** Name the element to add an accessible editor label */
  name?: string;
  theme: PrismTheme;
}

const CodePreview: React.FC<CodePreviewProps> = ({
  code,
  name,
  theme,
  ...rest
}) => {
  return (
    <LiveProvider
      as="div"
      code={code}
      scope={{
        mdx,
        ...Components,
        ...rest,
      }}
      theme={theme}
      transformCode={(code) => `<>${code}</>`}
    >
      <Box
        backgroundColor="neutral1"
        borderColor="neutral6"
        borderStyle="solid"
        borderTopRadius="2xLarge"
        borderWidth="1"
        overflow="hidden"
        whiteSpace="normal"
      >
        <Box backgroundColor="neutral1" borderTopRadius="2xLarge" padding="5">
          <LivePreview style={{ whiteSpace: 'normal' }} />

          <Text color="error11" font="mono">
            <LiveError
              style={{
                fontFamily: 'inherit',
                margin: 0,
                whiteSpace: 'normal',
              }}
            />
          </Text>
        </Box>
      </Box>

      <Box
        backgroundColor="neutral2"
        borderBottomRadius="2xLarge"
        borderColor="neutral6"
        borderStyle="solid"
        borderTopStyle="none"
        borderWidth="1"
        className={codeEditorContainerStyle}
        fontFamily="mono"
        lineHeight="1.375"
        padding="2"
        position="relative"
        whiteSpace="normal"
      >
        <VisuallyHidden as="label" htmlFor={kebabCase(name)}>
          Edit the {name} code
        </VisuallyHidden>
        <LiveEditor
          // this doesn't forward the id to the textarea, so the label doesn't really work
          // https://github.com/FormidableLabs/react-live/pull/323
          id={kebabCase(name)}
          name={name}
          style={{
            fontFamily: 'inherit',
            outline: 'none',
            whiteSpace: 'normal',
          }}
        />
      </Box>
    </LiveProvider>
  );
};

export default CodePreview;
