import React from 'react';
import { act, render, screen, userEvent, isConformant } from 'testing';
import Select from '../Select';
import SelectOption from '../SelectOption';

const classPrefix = 'bui-select';

describe('Select', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  isConformant({
    Component: Select,
    displayName: 'BuiSelect',
    className: 'bui-select',
  });
  it('should render default value current', () => {
    render(
      <Select defaultValue={2}>
        <SelectOption value={1}>option1</SelectOption>
        <SelectOption value={2}>option2</SelectOption>
      </Select>,
    );

    expect(screen.getByText(/option2/)).toHaveClass('bui-select-option-active');
  });
  it('should render value current', () => {
    render(
      <Select defaultValue={1} value={2}>
        <SelectOption value={1}>option1</SelectOption>
        <SelectOption value={2}>option2</SelectOption>
      </Select>,
    );
    expect(screen.getByText(/option2/)).toHaveClass('bui-select-option-active');
  });
  it('should render icon current', () => {
    render(
      <Select icon={<div>open</div>}>
        <SelectOption value={1}>option1</SelectOption>
        <SelectOption value={2}>option2</SelectOption>
      </Select>,
    );
    expect(screen.getByText(/open/)).toBeTruthy();
  });

  it('renders base', () => {
    const { container } = render(
      <Select>
        <SelectOption value={1}>option1</SelectOption>
        <SelectOption value={2}>option2</SelectOption>
      </Select>,
    );
    expect(container.firstChild).toHaveClass(`${classPrefix}`);
  });

  it('renders with disabled', () => {
    const { container } = render(
      <Select disabled>
        <SelectOption value={1}>option1</SelectOption>
        <SelectOption value={2}>option2</SelectOption>
      </Select>,
    );
    expect(container.firstChild).toHaveClass(`${classPrefix}-disabled`);
  });
  describe('action', () => {
    it('should call onClose when click close', async () => {
      const onClose = jest.fn();
      render(
        <Select onClose={onClose} open>
          <SelectOption value={1}>option1</SelectOption>
          <SelectOption value={2}>option2</SelectOption>
        </Select>,
      );
      await act(async () => {
        await userEvent.click(document.querySelector('.bui-select'));
      });
      expect(onClose).toHaveBeenCalled();
    });
    it('should call onOpen when click open', async () => {
      const onOpen = jest.fn();
      render(
        <Select onOpen={onOpen} open={false}>
          <SelectOption value={1}>option1</SelectOption>
          <SelectOption value={2}>option2</SelectOption>
        </Select>,
      );
      await act(async () => {
        userEvent.click(document.querySelector('.bui-select'));
      });
      await act(async () => {
        await jest.runAllTimers();
      });
      expect(onOpen).toHaveBeenCalled();
    });
    it('should call onClick when click open', async () => {
      const onClick = jest.fn();
      render(
        <Select onClick={onClick} open={false}>
          <SelectOption value={1}>option1</SelectOption>
          <SelectOption value={2}>option2</SelectOption>
        </Select>,
      );
      await act(async () => {
        userEvent.click(document.querySelector('.bui-select'));
      });
      expect(onClick).toHaveBeenCalled();
    });
    it('should not select option when it is disabled', async () => {
      const onClick = jest.fn((e, value) => value);
      render(
        <Select onChange={onClick}>
          <SelectOption disabled value={1}>
            option1
          </SelectOption>
          <SelectOption value={2}>option2</SelectOption>
        </Select>,
      );
      expect(screen.getByText(/option1/)).toHaveClass(
        'bui-select-option-disabled',
      );
      await act(async () => {
        userEvent.click(screen.getByText(/option1/));
      });
      expect(onClick).not.toHaveBeenCalled();
    });
    it('should not select  when it is disabled', async () => {
      const onClick = jest.fn();
      const { container } = render(
        <Select disabled onClick={onClick}>
          <SelectOption disabled value={1}>
            option1
          </SelectOption>
          <SelectOption value={2}>option2</SelectOption>
        </Select>,
      );
      expect(container.firstChild).toHaveClass('bui-select-disabled');
      await act(async () => {
        userEvent.click(screen.getByText(/option1/));
      });
      expect(onClick).not.toHaveBeenCalled();
    });
    it('should pass value as part of the event.target of select', () => {
      const onSelect = jest.fn((e, value) => value);
      render(
        <Select onChange={onSelect}>
          <SelectOption value="option1">option1</SelectOption>
          <SelectOption data-testid="option2" value="option2">
            option2
          </SelectOption>
        </Select>,
      );
      userEvent.click(screen.getByText(/option2/));

      expect(onSelect).toReturnWith({ value: 'option2' });
    });
  });
});
