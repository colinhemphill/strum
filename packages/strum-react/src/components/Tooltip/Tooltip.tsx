import * as RadixTooltip from '@radix-ui/react-tooltip';
import * as React from 'react';
import * as styles from './Tooltip.css';

type TooltipProps = {
  align?: RadixTooltip.PopperContentProps['align'];
  alignOffset?: RadixTooltip.PopperContentProps['alignOffset'];
  content: string;
  defaultOpen?: boolean;
  delayDuration?: number;
  disableHoverableContent?: boolean;
  onOpenChange?: RadixTooltip.TooltipProps['onOpenChange'];
  open?: boolean;
  position?: RadixTooltip.PopperContentProps['side'];
  positionOffset?: RadixTooltip.PopperContentProps['sideOffset'];
} & RadixTooltip.PopperContentProps &
  styles.TooltipContentRecipe;

export const Tooltip = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<TooltipProps>
>(
  (
    {
      align,
      alignOffset,
      children,
      color,
      content,
      defaultOpen,
      delayDuration = 700,
      disableHoverableContent,
      onOpenChange,
      open,
      position,
      positionOffset,
      ...primitiveProps
    },
    ref,
  ) => {
    return (
      <RadixTooltip.Root
        defaultOpen={defaultOpen}
        delayDuration={delayDuration}
        disableHoverableContent={disableHoverableContent}
        onOpenChange={onOpenChange}
        open={open}
      >
        <RadixTooltip.Trigger asChild ref={ref}>
          {children}
        </RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <RadixTooltip.Content
            align={align}
            alignOffset={alignOffset}
            className={styles.tooltipContentRecipe({
              color,
            })}
            side={position}
            sideOffset={positionOffset}
            {...primitiveProps}
          >
            {content}
            <RadixTooltip.Arrow
              className={styles.tooltipArrowRecipe({ color })}
            />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    );
  },
);

Tooltip.displayName = 'Tooltip';
