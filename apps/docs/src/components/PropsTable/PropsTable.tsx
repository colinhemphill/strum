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
import { propsTableStyle } from './PropsTable.css';

type Props = {
  types: Record<string, PropItem>;
};

const dataProps: BoxProps = {
  as: 'td',
  paddingX: '4',
  paddingY: '3',
};

const PropsTable: React.FC<Props> = ({ types }) => {
  const headers = ['name', 'type', 'default'];
  const props = Object.values(types).sort((a, b) => {
    if (a.name.startsWith('on') || b.name.startsWith('on')) return 1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  return (
    <>
      {props.length ? (
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
              {props.map((x) => (
                <Box
                  as="tr"
                  borderBottomStyle="solid"
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
          <Text color="neutral11">No props</Text>
        </Box>
      )}
    </>
  );
};

export default PropsTable;
