import * as RadixToast from '@radix-ui/react-toast';
import * as React from 'react';

type PrimitiveProps = RadixToast.ToastProps;

type ToastProps = {
  /** The time in milliseconds that should elapse before automatically closing the toast. */
  duration?: PrimitiveProps['duration'];
  /** Event handler called when the open state of the dialog changes. */
  onOpenChange?: PrimitiveProps['onOpenChange'];
  /** The controlled open state of the dialog. Must be used in conjunction with onOpenChange. */
  open?: PrimitiveProps['open'];
  title?: string;
  /** For toasts that are the result of a user action, choose foreground. Toasts generated from background tasks should use background. */
  type?: PrimitiveProps['type'];
} & PrimitiveProps;

export const Toast = React.forwardRef<
  HTMLLIElement,
  React.PropsWithChildren<ToastProps>
>(({ title, ...primitiveProps }, ref) => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <>
      <RadixToast.Root open={open} onOpenChange={setOpen} ref={ref}>
        {title && <RadixToast.ToastTitle>{title}</RadixToast.ToastTitle>}
        <RadixToast.ToastDescription asChild>
          {/* <time dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time> */}
        </RadixToast.ToastDescription>
        <RadixToast.ToastAction asChild altText="Goto schedule to undo">
          {/* <Button variant="green" size="small">
            Undo
          </Button> */}
        </RadixToast.ToastAction>
      </RadixToast.Root>
      <RadixToast.ToastViewport />
    </>
  );
});

Toast.displayName = 'Toast';
