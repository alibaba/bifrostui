import React, { useState } from 'react';
import { act, fireEvent, isConformant, render, screen } from 'testing';
import { Checkbox, CheckboxGroup } from '..';

describe('Checkbox', () => {
  const rootClass = 'bui-checkbox';

  isConformant({
    className: rootClass,
    displayName: 'BuiCheckbox',
    Component: Checkbox,
  });

  it('should be checked', () => {
    render(<Checkbox checked>Checkbox</Checkbox>);
    const checkbox = screen.getByRole<HTMLInputElement>('checkbox');
    expect(checkbox.checked).toBeTruthy();
  });

  it('should have value property', () => {
    render(<Checkbox value="checkbox">Checkbox</Checkbox>);
    const checkbox = screen.getByRole<HTMLInputElement>('checkbox');
    expect(checkbox.value).toBe('checkbox');
  });

  it('should have name property', () => {
    render(<Checkbox name="checkbox">Checkbox</Checkbox>);
    const checkbox = screen.getByRole<HTMLInputElement>('checkbox');
    expect(checkbox.name).toBe('checkbox');
  });

  it('should disabled', () => {
    render(
      <Checkbox disabled data-testid="checkbox">
        Checkbox
      </Checkbox>,
    );
    expect(screen.getByTestId('checkbox')).toHaveClass(`${rootClass}-disabled`);
    expect(screen.getByRole('checkbox')).toHaveAttribute('disabled');
  });

  it('should use custom unchecked icon', () => {
    const uncheckedIcon = <div className="test-unchecked-icon">icon</div>;
    render(<Checkbox icon={uncheckedIcon} />);
    const icon = screen.getByText('icon');
    expect(icon).toBeVisible();
  });

  it('should use custom checked icon', () => {
    const checkedIcon = <div className="test-checked-icon">icon</div>;
    render(<Checkbox checkedIcon={checkedIcon} checked />);
    const icon = screen.getByText('icon');
    expect(icon).toBeVisible();
  });

  describe('Checkbox label placement', () => {
    const labelPlacements = ['top', 'bottom', 'left', 'right'] as const;
    labelPlacements.forEach((placement) => {
      it(`label should on the ${placement}`, () => {
        const { getByTestId } = render(
          <Checkbox data-testid={rootClass} labelPlacement={placement}>
            Checkbox
          </Checkbox>,
        );
        const checkbox = getByTestId(rootClass);
        expect(checkbox).toMatchSnapshot();
      });
    });
  });

  it('should call `onChange`', () => {
    const fakeChange = vi.fn((e) => e.target.value);
    function Component() {
      const [value] = useState('淘票票');
      const [checked] = useState(false);
      return (
        <Checkbox
          inputProps={{
            className: `${rootClass}-test`,
          }}
          checked={checked}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            fakeChange(e);
          }}
        >
          淘票票
        </Checkbox>
      );
    }
    const { container } = render(<Component />);
    const checkbox = container.querySelector(`.${rootClass}-test`);
    fireEvent.click(checkbox);
    expect(fakeChange).toBeCalled();
  });

  describe('CheckboxGroup', () => {
    it('value should be controled by `value` property', () => {
      function Component() {
        const [value] = useState(['淘票票', '喜洋洋']);
        return (
          <CheckboxGroup value={value}>
            <Checkbox value="水门桥">水门桥</Checkbox>
            <Checkbox value="淘票票">淘票票</Checkbox>
            <Checkbox value="喜洋洋">喜洋洋</Checkbox>
          </CheckboxGroup>
        );
      }

      const { container } = render(<Component />);
      const checkboxList = container.querySelectorAll<HTMLInputElement>(
        `.${rootClass}-input`,
      );
      expect(checkboxList[0].checked).toBeFalsy();
      expect(checkboxList[1].checked).toBeTruthy();
      expect(checkboxList[2].checked).toBeTruthy();
    });

    it('should call `onChange`', () => {
      const fakeChange = vi.fn((e, data) => data.value);
      const { container } = render(
        <CheckboxGroup value={[]} onChange={fakeChange}>
          <Checkbox value="水门桥">水门桥</Checkbox>
          <Checkbox value="淘票票">淘票票</Checkbox>
          <Checkbox value="喜洋洋">喜洋洋</Checkbox>
        </CheckboxGroup>,
      );
      const checkboxList = container.querySelectorAll(`.${rootClass}-input`);
      fireEvent.click(checkboxList[1]);
      expect(fakeChange).toReturnWith(['淘票票']);
    });

    it('should be cancel selected', () => {
      const fakeChange = vi.fn((e, { value }) => value);
      const { container } = render(
        <CheckboxGroup value={['淘票票']} onChange={fakeChange}>
          <Checkbox value="水门桥">水门桥</Checkbox>
          <Checkbox value="淘票票">淘票票</Checkbox>
          <Checkbox value="喜洋洋">喜洋洋</Checkbox>
        </CheckboxGroup>,
      );

      act(() => {
        const checkboxList = container.querySelectorAll(`.${rootClass}-input`);
        fireEvent.click(checkboxList[1]);
        expect(fakeChange).toReturnWith([]);
      });
    });

    it('should disabled', () => {
      const { container } = render(
        <CheckboxGroup disabled>
          <Checkbox value="水门桥">水门桥</Checkbox>
          <Checkbox value="淘票票">淘票票</Checkbox>
          <Checkbox value="喜洋洋">喜洋洋</Checkbox>
        </CheckboxGroup>,
      );
      const checkboxList = container.querySelectorAll<HTMLInputElement>(
        `.${rootClass}-input`,
      );
      checkboxList.forEach((item) => {
        expect(item.disabled).toBeTruthy();
      });
    });
  });
});
