import { useCallback, useEffect } from 'react';
import { useUniqueId } from '@bifrostui/utils';

export interface UsePopoverA11yProps {
  isOpen: boolean;
  autoFocus: boolean;
  trapFocus: boolean;
  closeOnEscape: boolean;
  onClose: (event: React.SyntheticEvent | Event) => void;
  tipRef: React.RefObject<HTMLDivElement>;
  childrenRef: React.RefObject<Element>;
}

export interface UsePopoverA11yReturn {
  popoverId: string;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleFocusTrap: (event: KeyboardEvent) => void;
}

export const usePopoverA11y = ({
  isOpen,
  autoFocus,
  trapFocus,
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

  const handleFocusTrap = useCallback(
    (event: KeyboardEvent) => {
      if (!trapFocus || !isOpen || !tipRef.current) return;

      if (event.key === 'Tab') {
        const focusableElements = tipRef.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]',
        );

        if (focusableElements.length === 0) {
          event.preventDefault();
          return;
        }

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
          }
        } else if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    },
    [trapFocus, isOpen, tipRef],
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
    handleFocusTrap,
  };
};