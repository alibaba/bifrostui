import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Popover from '../Popover';

describe('Popover Accessibility', () => {
  it('应该为触发元素添加正确的ARIA属性', () => {
    render(
      <Popover title="测试标题" content="测试内容">
        <button>触发按钮</button>
      </Popover>
    );

    const trigger = screen.getByRole('button');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
  });

  it('应该在打开时更新ARIA属性', () => {
    render(
      <Popover title="测试标题" content="测试内容" open>
        <button>触发按钮</button>
      </Popover>
    );

    const trigger = screen.getByRole('button');
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(trigger).toHaveAttribute('aria-describedby');
  });

  it('应该为Popover内容添加正确的role和ARIA属性', () => {
    render(
      <Popover title="测试标题" content="测试内容" open>
        <button>触发按钮</button>
      </Popover>
    );

    const popover = screen.getByRole('tooltip');
    expect(popover).toBeInTheDocument();
    expect(popover).toHaveAttribute('id');
  });

  it('应该支持自定义role', () => {
    render(
      <Popover title="测试标题" content="测试内容" open role="dialog">
        <button>触发按钮</button>
      </Popover>
    );

    const popover = screen.getByRole('dialog');
    expect(popover).toBeInTheDocument();
  });

  it('应该支持aria-label', () => {
    render(
      <Popover 
        title="测试标题" 
        content="测试内容" 
        open 
        aria-label="自定义标签"
      >
        <button>触发按钮</button>
      </Popover>
    );

    const popover = screen.getByRole('tooltip');
    expect(popover).toHaveAttribute('aria-label', '自定义标签');
  });

  it('应该支持Escape键关闭', () => {
    const onOpenChange = jest.fn();
    render(
      <Popover 
        title="测试标题" 
        content="测试内容" 
        defaultOpen
        onOpenChange={onOpenChange}
      >
        <button>触发按钮</button>
      </Popover>
    );

    // 按下Escape键
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onOpenChange).toHaveBeenCalledWith(
      expect.any(Object),
      { open: false }
    );
  });

  it('应该在autoFocus为true时自动获取焦点', async () => {
    render(
      <Popover 
        title="测试标题" 
        content="测试内容" 
        open
        autoFocus
      >
        <button>触发按钮</button>
      </Popover>
    );

    // 等待焦点设置
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const popover = screen.getByRole('tooltip');
    expect(popover).toHaveFocus();
  });

  it('应该在closeOnEscape为false时不响应Escape键', () => {
    const onOpenChange = jest.fn();
    render(
      <Popover 
        title="测试标题" 
        content="测试内容" 
        defaultOpen
        closeOnEscape={false}
        onOpenChange={onOpenChange}
      >
        <button>触发按钮</button>
      </Popover>
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it('应该为不同role设置正确的aria-haspopup', () => {
    const { rerender } = render(
      <Popover title="测试" content="测试" role="menu">
        <button>触发按钮</button>
      </Popover>
    );

    let trigger = screen.getByRole('button');
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu');

    rerender(
      <Popover title="测试" content="测试" role="listbox">
        <button>触发按钮</button>
      </Popover>
    );

    trigger = screen.getByRole('button');
    expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');

    rerender(
      <Popover title="测试" content="测试" role="dialog">
        <button>触发按钮</button>
      </Popover>
    );

    trigger = screen.getByRole('button');
    expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
  });
});
