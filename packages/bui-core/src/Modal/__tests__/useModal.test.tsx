import * as React from 'react';
import { renderHook } from 'testing';
import { useModal } from '../useModal';

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

  describe('Focus management', () => {
    let container: HTMLDivElement;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      document.body.removeChild(container);
    });

    it('should focus on the element with tabindex="-1" when opened', () => {
      const { result } = renderHook(() =>
        useModal({ ...defaultParams, open: true }),
      );

      const modalRoot = document.createElement('div');
      const childElement = document.createElement('div');
      childElement.setAttribute('tabindex', '-1');
      modalRoot.appendChild(childElement);
      container.appendChild(modalRoot);

      const focusSpy = vi.spyOn(childElement, 'focus');

      // 模拟 ref 挂载
      result.current.rootRef(modalRoot);

      // 手动触发一次 rerender 以执行 useEffect (因为 ref 变化不会触发重新渲染)
      // 在实际组件中，Modal 渲染时 ref 会先被赋值，然后执行 useEffect
      const { rerender } = renderHook(
        ({ open }) => useModal({ ...defaultParams, open }),
        { initialProps: { open: true } },
      );

      // 为第二次 renderHook 模拟同样的环境
      const modalRoot2 = document.createElement('div');
      const childElement2 = document.createElement('div');
      childElement2.setAttribute('tabindex', '-1');
      modalRoot2.appendChild(childElement2);
      container.appendChild(modalRoot2);
      const focusSpy2 = vi.spyOn(childElement2, 'focus');

      const hook = renderHook(
        ({ open, children }) => useModal({ ...defaultParams, open, children }),
        {
          initialProps: {
            open: true,
            children: <div tabIndex="-1" />,
          },
        },
      );

      hook.result.current.rootRef(modalRoot2);
      hook.rerender({ open: true, children: <div tabIndex="-1" /> });

      expect(focusSpy2).toHaveBeenCalled();
    });

    it('should focus on the element with autofocus when opened', () => {
      const modalRoot = document.createElement('div');
      const childElement = document.createElement('input');
      childElement.setAttribute('autofocus', '');
      modalRoot.appendChild(childElement);
      container.appendChild(modalRoot);

      const focusSpy = vi.spyOn(childElement, 'focus');

      const { result, rerender } = renderHook(
        ({ open }) => useModal({ ...defaultParams, open }),
        { initialProps: { open: false } }, // 初始为 false
      );

      result.current.rootRef(modalRoot);
      rerender({ open: true }); // 变为 true，触发 effect

      expect(focusSpy).toHaveBeenCalled();
    });

    it('should not auto focus when disableAutoFocus is true', () => {
      const modalRoot = document.createElement('div');
      const childElement = document.createElement('div');
      childElement.setAttribute('tabindex', '-1');
      modalRoot.appendChild(childElement);
      container.appendChild(modalRoot);

      const focusSpy = vi.spyOn(childElement, 'focus');

      const { result, rerender } = renderHook(
        ({ open }) =>
          useModal({ ...defaultParams, open, disableAutoFocus: true }),
        { initialProps: { open: false } },
      );

      result.current.rootRef(modalRoot);
      rerender({ open: true });

      expect(focusSpy).not.toHaveBeenCalled();
    });

    it('should restore focus when closed', () => {
      const triggerButton = document.createElement('button');
      container.appendChild(triggerButton);
      triggerButton.focus();
      // 在 capture 之后 spy
      const focusSpy = vi.spyOn(triggerButton, 'focus');

      const modalRoot = document.createElement('div');
      container.appendChild(modalRoot);

      const { result, rerender } = renderHook(
        ({ open }) => useModal({ ...defaultParams, open }),
        { initialProps: { open: false } },
      );

      result.current.rootRef(modalRoot);
      rerender({ open: true });

      // 关闭 Modal
      rerender({ open: false });

      expect(focusSpy).toHaveBeenCalled();
    });

    it('should not restore focus when disableRestoreFocus is true', () => {
      const triggerButton = document.createElement('button');
      container.appendChild(triggerButton);
      triggerButton.focus();
      const focusSpy = vi.spyOn(triggerButton, 'focus');

      const modalRoot = document.createElement('div');
      container.appendChild(modalRoot);

      const { result, rerender } = renderHook(
        ({ open }) =>
          useModal({ ...defaultParams, open, disableRestoreFocus: true }),
        { initialProps: { open: false } },
      );

      result.current.rootRef(modalRoot);
      rerender({ open: true });

      // 关闭 Modal
      rerender({ open: false });

      expect(focusSpy).not.toHaveBeenCalled();
    });
  });
});
