import React from 'react';
import { render } from 'testing';
import Slide from '.';

it('should render content', () => {
  const { getByTestId } = render(
    <Slide
      in
      direction="down"
      timeout={{
        enter: 2000,
        exit: 1000,
      }}
    >
      <div data-testid="content">滑动效果</div>
    </Slide>,
  );
  expect(getByTestId('content')).toHaveTextContent('滑动效果');
});
