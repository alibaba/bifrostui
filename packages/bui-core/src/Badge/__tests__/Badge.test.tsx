import React from 'react';
import { render } from 'testing';
import Badge from '../Badge';

const classPrefix = 'bui-badge';

describe('Badge', () => {
  describe('Basic rendering', () => {
    it('should render with content', () => {
      const { container } = render(<Badge content="12" />);
      expect(container).toHaveTextContent('12');
    });

    it('should render with ReactNode content', () => {
      const { container } = render(<Badge content={<div>content</div>} />);
      expect(container.firstChild.childNodes[0]).toBeInstanceOf(HTMLElement);
    });

    it('should apply correct CSS classes', () => {
      const { container } = render(
        <Badge content="1" className="custom-badge" />,
      );
      const badgeRoot = container.querySelector('.bui-badge');
      expect(badgeRoot).toHaveClass('bui-badge', 'custom-badge');
    });

    it('should forward ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Badge content="1" ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('bui-badge');
    });

    it('should apply position class when children are present', () => {
      const { container } = render(
        <Badge content="1">
          <div>Child content</div>
        </Badge>,
      );
      const badgeRoot = container.querySelector('.bui-badge');
      expect(badgeRoot).toHaveClass('bui-badge-position');
    });

    it('should not apply position class when no children', () => {
      const { container } = render(<Badge content="1" />);
      const badgeRoot = container.querySelector('.bui-badge');
      expect(badgeRoot).not.toHaveClass('bui-badge-position');
    });
  });

  describe('Content display logic', () => {
    it('should not render badge content when content is zero by default', () => {
      const { container } = render(<Badge content={0} />);
      expect(container.querySelector('.bui-badge > div')).toBeNull();
    });

    it('should render badge content when content is zero and showZero is true', () => {
      const { container } = render(<Badge content={0} showZero />);
      expect(container).toHaveTextContent('0');
    });

    it('should not render badge content when content is zero and showZero is false', () => {
      const { container } = render(<Badge content={0} showZero={false} />);
      expect(container.querySelector('.bui-badge > div')).toBeNull();
    });

    it('should render badge content for non-zero numbers', () => {
      const { container } = render(<Badge content={5} />);
      expect(container).toHaveTextContent('5');
    });

    it('should render badge content for string values', () => {
      const { container } = render(<Badge content="New" />);
      expect(container).toHaveTextContent('New');
    });
  });

  describe('Max value handling', () => {
    it('should display content when below max', () => {
      const { container } = render(<Badge max={100} content={50} />);
      expect(container).toHaveTextContent('50');
    });

    it('should display max+ when content exceeds max', () => {
      const { container } = render(<Badge max={100} content={120} />);
      expect(container).toHaveTextContent('100+');
    });

    it('should display content exactly at max', () => {
      const { container } = render(<Badge max={100} content={100} />);
      expect(container).toHaveTextContent('100');
    });

    it('should not apply max to non-numeric content', () => {
      const { container } = render(<Badge max={100} content="Text" />);
      expect(container).toHaveTextContent('Text');
    });
  });

  describe('Color variations', () => {
    it.each([
      'success',
      'primary',
      'info',
      'warning',
      'danger',
      'light',
      'dark',
    ] as const)('should render with %s color', (color) => {
      const { container } = render(<Badge color={color} content="1" />);
      expect(container.firstChild.childNodes[0]).toHaveClass(
        `${classPrefix}-${color}`,
      );
    });

    it('should render with default color primary', () => {
      const { container } = render(<Badge content="1" />);
      expect(container.firstChild.childNodes[0]).toHaveClass(
        `${classPrefix}-primary`,
      );
    });
  });

  describe('Type variations', () => {
    it.each(['dot', 'standard', 'bubble'] as const)(
      'should render with %s type',
      (type) => {
        const { container } = render(<Badge type={type} content="12" />);
        expect(container.firstChild.childNodes[0]).toHaveClass(
          `${classPrefix}-${type}`,
        );
      },
    );

    it('should render dot type regardless of content', () => {
      const { container } = render(<Badge type="dot" content={0} />);
      const badgeElement = container.querySelector(`.${classPrefix}-dot`);
      expect(badgeElement).toBeInTheDocument();
    });

    it('should not display content text for dot type', () => {
      const { container } = render(<Badge type="dot" content="12" />);
      const badgeElement = container.querySelector(`.${classPrefix}-dot`);
      expect(badgeElement?.textContent).toBe('');
    });
  });

  describe('Variant styles', () => {
    it.each(['contained', 'outlined'] as const)(
      'should render with %s variant',
      (variant) => {
        const { container } = render(<Badge variant={variant} content="1" />);
        expect(container.firstChild.childNodes[0]).toHaveClass(
          `${classPrefix}-${variant}`,
        );
      },
    );

    it('should render with default variant contained', () => {
      const { container } = render(<Badge content="1" />);
      expect(container.firstChild.childNodes[0]).toHaveClass(
        `${classPrefix}-contained`,
      );
    });
  });

  describe('Visibility control', () => {
    it('should not render when invisible is true (default behavior changed)', () => {
      const { container } = render(<Badge content={10} invisible />);
      expect(container.firstChild).toBeNull();
    });

    it('should render when invisible is false (default)', () => {
      const { container } = render(<Badge content={10} />);
      expect(container.firstChild).not.toBeNull();
    });

    it('should render when invisible is explicitly false', () => {
      const { container } = render(<Badge content={10} invisible={false} />);
      expect(container.firstChild).not.toBeNull();
    });
  });

  describe('Accessibility', () => {
    it('should not set button role for badge', () => {
      const { container } = render(<Badge content="1" />);

      const badgeRoot = container.querySelector('.bui-badge');
      expect(badgeRoot).not.toHaveAttribute('role');
      expect(badgeRoot).not.toHaveAttribute('tabIndex');
    });

    it('should apply default ARIA attributes to badge content', () => {
      const { container } = render(<Badge content="5" />);

      const badgeContent = container.querySelector('.bui-badge > div');
      expect(badgeContent).toHaveAttribute('role', 'status');
      expect(badgeContent).toHaveAttribute('aria-label', '5条通知');
    });

    it('should apply custom aria-label', () => {
      const { container } = render(
        <Badge content="5" aria-label="自定义标签" />,
      );

      const badgeContent = container.querySelector('.bui-badge > div');
      expect(badgeContent).toHaveAttribute('aria-label', '自定义标签');
    });

    it('should apply custom role', () => {
      const { container } = render(<Badge content="5" role="img" />);

      const badgeContent = container.querySelector('.bui-badge > div');
      expect(badgeContent).toHaveAttribute('role', 'img');
    });

    it('should set aria-hidden when requested', () => {
      const { container } = render(<Badge content="5" aria-hidden />);

      const badgeContent = container.querySelector('.bui-badge > div');
      expect(badgeContent).toHaveAttribute('aria-hidden', 'true');
    });

    it('should apply aria-describedby', () => {
      const { container } = render(
        <Badge content="5" aria-describedby="description-id" />,
      );

      const badgeContent = container.querySelector('.bui-badge > div');
      expect(badgeContent).toHaveAttribute(
        'aria-describedby',
        'description-id',
      );
    });
  });

  describe('Children rendering', () => {
    it('should render children alongside badge', () => {
      const { getByText } = render(
        <Badge content="1">
          <div>Child content</div>
        </Badge>,
      );

      expect(getByText('Child content')).toBeInTheDocument();
      expect(getByText('1')).toBeInTheDocument();
    });

    it('should render null children gracefully', () => {
      const { container } = render(<Badge content="1">{null}</Badge>);

      expect(container.querySelector('.bui-badge')).toBeInTheDocument();
    });

    it('should render undefined children gracefully', () => {
      const { container } = render(<Badge content="1">{undefined}</Badge>);

      expect(container.querySelector('.bui-badge')).toBeInTheDocument();
    });

    it('should render multiple children', () => {
      const { getByText } = render(
        <Badge content="1">
          <div>Child 1</div>
          <div>Child 2</div>
        </Badge>,
      );

      expect(getByText('Child 1')).toBeInTheDocument();
      expect(getByText('Child 2')).toBeInTheDocument();
    });
  });

  describe('Edge cases', () => {
    it('should handle negative numbers', () => {
      const { container } = render(<Badge content={-5} />);
      expect(container).toHaveTextContent('-5');
    });

    it('should handle decimal numbers', () => {
      const { container } = render(<Badge content={3.14} />);
      expect(container).toHaveTextContent('3.14');
    });

    it('should handle very large numbers with max', () => {
      const { container } = render(<Badge content={999999} max={1000} />);
      expect(container).toHaveTextContent('1000+');
    });

    it('should handle empty string content', () => {
      const { container } = render(<Badge content="" />);
      expect(container.querySelector('.bui-badge > div')).toBeNull();
    });

    it('should handle boolean false content', () => {
      const { container } = render(<Badge content={false} />);
      expect(container.querySelector('.bui-badge > div')).toBeNull();
    });

    it('should handle boolean true content', () => {
      const { container } = render(<Badge content />);
      expect(container.querySelector('.bui-badge > div')).toBeInTheDocument();
    });

    it('should handle mixed string-number content', () => {
      const { container } = render(<Badge content="5 new" />);
      expect(container).toHaveTextContent('5 new');
    });
  });

  describe('Component unmounting', () => {
    it('should unmount gracefully', () => {
      const { unmount } = render(<Badge content="1" />);

      expect(() => {
        unmount();
      }).not.toThrow();
    });

    it('should unmount with children gracefully', () => {
      const { unmount } = render(
        <Badge content="1">
          <div>Child</div>
        </Badge>,
      );

      expect(() => {
        unmount();
      }).not.toThrow();
    });
  });
});
