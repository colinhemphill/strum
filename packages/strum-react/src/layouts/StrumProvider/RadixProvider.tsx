import * as RadixToast from '@radix-ui/react-toast';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { Toast } from '../../components';
import { ToastProps } from '../../components/Toast/Toast';
import * as styles from './RadixProvider.css';

const TOAST_DURATION = 5000;

type ToastContextState = {
  openToast: (toastProps: ToastProps) => void;
  toastIsOpen: boolean;
  toastProps?: ToastProps;
  setToastIsOpen: (toastIsOpen: boolean) => void;
  setToastProps: (toastProps: ToastProps) => void;
};

export const ToastContext = React.createContext<ToastContextState>({
  openToast: () => null,
  toastIsOpen: false,
  setToastIsOpen: () => null,
  setToastProps: () => null,
});

export const RadixProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [toastIsOpen, setToastIsOpen] = React.useState(false);
  const [toastProps, setToastProps] = React.useState<ToastProps>({
    description: '',
    duration: TOAST_DURATION,
  });
  const timerRef = React.useRef(0);

  const openToast = (props: ToastProps) => {
    if (toastIsOpen) {
      // close the current toast
      setToastIsOpen(false);

      window.clearTimeout(timerRef.current);

      timerRef.current = window.setTimeout(() => {
        setToastProps(props);
        setToastIsOpen(true);
      }, 150);
    } else {
      setToastProps(props);
      setToastIsOpen(true);
    }
  };

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <RadixTooltip.Provider>
      <RadixToast.Provider swipeDirection="right">
        <ToastContext.Provider
          value={{
            openToast,
            toastIsOpen,
            toastProps,
            setToastIsOpen,
            setToastProps,
          }}
        >
          {children}

          <Toast
            open={toastIsOpen}
            onOpenChange={setToastIsOpen}
            {...toastProps}
          />
          <RadixToast.Viewport className={styles.toastViewportStyle} />
        </ToastContext.Provider>
      </RadixToast.Provider>
    </RadixTooltip.Provider>
  );
};
