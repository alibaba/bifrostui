import React from 'react';
import { render } from 'testing';
import Slide from '../Slide';

describe('Slide', () => {
  it('renders correctly', () => {
    const { queryByTestId } = render(
      <Slide in direction="down" timeout={1000}>
        <div data-testid="slide-test">slide test</div>
      </Slide>,
    );
    expect(queryByTestId('slide-test')).toHaveStyle(
      'transition: transform 1000ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
    );
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
