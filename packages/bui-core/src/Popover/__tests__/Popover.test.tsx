import React from 'react';
import {
  isConformant,
  render,
  screen,
  userEvent,
  fireEvent,
  act,
} from 'testing';
import Popover from '../index';

const anchorOrigins = [
  { vertical: 'top', horizontal: 'center' },
  { vertical: 'center', horizontal: 'left' },
  { vertical: 'center', horizontal: 'right' },
  { vertical: 'bottom', horizontal: 'center' },
  { vertical: 'top', horizontal: 'left' },
  { vertical: 'top', horizontal: 'right' },
  { vertical: 'bottom', horizontal: 'left' },
  { vertical: 'bottom', horizontal: 'right' },
  { vertical: 'center', horizontal: 'center' }, // center + center -> top (特殊处理)
  { vertical: 'center', horizontal: 'left' }, // leftTop -> left center
  { vertical: 'center', horizontal: 'left' }, // leftBottom -> left center
  { vertical: 'center', horizontal: 'right' }, // rightTop -> right center
  { vertical: 'center', horizontal: 'right' }, // rightBottom -> right center
] as const;

// 对应的预期 direction（用于验证生成的 CSS 类名）
const expectedDirections = [
  'top',
  'left',
  'right',
  'bottom',
  'top',
  'top',
  'bottom',
  'bottom',
  'top', // center + center -> top
  'left',
  'left',
  'right',
  'right',
];

