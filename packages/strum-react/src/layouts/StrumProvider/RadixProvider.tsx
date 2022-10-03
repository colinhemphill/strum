import * as RadixToast from '@radix-ui/react-toast';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import * as React from 'react';
import { PropsWithChildren } from 'react';
import * as styles from './RadixProvider.css';

export const RadixProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <RadixTooltip.Provider>
      <RadixToast.Provider swipeDirection="right">
        {children}
        <RadixToast.Viewport className={styles.toastViewportStyle} />
      </RadixToast.Provider>
    </RadixTooltip.Provider>
  );
};
