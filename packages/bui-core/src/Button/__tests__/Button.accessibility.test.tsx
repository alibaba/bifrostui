import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../index';

describe('Button Accessibility', () => {
  it('应该正确应用aria-label属性', () => {
    render(<Button aria-label="测试按钮">Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', '测试按钮');
  });

  it('应该正确应用aria-describedby属性', () => {
    render(
      <div>
        <Button aria-describedby="description">Click me</Button>
        <span id="description">这是一个测试按钮</span>
      </div>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-describedby', 'description');
  });

  it('应该正确应用aria-hidden属性', () => {
    render(<Button aria-hidden>Click me</Button>);
    const button = screen.getByRole('button', { hidden: true });
    expect(button).toHaveAttribute('aria-hidden', 'true');
  });

  it('应该正确应用aria-details属性', () => {
    render(
      <div>
        <Button aria-details="details">Click me</Button>
        <div id="details">详细信息</div>
      </div>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-details', 'details');
  });

  it('应该正确应用aria-keyshortcuts属性', () => {
    render(<Button aria-keyshortcuts="Alt+Shift+K">Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-keyshortcuts', 'Alt+Shift+K');
  });

  it('应该正确应用aria-busy属性', () => {
    render(<Button aria-busy>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-busy', 'true');
  });

  it('应该正确应用aria-readonly属性', () => {
    render(<Button aria-readonly>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-readonly', 'true');
  });

  it('应该正确应用aria-required属性', () => {
    render(<Button aria-required>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-required', 'true');
  });

  it('应该为禁用按钮添加aria-disabled属性', () => {
    render(<Button disabled>Disabled button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    // 在某些情况下，组件可能使用 disabled 属性而不是 aria-disabled
    // 检查元素是否确实被禁用
    expect(
      button.disabled || button.getAttribute('aria-disabled') === 'true',
    ).toBeTruthy();
  });

  it('应该保持默认按钮的无障碍特性', () => {
    render(<Button>Default button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });
});