describe('Popover', () => {
  const rootClass = 'bui-popover';

  isConformant({
    Component: Popover,
    displayName: 'BuiPopover',
    className: rootClass,
    skip: [
      'component-has-root-ref',
      'component-handles-classNames',
      'component-has-default-className',
      'component-handles-style',
    ],
  });

  it('test content defaultOpen props', async () => {
    render(
      <Popover
        title="This is a popover title"
        content="This is a popover content"
        defaultOpen
      >
        <div>children</div>
      </Popover>,
    );
    await act(async () => {
      expect(screen.getByText('This is a popover title')).toBeInTheDocument();
      expect(screen.getByText('This is a popover content')).toBeInTheDocument();
    });
  });

  it('test hideArrow props', async () => {
    render(
      <Popover title="This is a popover title" hideArrow defaultOpen>
        <div>children</div>
      </Popover>,
    );
    await act(async () => {
      expect(
        document.querySelector('.bui-popover-arrow'),
      ).not.toBeInTheDocument();
    });
  });

  it('test open onOpenChange props', async () => {
    const onOpenChange = jest.fn();
    render(
      <Popover title="This is a popover2" open>
        <div data-testid="popoverTestid">children</div>
      </Popover>,
    );

    expect(screen.getByText('This is a popover2')).toBeInTheDocument();
    const $childrenDom = screen.getByTestId('popoverTestid');
    await act(async () => {
      userEvent.click($childrenDom);
    });
    expect(onOpenChange).toHaveBeenCalledTimes(0);
  });

  anchorOrigins.forEach((anchorOrigin, index) => {
    it(`test anchorOrigin props vertical: ${anchorOrigin.vertical}, horizontal: ${anchorOrigin.horizontal}`, async () => {
      render(
        <Popover
          title="This is a popover3"
          defaultOpen
          anchorOrigin={anchorOrigin}
        >
          <div>children</div>
        </Popover>,
      );
      await act(async () => {
        const expectedDirection = expectedDirections[index];
        const $dom = document.querySelector('.bui-popover');
        expect($dom).toHaveClass(`popover-${expectedDirection}`);
      });
    });
  });

  it('test trigger onOpenChange props', async () => {
    const onOpenChange = jest.fn();
    render(
      <Popover
        title="This is a popover4"
        defaultOpen
        trigger={['click', 'hover']}
        onOpenChange={onOpenChange}
      >
        <div data-testid="popoverTestid">children</div>
      </Popover>,
    );
    await act(async () => {
      const $childrenDom = screen.getByTestId('popoverTestid');
      setTimeout(() => {
        userEvent.click($childrenDom);
        expect(onOpenChange).toHaveBeenCalled();
      }, 100);
    });
  });

  it('test trigger click anywhere hide props', async () => {
    const onOpenChange = jest.fn();
    render(
      <Popover
        title="This is a popover4"
        defaultOpen
        trigger="click"
        onOpenChange={onOpenChange}
      >
        <div data-testid="popoverTestid">children</div>
      </Popover>,
    );
    await act(async () => {
      setTimeout(() => {
        userEvent.click(document.body);
        expect(onOpenChange).toHaveBeenCalled();
      }, 100);
    });
  });

  it('test trigger hover onOpenChange props', async () => {
    const onOpenChange = jest.fn();
    render(
      <Popover
        title="This is a popover4"
        // defaultOpen
        trigger={['hover']}
        onOpenChange={onOpenChange}
      >
        <div data-testid="popoverTestid">children</div>
      </Popover>,
    );
    await act(async () => {
      const $childrenDom = screen.getByTestId('popoverTestid');
      fireEvent.mouseEnter($childrenDom);
      fireEvent.mouseLeave($childrenDom);
      expect(onOpenChange).toBeCalledTimes(2);
      // 代表不触发隐藏
      userEvent.click(document.body);
      expect(onOpenChange).toBeCalledTimes(2);
    });
  });

  it('test default trigger click behavior', async () => {
    const onOpenChange = jest.fn();
    render(
      <Popover title="This is a popover" onOpenChange={onOpenChange}>
        <div data-testid="popoverTestid">children</div>
      </Popover>,
    );

    await act(async () => {
      const $childrenDom = screen.getByTestId('popoverTestid');

      // 默认 trigger="click"，点击应该触发弹窗
      userEvent.click($childrenDom);
      expect(onOpenChange).toHaveBeenCalledTimes(1);
      expect(onOpenChange).toHaveBeenCalledWith(expect.any(Object), {
        open: true,
      });

      // 再次点击应该隐藏弹窗
      userEvent.click($childrenDom);
      expect(onOpenChange).toHaveBeenCalledTimes(2);
      expect(onOpenChange).toHaveBeenLastCalledWith(expect.any(Object), {
        open: false,
      });
    });
  });

  it('test trigger none - no auto trigger events', async () => {
    const onOpenChange = jest.fn();
    render(
      <Popover
        title="This is a popover"
        trigger="none"
        onOpenChange={onOpenChange}
      >
        <div data-testid="popoverTestid">children</div>
      </Popover>,
    );

    await act(async () => {
      const $childrenDom = screen.getByTestId('popoverTestid');

      // 点击 children 不应该触发弹窗
      userEvent.click($childrenDom);
      expect(onOpenChange).toHaveBeenCalledTimes(0);

      // 悬停 children 也不应该触发弹窗
      fireEvent.mouseEnter($childrenDom);
      expect(onOpenChange).toHaveBeenCalledTimes(0);

      fireEvent.mouseLeave($childrenDom);
      expect(onOpenChange).toHaveBeenCalledTimes(0);

      // 全局点击也不应该触发任何事件
      userEvent.click(document.body);
      expect(onOpenChange).toHaveBeenCalledTimes(0);
    });
  });

  it('test trigger none with open prop - controlled by open only', async () => {
    const { rerender } = render(
      <Popover title="This is a popover" trigger="none" open={false}>
        <div data-testid="popoverTestid">children</div>
      </Popover>,
    );

    // 初始状态下弹窗不显示
    expect(screen.queryByText('This is a popover')).not.toBeInTheDocument();

    // 手动设置 open=true 后弹窗显示
    rerender(
      <Popover title="This is a popover" trigger="none" open={true}>
        <div data-testid="popoverTestid">children</div>
      </Popover>,
    );

    await act(async () => {
      expect(screen.getByText('This is a popover')).toBeInTheDocument();

      const $childrenDom = screen.getByTestId('popoverTestid');

      // 即使 open=true，点击 children 也不应该关闭弹窗
      userEvent.click($childrenDom);
      expect(screen.getByText('This is a popover')).toBeInTheDocument();

      // 全局点击也不应该关闭弹窗
      userEvent.click(document.body);
      expect(screen.getByText('This is a popover')).toBeInTheDocument();
    });
  });

  it('test trigger none with defaultOpen', async () => {
    render(
      <Popover title="This is a popover" trigger="none" defaultOpen={true}>
        <div data-testid="popoverTestid">children</div>
      </Popover>,
    );

    await act(async () => {
      // defaultOpen=true 时弹窗应该显示
      expect(screen.getByText('This is a popover')).toBeInTheDocument();

      const $childrenDom = screen.getByTestId('popoverTestid');

      // 任何交互都不应该关闭弹窗
      userEvent.click($childrenDom);
      expect(screen.getByText('This is a popover')).toBeInTheDocument();

      fireEvent.mouseEnter($childrenDom);
      fireEvent.mouseLeave($childrenDom);
      expect(screen.getByText('This is a popover')).toBeInTheDocument();
    });
  });
});
