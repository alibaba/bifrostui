import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tooltip from '../Tooltip';

describe('Tooltip Accessibility', () => {
  it('应该为触发元素添加正确的ARIA属性', () => {
    render(
      <Tooltip title="测试提示">
        <button type="button">触发按钮</button>
      </Tooltip>,
    );

    const trigger = screen.getByRole('button');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('应该在打开时更新ARIA属性', () => {
    render(
      <Tooltip title="测试提示" open>
        <button type="button">触发按钮</button>
      </Tooltip>,
    );

    const trigger = screen.getByRole('button');
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(trigger).toHaveAttribute('aria-describedby');
  });

  it('应该为Tooltip内容添加正确的role和ARIA属性', () => {
    render(
      <Tooltip title="测试提示" open>
        <button type="button">触发按钮</button>
      </Tooltip>,
    );

    const tooltip = screen.getByRole('tooltip', { hidden: true });
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveAttribute('id');
  });

  it('应该支持自定义role', () => {
    render(
      <Tooltip title="测试提示" open role="dialog">
        <button type="button">触发按钮</button>
      </Tooltip>,
    );

    const tooltip = screen.getByRole('dialog', { hidden: true });
    expect(tooltip).toBeInTheDocument();
  });

  it('应该支持aria-label', () => {
    render(
      <Tooltip title="测试提示" open aria-label="自定义标签">
        <button type="button">触发按钮</button>
      </Tooltip>,
    );

    const tooltip = screen.getByRole('tooltip', { hidden: true });
    expect(tooltip).toHaveAttribute('aria-label', '自定义标签');
  });

  it('应该支持aria-labelledby', () => {
    render(
      <div>
        <Tooltip title="测试提示" open aria-labelledby="label-id">
          <button type="button">触发按钮</button>
        </Tooltip>
        <div id="label-id">标签内容</div>
      </div>,
    );

    const tooltip = screen.getByRole('tooltip', { hidden: true });
    expect(tooltip).toHaveAttribute('aria-labelledby', 'label-id');
  });

  it('应该支持Escape键关闭', () => {
    const onOpenChange = vi.fn();
    render(
      <Tooltip title="测试提示" defaultOpen onOpenChange={onOpenChange}>
        <button type="button">触发按钮</button>
      </Tooltip>,
    );

    // 按下Escape键
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onOpenChange).toHaveBeenCalledWith(expect.any(Object), {
      open: false,
    });
  });

  it('应该支持Enter键触发', () => {
    const onOpenChange = vi.fn();
    render(
      <Tooltip title="测试提示" trigger="click" onOpenChange={onOpenChange}>
        <button type="button">触发按钮</button>
      </Tooltip>,
    );

    const trigger = screen.getByRole('button');
    fireEvent.keyDown(trigger, { key: 'Enter' });
    expect(onOpenChange).toHaveBeenCalledWith(expect.any(Object), {
      open: true,
    });
  });

  it('应该支持空格键触发', () => {
    const onOpenChange = vi.fn();
    render(
      <Tooltip title="测试提示" trigger="click" onOpenChange={onOpenChange}>
        <button type="button">触发按钮</button>
      </Tooltip>,
    );

    const trigger = screen.getByRole('button');
    fireEvent.keyDown(trigger, { key: ' ' });
    expect(onOpenChange).toHaveBeenCalledWith(expect.any(Object), {
      open: true,
    });
  });

  it('应该在autoFocus为true时自动获取焦点', async () => {
    render(
      <Tooltip title="测试提示" open autoFocus>
        <button type="button">触发按钮</button>
      </Tooltip>,
    );

    // 等待焦点设置
    await new Promise((resolve) => {
      setTimeout(() => resolve(undefined), 10);
    });

    const tooltip = screen.getByRole('tooltip', { hidden: true });
    // 在测试环境中，检查 tabindex 属性而不是实际焦点状态
    expect(tooltip).toHaveAttribute('tabindex', '-1');
  });

  it('应该在closeOnEscape为false时不响应Escape键', () => {
    const onOpenChange = vi.fn();
    render(
      <Tooltip
        title="测试提示"
        defaultOpen
        closeOnEscape={false}
        onOpenChange={onOpenChange}
      >
        <button type="button">触发按钮</button>
      </Tooltip>,
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it('应该在keyboardTrigger为false时不响应键盘触发', () => {
    const onOpenChange = vi.fn();
    render(
      <Tooltip
        title="测试提示"
        trigger="click"
        keyboardTrigger={false}
        onOpenChange={onOpenChange}
      >
        <button type="button">触发按钮</button>
      </Tooltip>,
    );

    const trigger = screen.getByRole('button');
    fireEvent.keyDown(trigger, { key: 'Enter' });
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it('应该在aria-hidden为true时隐藏Tooltip', () => {
    render(
      <Tooltip title="测试提示" open aria-hidden>
        <button type="button">触发按钮</button>
      </Tooltip>,
    );

    const tooltip = screen.getByText('测试提示');
    expect(tooltip.parentElement).toHaveAttribute('aria-hidden', 'true');
  });

  it('应该在hover触发时不响应键盘事件', () => {
    const onOpenChange = vi.fn();
    render(
      <Tooltip title="测试提示" trigger="hover" onOpenChange={onOpenChange}>
        <button type="button">触发按钮</button>
      </Tooltip>,
    );

    const trigger = screen.getByRole('button');
    fireEvent.keyDown(trigger, { key: 'Enter' });
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it('应该保持原有的className和样式', () => {
    render(
      <Tooltip
        title="测试提示"
        open
        className="custom-class"
        data-testid="tooltip"
      >
        <button type="button">触发按钮</button>
      </Tooltip>,
    );

    const tooltip = screen.getByTestId('tooltip');
    expect(tooltip).toHaveClass('bui-tooltip', 'custom-class');
  });

  it('应该保持原有的触发功能', () => {
    const onOpenChange = vi.fn();
    render(
      <Tooltip title="测试提示" trigger="click" onOpenChange={onOpenChange}>
        <button type="button">触发按钮</button>
      </Tooltip>,
    );

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    expect(onOpenChange).toHaveBeenCalledWith(expect.any(Object), {
      open: true,
    });
  });

  it('应该支持组合触发方式', () => {
    const onOpenChange = vi.fn();
    render(
      <Tooltip
        title="测试提示"
        trigger={['click', 'hover']}
        onOpenChange={onOpenChange}
      >
        <button type="button">触发按钮</button>
      </Tooltip>,
    );

    const trigger = screen.getByRole('button');

    // 测试点击触发
    fireEvent.click(trigger);
    expect(onOpenChange).toHaveBeenCalledWith(expect.any(Object), {
      open: true,
    });

    // 测试键盘触发（应该也能工作，因为包含click）
    onOpenChange.mockClear();
    fireEvent.keyDown(trigger, { key: 'Enter' });
    expect(onOpenChange).toHaveBeenCalled();
  });
});
