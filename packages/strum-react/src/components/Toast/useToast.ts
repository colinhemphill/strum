import { useContext } from 'react';
import { ToastContext } from '../../layouts/StrumProvider/RadixProvider';

export const useToast = () => {
  const { openToast, toastIsOpen, toastProps } = useContext(ToastContext);

  return { openToast, toastIsOpen, toastProps };
};
