import React from 'react';
import { CloseIcon } from '@bifrostui/icons';
import { render, isConformant, screen, userEvent } from 'testing';
import List, { ListItem, ListProps, ListItemContent } from '../index';

const setup = (props: ListProps) => {
  const component = render(<List {...props} />);
  return {
    ...component,
  };
};

describe('List', () => {
  isConformant({
    Component: List,
    displayName: 'BuiList',
    className: 'bui-list',
  });
  describe('prop: size', () => {
    it.each(['small', 'medium', 'large'] as const)(
      'should render size correct',
      (size) => {
        const { container } = render(
          <List size={size}>
            <ListItem>1</ListItem>
            <ListItem>2</ListItem>
            <ListItem>3</ListItem>
          </List>,
        );
        expect(container.firstChild).toHaveClass(`bui-list-${size}`);
      },
    );
  });
  it('list should render litItem current', () => {
    const { container } = setup({
      header: '列表标题',
      subheader: '列表子标题',
      children: null,
    });
    expect(container).toHaveTextContent('列表标题');
    expect(container).toHaveTextContent('列表子标题');
  });
  it('list should render divider default', () => {
    const { container } = render(
      <List>
        <ListItem />
        <ListItem />
      </List>,
    );
    const divider = container.getElementsByClassName('bui-list-item-divider');
    expect(divider.length).toBe(2);
  });
});

describe('ListItem', () => {
  describe('prop: endIcon', () => {
    it('listItem should render endIcon', () => {
      const { container } = render(
        <List>
          <ListItem endIcon={<CloseIcon />} />
        </List>,
      );
      const element = container.getElementsByClassName('bui-svg-icon');
      expect(element.length).toBe(1);
      // expect(element).toContainElement(closeIcon);
      // expect(element).not.toContainElement(arrowForwardIcon);
    });
    it('should not render endIcon when it is false', () => {
      const { container } = render(
        <List>
          <ListItem endIcon={false} />
        </List>,
      );
      const arrowForward = container.getElementsByClassName('bui-svg-icon');
      expect(arrowForward.length).toBe(0);
    });
    it('should render endIcon default', () => {
      const { container } = render(
        <List>
          <ListItem
            onClick={() => {
              // console.log('test');
            }}
          >
            test
          </ListItem>
        </List>,
      );
      const element = container.getElementsByClassName('bui-svg-icon');
      expect(element.length).toBe(1);
      // expect(container.getElementsByClassName('bui-svg-icon')?.[0]).toContainElement(
      //   arrowForwardIcon,
      // );
    });
  });
  describe('prop: disabled', () => {
    it('could click default', async () => {
      const onClick = vi.fn();
      render(
        <List>
          <ListItem onClick={onClick}>list-item</ListItem>
        </List>,
      );

      await userEvent.click(screen.getByText(/list-item/));
      expect(onClick).toHaveBeenCalled();
    });
    it('could not click when it is disabled', () => {
      const onClick = vi.fn(() => {
        // console.log('成功点击List');
      });
      const { container } = render(
        <List>
          <ListItem disabled onClick={onClick}>
            点击列表
          </ListItem>
        </List>,
      );
      expect(container.firstChild.childNodes[0]).toHaveClass(
        'bui-list-item-disabled',
      );
    });
  });
});

describe('ListContent', () => {
  it('listContent should render content', () => {
    const { container } = setup({
      children: (
        <ListItem>
          <ListItemContent primary="主要内容" secondary="次要内容" />
        </ListItem>
      ),
    });
    expect(container).toHaveTextContent('主要内容');
    expect(container).toHaveTextContent('次要内容');
  });
});
