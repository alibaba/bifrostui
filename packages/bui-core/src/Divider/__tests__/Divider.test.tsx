import React from 'react';
import { render, isConformant, screen } from 'testing';
import Divider from '../index';

const classPrefix = 'bui-divider';

describe('Divider', () => {
  isConformant({
    Component: Divider,
    displayName: 'BuiDivider',
    className: 'bui-divider',
  });
  describe('prop: direction', () => {
    it('should render default vertical currently', async () => {
      const { container } = render(<Divider />);
      const [divider] = [...container.getElementsByClassName(classPrefix)];
      // 测试渲染
      expect(divider).toHaveClass(`${classPrefix}-vertical`);
    });

    it('should render horizontal current', async () => {
      const { container } = render(<Divider direction="horizontal" />);
      const [divider] = [...container.getElementsByClassName(classPrefix)];
      // 测试渲染
      expect(divider).toHaveClass(`${classPrefix}-horizontal`);
    });
  });
  describe('prop: size', () => {
    it('size should be render current', () => {
      const { container } = render(<Divider size="32px" />);
      expect(container.firstChild).toHaveStyle('height: 32px');
    });
    it('size should be render current', () => {
      const { container } = render(
        <Divider direction="horizontal" size="32px" />,
      );
      expect(container.firstChild).toHaveStyle('width: 32px');
    });
  });
  it('should render children current', () => {
    const { container } = render(
      <Divider direction="horizontal">分割线</Divider>,
    );
    expect(container.querySelector('.bui-divider-line')).toBeTruthy();
    expect(screen.getByText('分割线')).toBeTruthy();
  });
});
