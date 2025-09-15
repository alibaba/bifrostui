import React from 'react';
import { vi } from 'vitest';
import { render, waitFor } from 'testing';
import Slide from '../Slide';

describe('Slide', () => {
  it('renders correctly', () => {
    const { queryByTestId } = render(
      <Slide in={false} direction="down" timeout={1000}>
        <div data-testid="slide-test">slide test</div>
      </Slide>,
    );
    // 当 in=false 时，组件处于 exited 状态，transition 为 none
    expect(queryByTestId('slide-test')).toHaveStyle('transition: none;');
    expect(queryByTestId('slide-test')).toHaveStyle(
      'transform: translateY(-100%);',
    );
  });

  it('should apply transition during entering state and remove it when entered', async () => {
    const onEntering = vi.fn();
    const onEntered = vi.fn();

    const { getByTestId, rerender } = render(
      <Slide
        in={false}
        direction="down"
        timeout={1500}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div data-testid="slide-test">slide test</div>
      </Slide>,
    );

    // 初始状态：in=false，应该是 exited 状态
    expect(getByTestId('slide-test').style.transform).toBe('translateY(-100%)');
    expect(getByTestId('slide-test').style.visibility).toBe('hidden');

    // 切换到 in=true，触发进入动画
    rerender(
      <Slide
        in
        direction="down"
        timeout={1500}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div data-testid="slide-test">slide test</div>
      </Slide>,
    );

    // 验证 entering 状态：应该有 transition 属性，使用正确的 easeOut cubic-bezier 值
    await waitFor(() => {
      expect(onEntering).toHaveBeenCalled();
    });

    const element = getByTestId('slide-test');
    expect(element.style.transition).toMatch(
      /transform.*1500ms.*cubic-bezier\(0\.0, 0, 0\.2, 1\)/,
    );
    expect(element.style.transform).toBe('none');
    expect(element.style.visibility).toBe('visible');

    // 等待动画完成，验证 entered 状态：transition 应该变为 none
    await waitFor(
      () => {
        expect(onEntered).toHaveBeenCalled();
      },
      { timeout: 2000 },
    );

    expect(element.style.transition).toBe('none');
    expect(element.style.transform).toBe('none');
    expect(element.style.visibility).toBe('visible');
  });

  it.each(['down', 'up', 'left', 'right'])(
    'slides in from different direction',
    (direction) => {
      const { queryByTestId } = render(
        <Slide
          direction={direction as 'down' | 'up' | 'left' | 'right'}
          timeout={{
            enter: 2000,
            exit: 1000,
          }}
        >
          <div data-testid="slide-test">slide test</div>
        </Slide>,
      );
      const getTranslateValue = (_direction) => {
        if (_direction === 'left') {
          return 'translateX(100%)';
        }

        if (_direction === 'right') {
          return 'translateX(-100%)';
        }

        if (_direction === 'up') {
          return 'translateY(100%)';
        }

        // direction === 'down'
        return 'translateY(-100%)';
      };
      expect(queryByTestId('slide-test')).toHaveStyle(
        `transform: ${getTranslateValue(direction)}`,
      );
    },
  );
});
