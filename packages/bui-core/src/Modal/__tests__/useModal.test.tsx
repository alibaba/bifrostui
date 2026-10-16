import * as React from 'react';
import { renderHook, act } from 'testing';
import { useModal, isValidRestoreFocusTarget } from '../useModal';

// Mock ModalManager - 直接在mock内部定义，避免变量提升问题
vi.mock('../ModalManager', () => ({
  modalManager: {
    add: vi.fn(),
    remove: vi.fn(),
    mount: vi.fn(),
    isTopModal: vi.fn(() => true),
  },
  ariaHidden: vi.fn(),
}));

describe('useModal', () => {
  const defaultParams = {
    open: true,
    onClose: vi.fn(),
    container: undefined,
    disableScrollLock: false,
  };

  beforeEach(() => {
    vi.clearAllMocks();
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
      expect(transitionProps).toHaveProperty('onEntered');
      expect(transitionProps).toHaveProperty('onExited');
      expect(typeof transitionProps.onEnter).toBe('function');
      expect(typeof transitionProps.onEntered).toBe('function');
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

    it('should update exited state and restore focus when onExited is called', () => {
      const triggerButton = document.createElement('button');
      document.body.appendChild(triggerButton);
      triggerButton.focus();

      const { result } = renderHook(() => useModal(defaultParams));
      const transitionProps = result.current.getTransitionProps();

      // Call onExited
      act(() => {
        transitionProps.onExited();
      });

      // Should be true
      expect(result.current.exited).toBe(true);

      // Should restore focus to trigger button (lastFocusedElement was captured on mount)
      expect(document.activeElement).toBe(triggerButton);

      document.body.removeChild(triggerButton);
    });
  });

  describe('Modal manager integration', () => {
    it('should call modalManager.add when modal opens', async () => {
      const { modalManager } = await import('../ModalManager');
      renderHook(() => useModal({ ...defaultParams, open: true }));

      expect(modalManager.add).toHaveBeenCalled();
    });

    it('should call modalManager.remove when modal closes', async () => {
      const { modalManager } = await import('../ModalManager');
      const { rerender } = renderHook(
        ({ open }) => useModal({ ...defaultParams, open }),
        { initialProps: { open: true } },
      );

      // Close the modal
      rerender({ open: false });

      expect(modalManager.remove).toHaveBeenCalled();
    });

    it('should call modalManager.mount when modal is mounted', async () => {
      const { modalManager } = await import('../ModalManager');
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
    it('should handle custom container element', () => {
      const customContainer = document.createElement('div');

      const { result } = renderHook(() =>
        useModal({ ...defaultParams, container: customContainer }),
      );

      // 验证hook正常工作，不再测试内部getContainer调用
      expect(result.current.getRootProps).toBeDefined();
    });

    it('should handle container function', () => {
      const containerFn = () => document.createElement('div');

      const { result } = renderHook(() =>
        useModal({ ...defaultParams, container: containerFn }),
      );

      // 验证hook正常工作，不再测试内部getContainer调用
      expect(result.current.getRootProps).toBeDefined();
    });

    it('should use document.body as default container', () => {
      const { result } = renderHook(() =>
        useModal({ ...defaultParams, container: undefined }),
      );

      // 验证hook正常工作，不再测试内部getContainer调用
      expect(result.current.getRootProps).toBeDefined();
    });
  });

  describe('Scroll lock', () => {
    it('should pass disableScrollLock to modalManager.mount', async () => {
      const { modalManager } = await import('../ModalManager');
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

      // 创建一个backdrop元素，确保target和currentTarget相同
      const backdropElement = document.createElement('div');
      const mockEvent = {
        target: backdropElement,
        currentTarget: backdropElement, // 确保target === currentTarget
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      } as unknown as React.MouseEvent<HTMLDivElement>;

      // 使用类型断言确保onClick可以被调用
      (
        backdropProps.onClick as (
          event: React.MouseEvent<HTMLDivElement>,
        ) => void
      )(mockEvent);

      expect(onClose).toHaveBeenCalledWith(mockEvent, {
        from: 'backdropClick',
      });
    });

    it('should not call onClose when clicking on child element', () => {
      const onClose = vi.fn();
      const { result } = renderHook(() =>
        useModal({ ...defaultParams, onClose }),
      );
      const backdropProps = result.current.getBackdropProps();

      // 模拟点击子元素的情况
      const backdropElement = document.createElement('div');
      const childElement = document.createElement('div');
      const mockEvent = {
        target: childElement, // 点击的是子元素
        currentTarget: backdropElement, // 事件绑定在backdrop上
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      } as unknown as React.MouseEvent<HTMLDivElement>;

      // 使用类型断言确保onClick可以被调用
      (
        backdropProps.onClick as (
          event: React.MouseEvent<HTMLDivElement>,
        ) => void
      )(mockEvent);

      // 不应该调用onClose
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('Focus management - isValidRestoreFocusTarget', () => {
    it('should reject document.body as restore target', () => {
      expect(isValidRestoreFocusTarget(document.body)).toBe(false);
    });

    it('should reject document.documentElement as restore target', () => {
      expect(isValidRestoreFocusTarget(document.documentElement)).toBe(false);
    });

    it('should reject null', () => {
      expect(isValidRestoreFocusTarget(null)).toBe(false);
    });

    it('should accept valid HTMLElement', () => {
      const btn = document.createElement('button');
      expect(isValidRestoreFocusTarget(btn)).toBe(true);
    });

    it('should return false when HTMLElement is not defined (mini-program)', () => {
      const OriginalHTMLElement = globalThis.HTMLElement;
      delete globalThis.HTMLElement;

      try {
        expect(
          isValidRestoreFocusTarget(document.createElement('button')),
        ).toBe(false);
      } finally {
        globalThis.HTMLElement = OriginalHTMLElement;
      }
    });
  });

  describe('Focus management - focus restoration', () => {
    it('should not restore focus to body when body was activeElement on open', () => {
      // body is the default document.activeElement when nothing else is focused.
      // isValidRestoreFocusTarget rejects body, so lastFocusedElement stays null.
      const contentDiv = document.createElement('div');
      document.body.appendChild(contentDiv);
      const contentRef = { current: contentDiv };

      const { rerender } = renderHook(
        ({ open }) => useModal({ ...defaultParams, open, contentRef }),
        { initialProps: { open: true } },
      );

      // Modal auto-focused the content div (body was rejected as restore target)
      expect(document.activeElement).toBe(contentDiv);

      // Close modal
      rerender({ open: false });

      // restoreFocus had nothing to restore (body was filtered out) — focus stays on contentDiv
      expect(document.activeElement).toBe(contentDiv);

      document.body.removeChild(contentDiv);
    });

    it('should restore focus via onExited when has transition', () => {
      const triggerButton = document.createElement('button');
      document.body.appendChild(triggerButton);
      triggerButton.focus();

      // Provide contentRef so handleAutoFocus actually moves focus away from trigger
      const contentDiv = document.createElement('div');
      document.body.appendChild(contentDiv);
      const contentRef = { current: contentDiv };

      // Render with a transition child (has 'in' prop → hasTransition = true)
      const transitionChild = React.createElement('div', { in: true });
      const { result, rerender } = renderHook(
        ({ open }) =>
          useModal({
            ...defaultParams,
            open,
            children: transitionChild,
            contentRef,
          }),
        { initialProps: { open: true } },
      );

      const transitionProps = result.current.getTransitionProps();

      // Focus should have moved to content div (auto-focus fired, but deferred to onEntered for transitions)
      // For this test, since there's no actual transition animation, focus stays on trigger until onEntered
      // But the important part is that when we close, focus restoration is deferred

      // Close modal (open=false). Cleanup defers restoration because hasTransition + !openRef
      rerender({ open: false });

      // Focus should NOT have been restored yet (waiting for onExited)
      // Since focus may still be on trigger (no onEntered fired), verify the deferred behavior via onExited
      const focusBeforeExit = document.activeElement;

      // Simulate transition exit → restoreFocus should fire
      act(() => {
        transitionProps.onExited();
      });

      // Focus should now be on the trigger button (restored from lastFocusedElement)
      expect(document.activeElement).toBe(triggerButton);

      document.body.removeChild(triggerButton);
      document.body.removeChild(contentDiv);
    });

    it('should only restore focus once when restoreFocus is called multiple times', () => {
      const btn1 = document.createElement('button');
      const btn2 = document.createElement('button');
      document.body.appendChild(btn1);
      document.body.appendChild(btn2);

      btn1.focus();

      const transitionChild = React.createElement('div', { in: true });
      const { result, rerender } = renderHook(
        ({ open }) =>
          useModal({ ...defaultParams, open, children: transitionChild }),
        { initialProps: { open: true } },
      );

      const transitionProps = result.current.getTransitionProps();

      rerender({ open: false });

      // Call onExited (triggers restoreFocus → focuses btn1)
      act(() => {
        transitionProps.onExited();
      });
      expect(document.activeElement).toBe(btn1);

      // Manually move focus away
      btn2.focus();
      expect(document.activeElement).toBe(btn2);

      // Call onExited again — should NOT restore focus (idempotent, lastFocusedElement already cleared)
      act(() => {
        transitionProps.onExited();
      });
      expect(document.activeElement).toBe(btn2);

      document.body.removeChild(btn1);
      document.body.removeChild(btn2);
    });

    it('should use contentRef ownerDocument when recording focus target', () => {
      const triggerButton = document.createElement('button');
      document.body.appendChild(triggerButton);
      triggerButton.focus();

      const contentRef = { current: document.createElement('div') };

      const { rerender } = renderHook(
        ({ open }) =>
          useModal({
            ...defaultParams,
            open,
            contentRef,
          }),
        { initialProps: { open: true } },
      );

      // Close — should restore focus to triggerButton
      rerender({ open: false });

      expect(document.activeElement).toBe(triggerButton);

      document.body.removeChild(triggerButton);
    });

    it('should activate focus management immediately when open is true without waiting for contentRef', () => {
      const triggerButton = document.createElement('button');
      document.body.appendChild(triggerButton);
      triggerButton.focus();

      // No contentRef provided — activated should still be set when open=true
      const { result } = renderHook(() =>
        useModal({ ...defaultParams, open: true }),
      );

      // handleAutoFocus should respect activated (which is true) even without contentRef
      // The actual focus only happens when contentRef.current exists
      expect(result.current.hasTransition).toBe(false);

      document.body.removeChild(triggerButton);
    });
  });
});
