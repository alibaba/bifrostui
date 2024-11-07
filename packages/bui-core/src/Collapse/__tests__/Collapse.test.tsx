import React from 'react';
import { render, screen } from 'testing';
import Collapse from '../Collapse';

describe('Collapse', () => {
  it('renders correctly', () => {
    render(
      <Collapse in timeout={1000}>
        <div>Collapse</div>
      </Collapse>,
    );
    expect(document.querySelector('.bui-collapse')).toHaveStyle(
      'transition: height 1000ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    );
  });
  it.each(['horizontal', 'vertical'])(
    'collapse in from different direction',
    (direction) => {
      render(
        <Collapse in direction={direction as 'horizontal' | 'vertical'}>
          <div
            className="bui-collapse-content"
            style={{ height: '100px', width: '100px' }}
          >
            Collapse
          </div>
        </Collapse>,
      );
      const size = direction === 'horizontal' ? 'width' : 'height';
      const getSize = (_size) => {
        // eslint-disable-next-line no-underscore-dangle
        return screen.getByText('Collapse').style[_size];
      };
      expect(document.querySelector('.bui-collapse')).toHaveStyle(
        `${size}: fit-content`,
      );
      setTimeout(() => {
        expect(document.querySelector('.bui-collapse')).toHaveStyle(
          `${size}: ${getSize(size)}`,
        );
      }, 2000);
    },
  );
  it.each(['50px', 50])('render width collapsedSize correctly', (size) => {
    render(
      <Collapse in={false} collapsedSize={size}>
        <div>Collapse</div>
      </Collapse>,
    );
    expect(document.querySelector('.bui-collapse')).toHaveStyle('height: 50px');
  });

  it('render null when children is null', () => {
    render(<Collapse />);
    expect(document.querySelector('.bui-collapse')).toBeNull();
  });
});
