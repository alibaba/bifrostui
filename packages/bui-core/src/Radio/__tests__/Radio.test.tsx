import React, { useState } from 'react';
import { act, fireEvent, isConformant, render, screen } from 'testing';
import { Radio, RadioGroup } from '..';

describe('Radio', () => {
  const rootClass = 'bui-radio';

  isConformant({
    className: rootClass,
    displayName: 'BuiRadio',
    Component: Radio,
  });

  it('should be checked', () => {
    const onChange = jest.fn();
    render(
      <Radio checked onChange={onChange}>
        淘票票
      </Radio>,
    );
    const radio = screen.getByRole<HTMLInputElement>('radio');
    expect(radio.checked).toBeTruthy();
  });

  it('should have value', () => {
    render(<Radio value="淘票票" />);
    const radio = screen.getByRole<HTMLInputElement>('radio');
    expect(radio.value).toBe('淘票票');
  });

  it('should have name property', () => {
    render(<Radio name="radio">Radio</Radio>);
    const radio = screen.getByRole<HTMLInputElement>('radio');
    expect(radio.name).toBe('radio');
  });

  it('should be disabled', () => {
    render(<Radio disabled data-testid="radio" />);
    expect(screen.getByTestId('radio')).toHaveClass(`${rootClass}-disabled`);
    expect(screen.getByRole('radio')).toHaveAttribute('disabled');
  });

  it('should use custom unchecked icon', () => {
    const uncheckedIcon = <div className="test-unchecked-icon">icon</div>;
    render(<Radio icon={uncheckedIcon} />);
    const icon = screen.getByText('icon');
    expect(icon).toBeVisible();
  });

  it('should use custom checked icon', () => {
    const onChange = jest.fn();
    const checkedIcon = <div className="test-checked-icon">icon</div>;
    render(<Radio checkedIcon={checkedIcon} checked onChange={onChange} />);
    const icon = screen.getByText('icon');
    expect(icon).toBeVisible();
  });

  describe('Radio label placement', () => {
    const labelPlacements = ['top', 'bottom', 'left', 'right'] as const;
    labelPlacements.forEach((placement) => {
      it(`label should on the ${placement}`, () => {
        const { getByTestId } = render(
          <Radio data-testid={rootClass} labelPlacement={placement}>
            淘票票
          </Radio>,
        );
        const radio = getByTestId(rootClass);
        expect(radio).toMatchSnapshot();
      });
    });
  });

  it('should call `onChange`', () => {
    const fakeChange = jest.fn((e, data) => data.checked);
    const { container } = render(
      <Radio value="淘票票" onChange={fakeChange}>
        淘票票
      </Radio>,
    );
    act(() => {
      const radio = container.querySelector(`.${rootClass}-input`);
      fireEvent.click(radio);
      expect(fakeChange).toReturnWith(true);
    });
  });

  describe('RadioGroup', () => {
    it('value should be controled by `value` property', () => {
      function RadioComponent() {
        const [value] = useState('淘票票');
        return (
          <RadioGroup value={value}>
            <Radio value="水门桥">水门桥</Radio>
            <Radio value="淘票票">淘票票</Radio>
            <Radio value="喜洋洋">喜洋洋</Radio>
          </RadioGroup>
        );
      }

      const { container } = render(<RadioComponent />);
      const radioList = container.querySelectorAll<HTMLInputElement>(
        `.${rootClass}-input`,
      );
      expect(radioList[0].checked).toBeFalsy();
      expect(radioList[1].checked).toBeTruthy();
    });

    it('should call `onChange`', () => {
      const fakeChange = jest.fn((e, data) => data.value);
      const { container } = render(
        <RadioGroup onChange={fakeChange}>
          <Radio value="水门桥">水门桥</Radio>
          <Radio value="淘票票">淘票票</Radio>
          <Radio value="喜洋洋">喜洋洋</Radio>
        </RadioGroup>,
      );
      const radioList = container.querySelectorAll(`.${rootClass}-input`);
      fireEvent.click(radioList[1]);
      expect(fakeChange).toReturnWith('淘票票');
    });

    it('should disabled', () => {
      const { container } = render(
        <RadioGroup disabled>
          <Radio value="水门桥">水门桥</Radio>
          <Radio value="淘票票">淘票票</Radio>
          <Radio value="喜洋洋">喜洋洋</Radio>
        </RadioGroup>,
      );
      const radioList = container.querySelectorAll<HTMLInputElement>(
        `.${rootClass}-input`,
      );
      radioList.forEach((item) => {
        expect(item.disabled).toBeTruthy();
      });
    });
  });

  describe('miniapp Radio', () => {
    const originalModule = jest.requireActual('@bifrostui/utils');
    const restApi = jest.requireActual('react');
    it('should call `onChange`', async () => {
      jest.resetModules();
      jest.doMock('@bifrostui/utils', () => ({
        ...originalModule,
        isMini: true,
      }));
      jest.doMock('react', () => ({
        ...restApi,
      }));
      const { default: MiniRadio } = await import('../index');
      const fakeChange = jest.fn((e, data) => data.checked);
      const { container } = render(
        <MiniRadio value="淘票票" onChange={fakeChange}>
          淘票票
        </MiniRadio>,
      );
      const radio = container.querySelector(`.${rootClass}-input`);
      fireEvent.click(radio);
      expect(fakeChange).toReturnWith(true);
    });
  });
});
