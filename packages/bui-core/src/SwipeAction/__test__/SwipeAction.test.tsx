import React from 'react';
import { render, isConformant } from 'testing';
import SwipeAction from '../SwipeAction';

describe('SwipeAction', () => {
  isConformant({
    Component: SwipeAction,
    displayName: 'BuiSwipeAction',
    className: 'bui-swipe-action',
  });
  // 正确渲染的测试用例
  it('leftActions renders correctly', () => {
    // 编排
    const { container } = render(
      <SwipeAction
        leftActions={[
          {
            key: 'delete-left',
            text: '删除',
            color: 'danger',
          },
        ]}
      ></SwipeAction>,
    );
    // 断言 存在key=delete-left的元素
    expect(container.querySelector('[key="delete-left"]')).toBeTruthy();
  });
});
