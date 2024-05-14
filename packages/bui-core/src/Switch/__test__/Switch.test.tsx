import React, { useState } from 'react';
import { fireEvent, isConformant, render, screen } from 'testing';
import Switch from '../Switch';

describe('Switch', () => {
  const classPrefix = 'bui-switch';

  isConformant({
    className: classPrefix,
    displayName: 'BuiSwitch',
    Component: Switch,
  });
  it('should render correctly', async () => {
    const { container } = render(<Switch />);
    const [switchDom] = [...container.getElementsByClassName(classPrefix)];
    // 测试渲染
    expect(switchDom).toHaveClass(`${classPrefix}-medium`);
    expect(switchDom).toHaveClass(`${classPrefix}-primary`);
    expect(switchDom).not.toHaveClass(`${classPrefix}-disabled`);
  });

  it('should be checked', () => {
    render(<Switch defaultChecked>Switch</Switch>);
    const checkbox = screen.getByRole<HTMLInputElement>('checkbox');
    expect(checkbox.checked).toBeTruthy();
  });

  it('should be disabled', () => {
    render(
      <Switch disabled data-testid="switch">
        switch
      </Switch>,
    );
    expect(screen.getByTestId('switch')).toHaveClass(`${classPrefix}-disabled`);
    expect(screen.getByRole('checkbox')).toHaveAttribute('disabled');
  });

  it('should use custom unchecked icon', () => {
    const uncheckedIcon = 'icon';
    const { getByTestId } = render(
      <Switch
        unCheckedChildren={uncheckedIcon}
        data-testid="switch-customize"
      />,
    );
    expect(getByTestId('switch-customize')).toHaveTextContent('icon');
  });

  it('should use custom checked icon', () => {
    const checkedIcon = <div className="test-checked-icon">icon</div>;
    render(<Switch checkedChildren={checkedIcon} defaultChecked />);
    const icon = screen.getByText('icon');
    expect(icon).toBeVisible();
  });

  it('should render with custom color', () => {
    const { container } = render(<Switch color="success" defaultChecked />);
    expect(container.querySelectorAll(`.${classPrefix}-success`).length).toBe(
      1,
    );
  });

  it('should render with custom size', () => {
    const { container } = render(<Switch size="small" />);
    expect(container.querySelectorAll(`.${classPrefix}-small`).length).toBe(1);
  });

  it('should call onChange', async () => {
    const changeFn = jest.fn();
    function Component() {
      const [checked] = useState(false);
      return <Switch checked={checked} onChange={changeFn} />;
    }
    render(<Component />);
    const switchDom = screen.getByRole('checkbox');
    fireEvent.click(switchDom);
    expect(changeFn).toBeCalled();
  });
});
