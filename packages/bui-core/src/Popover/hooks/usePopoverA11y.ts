import React, { useCallback, useEffect } from 'react';
import { useUniqueId } from '@bifrostui/utils';

export interface UsePopoverA11yProps {
  isOpen: boolean;
  autoFocus: boolean;
  closeOnEscape: boolean;
  onClose: (event: React.SyntheticEvent | Event) => void;
  tipRef: React.RefObject<HTMLDivElement>;
  childrenRef: React.RefObject<Element>;
}

export interface UsePopoverA11yReturn {
  popoverId: string;
  handleKeyDown: (event: KeyboardEvent) => void;
}

export const usePopoverA11y = ({
  isOpen,
  autoFocus,
  closeOnEscape,
  onClose,
  tipRef,
  childrenRef,
}: UsePopoverA11yProps): UsePopoverA11yReturn => {
  const popoverId = useUniqueId();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === 'Escape' && isOpen) {
        event.preventDefault();
        event.stopPropagation();
        onClose(event);
        if (childrenRef.current && 'focus' in childrenRef.current) {
          (childrenRef.current as HTMLElement).focus();
        }
      }
    },
    [closeOnEscape, isOpen, onClose, childrenRef],
  );

  useEffect(() => {
    if (isOpen && autoFocus && tipRef.current) {
      const timer = setTimeout(() => {
        if (tipRef.current && 'focus' in tipRef.current) {
          (tipRef.current as HTMLElement).focus();
        }
      }, 0);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isOpen, autoFocus, tipRef]);

  return {
    popoverId,
    handleKeyDown,
  };
};
