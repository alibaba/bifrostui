import { useEffect } from 'react';
import { isMini, triggerEventTransform } from '@bifrostui/utils';
import { PopoverProps } from '../Popover.types';

type TriggerType = PopoverProps['trigger'];

export interface UsePopoverEventsProps {
  isOpen: boolean;
  controlByUser: boolean;
  trigger: TriggerType;
  onShow: (event: React.SyntheticEvent | Event) => void;
  onHide: (event: React.SyntheticEvent | Event) => void;
  onTriggerClick: (event: React.SyntheticEvent | Event) => void;
  onMounted: () => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleFocusTrap: (event: KeyboardEvent) => void;
  trapFocus: boolean;
  tipRef: React.RefObject<HTMLDivElement>;
}

export interface UsePopoverEventsReturn {
  triggerEventOption?: Record<string, unknown>;
}

export const usePopoverEvents = ({
  isOpen,
  controlByUser,
  trigger,
  onShow,
  onHide,
  onTriggerClick,
  onMounted,
  handleKeyDown,
  handleFocusTrap,
  trapFocus,
  tipRef,
}: UsePopoverEventsProps): UsePopoverEventsReturn => {
  const clickEventHandler = (event: Event) => {
    if (
      trigger === 'hover' ||
      trigger === 'none' ||
      (trigger?.length === 1 && trigger?.[0] === 'hover')
    )
      return;

    onHide(event);
  };

  useEffect(() => {
    const bindEvent = () => {
      if (!tipRef.current) return;

      if (
        !controlByUser &&
        trigger !== 'none' &&
        trigger !== 'hover' &&
        !(trigger?.length === 1 && trigger?.[0] === 'hover')
      ) {
        document.addEventListener('click', clickEventHandler);
      }
      if (!isMini) {
        window.addEventListener('resize', onMounted);
      }
      if (isOpen) {
        document.addEventListener('keydown', handleKeyDown);
        if (trapFocus) {
          document.addEventListener('keydown', handleFocusTrap);
        }
      }
    };

    const unbindEvent = () => {
      if (
        !controlByUser &&
        trigger !== 'none' &&
        trigger !== 'hover' &&
        !(trigger?.length === 1 && trigger?.[0] === 'hover')
      ) {
        document.removeEventListener('click', clickEventHandler);
      }
      if (!isMini) {
        window.removeEventListener('resize', onMounted);
      }
      document.removeEventListener('keydown', handleKeyDown);
      if (trapFocus) {
        document.removeEventListener('keydown', handleFocusTrap);
      }
    };

    bindEvent();
    return () => {
      unbindEvent();
    };
  }, [isOpen, handleKeyDown, handleFocusTrap, trapFocus, controlByUser, trigger, onHide, onMounted, tipRef]);

  let triggerEventOption: Record<string, unknown> | undefined;
  if (!controlByUser && trigger !== 'none') {
    triggerEventOption = triggerEventTransform({
      trigger,
      click: onTriggerClick,
      show: onShow,
      hide: onHide,
    });
  }

  return {
    triggerEventOption,
  };
};