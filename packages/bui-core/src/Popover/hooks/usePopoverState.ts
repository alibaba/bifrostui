import { useState, useEffect } from 'react';

export interface UsePopoverStateProps {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (event: React.SyntheticEvent | Event, data: { open: boolean }) => void;
}

export interface UsePopoverStateReturn {
  isOpen: boolean;
  openStatus: boolean;
  controlByUser: boolean;
  changeOpenStatus: (event: React.SyntheticEvent | Event, status: boolean) => void;
  setOpenStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const usePopoverState = ({
  defaultOpen = false,
  open,
  onOpenChange,
}: UsePopoverStateProps): UsePopoverStateReturn => {
  const controlByUser = typeof open !== 'undefined';
  const [openStatus, setOpenStatus] = useState(defaultOpen);
  const isOpen = controlByUser ? open : openStatus;

  const changeOpenStatus = (event: React.SyntheticEvent | Event, status: boolean) => {
    if (controlByUser) return;
    setOpenStatus(status);
    onOpenChange?.(event, { open: status });
  };

  useEffect(() => {
    if (!controlByUser) return;
    setOpenStatus(open);
  }, [open, controlByUser]);

  return {
    isOpen,
    openStatus,
    controlByUser,
    changeOpenStatus,
    setOpenStatus,
  };
};