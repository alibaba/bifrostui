import React, { useState, useEffect, useRef } from 'react';
import {
  getStylesAndLocation,
  parsePlacement,
  throttle,
} from '@bifrostui/utils';
import { AnchorOrigin } from '../Popover.types';

const anchorOriginToPlacement = (anchorOrigin: AnchorOrigin): string => {
  const { vertical, horizontal } = anchorOrigin;

  if (vertical === 'center' && horizontal === 'center') {
    return 'top';
  }

  if (horizontal === 'center') {
    return vertical;
  }

  const horizontalMap = {
    left: 'Left',
    right: 'Right',
  };

  if (vertical === 'center') {
    return horizontal;
  }

  return `${vertical}${horizontalMap[horizontal]}`;
};

export interface UsePopoverPositionProps {
  anchorOrigin: AnchorOrigin;
  offsetSpacing: number;
  isOpen: boolean;
}

export interface UsePopoverPositionReturn {
  arrowDirection: string;
  arrowLocation: string;
  toolStyles: React.CSSProperties;
  tipRef: React.RefObject<HTMLDivElement>;
  childrenRef: React.RefObject<Element>;
  onMounted: () => void;
  clearRef: (status: boolean) => void;
}

export const usePopoverPosition = ({
  anchorOrigin,
  offsetSpacing,
  isOpen,
}: UsePopoverPositionProps): UsePopoverPositionReturn => {
  const placement = anchorOriginToPlacement(anchorOrigin);
  const { direction, location = 'center' } = parsePlacement(placement);

  const childrenRef = useRef<Element>();
  const [arrowDirection, setArrowDirection] = useState(direction);
  const [arrowLocation, setArrowLocation] = useState(location);
  const [toolStyles, setToolStyles] = useState<React.CSSProperties>({});
  const tipRef = useRef<HTMLDivElement>(null);

  const clearRef = (status: boolean) => {
    if (status === false) {
      tipRef.current = null;
    }
  };

  const onMounted = throttle(async () => {
    if (!tipRef.current) return;

    const {
      direction: newParsedDirection,
      location: newParsedLocation = 'center',
    } = parsePlacement(placement);

    const result = await getStylesAndLocation({
      childrenRef,
      arrowDirection: newParsedDirection,
      arrowLocation: newParsedLocation,
      offsetSpacing,
      tipRef,
    });

    if (!result) return;
    const { styles, newArrowDirection, newArrowLocation } = result;

    if (newArrowDirection !== arrowDirection) {
      setArrowDirection(newArrowDirection);
    }
    if (newArrowLocation !== arrowLocation) {
      setArrowLocation(newArrowLocation);
    }
    setToolStyles(styles as React.CSSProperties);
  }, 16);

  useEffect(() => {
    if (!isOpen) {
      setToolStyles({
        visibility: 'hidden' as const,
      });
    }
  }, [isOpen]);

  return {
    arrowDirection,
    arrowLocation,
    toolStyles,
    tipRef,
    childrenRef,
    onMounted,
    clearRef,
  };
};
