import React from 'react';
import { isConformant, render } from 'testing';
import Badge from '..';

const classPrefix = 'bui-badge';
describe('Badge', () => {
  isConformant({
    Component: Badge,
    displayName: 'BuiBadge',
    className: 'bui-badge',
  });
  describe('prop: content', () => {
    it('render with badgeContent', () => {
      const { container } = render(<Badge content="12" />);
      expect(container).toHaveTextContent('12');
    });
    it('should be type of ReactNode', () => {
      const { container } = render(<Badge content={<div>content</div>} />);
      expect(container.firstChild.childNodes[0]).toBeInstanceOf(HTMLElement);
    });
    it('should not render content when it is zero', () => {
      const { getByTestId } = render(
        <Badge data-testid="t-badge" content={0} />,
      );
      expect(getByTestId('t-badge').firstChild).not.toBe(0);
    });
  });
  describe('prop: color', () => {
    it.each(['success', 'primary', 'info'] as const)(
      'render color current',
      (color) => {
        const { container } = render(<Badge color={color} content="1" />);
        expect(container.firstChild.childNodes[0]).toHaveClass(
          `${classPrefix}-${color}`,
        );
      },
    );
    it('should render width default color primary', () => {
      const { container } = render(<Badge content="1" />);
      expect(container.firstChild.childNodes[0]).toHaveClass(
        `${classPrefix}-primary`,
      );
    });
  });
  describe('prop: maxCount', () => {
    it('render with maxCount current', () => {
      const { container } = render(<Badge maxCount={100} content="988" />);
      expect(container).toHaveTextContent('100+');
    });
  });
  describe('prop: type', () => {
    it.each(['dot', 'standard', 'bubble'] as const)(
      'render type current',
      (type) => {
        const { container } = render(<Badge type={type} content="12" />);
        expect(container.firstChild.childNodes[0]).toHaveClass(
          `${classPrefix}-${type}`,
        );
      },
    );
  });
  describe('prop: max', () => {
    it('render with max current', () => {
      const { container } = render(<Badge max={100} content={120} />);
      expect(container).toHaveTextContent('100+');
    });
  });
  describe('prop: showZero', () => {
    it('should render when content is 0 and showZero is true', () => {
      const { container } = render(<Badge content={0} showZero />);
      expect(container).toHaveTextContent('0');
    });
    it('should not render when content is 0 and showZero is false', () => {
      const { container } = render(<Badge content={0} showZero={false} />);
      // 只渲染了外层div，没有内容
      expect(container.querySelector('.bui-badge > div')).toBeNull();
    });
  });
  describe('prop: visibility', () => {
    it('should not render when visibility is false', () => {
      const { container } = render(<Badge content={10} visibility={false} />);
      expect(container.firstChild).toBeNull();
    });
  });
});
