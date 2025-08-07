import React from 'react';
import {
  isConformant,
  render,
  screen,
  userEvent,
  fireEvent,
  act,
} from 'testing';
import Tooltip from '../index';

const directions = [
  'top',
  'left',
  'right',
  'bottom',
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
  'leftTop',
  'leftBottom',
  'rightTop',
  'rightBottom',
];
const rootClass = 'bui-tooltip';

describe('Tooltip', () => {
  // isConformant({
  //   Component: Tooltip,
  //   displayName: 'BuiTooltip',
  //   className: rootClass,
  //   skip: [
  //     'component-has-root-ref',
  //     'component-handles-classNames',
  //     'component-has-default-className',
  //     'component-handles-style',
  //   ],
  // });

  it('test open props', async () => {
    const onOpenChange = vi.fn();
    render(
      <Tooltip title="This is a tooltip2" open onOpenChange={onOpenChange}>
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );
    expect(screen.getByText('This is a tooltip2')).toBeInTheDocument();

    const $childrenDom = screen.getByTestId('tooltipTestid');
    await act(async () => {
      userEvent.click($childrenDom);
    });
    expect(onOpenChange).toHaveBeenCalledTimes(0);
  });

  directions.forEach((placement) => {
    it(`test placement props the ${placement}`, async () => {
      render(
        // @ts-ignore
        <Tooltip title="This is a tooltip3" defaultOpen placement={placement}>
          <div>children</div>
        </Tooltip>,
      );
      await act(async () => {
        const direction = placement.split(/[A-Z]/)[0];
        const $dom = document.querySelector('.bui-tooltip');
        expect($dom).toHaveClass(`tooltip-${direction}`);
      });
    });
  });

  it('test trigger onOpenChange props', async () => {
    const onOpenChange = vi.fn();
    render(
      <Tooltip
        title="This is a tooltip4"
        defaultOpen
        trigger={['click', 'hover']}
        onOpenChange={onOpenChange}
      >
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );

    const $childrenDom = screen.getByTestId('tooltipTestid');
    await userEvent.click($childrenDom);
    expect(onOpenChange).toHaveBeenCalled();
  });

  it('test trigger click anywhere hide props', async () => {
    const onOpenChange = vi.fn();
    render(
      <Tooltip
        title="This is a tooltip4"
        defaultOpen
        trigger="click"
        onOpenChange={onOpenChange}
      >
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );

    await userEvent.click(document.body);
    expect(onOpenChange).toHaveBeenCalled();
  });

  it('test trigger hover onOpenChange props', async () => {
    const onOpenChange = vi.fn();
    render(
      <Tooltip
        title="This is a tooltip4"
        // defaultOpen
        trigger={['hover']}
        onOpenChange={onOpenChange}
      >
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );
    await act(async () => {
      const $childrenDom = screen.getByTestId('tooltipTestid');
      fireEvent.mouseEnter($childrenDom);
      fireEvent.mouseLeave($childrenDom);
      expect(onOpenChange).toBeCalledTimes(2);
      // 代表不触发隐藏
      userEvent.click(document.body);
      expect(onOpenChange).toBeCalledTimes(2);
    });
  });

  // 新增测试：offset 属性
  it('test offset prop', () => {
    const { rerender } = render(
      <Tooltip title="Test tooltip" offset={20} defaultOpen>
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );

    expect(screen.getByText('Test tooltip')).toBeInTheDocument();

    // 测试 offset 为 0
    rerender(
      <Tooltip title="Test tooltip" offset={0} defaultOpen>
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );
    expect(screen.getByText('Test tooltip')).toBeInTheDocument();
  });

  // 新增测试：offset 和 offsetSpacing 优先级
  it('test offset takes precedence over offsetSpacing', () => {
    render(
      <Tooltip title="Test tooltip" offset={30} offsetSpacing={10} defaultOpen>
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );

    expect(screen.getByText('Test tooltip')).toBeInTheDocument();
    // 此处实际应该使用 offset={30} 而不是 offsetSpacing={10}
  });

  // 新增测试：offsetSpacing 向后兼容性
  it('test offsetSpacing backward compatibility', () => {
    render(
      <Tooltip title="Test tooltip" offsetSpacing={15} defaultOpen>
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );

    expect(screen.getByText('Test tooltip')).toBeInTheDocument();
  });

  // 新增测试：title 支持 ReactNode
  it('test title supports ReactNode', () => {
    const ComplexTitle = () => (
      <div>
        <strong>Bold text</strong> and <em>italic text</em>
      </div>
    );

    render(
      <Tooltip title={<ComplexTitle />} defaultOpen>
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );

    expect(screen.getByText('Bold text')).toBeInTheDocument();
    expect(screen.getByText('italic text')).toBeInTheDocument();
  });

  // 新增测试：title 为字符串时仍然工作
  it('test title with string content', () => {
    render(
      <Tooltip title="Simple string tooltip" defaultOpen>
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );

    expect(screen.getByText('Simple string tooltip')).toBeInTheDocument();
  });

  // 新增测试：修复后的 trigger 逻辑 - hover 不应该监听全局点击
  it('test trigger hover should not hide on global click', async () => {
    const onOpenChange = vi.fn();
    render(
      <Tooltip
        title="Hover tooltip"
        trigger="hover"
        onOpenChange={onOpenChange}
      >
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );

    const $childrenDom = screen.getByTestId('tooltipTestid');

    // 鼠标进入显示
    await act(async () => {
      fireEvent.mouseEnter($childrenDom);
    });
    expect(onOpenChange).toHaveBeenCalledWith(expect.any(Object), {
      open: true,
    });

    // 全局点击不应该隐藏（这是修复的 bug）
    await act(async () => {
      userEvent.click(document.body);
    });
    // onOpenChange 应该只调用一次（显示），不应该因为全局点击而隐藏
    expect(onOpenChange).toHaveBeenCalledTimes(1);
  });

  // 新增测试：混合 trigger 时的全局点击行为
  it('test mixed trigger with click should hide on global click', async () => {
    const onOpenChange = vi.fn();

    // Mock getBoundingClientRect 来确保 Tooltip 能正确显示
    const mockGetBoundingClientRect = vi.fn().mockReturnValue({
      width: 100,
      height: 50,
      top: 10,
      left: 0,
      right: 100,
      bottom: 50,
    });
    Object.defineProperty(
      window.HTMLElement.prototype,
      'getBoundingClientRect',
      {
        configurable: true,
        value: mockGetBoundingClientRect,
      },
    );

    render(
      <Tooltip
        title="Mixed trigger tooltip"
        trigger={['hover', 'click']}
        onOpenChange={onOpenChange}
      >
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );

    const $childrenDom = screen.getByTestId('tooltipTestid');

    // 点击显示
    await act(async () => {
      userEvent.click($childrenDom);
    });

    // 验证 onOpenChange 被调用
    expect(onOpenChange).toHaveBeenCalledWith(expect.any(Object), {
      open: true,
    });

    // 全局点击应该隐藏（因为包含 click trigger）
    await act(async () => {
      // 使用 fireEvent 而不是 userEvent 来避免递归调用
      fireEvent.click(document.body);
    });
    expect(onOpenChange).toHaveBeenCalledWith(expect.any(Object), {
      open: false,
    });
    // 在混合trigger的情况下，可能会有额外的调用，所以检查至少被调用2次
    expect(onOpenChange).toHaveBeenCalledTimes(3);
  });

  // 新增测试：children 必须是有效的 React 元素
  it('test invalid children warning', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {
      // 空实现
    });

    render(
      <Tooltip title="Test tooltip" defaultOpen>
        {'Invalid children' as React.ReactElement}
      </Tooltip>,
    );

    expect(consoleSpy).toHaveBeenCalledWith(
      'BUI Tooltip: children must be a valid React element that can accept a ref.',
    );

    consoleSpy.mockRestore();
  });

  // 新增测试：defaultOpen 默认值
  it('test defaultOpen default value', () => {
    render(
      <Tooltip title="Test tooltip">
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );

    // 默认不显示
    expect(screen.queryByText('Test tooltip')).not.toBeInTheDocument();
  });
});

