import React from 'react';
import {
  screen,
  isConformant,
  render,
  userEvent,
  fireEvent,
  waitFor,
} from 'testing';
import CitySelector from '../CitySelector';
import { hotCities, cities } from '../mock';

const selectedCity = { code: '310100', name: '上海' };
const selectedCityGroupName = '当前城市';
const currentCity = { code: '310100', name: '上海' };
const currentCityGroupName = '定位城市';
const hotCitiesGroupName = '热门城市';
const title = '选择城市';
const onSelect = jest.fn();
const onClose = jest.fn();

const queryEle = (container, selector) => {
  return container.querySelector(selector);
};

describe('CitySelector', () => {
  isConformant({
    Component: CitySelector,
    displayName: 'BuiCitySelector',
    className: 'bui-city-selector',
    skip: ['component-has-root-ref'],
    requiredProps: {
      cities,
    },
  });
  describe('prop: content', () => {
    it('render with citySelector', async () => {
      const { container } = render(
        <CitySelector
          cities={cities}
          onSelect={onSelect}
          selectedCity={selectedCity}
          selectedCityGroupName={selectedCityGroupName}
          currentCity={currentCity}
          currentCityGroupName={currentCityGroupName}
          hotCities={hotCities}
          hotCitiesGroupName={hotCitiesGroupName}
          disableIndex={false}
          title={title}
          onClose={onClose}
        />,
      );

      expect(queryEle(container, '#CRRT')).toBeInTheDocument();
      expect(queryEle(container, '#GPS')).toBeInTheDocument();
      expect(queryEle(container, '#HOT')).toBeInTheDocument();
      expect(
        queryEle(container, '.bui-city-selector-list-container'),
      ).toBeInTheDocument();
      expect(
        queryEle(container, '.bui-city-selector-title'),
      ).toBeInTheDocument();
      userEvent.click(container.querySelector('.bui-city-selector-btn-close'));
      expect(onClose).toHaveBeenCalledTimes(1);
      userEvent.click(
        container.querySelector(
          '.bui-city-selector-list-container .bui-city-selector-list-item',
        ),
      );
      expect(onSelect).toHaveBeenCalledTimes(1);

      userEvent.click(container.querySelector('.bui-city-selector-item'));
      expect(onSelect).toHaveBeenCalledTimes(2);

      const $scrollView = container.querySelector(
        `.bui-city-selector-scroll-view-container`,
      );
      fireEvent.scroll($scrollView, {
        target: { scrollTop: 200 },
      });
      expect($scrollView.scrollTop).toBe(200);

      await waitFor(() => {
        userEvent.click(
          container.querySelector(
            '.bui-city-selector-index-item[data-code="D"]',
          ),
        );
        const cityText = screen.getByText('大连');
        expect(cityText).toBeVisible();

        const cityCodeS = container.querySelector(
          '.bui-city-selector-index-item[data-code="S"]',
        );
        const mockElementFromPoint = jest.fn(() => cityCodeS);
        // 替换原生函数
        Object.defineProperty(document, 'elementFromPoint', {
          value: mockElementFromPoint,
          writable: true,
        });
        const $codeContainer = queryEle(
          container,
          '.bui-city-selector-index-list',
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
        const citySText = screen.getByText('三门峡');
        expect(citySText).toBeVisible();
      });
    });

    it('render with citySelector special', async () => {
      const { container } = render(
        <CitySelector
          cities={[]}
          onSelect={onSelect}
          selectedCity={selectedCity}
          selectedCityGroupName={selectedCityGroupName}
          currentCity={currentCity}
          currentCityGroupName={currentCityGroupName}
          hotCities={hotCities}
          hotCitiesGroupName={hotCitiesGroupName}
          disableIndex
          title={title}
          onClose={onClose}
        />,
      );

      const $listContainer = queryEle(
        container,
        '.bui-city-selector-list-container',
      );
      expect($listContainer).toBe(null);

      const $codeContainer = queryEle(
        container,
        '.bui-city-selector-index-list',
      );
      expect($codeContainer).toBe(null);
    });
  });
});
