import React from 'react';
import { render, screen } from 'testing';
import Portal from '../index';

describe('Portal', () => {
  it('should have access to the mountNode', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { unmount } = render(
      <Portal ref={ref}>
        <div>hello</div>
      </Portal>,
    );
    expect(ref.current).toEqual(document.body);
    unmount();
    expect(ref.current).toEqual(null);
  });

  it('should have access to the mountNode when disabledPortal equal true', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { unmount, rerender } = render(
      <Portal ref={ref} disablePortal>
        <div data-testid="mountNode">hello</div>
      </Portal>,
    );
    expect(ref.current).toEqual(screen.getByTestId('mountNode'));
    rerender(
      <Portal ref={ref}>
        <div data-testid="mountNode">hello</div>
      </Portal>,
    );
    expect(ref.current).toEqual(document.body);
    unmount();
    expect(ref.current).toEqual(null);
  });

  it('should render in a different node', () => {
    render(
      <div data-testid="root">
        <h1 data-testid="Hello">Hello</h1>
        <Portal>
          <h1 data-testid="World">World</h1>
        </Portal>
      </div>,
    );
    const rootElement = screen.getByTestId('root');
    expect(rootElement.contains(screen.getByTestId('Hello'))).toEqual(true);
    expect(rootElement.contains(screen.getByTestId('World'))).toEqual(false);
  });

  it('should change container on prop change', () => {
    const containerRef = React.createRef<HTMLDivElement>();
    const { rerender } = render(
      <span>
        <strong ref={containerRef} />
        <Portal container={() => containerRef.current} disablePortal>
          <div data-testid="test" />
        </Portal>
      </span>,
    );
    expect(screen.getByTestId('test').parentElement.tagName).toEqual('SPAN');

    rerender(
      <span>
        <strong ref={containerRef} />
        <Portal container={() => containerRef.current}>
          <div data-testid="test" />
        </Portal>
      </span>,
    );
    expect(screen.getByTestId('test').parentElement.tagName).toEqual('STRONG');

    rerender(
      <span>
        <strong ref={containerRef} />
        <Portal>
          <div data-testid="test" />
        </Portal>
      </span>,
    );
    expect(screen.getByTestId('test').parentElement.tagName).toEqual('BODY');
  });

  it('container will have the portal children appended to it', () => {
    const containerRef = React.createRef<HTMLDivElement>();
    render(
      <>
        <div ref={containerRef} data-testid="container" />
        <Portal container={() => containerRef.current}>
          <div data-testid="test" />
        </Portal>
      </>,
    );
    expect(
      screen.getByTestId('container').contains(screen.getByTestId('test')),
    ).toEqual(true);
  });

  it('test onRootElementMouted props', () => {
    const onRootElementMouted = jest.fn();
    const containerRef = React.createRef<HTMLDivElement>();
    render(
      <>
        <div ref={containerRef} data-testid="container" />
        <Portal
          container={() => containerRef.current}
          onRootElementMouted={onRootElementMouted}
        >
          <div data-testid="test" />
        </Portal>
      </>,
    );
    expect(onRootElementMouted).toHaveBeenCalled();
  });
});
