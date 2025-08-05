import React from 'react';
import {
  screen,
  isConformant,
  render,
  userEvent,
  fireEvent,
  waitFor,
} from 'testing';
import ItemSelector from '../ItemSelector';

const items = require('./items.json');

const title = '选择Item';
const onSelect = vi.fn();
const onClose = vi.fn();

const queryEle = (container, selector) => {
  return container.querySelector(selector);
};

describe('ItemSelector', () => {
  isConformant({
    Component: ItemSelector,
    displayName: 'BuiItemSelector',
    className: 'bui-item-selector',
    skip: ['component-has-root-ref'],
    requiredProps: {
      items,
    },
  });
  describe('prop: content', () => {
    it('render with itemSelector', async () => {
      const { container } = render(
        <ItemSelector
          items={items}
          onSelect={onSelect}
          disableIndex={false}
          title={title}
          onClose={onClose}
        />,
      );

      expect(queryEle(container, '#CRRT')).toBeInTheDocument();
      expect(queryEle(container, '#GPS')).toBeInTheDocument();
      expect(queryEle(container, '#HOT')).toBeInTheDocument();
      expect(
        queryEle(container, '.bui-item-selector-list-container'),
      ).toBeInTheDocument();
      expect(
        queryEle(container, '.bui-item-selector-title'),
      ).toBeInTheDocument();
      await userEvent.click(
        container.querySelector('.bui-item-selector-btn-close'),
      );
      expect(onClose).toHaveBeenCalledTimes(1);
      await userEvent.click(
        container.querySelector(
          '.bui-item-selector-list-container .bui-item-selector-list-item',
        ),
      );
      expect(onSelect).toHaveBeenCalledTimes(1);

      await userEvent.click(container.querySelector('.bui-item-selector-item'));
      expect(onSelect).toHaveBeenCalledTimes(2);

      const $scrollView = container.querySelector(
        `.bui-item-selector-scroll-view-container`,
      );
      fireEvent.scroll($scrollView, {
        target: { scrollTop: 200 },
      });
      expect($scrollView.scrollTop).toBe(200);

      await waitFor(async () => {
        await userEvent.click(
          container.querySelector(
            '.bui-item-selector-index-item[data-code="D"]',
          ),
        );
        const itemText = screen.getByText('大连');
        expect(itemText).toBeVisible();

        const itemCodeS = container.querySelector(
          '.bui-item-selector-index-item[data-code="S"]',
        );
        const mockElementFromPoint = vi.fn(() => itemCodeS);
        // 替换原生函数
        Object.defineProperty(document, 'elementFromPoint', {
          value: mockElementFromPoint,
          writable: true,
        });
        const $codeContainer = queryEle(
          container,
          '.bui-item-selector-index-list',
        );
        fireEvent.touchMove($codeContainer, {
          changedTouches: [
            {
              clientX: 350,
              clientY: 223,
            },
          ],
          cancelable: true,
          bubbles: true,
        });
        const itemSText = screen.getByText('三门峡');
        expect(itemSText).toBeVisible();
      });
    });

    it('render with itemSelector special', async () => {
      const { container } = render(
        <ItemSelector
          items={[]}
          onSelect={onSelect}
          disableIndex
          title={title}
          onClose={onClose}
        />,
      );

      const $listContainer = queryEle(
        container,
        '.bui-item-selector-list-container',
      );
      expect($listContainer).toBe(null);

      const $codeContainer = queryEle(
        container,
        '.bui-item-selector-index-list',
      );
      expect($codeContainer).toBe(null);
    });
  });
});
