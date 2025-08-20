import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Progress from '../index';

describe('Progress Accessibility', () => {
  it('应该正确应用aria-label属性', () => {
    render(<Progress percent={50} aria-label="下载进度" />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-label', '下载进度');
  });

  it('应该正确应用aria-describedby属性', () => {
    render(
      <div>
        <Progress percent={50} aria-describedby="description" />
        <span id="description">这是进度条的描述</span>
      </div>,
    );
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-describedby', 'description');
  });

  it('应该正确应用aria-hidden属性', () => {
    render(<Progress percent={50} aria-hidden />);
    const progress = screen.getByRole('progressbar', { hidden: true });
    expect(progress).toHaveAttribute('aria-hidden', 'true');
  });

  it('应该正确应用aria-details属性', () => {
    render(
      <div>
        <Progress percent={50} aria-details="details" />
        <div id="details">详细信息</div>
      </div>,
    );
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-details', 'details');
  });

  it('应该正确应用aria-busy属性', () => {
    render(<Progress percent={50} aria-busy />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-busy', 'true');
  });

  it('应该正确应用aria-readonly属性', () => {
    render(<Progress percent={50} aria-readonly />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-readonly', 'true');
  });

  it('应该正确应用aria-required属性', () => {
    render(<Progress percent={50} aria-required />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-required', 'true');
  });

  it('应该正确设置默认的aria-valuemin和aria-valuemax属性', () => {
    render(<Progress percent={50} />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuemin', '0');
    expect(progress).toHaveAttribute('aria-valuemax', '100');
  });

  it('应该正确设置aria-valuenow属性', () => {
    render(<Progress percent={50} />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuenow', '50');
  });

  it('应该正确应用自定义的aria-valuemin和aria-valuemax属性', () => {
    render(<Progress percent={50} aria-valuemin={10} aria-valuemax={90} />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuemin', '10');
    expect(progress).toHaveAttribute('aria-valuemax', '90');
  });

  it('应该正确应用aria-valuetext属性', () => {
    render(<Progress percent={50} aria-valuetext="已完成一半" />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuetext', '已完成一半');
  });

  it('应该正确处理超出范围的进度值', () => {
    render(<Progress percent={150} />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuenow', '100');
  });

  it('应该正确处理负数进度值', () => {
    render(<Progress percent={-10} />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuenow', '0');
  });

  it('应该保持默认进度条的无障碍特性', () => {
    render(<Progress percent={50} />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveAttribute('role', 'progressbar');
  });
});
