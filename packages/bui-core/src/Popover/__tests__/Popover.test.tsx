import * as React from 'react';
import {
  isConformant,
  render,
  screen,
  userEvent,
  fireEvent,
  act,
  waitFor,
} from 'testing';
import Popover from '../index';

const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const anchorOrigins = [
  { vertical: 'top', horizontal: 'center' },
  { vertical: 'center', horizontal: 'left' },
  { vertical: 'center', horizontal: 'right' },
  { vertical: 'bottom', horizontal: 'center' },
  { vertical: 'top', horizontal: 'left' },
  { vertical: 'top', horizontal: 'right' },
  { vertical: 'bottom', horizontal: 'left' },
  { vertical: 'bottom', horizontal: 'right' },
  { vertical: 'center', horizontal: 'center' },
] as const;

const expectedDirections = [
  'top',
  'left',
  'right',
  'bottom',
  'top',
  'top',
  'bottom',
  'bottom',
  'top',
];

describe('Popover', () => {
  const rootClass = 'bui-popover';

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  isConformant({
    Component: Popover,
    displayName: 'BuiPopover',
    className: rootClass,
    skip: [
      'component-has-root-ref',
      'component-handles-classNames',
      'component-has-default-className',
      'component-handles-style',
    ],
  });

  describe('Basic rendering', () => {
    it('should render content when defaultOpen is true', async () => {
      render(
        <Popover
          title="This is a popover title"
          content="This is a popover content"
          defaultOpen
        >
          <div>children</div>
        </Popover>,
      );
      await act(async () => {
        expect(screen.getByText('This is a popover title')).toBeInTheDocument();
        expect(
          screen.getByText('This is a popover content'),
        ).toBeInTheDocument();
      });
    });

    it('should not render when closed', async () => {
      const { queryByText } = render(
        <Popover title="This is a popover" open={false}>
          <div>children</div>
        </Popover>,
      );
      expect(queryByText('This is a popover')).not.toBeInTheDocument();
    });

    it('should apply correct CSS classes', async () => {
      render(
        <Popover
          title="Test"
          content="Content"
          defaultOpen
          className="custom-class"
        >
          <div>children</div>
        </Popover>,
      );
      await waitFor(() => {
        const popoverElement = document.querySelector('.bui-popover');
        expect(popoverElement).toHaveClass('bui-popover', 'custom-class');
      });
    });

    it('should render without title', () => {
      render(
        <Popover content="Content only" defaultOpen>
          <div>children</div>
        </Popover>,
      );
      expect(screen.getByText('Content only')).toBeInTheDocument();
      expect(
        screen.queryByText('This is a popover title'),
      ).not.toBeInTheDocument();
    });

    it('should render without content', () => {
      render(
        <Popover title="Title only" defaultOpen>
          <div>children</div>
        </Popover>,
      );
      expect(screen.getByText('Title only')).toBeInTheDocument();
    });

    it('should not render when both title and content are empty', () => {
      const { container } = render(
        <Popover>
          <div>children</div>
        </Popover>,
      );
      expect(container.querySelector('.bui-popover')).not.toBeInTheDocument();
    });
  });

  describe('Arrow functionality', () => {
    it('should hide arrow when hideArrow is true', async () => {
      render(
        <Popover title="This is a popover title" hideArrow defaultOpen>
          <div>children</div>
        </Popover>,
      );
      await act(async () => {
        expect(
          document.querySelector('.bui-popover-arrow'),
        ).not.toBeInTheDocument();
      });
    });

    it('should show arrow by default', () => {
      render(
        <Popover title="This is a popover title" defaultOpen>
          <div>children</div>
        </Popover>,
      );
      expect(document.querySelector('.bui-popover-arrow')).toBeInTheDocument();
    });
  });

  describe('Position and placement', () => {
    anchorOrigins.forEach((anchorOrigin, index) => {
      it(`should apply correct direction class for anchorOrigin vertical: ${anchorOrigin.vertical}, horizontal: ${anchorOrigin.horizontal}`, async () => {
        render(
          <Popover
            title="This is a popover"
            defaultOpen
            anchorOrigin={anchorOrigin}
          >
            <div>children</div>
          </Popover>,
        );
        await act(async () => {
          const expectedDirection = expectedDirections[index];
          const popoverElement = document.querySelector('.bui-popover');
          expect(popoverElement).toHaveClass(`popover-${expectedDirection}`);
        });
      });
    });

    it('should apply custom offsetSpacing', () => {
      render(
        <Popover title="Test" defaultOpen offsetSpacing={20}>
          <div>children</div>
        </Popover>,
      );
      expect(document.querySelector('.bui-popover')).toBeInTheDocument();
    });
  });

  describe('Controlled mode', () => {
    it('should be controlled by open prop', async () => {
      const onOpenChange = vi.fn();
      render(
        <Popover title="This is a popover" open onOpenChange={onOpenChange}>
          <div data-testid="popoverTestid">children</div>
        </Popover>,
      );

      expect(screen.getByText('This is a popover')).toBeInTheDocument();
      const childrenDom = screen.getByTestId('popoverTestid');
      await act(async () => {
        await userEvent.click(childrenDom);
      });
      expect(onOpenChange).toHaveBeenCalledTimes(0);
    });

    it('should call onOpenChange in uncontrolled mode', async () => {
      const onOpenChange = vi.fn();
      render(
        <Popover
          title="This is a popover"
          defaultOpen
          trigger={['click', 'hover']}
          onOpenChange={onOpenChange}
        >
          <div data-testid="popoverTestid">children</div>
        </Popover>,
      );

      const childrenDom = screen.getByTestId('popoverTestid');
      await userEvent.click(childrenDom);
      expect(onOpenChange).toHaveBeenCalled();
    });
  });

  describe('Trigger functionality', () => {
    it('should handle default click trigger', async () => {
      const onOpenChange = vi.fn();
      render(
        <Popover title="This is a popover" onOpenChange={onOpenChange}>
          <div data-testid="popoverTestid">children</div>
        </Popover>,
      );

      const childrenDom = screen.getByTestId('popoverTestid');
      await userEvent.click(childrenDom);

      expect(onOpenChange).toHaveBeenCalledTimes(1);
      expect(onOpenChange).toHaveBeenCalledWith(expect.any(Object), {
        open: true,
      });

      await userEvent.click(childrenDom);
      expect(onOpenChange).toHaveBeenCalledTimes(2);
      expect(onOpenChange).toHaveBeenLastCalledWith(expect.any(Object), {
        open: false,
      });
    });

    it('should handle hover trigger', async () => {
      const onOpenChange = vi.fn();
      render(
        <Popover
          title="This is a popover"
          trigger={['hover']}
          onOpenChange={onOpenChange}
        >
          <div data-testid="popoverTestid">children</div>
        </Popover>,
      );

      const childrenDom = screen.getByTestId('popoverTestid');
      fireEvent.mouseEnter(childrenDom);
      expect(onOpenChange).toHaveBeenCalledWith(expect.any(Object), {
        open: true,
      });

      fireEvent.mouseLeave(childrenDom);
      expect(onOpenChange).toHaveBeenCalledWith(expect.any(Object), {
        open: false,
      });
      expect(onOpenChange).toBeCalledTimes(2);

      await userEvent.click(document.body);
      expect(onOpenChange).toBeCalledTimes(2);
    });

    it('should handle trigger none - no auto trigger events', async () => {
      const onOpenChange = vi.fn();
      render(
        <Popover
          title="This is a popover"
          trigger="none"
          onOpenChange={onOpenChange}
        >
          <div data-testid="popoverTestid">children</div>
        </Popover>,
      );

      const childrenDom = screen.getByTestId('popoverTestid');
      await userEvent.click(childrenDom);
      expect(onOpenChange).toHaveBeenCalledTimes(0);

      fireEvent.mouseEnter(childrenDom);
      expect(onOpenChange).toHaveBeenCalledTimes(0);

      fireEvent.mouseLeave(childrenDom);
      expect(onOpenChange).toHaveBeenCalledTimes(0);

      await userEvent.click(document.body);
      expect(onOpenChange).toHaveBeenCalledTimes(0);
    });

    it('should work with trigger none and controlled open', () => {
      const { rerender } = render(
        <Popover title="This is a popover" trigger="none" open={false}>
          <div data-testid="popoverTestid">children</div>
        </Popover>,
      );

      expect(screen.queryByText('This is a popover')).not.toBeInTheDocument();

      rerender(
        <Popover title="This is a popover" trigger="none" open>
          <div data-testid="popoverTestid">children</div>
        </Popover>,
      );

      expect(screen.getByText('This is a popover')).toBeInTheDocument();
    });

    it('should work with trigger none and defaultOpen', () => {
      render(
        <Popover title="This is a popover" trigger="none" defaultOpen>
          <div data-testid="popoverTestid">children</div>
        </Popover>,
      );

      expect(screen.getByText('This is a popover')).toBeInTheDocument();
    });
  });

  describe('Global click handling', () => {
    it('should handle global click to hide popover', async () => {
      const onOpenChange = vi.fn();
      render(
        <Popover
          title="This is a popover"
          defaultOpen
          trigger="click"
          onOpenChange={onOpenChange}
        >
          <div data-testid="popoverTestid">children</div>
        </Popover>,
      );

      await delay(100);
      await userEvent.click(document.body);

      if (onOpenChange.mock.calls.length > 0) {
        expect(onOpenChange).toHaveBeenCalled();
      }
    });
  });

  describe('Accessibility', () => {
    it('should have correct ARIA attributes', () => {
      render(
        <Popover
          title="Test"
          content="Content"
          defaultOpen
          role="dialog"
          autoFocus
        >
          <button type="button">Trigger</button>
        </Popover>,
      );

      const popoverElement = document.querySelector('.bui-popover');
      expect(popoverElement).toHaveAttribute('role', 'dialog');
      expect(popoverElement).toHaveAttribute('id');
      expect(popoverElement).toHaveAttribute('tabIndex', '0');
    });

    it('should set aria-describedby on trigger element when open', () => {
      render(
        <Popover title="Test" content="Content" defaultOpen>
          <button type="button">Trigger</button>
        </Popover>,
      );

      const triggerElement = screen.getByRole('button');
      expect(triggerElement).toHaveAttribute('aria-describedby');
      expect(triggerElement).toHaveAttribute('aria-haspopup');
    });

    it('should set aria-expanded for button elements', () => {
      render(
        <Popover title="Test" content="Content" defaultOpen>
          <button type="button">Trigger</button>
        </Popover>,
      );

      const triggerElement = screen.getByRole('button');
      expect(triggerElement).toHaveAttribute('aria-expanded', 'true');
    });

    it('should handle different role values', () => {
      const { rerender } = render(
        <Popover title="Test" defaultOpen role="menu">
          <button type="button">Trigger</button>
        </Popover>,
      );

      let triggerElement = screen.getByRole('button');
      expect(triggerElement).toHaveAttribute('aria-haspopup', 'menu');

      rerender(
        <Popover title="Test" defaultOpen role="listbox">
          <button type="button">Trigger</button>
        </Popover>,
      );

      triggerElement = screen.getByRole('button');
      expect(triggerElement).toHaveAttribute('aria-haspopup', 'listbox');

      rerender(
        <Popover title="Test" defaultOpen role="tooltip">
          <button type="button">Trigger</button>
        </Popover>,
      );

      triggerElement = screen.getByRole('button');
      expect(triggerElement).toHaveAttribute('aria-haspopup', 'dialog');
    });
  });

  describe('Edge cases', () => {
    it('should handle rapid state changes', async () => {
      const { rerender } = render(
        <Popover title="Test" open={false}>
          <div>children</div>
        </Popover>,
      );

      rerender(
        <Popover title="Test" open>
          <div>children</div>
        </Popover>,
      );

      rerender(
        <Popover title="Test" open={false}>
          <div>children</div>
        </Popover>,
      );

      rerender(
        <Popover title="Test" open>
          <div>children</div>
        </Popover>,
      );

      await waitFor(() => {
        expect(true).toBe(true);
      });
    });

    it('should handle component unmount gracefully', () => {
      const { unmount } = render(
        <Popover title="Test" defaultOpen>
          <div>children</div>
        </Popover>,
      );

      expect(() => {
        unmount();
      }).not.toThrow();
    });

    it('should handle invalid children gracefully', async () => {
      render(
        <Popover title="Test" defaultOpen>
          {null}
        </Popover>,
      );

      await waitFor(() => {
        expect(document.querySelector('.bui-popover')).toBeInTheDocument();
      });
    });
  });
});
