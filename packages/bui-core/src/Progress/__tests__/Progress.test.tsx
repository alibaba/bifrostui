import React from 'react';
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
});
