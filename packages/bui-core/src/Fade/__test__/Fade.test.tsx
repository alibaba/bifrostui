import React from 'react';
import { render } from 'testing';
import Fade from '../Fade';

describe('Fade', () => {
  it('renders correctly', () => {
    const { queryByTestId } = render(
      <Fade in appear={false} timeout={1500}>
        <div data-testid="fade-test">fade test</div>
      </Fade>,
    );
    expect(queryByTestId('fade-test').style.opacity).toEqual('1');
  });
  it('can hide when not in', () => {
    const { queryByTestId } = render(
      <Fade in={false} timeout={1500}>
        <div data-testid="fade-test">fade test</div>
      </Fade>,
    );
    expect(queryByTestId('fade-test').style.transition).not.toMatch(
      'opacity 1500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    );
    expect(queryByTestId('fade-test').style.opacity).toEqual('0');
    expect(queryByTestId('fade-test').style.visibility).toEqual('hidden');
  });
  it('can fade instantly if appear', () => {
    const { queryByTestId } = render(
      <Fade in={false} appear timeout={1500}>
        <div data-testid="fade-test">fade test</div>
      </Fade>,
    );
    expect(queryByTestId('fade-test').style.transition).not.toMatch(
      'opacity 1500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    );
    expect(queryByTestId('fade-test').style.opacity).toEqual('0');
    expect(queryByTestId('fade-test').style.visibility).toEqual('hidden');
  });
});
