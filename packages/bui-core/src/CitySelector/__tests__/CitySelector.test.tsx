import * as React from 'react';
import {
  screen,
  isConformant,
  render,
  userEvent,
  fireEvent,
  waitFor,
} from 'testing';
import CitySelector from '../CitySelector';
import { ThemeProvider } from '../../ThemeProvider';
import { EN } from '../../locales';

const cities = require('./cities.json');
const hotCities = require('./hotCities.json');

const selectedCity = { code: '310100', name: '上海' };
const selectedCityGroupName = '当前城市';
const currentCity = { code: '310100', name: '上海' };
const currentCityGroupName = '定位城市';
const hotCitiesGroupName = '热门城市';
const title = '选择城市';
const onSelect = vi.fn();
const onClose = vi.fn();

const queryEle = (container, selector) => {
  return container.querySelector(selector);
};

describe('CitySelector', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

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

      const closeButton = screen.getByRole('button', { name: '关闭' });
      expect(closeButton).toHaveClass('bui-city-selector-btn-close');
      expect(closeButton).toHaveClass('bui-icon-btn');
      await userEvent.click(closeButton);
      expect(onClose).toHaveBeenCalledTimes(1);
      await userEvent.click(
        container.querySelector(
          '.bui-city-selector-list-container .bui-city-selector-list-item',
        ),
      );
      expect(onSelect).toHaveBeenCalledTimes(1);

      await userEvent.click(container.querySelector('.bui-city-selector-item'));
      expect(onSelect).toHaveBeenCalledTimes(2);

      const $scrollView = container.querySelector(
        `.bui-city-selector-scroll-view-container`,
      );
      fireEvent.scroll($scrollView, {
        target: { scrollTop: 200 },
      });
      expect($scrollView.scrollTop).toBe(200);

      await waitFor(async () => {
        await userEvent.click(
          container.querySelector(
            '.bui-city-selector-index-item[data-code="D"]',
          ),
        );
        const cityText = screen.getByText('大连');
        expect(cityText).toBeVisible();

        const cityCodeS = container.querySelector(
          '.bui-city-selector-index-item[data-code="S"]',
        );
        const mockElementFromPoint = vi.fn(() => cityCodeS);
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

  describe('locale', () => {
    it('render a11y text with en-US locale', () => {
      render(
        <ThemeProvider locale={EN}>
          <CitySelector
            cities={cities}
            onSelect={onSelect}
            selectedCity={selectedCity}
            currentCity={currentCity}
            hotCities={hotCities}
            title={title}
            onClose={onClose}
          />
        </ThemeProvider>,
      );

      // 头部关闭按钮
      expect(screen.getByRole('button', { name: 'Close' })).toHaveClass(
        'bui-city-selector-btn-close',
      );
      // 右侧字母导航容器
      expect(
        screen.getByRole('listbox', { name: 'City group index' }),
      ).toBeInTheDocument();
      // 字母分组列表：字母分组拼成“Letter A”
      expect(
        screen.getByRole('listbox', { name: 'Letter A' }),
      ).toBeInTheDocument();
      // 字母导航项：与分组列表使用同一套读屏名
      expect(
        screen.getByRole('option', { name: 'Letter A' }),
      ).toBeInTheDocument();
      // 特殊分组：未传分组名时取语言包
      expect(
        screen.getByRole('option', { name: 'Current City' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('option', { name: 'Selected City' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('option', { name: 'Hot Cities' }),
      ).toBeInTheDocument();
    });
  });
});
