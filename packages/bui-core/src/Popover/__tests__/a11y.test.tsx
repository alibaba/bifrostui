import * as React from 'react';
import {
  getMdDemoCodes,
  getCustomDemoCodesFromFile,
  accessibilityDemoTest,
  render,
  screen,
  fireEvent,
  waitFor,
} from 'testing';
import Popover from '../index';

/**
 * Popover 组件无障碍测试
 *
 * 本文件包含三种测试方式：
 * 1. 基于 Markdown 文档的测试（原有方式）
 * 2. 基于自定义 Demo 组件的测试（新增方式）
 * 3. 专门的无障碍功能测试（增强测试）
 */

// 专门的无障碍功能测试
describe('Popover Accessibility', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Keyboard navigation', () => {
    it('should close popover when Escape key is pressed', async () => {
      const onOpenChange = vi.fn();
      render(
        <Popover
          title="Test Popover"
          content="Test content"
          defaultOpen
          closeOnEscape
          onOpenChange={onOpenChange}
        >
          <button type="button">Trigger</button>
        </Popover>,
      );

      expect(screen.getByText('Test Popover')).toBeInTheDocument();

      fireEvent.keyDown(document, { key: 'Escape' });

      await waitFor(() => {
        expect(onOpenChange).toHaveBeenCalledWith(expect.any(Object), {
          open: false,
        });
      });
    });

    it('should not close popover when closeOnEscape is false', async () => {
      const onOpenChange = vi.fn();
      render(
        <Popover
          title="Test Popover"
          content="Test content"
          defaultOpen
          closeOnEscape={false}
          onOpenChange={onOpenChange}
        >
          <button type="button">Trigger</button>
        </Popover>,
      );

      fireEvent.keyDown(document, { key: 'Escape' });

      await waitFor(() => {
        expect(onOpenChange).not.toHaveBeenCalled();
      });
    });

    it('should return focus to trigger element after closing with Escape', async () => {
      const onOpenChange = vi.fn();
      render(
        <Popover
          title="Test Popover"
          content="Test content"
          defaultOpen
          closeOnEscape
          onOpenChange={onOpenChange}
        >
          <button type="button">Trigger</button>
        </Popover>,
      );

      fireEvent.keyDown(document, { key: 'Escape' });

      await waitFor(() => {
        expect(onOpenChange).toHaveBeenCalled();
      });
    });
  });

  describe('Focus management', () => {
    it('should focus popover when autoFocus is true', async () => {
      render(
        <Popover
          title="Test Popover"
          content="Test content"
          defaultOpen
          autoFocus
        >
          <button type="button">Trigger</button>
        </Popover>,
      );

      await waitFor(() => {
        const popoverElement = document.querySelector('.bui-popover');
        expect(popoverElement).toHaveAttribute('tabIndex', '0');
      });
    });

    it('should not focus popover when autoFocus is false', () => {
      render(
        <Popover
          title="Test Popover"
          content="Test content"
          defaultOpen
          autoFocus={false}
        >
          <button type="button">Trigger</button>
        </Popover>,
      );

      const popoverElement = document.querySelector('.bui-popover');
      expect(popoverElement).not.toHaveAttribute('tabIndex');
    });

    it('should not focus popover by default (autoFocus defaults to false)', () => {
      render(
        <Popover title="Test Popover" content="Test content" defaultOpen>
          <button type="button">Trigger</button>
        </Popover>,
      );

      const popoverElement = document.querySelector('.bui-popover');
      expect(popoverElement).not.toHaveAttribute('tabIndex');
    });
  });

  describe('ARIA attributes', () => {
    it('should set correct ARIA attributes for tooltip role', () => {
      render(
        <Popover
          title="Test Popover"
          content="Test content"
          defaultOpen
          role="tooltip"
          aria-label="Help information"
        >
          <button type="button">Trigger</button>
        </Popover>,
      );

      const popoverElement = document.querySelector('.bui-popover');
      const triggerElement = screen.getByRole('button');

      expect(popoverElement).toHaveAttribute('role', 'tooltip');
      expect(popoverElement).toHaveAttribute('aria-label', 'Help information');
      expect(triggerElement).toHaveAttribute('aria-haspopup', 'dialog');
      expect(triggerElement).toHaveAttribute('aria-describedby');
    });

    it('should set correct ARIA attributes for dialog role', () => {
      render(
        <Popover
          title="Test Popover"
          content="Test content"
          defaultOpen
          role="dialog"
          aria-labelledby="test-label"
        >
          <button type="button">Trigger</button>
        </Popover>,
      );

      const popoverElement = document.querySelector('.bui-popover');
      const triggerElement = screen.getByRole('button');

      expect(popoverElement).toHaveAttribute('role', 'dialog');
      expect(popoverElement).toHaveAttribute('aria-labelledby', 'test-label');
      expect(triggerElement).toHaveAttribute('aria-haspopup', 'dialog');
      expect(triggerElement).toHaveAttribute('aria-expanded', 'true');
    });

    it('should set correct ARIA attributes for menu role', () => {
      render(
        <Popover
          title="Test Popover"
          content="Test content"
          defaultOpen
          role="menu"
        >
          <button type="button">Trigger</button>
        </Popover>,
      );

      const triggerElement = screen.getByRole('button');
      expect(triggerElement).toHaveAttribute('aria-haspopup', 'menu');
    });

    it('should set correct ARIA attributes for listbox role', () => {
      render(
        <Popover
          title="Test Popover"
          content="Test content"
          defaultOpen
          role="listbox"
        >
          <button type="button">Trigger</button>
        </Popover>,
      );

      const triggerElement = screen.getByRole('button');
      expect(triggerElement).toHaveAttribute('aria-haspopup', 'listbox');
    });

    it('should update aria-describedby when popover opens/closes', () => {
      const { rerender } = render(
        <Popover title="Test Popover" content="Test content" open={false}>
          <button type="button">Trigger</button>
        </Popover>,
      );

      const triggerElement = screen.getByRole('button');
      expect(triggerElement).not.toHaveAttribute('aria-describedby');

      rerender(
        <Popover title="Test Popover" content="Test content" open>
          <button type="button">Trigger</button>
        </Popover>,
      );

      expect(triggerElement).toHaveAttribute('aria-describedby');
    });
  });

  describe('Complex interactions', () => {
    it('should handle complex content with multiple focusable elements', () => {
      render(
        <Popover
          title="Complex Popover"
          content={
            <div>
              <input placeholder="Enter text" />
              <button type="button">Submit</button>
              <a href="#test">Link</a>
            </div>
          }
          defaultOpen
          role="dialog"
        >
          <button type="button">Open Complex Popover</button>
        </Popover>,
      );

      const popoverElement = document.querySelector('.bui-popover');
      expect(popoverElement).toHaveAttribute('role', 'dialog');

      const input = screen.getByPlaceholderText('Enter text');
      const submitButton = screen.getByText('Submit');
      const link = screen.getByText('Link');

      expect(input).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
      expect(link).toBeInTheDocument();
    });

    it('should work with non-button trigger elements', () => {
      render(
        <Popover title="Test Popover" content="Test content" defaultOpen>
          <span>Span Trigger</span>
        </Popover>,
      );

      const triggerElement = screen.getByText('Span Trigger');
      expect(triggerElement).toHaveAttribute('aria-describedby');
      expect(triggerElement).toHaveAttribute('aria-haspopup');
      expect(triggerElement).not.toHaveAttribute('aria-expanded');
    });

    it('should handle anchor elements correctly', () => {
      render(
        <Popover title="Test Popover" content="Test content" defaultOpen>
          <a href="#test">Link Trigger</a>
        </Popover>,
      );

      const triggerElement = screen.getByText('Link Trigger');
      expect(triggerElement).toHaveAttribute('aria-describedby');
      expect(triggerElement).toHaveAttribute('aria-haspopup');
      expect(triggerElement).toHaveAttribute('aria-expanded', 'true');
    });
  });
});

