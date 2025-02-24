import React from 'react';
import { act, isConformant, render, screen, userEvent } from 'testing';
import { ActionSheet, ActionSheetItem } from '../index';

describe('ActionSheet', () => {
  const rootClass = 'bui-action-sheet';
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  isConformant({
    Component: ActionSheet,
    displayName: 'BuiActionSheet',
    className: rootClass,
    requiredProps: {
      open: true,
    },
    getTargetElement: () => {
      return document.querySelector('.bui-action-sheet');
    },
  });
  it('renders correctly', async () => {
    const { container } = render(
      <ActionSheet open disablePortal extra="extra action item">
        <ActionSheetItem>action item copy</ActionSheetItem>
        <ActionSheetItem>action item edit</ActionSheetItem>
        <ActionSheetItem disabled>action item disabled</ActionSheetItem>
        <ActionSheetItem bold>action item bold</ActionSheetItem>
        <ActionSheetItem description="description">
          action item description
        </ActionSheetItem>
      </ActionSheet>,
    );
    await act(async () => {
      await jest.runAllTimers();
    });
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should open and close', async () => {
    const { rerender } = render(
      <ActionSheet>
        <ActionSheetItem>action item copy</ActionSheetItem>
        <ActionSheetItem>action item edit</ActionSheetItem>
        <ActionSheetItem>action item delete</ActionSheetItem>
      </ActionSheet>,
    );
    expect(screen.queryAllByText(/action item/).length).toBe(0);
    rerender(
      <ActionSheet open>
        <ActionSheetItem>action item copy</ActionSheetItem>
        <ActionSheetItem>action item edit</ActionSheetItem>
        <ActionSheetItem>action item delete</ActionSheetItem>
      </ActionSheet>,
    );
    expect(screen.queryAllByText(/action item/).length).toBe(3);
  });
  it('should hide backdrop with hideBackdrop props', () => {
    render(
      <ActionSheet open hideBackdrop>
        <ActionSheetItem>action item copy</ActionSheetItem>
        <ActionSheetItem>action item edit</ActionSheetItem>
      </ActionSheet>,
    );
    expect(document.querySelector('.bui-backdrop')).not.toBeInTheDocument();
  });
  it('render extra element in first child', () => {
    render(
      <ActionSheet open extra="extra action item">
        <ActionSheetItem>action item copy</ActionSheetItem>
        <ActionSheetItem>action item edit</ActionSheetItem>
      </ActionSheet>,
    );
    const index = screen.getAllByText(/action item/).findIndex((item) => {
      return item.textContent === 'extra action item';
    });
    expect(index).toBe(0);
  });

  it('onClick can not be called when actions item disabled', () => {
    const onClick = jest.fn();
    render(
      <ActionSheet open>
        <ActionSheetItem>action item copy</ActionSheetItem>
        <ActionSheetItem disabled onClick={onClick} data-testid="disable-item">
          action item edit
        </ActionSheetItem>
      </ActionSheet>,
    );
    const disableItem = screen.getByTestId('disable-item');
    expect(disableItem).toHaveClass(`${rootClass}-item-disabled`);
    userEvent.click(disableItem);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('actions item onclick function should be called', () => {
    const onClick = jest.fn();
    render(
      <ActionSheet open>
        <ActionSheetItem>action item copy</ActionSheetItem>
        <ActionSheetItem onClick={onClick}>action item edit</ActionSheetItem>
      </ActionSheet>,
    );
    userEvent.click(screen.getByText(/action item edit/));
    expect(onClick).toHaveBeenCalled();
  });

  it('actions item with bold can render correctly', () => {
    render(
      <ActionSheet open>
        <ActionSheetItem>action item copy</ActionSheetItem>
        <ActionSheetItem bold data-testid="bold-item">
          action item edit
        </ActionSheetItem>
      </ActionSheet>,
    );
    expect(screen.getByTestId('bold-item')).toHaveClass(
      `${rootClass}-item-bold`,
    );
  });
  it('actions item with description can render correctly', () => {
    render(
      <ActionSheet open>
        <ActionSheetItem>action item copy</ActionSheetItem>
        <ActionSheetItem description="description">
          action item edit
        </ActionSheetItem>
      </ActionSheet>,
    );
    expect(screen.getByText(/description/)).toHaveClass(
      `${rootClass}-item-description`,
    );
  });
  it.each([
    'primary',
    'warning',
    'success',
    'info',
    'danger',
    'neutral',
  ] as const)(
    'action item should render correctly with color props',
    (color) => {
      render(
        <ActionSheet open>
          <ActionSheetItem color={color} data-testid="color-item">
            action item edit
          </ActionSheetItem>
        </ActionSheet>,
      );
      expect(screen.getByTestId('color-item')).toHaveClass(
        `${rootClass}-item-${color}`,
      );
    },
  );
  it('action item triggers click event', () => {
    const onClick = jest.fn((_, { index }) => index);
    render(
      <ActionSheet open>
        <ActionSheetItem index={2} onClick={onClick}>
          action item edit
        </ActionSheetItem>
      </ActionSheet>,
    );
    userEvent.click(screen.getByText('action item edit'));
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toReturnWith(2);
  });
  it('When action item triggers a click event onSelect will respond', () => {
    const onSelect = jest.fn((_, { index }) => index);
    render(
      <ActionSheet onSelect={onSelect} open>
        <ActionSheetItem index={1}>action item copy</ActionSheetItem>
        <ActionSheetItem index={2}>action item edit</ActionSheetItem>
      </ActionSheet>,
    );
    userEvent.click(screen.getByText('action item edit'));
    expect(onSelect).toHaveBeenCalled();
    expect(onSelect).toReturnWith(2);
  });

  it('last render cancelText', () => {
    render(
      <ActionSheet open cancelText="action item cancel">
        <ActionSheetItem>action item copy</ActionSheetItem>
        <ActionSheetItem bold>action item edit</ActionSheetItem>
      </ActionSheet>,
    );
    const actionItems = screen.getAllByText(/action item/);
    const index = actionItems.findIndex((item) => {
      return item.textContent === 'action item cancel';
    });
    expect(index).toBe(actionItems.length - 1);
    expect(document.querySelector(`.${rootClass}-cancel`)).toBeInTheDocument();
  });

  describe('handle onClose function', () => {
    it('onClose callback not work with default', () => {
      const onClose = jest.fn();
      render(
        <ActionSheet onClose={onClose} open>
          <ActionSheetItem>action item copy</ActionSheetItem>
          <ActionSheetItem>action item edit</ActionSheetItem>
        </ActionSheet>,
      );
      userEvent.click(screen.getByText(/action item edit/));
      expect(onClose).not.toHaveBeenCalled();
    });
    it('onClose should be called width closeOnAction equal true', () => {
      const onClose = jest.fn();
      render(
        <ActionSheet onClose={onClose} open cancelText="cancel">
          <ActionSheetItem>action item copy</ActionSheetItem>
          <ActionSheetItem>action item edit</ActionSheetItem>
        </ActionSheet>,
      );
      userEvent.click(screen.getByText('cancel'));
      expect(onClose).toHaveBeenCalled();
    });
  });
});
