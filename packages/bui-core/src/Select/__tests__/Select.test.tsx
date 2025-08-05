import React from 'react';
import {
  act,
  render,
  screen,
  userEvent,
  isConformant,
  fireEvent,
} from 'testing';
import { vi } from 'vitest';
import Select from '../Select';
import SelectOption from '../SelectOption';

// Mock the getStylesAndLocation function to prevent null ref errors
vi.mock('@bifrostui/utils', async () => {
  const actual = await vi.importActual('@bifrostui/utils');
  return {
    ...actual,
    getStylesAndLocation: vi.fn(() => ({
      styles: {},
      childrenStyle: { width: '100px' },
      newArrowDirection: 'bottom',
    })),
  };
});

const classPrefix = 'bui-select';

describe('Select', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
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
      const onClose = vi.fn();
      const { container } = render(
        <Select onClose={onClose} open>
          <SelectOption value={1}>option1</SelectOption>
          <SelectOption value={2}>option2</SelectOption>
        </Select>,
      );
      await act(async () => {
        await vi.runAllTimers();
      });
      await act(async () => {
        await vi.runAllTimers();
      });
      const selectElement = container.querySelector('.bui-select');
      expect(selectElement).not.toBeNull();
      if (selectElement) {
        await act(async () => {
          await userEvent.click(selectElement);
        });
      }
      expect(onClose).toHaveBeenCalled();
    });
    it('should call onOpen when click open', async () => {
      const onOpen = vi.fn();
      const { container } = render(
        <Select onOpen={onOpen} open={false}>
          <SelectOption value={1}>option1</SelectOption>
          <SelectOption value={2}>option2</SelectOption>
        </Select>,
      );
      await act(async () => {
        await vi.runAllTimers();
      });
      await act(async () => {
        await vi.runAllTimers();
      });
      const selectElement = container.querySelector('.bui-select');
      expect(selectElement).not.toBeNull();
      if (selectElement) {
        await act(async () => {
          await userEvent.click(selectElement);
        });
        await act(async () => {
          await vi.runAllTimers();
        });
      }
      expect(onOpen).toHaveBeenCalled();
    });
    it('should call onClick when click open', async () => {
      const onClick = vi.fn();
      const { container } = render(
        <Select onClick={onClick} open={false}>
          <SelectOption value={1}>option1</SelectOption>
          <SelectOption value={2}>option2</SelectOption>
        </Select>,
      );
      await act(async () => {
        await vi.runAllTimers();
      });
      await act(async () => {
        await vi.runAllTimers();
      });
      const selectElement = container.querySelector('.bui-select');
      expect(selectElement).not.toBeNull();
      if (selectElement) {
        await act(async () => {
          await userEvent.click(selectElement);
        });
      }
      expect(onClick).toHaveBeenCalled();
    });
    it('should not select option when it is disabled', async () => {
      const onClick = vi.fn((e, value) => value);
      render(
        <Select onChange={onClick} open>
          <SelectOption disabled value={1}>
            option1
          </SelectOption>
          <SelectOption value={2}>option2</SelectOption>
        </Select>,
      );
      await act(async () => {
        await vi.runAllTimers();
      });
      await act(async () => {
        await vi.runAllTimers();
      });
      const option1Element = screen.getByText(/option1/);
      expect(option1Element).toHaveClass('bui-select-option-disabled');
      await act(async () => {
        fireEvent.click(option1Element);
      });
      expect(onClick).not.toHaveBeenCalled();
    });
    it('should not select  when it is disabled', async () => {
      const onClick = vi.fn();
      render(
        <Select disabled onClick={onClick} open>
          <SelectOption disabled value={1}>
            option1
          </SelectOption>
          <SelectOption value={2}>option2</SelectOption>
        </Select>,
      );
      await act(async () => {
        await vi.runAllTimers();
      });
      await act(async () => {
        await vi.runAllTimers();
      });
      const selectElement = document.querySelector('.bui-select');
      expect(selectElement).toHaveClass('bui-select-disabled');
      const option1Element = screen.getByText(/option1/);
      await act(async () => {
        fireEvent.click(option1Element);
      });
      expect(onClick).not.toHaveBeenCalled();
    });
    it('should pass value as part of the event.target of select', async () => {
      const onSelect = vi.fn((e, value) => value);
      render(
        <Select onChange={onSelect} open>
          <SelectOption value="option1">option1</SelectOption>
          <SelectOption data-testid="option2" value="option2">
            option2
          </SelectOption>
        </Select>,
      );
      await act(async () => {
        await vi.runAllTimers();
      });
      await act(async () => {
        await vi.runAllTimers();
      });
      const option2Element = screen.getByText(/option2/);
      await act(async () => {
        await userEvent.click(option2Element);
      });
      expect(onSelect).toReturnWith({ value: 'option2' });
    });
  });
});