// 1. 基于 Markdown 文档的测试
getMdDemoCodes(
  'Popover',
  (params) => {
    const {
      demoComponent,
      demoComponentName,
      demoComponentIndex,
      finishCallback,
    } = params;

    accessibilityDemoTest(
      demoComponent,
      {
        componentName: demoComponentName,
        demoComponentIndex,
        axeOptions: {
          rules: {
            'color-contrast': { enabled: true },
            'focus-order-semantics': { enabled: true },
            tabindex: { enabled: true },
          },
        },
        detailedErrorReporting: true,
        customA11yChecks: (container) => {
          const popoverElements = container.querySelectorAll(
            '[role="tooltip"], [role="dialog"], [role="menu"], [role="listbox"]',
          );
          if (popoverElements.length > 0) {
            popoverElements.forEach((element) => {
              expect(element).toHaveAttribute('id');
            });
          }

          const triggerElements = container.querySelectorAll('[aria-haspopup]');
          triggerElements.forEach((element) => {
            expect(element).toHaveAttribute('aria-haspopup');
          });
        },
        beforeAllFn: () => {
          console.log('🧪 开始 Popover Markdown 无障碍测试...');
        },
        beforeEachFn: () => {
          console.log('📝 准备测试 Popover 文档示例...');
        },
        afterEachFn: () => {
          console.log('✅ Popover 文档示例测试完成');
        },
      },
      finishCallback,
    );
  },
  [],
);

// 2. 基于自定义 Demo 组件的测试
getCustomDemoCodesFromFile(
  'Popover',
  (params) => {
    const {
      demoComponent,
      demoComponentName,
      demoComponentIndex,
      demoTotal,
      demoFilePath,
      demoKey,
      finishCallback,
    } = params;

    // eslint-disable-next-line no-console
    console.log(`start testing custom demo: ${demoComponentName} (${demoKey})`);
    // eslint-disable-next-line no-console
    console.log(`demo file path: ${demoFilePath}`);
    // eslint-disable-next-line no-console
    console.log(`progress: ${demoComponentIndex + 1}/${demoTotal}`);
    accessibilityDemoTest(
      demoComponent,
      {
        componentName: demoComponentName,
        demoComponentIndex,
        axeOptions: {},
        // 启用详细的无障碍错误报告
        detailedErrorReporting: true,
        // 自定义无障碍检查
        customA11yChecks: () => {
          // 自定义无障碍检查
        },
        beforeAllFn: () => {
          // eslint-disable-next-line no-console
          console.log(`🧪 开始 ${demoComponentName} 自定义 Demo 无障碍测试...`);
        },
        beforeEachFn: () => {
          // eslint-disable-next-line no-console
          console.log(`📝 准备测试 ${demoComponentName}...`);
        },
        afterEachFn: () => {
          // eslint-disable-next-line no-console
          console.log(`✅ ${demoComponentName} 测试完成`);
        },
      },
      finishCallback,
    );
  },
  [], // 如需跳过特定的 demo，例如['basicPopoverDemo']
);
