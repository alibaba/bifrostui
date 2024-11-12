import React from 'react';
import { act } from 'testing';
import {
  render as reactRender,
  unmount,
  testModernRender,
  testLegacyUnmount,
} from '../render';

describe('Render and Unmount', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should render a React element', () => {
    const TestComponent = () => <div>Hello, World!</div>;

    act(() => {
      reactRender(<TestComponent />, container);
    });

    expect(container.firstChild).toBeTruthy();
    expect(container.firstChild).toHaveTextContent('Hello, World!');
  });

  it('should unmount a React element', async () => {
    const TestComponent = () => <div>Goodbye, World!</div>;

    act(() => {
      reactRender(<TestComponent />, container);
    });

    expect(container.firstChild).toBeTruthy();

    await act(async () => {
      await unmount(container);
    });

    expect(container.firstChild).toBeNull();
  });

  it('React 17 render & unmount', async () => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    // Mount
    act(() => {
      testModernRender(<div className="test-react17-render" />, div, true);
    });
    expect(div.querySelector('.test-react17-render')).toBeTruthy();

    // Unmount
    act(() => {
      testLegacyUnmount(div, true);
    });
    expect(div.querySelector('.test-react17-render')).toBeFalsy();
  });
});
