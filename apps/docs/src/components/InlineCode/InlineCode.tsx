import { Text } from '@strum/react';
import { PropsWithChildren } from 'react';

const InlineCode: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Text as="span" font="mono" color="accent11">
      {children}
    </Text>
  );
};

export default InlineCode;
