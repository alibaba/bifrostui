import React, { ReactElement, useState } from 'react';
import { render, isConformant, userEvent, screen } from 'testing';
import CollapsePanel, { CollapsePanelItem, CollapsePanelProps } from '../index';

const setup = (props: CollapsePanelProps, children?: ReactElement) => {
  const component = render(
    <CollapsePanel {...props}>{children}</CollapsePanel>,
  );
  return {
    ...component,
  };
};

const setupByElement = (props: CollapsePanelProps, itemNum = 2) => {
  const component = render(
    <CollapsePanel {...props}>
      {Array(itemNum)
        .fill('')
        .map((item, index) => {
          return (
            <CollapsePanelItem
              key={`${index + 1}`}
              label={`这是面板标题${index + 1}`}
            >
              这是面板内容{index + 1}
            </CollapsePanelItem>
          );
        })}
    </CollapsePanel>,
  );
  return {
    ...component,
  };
};

const items = [
  {
    key: '1',
    label: '这是面板标题1',
    children: <p>这是面板内容1</p>,
  },
  {
    key: '2',
    label: '这是面板标题2',
    children: <p>这是面板内容2</p>,
  },
];

describe('CollapsePanel', () => {
  isConformant({
    Component: CollapsePanel,
    displayName: 'BuiCollapsePanel',
    className: 'bui-collapse-panel',
  });
  it('should render children', () => {
    const { container } = setup({
      defaultActiveKeys: ['1'],
      items,
    });
    const firstPanel = container.querySelectorAll(
      '.bui-collapse-panel-item',
    )[0];
    expect(
      firstPanel.querySelector('.bui-collapse-panel-item-header-label'),
    ).toHaveTextContent('这是面板标题1');
    expect(
      firstPanel.querySelector('.bui-collapse-panel-item-content'),
    ).toHaveTextContent('这是面板内容1');
  });
  it('should default open active panel', () => {
    const { container } = setup({
      defaultActiveKeys: ['1'],
      items,
    });
    const firstPanel = container.querySelectorAll(
      '.bui-collapse-panel-item',
    )[0];
    const secondPanel = container.querySelectorAll(
      '.bui-collapse-panel-item',
    )[1];
    expect(firstPanel).toHaveClass('bui-collapse-panel-item-active');
    expect(secondPanel).not.toHaveClass('bui-collapse-panel-item-active');
  });
  it('should only open one panel when use accordion', () => {
    const { container } = setup({
      defaultActiveKeys: ['1'],
      accordion: true,
      items,
    });
    const firstPanel = container.querySelectorAll(
      '.bui-collapse-panel-item',
    )[0];
    const secondPanel = container.querySelectorAll(
      '.bui-collapse-panel-item',
    )[1];

    userEvent.click(screen.getByText('这是面板标题2'));
    expect(firstPanel).not.toHaveClass('bui-collapse-panel-item-active');
    expect(secondPanel).toHaveClass('bui-collapse-panel-item-active');
  });
  it('should use custom icon', () => {
    const customIcon = <div>custom icon</div>;
    setup({
      defaultActiveKeys: ['1'],
      arrowIcon: customIcon,
      items: [
        {
          key: '1',
          label: '这是面板标题1',
          children: <p>这是面板内容1</p>,
        },
      ],
    });
    const icon = screen.getByText('custom icon');
    expect(icon).toBeVisible();
  });
  it('should use custom icon by function', () => {
    setup({
      arrowIcon: (active) => {
        if (active) {
          return <div>active icon</div>;
        }
        return <div>unactived icon</div>;
      },
      items: [
        {
          key: '1',
          label: '这是面板标题1',
          children: <p>这是面板内容1</p>,
        },
      ],
    });
    const unactivedIcon = screen.getByText('unactived icon');
    expect(unactivedIcon).toBeVisible();
    userEvent.click(screen.getByText('这是面板标题1'));
    const activeIcon = screen.getByText('active icon');
    expect(activeIcon).toBeVisible();
  });
  it('should call onChange', () => {
    const fakeChange = jest.fn();
    const Component = () => {
      const [activeKeys, setActiveKeys] = useState(['1']);
      const handleChange = (keys) => {
        fakeChange(keys);
        setActiveKeys(keys);
      };

      return (
        <CollapsePanel
          activeKeys={activeKeys}
          items={items}
          onChange={handleChange}
        />
      );
    };
    const { container } = render(<Component />);
    const firstPanel = container.querySelectorAll(
      '.bui-collapse-panel-item',
    )[0];
    const secondPanel = container.querySelectorAll(
      '.bui-collapse-panel-item',
    )[1];

    userEvent.click(screen.getByText('这是面板标题2'));
    expect(fakeChange).toBeCalled();
    expect(fakeChange).toBeCalledWith(['2', '1']);
    expect(firstPanel).toHaveClass('bui-collapse-panel-item-active');
    expect(secondPanel).toHaveClass('bui-collapse-panel-item-active');
  });

  describe('CollapsePanelItem', () => {
    it('should render children', () => {
      const { container } = setupByElement({
        defaultActiveKeys: ['1'],
      });
      const firstPanel = container.querySelectorAll(
        '.bui-collapse-panel-item',
      )[0];
      expect(
        firstPanel.querySelector('.bui-collapse-panel-item-header-label'),
      ).toHaveTextContent('这是面板标题1');
      expect(
        firstPanel.querySelector('.bui-collapse-panel-item-content'),
      ).toHaveTextContent('这是面板内容1');
    });
    it('should default open active panel', () => {
      const { container } = setupByElement({
        defaultActiveKeys: ['1'],
      });
      const firstPanel = container.querySelectorAll(
        '.bui-collapse-panel-item',
      )[0];
      const secondPanel = container.querySelectorAll(
        '.bui-collapse-panel-item',
      )[1];
      expect(firstPanel).toHaveClass('bui-collapse-panel-item-active');
      expect(secondPanel).not.toHaveClass('bui-collapse-panel-item-active');
    });
    it('should only open one panel when use accordion', () => {
      const { container } = setupByElement({
        defaultActiveKeys: ['1'],
        accordion: true,
      });
      const firstPanel = container.querySelectorAll(
        '.bui-collapse-panel-item',
      )[0];
      const secondPanel = container.querySelectorAll(
        '.bui-collapse-panel-item',
      )[1];

      userEvent.click(screen.getByText('这是面板标题2'));
      expect(firstPanel).not.toHaveClass('bui-collapse-panel-item-active');
      expect(secondPanel).toHaveClass('bui-collapse-panel-item-active');
    });
    it('should use custom icon', () => {
      const customIcon = <div>custom icon</div>;

      setupByElement(
        {
          defaultActiveKeys: ['1'],
          accordion: true,
          arrowIcon: customIcon,
        },
        1,
      );
      const icon = screen.getByText('custom icon');
      expect(icon).toBeVisible();
    });
    it('should use custom icon by function', () => {
      setupByElement(
        {
          arrowIcon: (active) => {
            if (active) {
              return <div>active icon</div>;
            }
            return <div>unactived icon</div>;
          },
        },
        1,
      );
      const unactivedIcon = screen.getByText('unactived icon');
      expect(unactivedIcon).toBeVisible();
      userEvent.click(screen.getByText('这是面板标题1'));
      const activeIcon = screen.getByText('active icon');
      expect(activeIcon).toBeVisible();
    });
    it('should call onChange', () => {
      const fakeChange = jest.fn();
      const Component = () => {
        const [activeKeys, setActiveKeys] = useState(['1']);
        const handleChange = (keys) => {
          fakeChange(keys);
          setActiveKeys(keys);
        };

        return (
          <CollapsePanel activeKeys={activeKeys} onChange={handleChange}>
            <CollapsePanelItem key="1" label="这是面板标题1">
              这是面板内容1
            </CollapsePanelItem>
            <CollapsePanelItem key="2" label="这是面板标题2">
              这是面板内容2
            </CollapsePanelItem>
          </CollapsePanel>
        );
      };
      const { container } = render(<Component />);
      const firstPanel = container.querySelectorAll(
        '.bui-collapse-panel-item',
      )[0];
      const secondPanel = container.querySelectorAll(
        '.bui-collapse-panel-item',
      )[1];

      userEvent.click(screen.getByText('这是面板标题2'));
      expect(fakeChange).toBeCalled();
      expect(fakeChange).toBeCalledWith(['2', '1']);
      expect(firstPanel).toHaveClass('bui-collapse-panel-item-active');
      expect(secondPanel).toHaveClass('bui-collapse-panel-item-active');
    });
  });
});
