/* eslint-disable react/no-children-prop */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/sharp-solid-svg-icons';
import {
  Box,
  BoxProps,
  Button,
  Stack,
  Text,
  Tooltip,
  VisuallyHidden,
} from '@strum/react';
import * as React from 'react';
import { PropItem } from 'react-docgen-typescript';
import CodeBlock, { PreProps } from '../CodeBlock/CodeBlock';
import { propsTableStyle } from './PropsTable.css';

export type PropsTableProps = {
  types: {
    [componentName: string]: Record<string, PropItem>;
  };
};

type ComponentSection = {
  importProps: PreProps;
  name: string;
  props: PropItem[];
};

const dataProps: BoxProps = {
  as: 'td',
  paddingX: '4',
  paddingY: '3',
};

const headers = ['name', 'type', 'default'];

const PropsTable: React.FC<PropsTableProps> = ({ types }) => {
  let componentProps: ComponentSection[] = [];

  Object.entries(types).map(([componentName, componentTypes]) => {
    const props = Object.values(componentTypes).sort((a, b) => {
      if (a.name.startsWith('on') || b.name.startsWith('on')) return 1;
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    componentProps.push({
      importProps: {
        props: {
          className: 'language-tsx',
          children: `import { ${componentName} } from '@strum/react';`,
        },
      },
      name: componentName,
      props,
    });
  });

  return (
    <>
      {componentProps.map((component, componentIndex) => (
        <div key={component.name}>
          <Box marginBottom="4" marginTop={componentIndex > 0 ? '8' : '0'}>
            <Text as="h3" color="neutral11" font="mono" size="extraLarge">
              {`<`}
              {component.name}
              {`>`}
            </Text>
          </Box>

          <Box marginBottom="6">
            {/* @ts-ignore */}
            <CodeBlock children={component.importProps} />
          </Box>

          {component.props.length ? (
            <Box maxWidth="full" overflow={{ xs: 'scroll', lg: 'unset' }}>
              <Box as="table" className={propsTableStyle} width="full">
                <Box as="thead">
                  <Box as="tr" textAlign="left">
                    {headers.map((x, i) => (
                      <Box
                        as="th"
                        backgroundColor="neutral1"
                        key={x}
                        position="sticky"
                        top="0"
                      >
                        <Box
                          backgroundColor="neutral2"
                          borderLeftRadius={i === 0 ? 'large' : undefined}
                          borderRightRadius={
                            i === headers.length - 1 ? 'large' : undefined
                          }
                          paddingX="4"
                          paddingY="2"
                        >
                          <Text
                            color="neutral11"
                            size="small"
                            transform="uppercase"
                            weight="medium"
                          >
                            {x}
                          </Text>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box as="tbody">
                  {component.props.map((x, propIndex) => (
                    <Box
                      as="tr"
                      borderBottomStyle={
                        propIndex === component.props.length - 1
                          ? 'none'
                          : 'solid'
                      }
                      borderColor="neutral6"
                      key={x.name}
                    >
                      <Box {...dataProps}>
                        <Stack
                          alignItems="center"
                          direction="horizontal"
                          wrap={false}
                        >
                          <Text color="accent11" font="mono" size="small">
                            {x.name}
                            {x.required && (
                              <Text as="span" color="error11" size="small">
                                *<VisuallyHidden>Required</VisuallyHidden>
                              </Text>
                            )}
                          </Text>
                          {x.description && (
                            <Text color="neutral11">
                              <Tooltip color="neutral" content={x.description}>
                                <Button color="transparent" size="small">
                                  <FontAwesomeIcon icon={faInfoCircle} />
                                </Button>
                              </Tooltip>
                            </Text>
                          )}
                        </Stack>
                      </Box>

                      <Box {...dataProps}>
                        <Text color="neutral11" font="mono" size="small">
                          {x.type.raw ?? x.type.name}
                        </Text>
                      </Box>

                      <Box {...dataProps}>
                        <Text color="neutral11" size="small">
                          {x.defaultValue?.value.toString() ?? '-'}
                        </Text>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ) : (
            <Box>
              <Text color="neutral11" size="large">
                No props
              </Text>
            </Box>
          )}
        </div>
      ))}
    </>
  );
};

export default PropsTable;