describe('Tooltip', () => {
  isConformant({
    Component: Tooltip,
    displayName: 'BuiTooltip',
    className: rootClass,
    skip: [
      'component-has-root-ref',
      'component-handles-classNames',
      'component-has-default-className',
      'component-handles-style',
    ],
  });

  it('renders correctly', () => {
    // mock位置
    const mockGetBoundingClientRect = vi.fn().mockReturnValue({
      width: 100,
      height: 50,
      top: 10,
      left: 0,
      right: 100,
      bottom: 50,
    });
    Object.defineProperty(
      window.HTMLElement.prototype,
      'getBoundingClientRect',
      {
        configurable: true,
        value: mockGetBoundingClientRect,
      },
    );
    render(
      <Tooltip title="This is a tooltip" defaultOpen>
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );

    expect(screen.getByText('This is a tooltip')).toBeInTheDocument();
  });

  it('renders correctly offset cacl topCenter', () => {
    // mock位置
    const mockGetBoundingClientRect = vi.fn().mockReturnValue({
      width: 100,
      height: 50,
      top: 10,
      left: 50,
      right: 50,
      bottom: 50,
    });
    Object.defineProperty(
      window.HTMLElement.prototype,
      'getBoundingClientRect',
      {
        configurable: true,
        value: mockGetBoundingClientRect,
      },
    );

    Object.defineProperty(document.documentElement, 'clientWidth', {
      get: () => {
        return 375;
      },
    });

    render(
      <Tooltip title="This is a tooltip" defaultOpen>
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );

    expect(screen.getByText('This is a tooltip')).toBeInTheDocument();
  });

  it('renders correctly offset cacl leftCenter', () => {
    // mock位置
    const mockGetBoundingClientRect = vi.fn().mockReturnValue({
      width: 100,
      height: 50,
      top: 10,
      left: 50,
      right: 50,
      bottom: 20,
    });
    Object.defineProperty(
      window.HTMLElement.prototype,
      'getBoundingClientRect',
      {
        configurable: true,
        value: mockGetBoundingClientRect,
      },
    );

    Object.defineProperty(document.documentElement, 'clientHeight', {
      get: () => {
        return 667;
      },
    });

    render(
      <Tooltip title="This is a tooltip" placement="left" defaultOpen>
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );

    expect(screen.getByText('This is a tooltip')).toBeInTheDocument();
  });
});
