import React from 'react';
import { render, isConformant, screen } from 'testing';
import Skeleton from '../index';

describe('Skeleton', () => {
  const rootClass = 'bui-skeleton';

  isConformant({
    Component: Skeleton,
    displayName: 'BuiSkeleton',
    className: rootClass,
  });
  it('should render with children', () => {
    render(<Skeleton>Skeleton</Skeleton>);
    expect(screen.getByText('Skeleton')).toHaveClass(
      `${rootClass}-animation-wave`,
    );
    expect(screen.getByText('Skeleton')).toHaveClass(
      `${rootClass}-with-children`,
    );
  });

  it.each(['wave', 'pulse'] as const)(
    'should render correctly with animation props',
    (animation) => {
      render(<Skeleton animation={animation}>Skeleton</Skeleton>);
      expect(screen.getByText('Skeleton')).toHaveClass(
        `${rootClass}-animation-${animation}`,
      );
    },
  );

  it('when animation is false not has animation class', () => {
    render(<Skeleton animation={false}>Skeleton</Skeleton>);
    expect(screen.getByText('Skeleton').getAttribute('class')).not.toMatch(
      /bui-skeleton-animation-/gi,
    );
  });
  it.each(['text', 'circular', 'rectangular', 'rounded'] as const)(
    'should render correctly with variant props',
    (variant) => {
      render(<Skeleton variant={variant}>Skeleton</Skeleton>);
      expect(screen.getByText('Skeleton')).toHaveClass(
        `${rootClass}-${variant}`,
      );
    },
  );

  it('can set width and height in style', () => {
    render(
      <Skeleton width="48px" height="48px">
        Skeleton
      </Skeleton>,
    );
    expect(screen.getByText('Skeleton')).toHaveStyle({
      width: '48px',
      height: '48px',
    });
    expect(screen.getByText('Skeleton')).toMatchSnapshot();
  });
});
