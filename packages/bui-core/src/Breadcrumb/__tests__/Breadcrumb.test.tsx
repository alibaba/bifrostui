import React from 'react';
import { render, isConformant, userEvent, screen } from 'testing';
import Breadcrumb, { BreadcrumbItem, BreadcrumbProps } from '../index';

const setup = (props: BreadcrumbProps) => {
  const component = render(<Breadcrumb {...props} />);
  return {
    ...component,
  };
};

const setupByElement = (props: BreadcrumbProps, itemNum = 2) => {
  const component = render(
    <Breadcrumb {...props}>
      {itemNum
        ? Array(itemNum)
            .fill('')
            .map((item, index) => {
              return (
                <BreadcrumbItem key={`${index + 1}`}>
                  路径{index + 1}
                </BreadcrumbItem>
              );
            })
        : null}
    </Breadcrumb>,
  );
  return {
    ...component,
  };
};

const items: Array<{
  title: string;
  separator?: string;
}> = [
  {
    title: '路径1',
  },
  {
    title: '路径2',
  },
];

describe('Breadcrumb', () => {
  isConformant({
    Component: Breadcrumb,
    displayName: 'BuiBreadcrumb',
    className: 'bui-breadcrumb',
    requiredProps: {
      items,
    },
  });

  it('should render children', () => {
    const { container } = setup({
      items,
    });
    const firstRouteItem = container.querySelectorAll(
      '.bui-breadcrumb-item',
    )[0];
    const secondRouteItem = container.querySelectorAll(
      '.bui-breadcrumb-item',
    )[1];
    const separator = container.querySelectorAll(
      '.bui-breadcrumb-item-separator',
    )[0];
    expect(firstRouteItem).toHaveTextContent('路径1');
    expect(secondRouteItem).toHaveTextContent('路径2');
    expect(separator).toHaveTextContent('/');
  });
  it('should render custom separator', () => {
    const { container } = setup({
      items,
      separator: '>',
    });
    const firstRouteItem = container.querySelectorAll(
      '.bui-breadcrumb-item',
    )[0];
    const secondRouteItem = container.querySelectorAll(
      '.bui-breadcrumb-item',
    )[1];
    const separator = container.querySelectorAll(
      '.bui-breadcrumb-item-separator',
    )[0];
    expect(firstRouteItem).toHaveTextContent('路径1');
    expect(secondRouteItem).toHaveTextContent('路径2');
    expect(separator).toHaveTextContent('>');
  });
  it('should render item custom separator', () => {
    const { container } = setup({
      items: [
        {
          ...items[0],
          separator: ':',
        },
        items[1],
      ],
      separator: ':',
    });
    const separator = container.querySelectorAll(
      '.bui-breadcrumb-item-separator',
    )[0];
    expect(separator).toHaveTextContent(':');
  });
  it('should trigger item onClick', () => {
    const fakeClick = jest.fn();
    setup({
      items: [
        {
          ...items[0],
          onClick: fakeClick,
        },
        items[1],
      ],
      separator: ':',
    });
    userEvent.click(screen.getByText('路径1'));
    expect(fakeClick).toBeCalled();
  });
  it('should return null', () => {
    const { container } = setup({});

    expect(container.firstChild).toBeNull();
  });

  describe('CollapsePanelItem', () => {
    it('should render children', () => {
      const { container } = setupByElement({});
      const firstRouteItem = container.querySelectorAll(
        '.bui-breadcrumb-item',
      )[0];
      const secondRouteItem = container.querySelectorAll(
        '.bui-breadcrumb-item',
      )[1];
      const separator = container.querySelectorAll(
        '.bui-breadcrumb-item-separator',
      )[0];
      expect(firstRouteItem).toHaveTextContent('路径1');
      expect(secondRouteItem).toHaveTextContent('路径2');
      expect(separator).toHaveTextContent('/');
    });
    it('should render custom separator', () => {
      const { container } = setupByElement({
        separator: '>',
      });
      const firstRouteItem = container.querySelectorAll(
        '.bui-breadcrumb-item',
      )[0];
      const secondRouteItem = container.querySelectorAll(
        '.bui-breadcrumb-item',
      )[1];
      const separator = container.querySelectorAll(
        '.bui-breadcrumb-item-separator',
      )[0];
      expect(firstRouteItem).toHaveTextContent('路径1');
      expect(secondRouteItem).toHaveTextContent('路径2');
      expect(separator).toHaveTextContent('>');
    });
    it('should render item custom separator', () => {
      const { container } = render(
        <Breadcrumb>
          <BreadcrumbItem separator=":">路径1</BreadcrumbItem>
          <BreadcrumbItem>路径2</BreadcrumbItem>
        </Breadcrumb>,
      );
      const separator = container.querySelectorAll(
        '.bui-breadcrumb-item-separator',
      )[0];
      expect(separator).toHaveTextContent(':');
    });
    it('should trigger item onClick', () => {
      const fakeClick = jest.fn();
      render(
        <Breadcrumb>
          <BreadcrumbItem onClick={fakeClick}>路径1</BreadcrumbItem>
          <BreadcrumbItem>路径2</BreadcrumbItem>
        </Breadcrumb>,
      );
      userEvent.click(screen.getByText('路径1'));
      expect(fakeClick).toBeCalled();
    });
    it('should return null', () => {
      const { container } = setupByElement({}, 0);

      expect(container.firstChild).toBeNull();
    });
  });
});
