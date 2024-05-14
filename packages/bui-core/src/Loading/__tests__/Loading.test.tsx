import React from 'react';
import { render, screen, isConformant } from 'testing';
import Loading from '../index';

describe('Loading', () => {
  const rootClass = 'bui-loading';

  isConformant({
    Component: Loading,
    displayName: 'BuiLoading',
    className: rootClass,
  });

  it('default render have bui-loading-vertical classname', async () => {
    render(<Loading data-testid={rootClass} />);
    expect(screen.getByTestId(rootClass)).toHaveClass('bui-loading');
    expect(screen.getByTestId(rootClass)).toHaveClass('bui-loading-vertical');
  });

  it('text chilren render have wrapper', async () => {
    render(<Loading data-testid={rootClass}>加载中...</Loading>);
    expect(screen.getByText('加载中...')).toHaveClass('bui-loading-text');
    expect(screen.getByTestId(rootClass)).toContainElement(
      screen.getByText('加载中...'),
    );
  });

  it('horizontal render correctly', async () => {
    render(<Loading data-testid={rootClass} direction="horizontal" />);
    expect(screen.getByTestId(rootClass)).not.toHaveClass(
      'bui-loading-vertical',
    );
    expect(screen.getByTestId(rootClass)).toHaveClass('bui-loading-horizontal');
  });
});
