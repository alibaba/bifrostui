import React from 'react';
import { render, screen } from 'testing';
import Modal from '../Modal';

const mockBackdropFn = jest.fn();
// eslint-disable-next-line react/display-name
jest.mock('../../Backdrop', () => (props: any) => {
  mockBackdropFn(props);
  const { children, onClick } = props;
  return (
    <div data-testid="backdrop-mock" onClick={onClick}>
      {children}
    </div>
  );
});

const mockPortalFn = jest.fn();
jest.mock('../../Portal', () =>
  // eslint-disable-next-line react/display-name
  React.forwardRef((props: any, ref: any) => {
    mockPortalFn(props);
    return <div ref={ref}>{props.children}</div>;
  }),
);

describe('Modal', () => {
  it('should render content when open', () => {
    const { getByText } = render(
      <Modal open className="demo-modal">
        <div className="content">content</div>
      </Modal>,
    );
    expect(getByText('content')).toHaveTextContent('content');
  });
  it('should not render when closed', () => {
    const { queryByTestId } = render(
      <Modal open={false} className="demo-modal">
        <div className="content" data-testid="test-modal-content">
          content
        </div>
      </Modal>,
    );
    expect(queryByTestId('test-modal-content')).toBeNull();
  });
  it('should be able to hide BackDrop', () => {
    const { queryByTestId } = render(
      <Modal open className="demo-modal" hideBackdrop>
        <div className="content" data-testid="test-modal-content">
          content
        </div>
      </Modal>,
    );
    expect(queryByTestId('backdrop-mock')).toBeNull();
  });
  it('should pass props to BackDrop', () => {
    render(
      <Modal open BackdropProps={{ invisible: true }}>
        <div className="content" data-testid="test-modal-content">
          content
        </div>
      </Modal>,
    );
    expect(mockBackdropFn).toHaveBeenCalledWith(
      expect.objectContaining({ invisible: true }),
    );
  });
  it('should be able to disable portal', () => {
    render(
      <Modal open disablePortal>
        <div className="content" data-testid="test-modal-content">
          content
        </div>
      </Modal>,
    );
    expect(mockPortalFn).toHaveBeenCalledWith(
      expect.objectContaining({ disablePortal: true }),
    );
  });
  it('should call onClose when backdrop clicked', () => {
    const closefn = jest.fn();
    render(
      <Modal open onClose={closefn}>
        <div className="content" data-testid="test-modal-content">
          content
        </div>
      </Modal>,
    );
    screen.getByTestId('backdrop-mock').click();
    expect(closefn).toHaveBeenCalled();
  });
});
