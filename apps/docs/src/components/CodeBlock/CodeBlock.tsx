import { Box, useTheme, vars } from '@strum/react';
import Highlight, {
  defaultProps,
  Language,
  PrismTheme,
} from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import vsLight from 'prism-react-renderer/themes/vsLight';
import { PropsWithChildren } from 'react';
import { useIsMounted } from '../../hooks/useIsMounted';
import CodePreview from '../CodePreview/CodePreview';

type CodeBlockProps = {
  live?: boolean;
  /** Name the element to add an accessible editor label */
  name?: string;
};

type PreProps = {
  props: { children: string; className: string };
};

const CodeBlock: React.FC<PropsWithChildren<CodeBlockProps>> = ({
  children,
  live,
  name,
  ...rest
}) => {
  const {
    props: { children: code, className },
  } = children as PreProps;
  const isMounted = useIsMounted();
  const { resolvedTheme } = useTheme();
  const prismTheme = resolvedTheme === 'dark' ? vsDark : vsLight;
  const modifiedTheme: PrismTheme | undefined = isMounted
    ? {
        ...prismTheme,
        plain: {
          ...prismTheme.plain,
          color: vars.neutral.neutral12,
          backgroundColor: vars.neutral.neutral2,
        },
      }
    : undefined;
  const language = className?.replace(/language-/, '') as Language;
  const preparedCode = code?.trim();

  if (live) {
    // live code editor block
    return (
      <CodePreview
        code={preparedCode}
        name={name}
        theme={modifiedTheme as PrismTheme}
        {...rest}
      />
    );
  }

  // static code block
  return (
    <Highlight
      {...defaultProps}
      code={code?.trim()}
      language={language}
      theme={modifiedTheme}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <Box
          as="pre"
          backgroundColor="neutral2"
          borderColor="neutral6"
          borderRadius="2xLarge"
          borderStyle="solid"
          borderWidth="1"
          padding="5"
          position="relative"
        >
          {tokens.map((line, i) => (
            <Box
              key={i}
              paddingRight="8"
              whiteSpace="pre-wrap"
              {...getLineProps({ line, key: i })}
            >
              {line.map((token, key) => (
                <Box
                  as="span"
                  fontFamily="mono"
                  fontSize="base"
                  key={key}
                  lineHeight="1.5"
                  {...getTokenProps({ token, key })}
                />
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Highlight>
  );
};

export default CodeBlock;
