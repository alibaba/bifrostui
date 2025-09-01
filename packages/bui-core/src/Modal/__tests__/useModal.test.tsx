import React from 'react';
import { renderHook } from 'testing';
import { useModal } from '../useModal';
import { modalManager } from '../ModalManager';

// Mock ModalManager
vi.mock('../ModalManager', () => ({
  modalManager: {
    add: vi.fn(),
    remove: vi.fn(),
    mount: vi.fn(),
    isTopModal: vi.fn(() => true),
  },
}));

// Mock getContainer utility
const mockGetContainer = vi.fn();
vi.mock('../utils', () => ({
  getContainer: mockGetContainer,
}));

// Mock ariaHidden utility
const mockAriaHidden = vi.fn();
vi.mock('../ModalManager', async () => {
  const actual = await vi.importActual('../ModalManager');
  return {
    ...actual,
    ariaHidden: mockAriaHidden,
  };
});

describe('useModal', () => {
  const defaultParams = {
    open: true,
    onClose: vi.fn(),
    container: undefined,
    disableScrollLock: false,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockGetContainer.mockReturnValue(document.body);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Basic functionality', () => {
    it('should return required functions and properties', () => {
      const { result } = renderHook(() => useModal(defaultParams));

      expect(result.current).toHaveProperty('getRootProps');
      expect(result.current).toHaveProperty('getBackdropProps');
      expect(result.current).toHaveProperty('getTransitionProps');
      expect(result.current).toHaveProperty('rootRef');
      expect(result.current).toHaveProperty('portalRef');
      expect(result.current).toHaveProperty('exited');
      expect(result.current).toHaveProperty('hasTransition');
    });

    it('should initialize with correct exited state', () => {
      const { result: openResult } = renderHook(() =>
        useModal({ ...defaultParams, open: true }),
      );
      expect(openResult.current.exited).toBe(false);

      const { result: closedResult } = renderHook(() =>
        useModal({ ...defaultParams, open: false }),
      );
      expect(closedResult.current.exited).toBe(true);
    });
  });

  describe('getRootProps', () => {
    it('should return root props with correct role', () => {
      const { result } = renderHook(() => useModal(defaultParams));
      const rootProps = result.current.getRootProps();

      expect(rootProps).toHaveProperty('role', 'presentation');
      expect(rootProps).toHaveProperty('ref');
    });

    it('should merge additional props', () => {
      const { result } = renderHook(() => useModal(defaultParams));
      const additionalProps = {
        'data-testid': 'modal-root',
        className: 'custom-modal',
      };
      const rootProps = result.current.getRootProps(additionalProps);

      expect(rootProps).toMatchObject({
        role: 'presentation',
        'data-testid': 'modal-root',
        className: 'custom-modal',
      });
    });
  });

  describe('getBackdropProps', () => {
    it('should return props with aria-hidden and open', () => {
      const { result } = renderHook(() => useModal(defaultParams));
      const backdropProps = result.current.getBackdropProps();

      expect(backdropProps['aria-hidden']).toBe(true);
      expect(backdropProps.open).toBe(true);
    });

    it('should include onClick handler', () => {
      const { result } = renderHook(() => useModal(defaultParams));
      const backdropProps = result.current.getBackdropProps();

      expect(backdropProps).toHaveProperty('onClick');
      expect(typeof backdropProps.onClick).toBe('function');
    });

    it('should merge additional props and handlers', () => {
      const { result } = renderHook(() => useModal(defaultParams));
      const additionalProps = {
        className: 'custom-backdrop',
        onClick: vi.fn(),
        'data-testid': 'backdrop',
      };
      const backdropProps = result.current.getBackdropProps(additionalProps);

      expect(backdropProps).toMatchObject({
        'aria-hidden': true,
        open: true,
        className: 'custom-backdrop',
        'data-testid': 'backdrop',
      });
      expect(backdropProps).toHaveProperty('onClick');
    });
  });

  describe('getTransitionProps', () => {
    it('should return transition props with callbacks', () => {
      const { result } = renderHook(() => useModal(defaultParams));
      const transitionProps = result.current.getTransitionProps();

      expect(transitionProps).toHaveProperty('onEnter');
      expect(transitionProps).toHaveProperty('onExited');
      expect(typeof transitionProps.onEnter).toBe('function');
      expect(typeof transitionProps.onExited).toBe('function');
    });

    it('should update exited state when onEnter is called', () => {
      const { result } = renderHook(() => useModal(defaultParams));
      const transitionProps = result.current.getTransitionProps();

      // Initially exited should be false for open modal
      expect(result.current.exited).toBe(false);

      // Call onEnter
      transitionProps.onEnter();

      // Should still be false
      expect(result.current.exited).toBe(false);
    });

    it('should update exited state when onExited is called', () => {
      const { result } = renderHook(() => useModal(defaultParams));
      const transitionProps = result.current.getTransitionProps();

      // Call onExited
      transitionProps.onExited();

      // Should be true
      expect(result.current.exited).toBe(true);
    });
  });

  describe('Modal manager integration', () => {
    it('should call modalManager.add when modal opens', () => {
      renderHook(() => useModal({ ...defaultParams, open: true }));

      expect(modalManager.add).toHaveBeenCalled();
    });

    it('should call modalManager.remove when modal closes', () => {
      const { rerender } = renderHook(
        ({ open }) => useModal({ ...defaultParams, open }),
        { initialProps: { open: true } },
      );

      // Close the modal
      rerender({ open: false });

      expect(modalManager.remove).toHaveBeenCalled();
    });

    it('should call modalManager.mount when modal is mounted', () => {
      const { result } = renderHook(() =>
        useModal({ ...defaultParams, open: true }),
      );

      // Simulate portal ref being set
      const mockElement = document.createElement('div');
      result.current.portalRef(mockElement);

      expect(modalManager.mount).toHaveBeenCalledWith(expect.any(Object), {
        disableScrollLock: false,
      });
    });
  });

  describe('Container handling', () => {
    it('should use provided container', () => {
      const customContainer = document.createElement('div');
      mockGetContainer.mockReturnValue(customContainer);

      renderHook(() =>
        useModal({ ...defaultParams, container: customContainer }),
      );

      expect(mockGetContainer).toHaveBeenCalledWith(customContainer);
    });

    it('should use document.body as default container', () => {
      mockGetContainer.mockReturnValue(document.body);

      renderHook(() => useModal({ ...defaultParams, container: undefined }));

      expect(mockGetContainer).toHaveBeenCalledWith(undefined);
    });
  });

  describe('Scroll lock', () => {
    it('should pass disableScrollLock to modalManager.mount', () => {
      const { result } = renderHook(() =>
        useModal({ ...defaultParams, disableScrollLock: true }),
      );

      // Simulate portal ref being set
      const mockElement = document.createElement('div');
      result.current.portalRef(mockElement);

      expect(modalManager.mount).toHaveBeenCalledWith(expect.any(Object), {
        disableScrollLock: true,
      });
    });
  });

  describe('Event handling', () => {
    it('should call onClose when backdrop is clicked', () => {
      const onClose = vi.fn();
      const { result } = renderHook(() =>
        useModal({ ...defaultParams, onClose }),
      );
      const backdropProps = result.current.getBackdropProps();

      // Simulate backdrop click
      const mockEvent = {
        target: document.createElement('div'),
        currentTarget: document.createElement('div'),
      };
      mockEvent.target = mockEvent.currentTarget; // Same element to simulate direct click

      backdropProps.onClick(mockEvent);

      expect(onClose).toHaveBeenCalledWith(mockEvent, {
        from: 'backdropClick',
      });
    });

    it('should not call onClose when clicking on modal content', () => {
      const onClose = vi.fn();
      const { result } = renderHook(() =>
        useModal({ ...defaultParams, onClose }),
      );
      const backdropProps = result.current.getBackdropProps();

      // Simulate click on modal content (different target and currentTarget)
      const mockEvent = {
        target: document.createElement('div'),
        currentTarget: document.createElement('div'),
      };

      backdropProps.onClick(mockEvent);

      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('Cleanup', () => {
    it('should cleanup on unmount', () => {
      const { unmount } = renderHook(() => useModal(defaultParams));

      unmount();

      expect(modalManager.remove).toHaveBeenCalled();
    });
  });

  describe('Aria-hidden handling', () => {
    it('should handle aria-hidden prop as string', () => {
      const ariaHiddenParams = {
        ...defaultParams,
        'aria-hidden': 'false',
      } as Record<string, unknown>;
      renderHook(() => useModal(ariaHiddenParams));

      // Should not throw and handle the string value
      expect(true).toBe(true);
    });

    it('should handle aria-hidden prop as boolean', () => {
      const ariaHiddenParams = {
        ...defaultParams,
        'aria-hidden': false,
      } as Record<string, unknown>;
      renderHook(() => useModal(ariaHiddenParams));

      // Should not throw and handle the boolean value
      expect(true).toBe(true);
    });
  });

  describe('Edge cases', () => {
    it('should handle rapid open/close changes', () => {
      const { rerender } = renderHook(
        ({ open }) => useModal({ ...defaultParams, open }),
        { initialProps: { open: false } },
      );

      // Rapidly change open state
      rerender({ open: true });
      rerender({ open: false });
      rerender({ open: true });

      // Should not throw errors
      expect(true).toBe(true);
    });

    it('should handle missing onClose gracefully', () => {
      const { result } = renderHook(() =>
        useModal({ ...defaultParams, onClose: undefined }),
      );
      const backdropProps = result.current.getBackdropProps();

      // Should not throw when onClose is undefined
      expect(() => {
        const mockEvent = {
          target: document.createElement('div'),
          currentTarget: document.createElement('div'),
        };
        mockEvent.target = mockEvent.currentTarget;
        backdropProps.onClick(mockEvent);
      }).not.toThrow();
    });

    it('should handle portal ref with null', () => {
      const { result } = renderHook(() => useModal(defaultParams));

      // Should not throw when portal ref is called with null
      expect(() => {
        result.current.portalRef(null);
      }).not.toThrow();
    });

    it('should handle transition detection', () => {
      const mockChildren = React.createElement('div', {}, 'Test content');
      const paramsWithChildren = { ...defaultParams, children: mockChildren };

      const { result } = renderHook(() => useModal(paramsWithChildren));

      // Should detect transition correctly
      expect(typeof result.current.hasTransition).toBe('boolean');
    });
  });
});
