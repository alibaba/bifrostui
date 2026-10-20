import * as React from 'react';
import { isConformant, render, screen, userEvent } from 'testing';
import Progress from '../index';
import { handleGradient } from '../Progress';

describe('Progress', () => {
  const rootClass = 'bui-progress';

  isConformant({
    Component: Progress,
    displayName: 'BuiProgress',
    className: rootClass,
  });

  it('renders correctly', () => {
    render(
      <Progress percent={54} strokeColor="#582331" data-testid="progress" />,
    );
    expect(screen.getByTestId('progress')).toMatchSnapshot();
  });

  it('should render correctly with percent props', () => {
    const P1 = render(<Progress percent={55} />);
    const P2 = render(<Progress percent={101} />);
    expect(P1.container.querySelector('.bui-progress-bg')).toHaveStyle({
      width: '55%',
    });
    expect(P2.container.querySelector('.bui-progress-bg')).toHaveStyle({
      width: '100%',
    });
  });

  it('can customize the color of the progress bar', () => {
    const { container } = render(<Progress percent={55} strokeColor="red" />);
    expect(container.querySelector('.bui-progress-bg')).toHaveStyle({
      background: 'red',
    });
  });

  it('can customize the color of the progress bar as gradient', () => {
    expect(
      handleGradient({
        from: 'red',
        to: 'blue',
        direction: 'to right',
        '0%': 'green',
        '50%': 'yellow',
        '100%': 'purple',
      }).backgroundImage,
    ).toBe('linear-gradient(to right, green 0%, yellow 50%, purple 100%)');
    expect(
      handleGradient({ '0%': '#108ee9', '100%': '#87d068' }).backgroundImage,
    ).toBe('linear-gradient(to right, #108ee9 0%, #87d068 100%)');
    expect(
      handleGradient({ from: 'red', to: 'blue', direction: 'to right' })
        .backgroundImage,
    ).toBe('linear-gradient(to right, red, blue)');
  });

  it('can customize the width of the progress bar', () => {
    const { container } = render(<Progress percent={55} strokeWidth={15} />);
    expect(container.querySelector('.bui-progress-bg')).toHaveStyle({
      height: '15px',
    });
  });

  it('can trigger a function by being clicked', async () => {
    const onClick = vi.fn();
    render(<Progress percent={55} data-testid="progress" onClick={onClick} />);
    await userEvent.click(screen.getByTestId('progress'));
    expect(onClick).toHaveBeenCalled();
  });

  describe('Accessibility', () => {
    it('should have default progressbar role', () => {
      render(<Progress percent={50} data-testid="progress" />);
      const progressbar = screen.getByRole('progressbar');
      expect(progressbar).toBeInTheDocument();
    });

    it('should have correct ARIA attributes with default values', () => {
      render(<Progress percent={75} data-testid="progress" />);
      const progressbar = screen.getByRole('progressbar');

      expect(progressbar).toHaveAttribute('aria-valuenow', '75');
      expect(progressbar).toHaveAttribute('aria-valuemin', '0');
      expect(progressbar).toHaveAttribute('aria-valuemax', '100');
      expect(progressbar).toHaveAttribute('role', 'progressbar');
    });

    it('should support custom ARIA attributes', () => {
      render(
        <Progress
          percent={60}
          aria-valuenow={60}
          aria-valuemin={10}
          aria-valuemax={90}
          aria-valuetext="Custom progress text"
          data-testid="progress"
        />,
      );
      const progressbar = screen.getByRole('progressbar');

      expect(progressbar).toHaveAttribute('aria-valuenow', '60');
      expect(progressbar).toHaveAttribute('aria-valuemin', '10');
      expect(progressbar).toHaveAttribute('aria-valuemax', '90');
      expect(progressbar).toHaveAttribute(
        'aria-valuetext',
        'Custom progress text',
      );
    });

    it('should generate appropriate aria-valuetext for different progress values', () => {
      // Test 0% - Not started
      const { rerender } = render(
        <Progress percent={0} data-testid="progress" />,
      );
      let progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuetext', '未开始');

      // Test 5% - Just begun
      rerender(<Progress percent={5} data-testid="progress" />);
      progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuetext', '刚刚开始');

      // Test 15% - Getting started
      rerender(<Progress percent={15} data-testid="progress" />);
      progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuetext', '开始进行');

      // Test 35% - In progress
      rerender(<Progress percent={35} data-testid="progress" />);
      progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuetext', '进行中');

      // Test 60% - More than halfway
      rerender(<Progress percent={60} data-testid="progress" />);
      progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuetext', '过半完成');

      // Test 80% - Nearing completion
      rerender(<Progress percent={80} data-testid="progress" />);
      progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuetext', '接近完成');

      // Test 95% - Almost complete
      rerender(<Progress percent={95} data-testid="progress" />);
      progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuetext', '即将完成');

      // Test 100% - Complete
      rerender(<Progress percent={100} data-testid="progress" />);
      progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuetext', '已完成');
    });

    it('should handle edge cases for progress values', () => {
      // Test negative value
      const { rerender } = render(
        <Progress percent={-10} data-testid="progress" />,
      );
      let progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '0');
      expect(progressbar).toHaveAttribute('aria-valuetext', '未开始');

      // Test value over 100
      rerender(<Progress percent={150} data-testid="progress" />);
      progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '100');
      expect(progressbar).toHaveAttribute('aria-valuetext', '已完成');

      // Test undefined value
      rerender(<Progress data-testid="progress" />);
      progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '0');
      expect(progressbar).toHaveAttribute('aria-valuetext', '未开始');
    });

    it('should prioritize custom aria-valuetext over generated text', () => {
      render(
        <Progress
          percent={50}
          aria-valuetext="Custom halfway message"
          data-testid="progress"
        />,
      );
      const progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute(
        'aria-valuetext',
        'Custom halfway message',
      );
    });

    it('should handle custom aria-valuenow correctly', () => {
      render(
        <Progress percent={75} aria-valuenow={80} data-testid="progress" />,
      );
      const progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '80');
      // Visual progress should still be 75%
      const progressBg = progressbar.querySelector('.bui-progress-bg');
      expect(progressBg).toHaveStyle({ width: '75%' });
    });

    it('should work with gradient colors and maintain accessibility', () => {
      render(
        <Progress
          percent={65}
          strokeColor={{ from: 'red', to: 'blue' }}
          data-testid="progress"
        />,
      );
      const progressbar = screen.getByRole('progressbar');

      expect(progressbar).toHaveAttribute('role', 'progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '65');
      expect(progressbar).toHaveAttribute('aria-valuetext', '过半完成');

      // Check gradient is applied
      const progressBg = progressbar.querySelector('.bui-progress-bg');
      expect(progressBg).toHaveStyle({
        backgroundImage: 'linear-gradient(to right, red, blue)',
      });
    });

    it('should be accessible with screen readers', () => {
      render(<Progress percent={42} data-testid="progress" />);
      const progressbar = screen.getByRole('progressbar');

      // Check all required ARIA attributes are present
      expect(progressbar).toHaveAttribute('role', 'progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow');
      expect(progressbar).toHaveAttribute('aria-valuemin');
      expect(progressbar).toHaveAttribute('aria-valuemax');
      expect(progressbar).toHaveAttribute('aria-valuetext');

      // Check values are meaningful
      const valuenow = progressbar.getAttribute('aria-valuenow');
      const valuemin = progressbar.getAttribute('aria-valuemin');
      const valuemax = progressbar.getAttribute('aria-valuemax');

      expect(Number(valuenow)).toBeGreaterThanOrEqual(Number(valuemin));
      expect(Number(valuenow)).toBeLessThanOrEqual(Number(valuemax));
    });

    it('should handle boundary values correctly', () => {
      // Test exact boundary values
      const testCases = [
        { percent: 0, expected: '未开始' },
        { percent: 10, expected: '开始进行' },
        { percent: 25, expected: '进行中' },
        { percent: 50, expected: '过半完成' },
        { percent: 75, expected: '接近完成' },
        { percent: 90, expected: '即将完成' },
        { percent: 100, expected: '已完成' },
      ];

      testCases.forEach(({ percent, expected }) => {
        const { container } = render(<Progress percent={percent} />);
        const progressbar = container.querySelector('[role="progressbar"]');
        expect(progressbar).toHaveAttribute('aria-valuetext', expected);
      });
    });
  });
});
