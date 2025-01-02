import React, { useState } from 'react';
import { fireEvent, isConformant, render, act } from 'testing';
import { TabPanel, Tabs, Tab } from '..';

describe('Tabs', () => {
  const originalModule = jest.requireActual('@bifrostui/utils');
  const restApi = jest.requireActual('react');
  const rootClass = {
    tabs: 'bui-tabs',
    tabpanel: 'bui-tabpanel',
  };

  beforeEach(() => {
    document.body.innerHTML = '';
    jest.mock('@bifrostui/utils', () => ({
      isMini: false,
    }));
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  isConformant({
    Component: Tabs,
    displayName: 'BuiTabs',
    className: rootClass.tabs,
    requiredProps: {
      tabs: [
        { title: '水果', index: 'fruits' },
        { title: '蔬菜', index: 'vegetables' },
        { title: '动物', index: 'animals' },
      ],
    },
  });

  it('should render by tabs', () => {
    function Component() {
      return (
        <Tabs
          value="fruits"
          tabs={[
            { title: '水果', index: 'fruits' },
            { title: '蔬菜', index: 'vegetables' },
            { title: '动物', index: 'animals' },
          ]}
        />
      );
    }
    const { container } = render(<Component />);

    const tabs = container.querySelectorAll(`.bui-tab`);
    expect(tabs.length).toBe(3);
    expect(tabs[0]).toHaveTextContent('水果');
    expect(tabs[1]).toHaveTextContent('蔬菜');
    expect(tabs[2]).toHaveTextContent('动物');
  });

  it('should render with default property', () => {
    function Component() {
      return (
        <Tabs
          value="fruits"
          tabs={[
            { title: '水果', index: 'fruits' },
            { title: '蔬菜', index: 'vegetables' },
            { title: '动物', index: 'animals' },
          ]}
        />
      );
    }
    const { container } = render(<Component />);

    const tabLine = container.querySelector(`.${rootClass.tabs}-tabline`);
    expect(tabLine).toHaveStyle({
      transform: 'translate3d(0px, 0px, 0px)',
      transition: 'transform 0.3s ease',
    });
  });

  it('should full container', () => {
    function Component() {
      return (
        <div style={{ width: '375px' }}>
          <Tabs
            value="vegetables"
            tabs={[
              { title: '水果', index: 'fruits' },
              { title: '蔬菜', index: 'vegetables' },
              { title: '动物', index: 'animals' },
            ]}
          />
        </div>
      );
    }

    const { container } = render(<Component />);
    const tabWrapperList = container.querySelectorAll(
      `.${rootClass.tabs}-tab-wrapper`,
    );
    tabWrapperList.forEach((item) => {
      expect(item).toHaveStyle({ flex: '1 0 auto' });
    });
  });

  describe('test with TabPanel', () => {
    it('should be actived by `value` property', () => {
      function Component() {
        const [value] = useState('vegetables');
        return (
          <div data-testid="test-wrapper">
            <Tabs
              value="vegetables"
              tabs={[
                { title: '水果', index: 'fruits' },
                { title: '蔬菜', index: 'vegetables' },
                { title: '动物', index: 'animals' },
              ]}
            />
            <TabPanel value={value} index="fruits">
              菠萝
            </TabPanel>
            <TabPanel value={value} index="vegetables">
              西红柿
            </TabPanel>
            <TabPanel value={value} index="animals">
              大象
            </TabPanel>
          </div>
        );
      }
      const { container, getByTestId } = render(<Component />);

      const tabLine = container.querySelector(`.${rootClass.tabs}-tabline`);
      const activePabel = container.querySelector(
        `.${rootClass.tabpanel}-active`,
      );
      expect(tabLine).toBeVisible();
      expect(activePabel).toHaveTextContent('西红柿');
      expect(getByTestId('test-wrapper')).toMatchSnapshot();
    });

    it('`onChange` event should be called', () => {
      function Component() {
        const [value, setValue] = useState('fruits');
        const handleChange = (e, { index }) => {
          setValue(index);
        };
        return (
          <>
            <Tabs
              className="tabs-test"
              onChange={handleChange}
              value={value}
              tabs={[
                { title: '水果', index: 'fruits' },
                { title: '蔬菜', index: 'vegetables' },
                { title: '动物', index: 'animals' },
              ]}
            />
            <TabPanel value={value} index="fruits">
              菠萝
            </TabPanel>
            <TabPanel value={value} index="vegetables">
              西红柿
            </TabPanel>
            <TabPanel value={value} index="animals">
              大象
            </TabPanel>
          </>
        );
      }

      const { container } = render(<Component />);
      const [, tab2] = container.querySelectorAll(`.bui-tab`);
      fireEvent.click(tab2);
      const activeTab = container.querySelector(`.bui-tab-active`);
      const activeTabPanel = container.querySelector(
        `.${rootClass.tabpanel}-active`,
      );
      expect(activeTab).toHaveTextContent('蔬菜');
      expect(activeTabPanel).toHaveTextContent('西红柿');
    });

    it('should save children nodes when `keepMounted` is true', () => {
      function Component() {
        const [value, setValue] = useState('fruits');
        const handleChange = (e, { index }) => {
          setValue(index);
        };
        return (
          <>
            <Tabs
              className="tabs-test"
              onChange={handleChange}
              value={value}
              tabs={[
                { title: '水果', index: 'fruits' },
                { title: '蔬菜', index: 'vegetables' },
                { title: '动物', index: 'animals' },
              ]}
            />
            <TabPanel keepMounted value={value} index="fruits">
              菠萝
            </TabPanel>
            <TabPanel keepMounted value={value} index="vegetables">
              西红柿
            </TabPanel>
            <TabPanel value={value} index="animals">
              大象
            </TabPanel>
          </>
        );
      }

      const { container } = render(<Component />);
      const [, tab2, tab3] = container.querySelectorAll(`.bui-tab`);
      const [tabpanel1, tabpanel2, tabpanel3] = container.querySelectorAll(
        `.${rootClass.tabpanel}`,
      );
      expect(tabpanel2).toHaveTextContent('西红柿');
      expect(tabpanel3).toHaveTextContent('');
      fireEvent.click(tab3);
      expect(tabpanel3).toHaveTextContent('大象');
      fireEvent.click(tab2);
      expect(tabpanel1).toHaveTextContent('菠萝');
      expect(tabpanel3).toHaveTextContent('');
    });

    it('should disable click', () => {
      const handleChange = jest.fn();
      function Component(props: { handleChange: any }) {
        const { handleChange: change } = props;
        const [value] = useState('fruits');
        return (
          <>
            <Tabs
              className="tabs-test"
              onChange={change}
              value={value}
              tabs={[
                { title: '水果', index: 'fruits' },
                { title: '蔬菜', index: 'vegetables', disabled: true },
                { title: '动物', index: 'animals' },
              ]}
            />
            <TabPanel keepMounted value={value} index="fruits">
              菠萝
            </TabPanel>
            <TabPanel keepMounted value={value} index="vegetables">
              西红柿
            </TabPanel>
            <TabPanel value={value} index="animals">
              大象
            </TabPanel>
          </>
        );
      }

      const { container } = render(<Component handleChange={handleChange} />);
      const [, tab2] = container.querySelectorAll(`.bui-tab`);
      fireEvent.click(tab2);
      expect(handleChange).not.toBeCalled();
    });

    it('should active default Tab when got error value', () => {
      function Component() {
        const [value, setValue] = useState('vegetables111');
        const handleChange = (e, { index }) => {
          setValue(index);
        };
        return (
          <>
            <Tabs
              className="tabs-test"
              onChange={handleChange}
              value={value}
              tabs={[]}
            />
            <TabPanel keepMounted value={value} index="fruits">
              菠萝
            </TabPanel>
            <TabPanel keepMounted value={value} index="vegetables">
              西红柿
            </TabPanel>
            <TabPanel value={value} index="animals">
              大象
            </TabPanel>
          </>
        );
      }

      const { container } = render(<Component />);
      const tabline = container.querySelector(`.bui-tabs-tabline`);
      expect(tabline).toHaveClass('bui-tabs-tabline');
    });
  });

  it('should render when resize', async () => {
    jest.resetModules();
    jest.doMock('@bifrostui/utils', () => ({
      ...originalModule,
      debounce: jest.fn((fn) => fn),
    }));
    jest.doMock('react', () => ({
      ...restApi,
    }));
    const { default: FakeTabs } = await import('../index');

    function Component() {
      const [value, setValue] = useState('fruits');
      const handleChange = (e, { index }) => {
        setValue(index);
      };
      return (
        <>
          <FakeTabs
            className="tabs-test"
            onChange={handleChange}
            value={value}
            tabs={[
              { title: '水果', index: 'fruits' },
              { title: '蔬菜', index: 'vegetables' },
              { title: '动物', index: 'animals' },
            ]}
          />
          <TabPanel value={value} index="fruits">
            菠萝
          </TabPanel>
          <TabPanel value={value} index="vegetables">
            西红柿
          </TabPanel>
          <TabPanel value={value} index="animals">
            大象
          </TabPanel>
        </>
      );
    }

    const { container } = render(<Component />);
    await act(async () => {
      await jest.runAllTimers();
    });

    act(() => {
      global.dispatchEvent(new Event('resize'));
      const [, tab2] = container.querySelectorAll(`.bui-tab`);
      fireEvent.click(tab2);
    });
    const activeTab = container.querySelector(`.bui-tab-active`);
    const activeTabPanel = container.querySelector(
      `.${rootClass.tabpanel}-active`,
    );
    expect(activeTab).toHaveTextContent('蔬菜');
    expect(activeTabPanel).toHaveTextContent('西红柿');
  });

  it('should no active Tab when value is invalid', () => {
    function Component() {
      const [value, setValue] = useState('2');
      const defultList = [
        { title: '长津湖', index: '1' },
        { title: '战狼2', index: '2' },
        { title: '你好，李焕英', index: '3' },
        { title: '哪吒之魔童降世', index: '4' },
        { title: '流浪地球', index: '5' },
        { title: '唐人街探案3', index: '6' },
      ];
      const [tabList, setTabList] = useState(defultList);

      const handleChange = (e, { index }) => {
        setValue(index);
      };

      return (
        <>
          <div
            data-testid="test-invalid-value"
            onClick={() => {
              setValue('');
            }}
          >
            置为无效值
          </div>
          <div
            data-testid="test-modify-tablist"
            onClick={() => {
              if (tabList.length === 4) {
                setTabList(defultList);
              } else {
                const newTabList = defultList.slice(0, 4);
                setTabList(newTabList);
                if (!newTabList.some((item) => item.index === value)) {
                  setValue('1');
                }
              }
            }}
          >
            {tabList.length === 4 ? '增加' : '减少'}TabList长度
          </div>
          <div style={{ width: '325px' }}>
            <Tabs
              style={{ marginTop: '20px', marginBottom: '12px' }}
              value={value}
              onChange={handleChange}
            >
              {tabList.map((item) => (
                <Tab key={item.index} {...item}>
                  {item.title}
                </Tab>
              ))}
            </Tabs>

            {tabList.map((item) => (
              <TabPanel key={item.index} value={value} index={item.index}>
                {item.index}
              </TabPanel>
            ))}
          </div>
        </>
      );
    }

    const { container, getByTestId } = render(<Component />);

    const testInvalidValueBtn = getByTestId('test-invalid-value');
    const [, , tab3] = container.querySelectorAll(`.bui-tab`);
    const tabpanels = container.querySelectorAll(`.${rootClass.tabpanel}`);

    tabpanels.forEach((tabpanel, index) => {
      if (index === 1) {
        expect(tabpanel).toHaveTextContent('2');
      } else {
        expect(tabpanel).toHaveTextContent('');
      }
    });

    fireEvent.click(testInvalidValueBtn);
    tabpanels.forEach((tabpanel) => {
      expect(tabpanel).toHaveTextContent('');
    });

    fireEvent.click(tab3);
    tabpanels.forEach((tabpanel, index) => {
      if (index === 2) {
        expect(tabpanel).toHaveTextContent('3');
      } else {
        expect(tabpanel).toHaveTextContent('');
      }
    });
  });

  it('should no active Tab when value is invalid by use tabs', () => {
    function Component() {
      const [value, setValue] = useState('2');
      const defultList = [
        { title: '长津湖', index: '1' },
        { title: '战狼2', index: '2' },
        { title: '你好，李焕英', index: '3' },
        { title: '哪吒之魔童降世', index: '4' },
        { title: '流浪地球', index: '5' },
        { title: '唐人街探案3', index: '6' },
      ];
      const [tabList, setTabList] = useState(defultList);

      const handleChange = (e, { index }) => {
        setValue(index);
      };

      return (
        <>
          <div
            data-testid="test-invalid-value"
            onClick={() => {
              setValue('');
            }}
          >
            置为无效值
          </div>
          <div
            data-testid="test-modify-tablist"
            onClick={() => {
              if (tabList.length === 4) {
                setTabList(defultList);
              } else {
                const newTabList = defultList.slice(0, 4);
                setTabList(newTabList);
                if (!newTabList.some((item) => item.index === value)) {
                  setValue('1');
                }
              }
            }}
          >
            {tabList.length === 4 ? '增加' : '减少'}TabList长度
          </div>
          <div style={{ width: '325px' }}>
            <Tabs
              style={{ marginTop: '20px', marginBottom: '12px' }}
              value={value}
              tabs={tabList}
              onChange={handleChange}
            />

            {tabList.map((item) => (
              <TabPanel key={item.index} value={value} index={item.index}>
                {item.index}
              </TabPanel>
            ))}
          </div>
        </>
      );
    }

    const { container, getByTestId } = render(<Component />);

    const testInvalidValueBtn = getByTestId('test-invalid-value');
    const [, , tab3] = container.querySelectorAll(`.bui-tab`);
    const tabpanels = container.querySelectorAll(`.${rootClass.tabpanel}`);

    tabpanels.forEach((tabpanel, index) => {
      if (index === 1) {
        expect(tabpanel).toHaveTextContent('2');
      } else {
        expect(tabpanel).toHaveTextContent('');
      }
    });

    fireEvent.click(testInvalidValueBtn);
    tabpanels.forEach((tabpanel) => {
      expect(tabpanel).toHaveTextContent('');
    });

    fireEvent.click(tab3);
    tabpanels.forEach((tabpanel, index) => {
      if (index === 2) {
        expect(tabpanel).toHaveTextContent('3');
      } else {
        expect(tabpanel).toHaveTextContent('');
      }
    });
  });

  it('should render correctly when TabList changed', async () => {
    function Component() {
      const [value, setValue] = useState('2');
      const defultList = [
        { title: '长津湖', index: '1' },
        { title: '战狼2', index: '2' },
        { title: '你好，李焕英', index: '3' },
        { title: '哪吒之魔童降世', index: '4' },
        { title: '流浪地球', index: '5' },
        { title: '唐人街探案3', index: '6' },
      ];
      const [tabList, setTabList] = useState(defultList);

      const handleChange = (e, { index }) => {
        setValue(index);
      };

      return (
        <>
          <div
            data-testid="test-modify-tablist2"
            onClick={() => {
              if (tabList.length === 4) {
                setTabList(defultList);
              } else {
                const newTabList = defultList.slice(0, 4);
                setTabList(newTabList);
                if (!newTabList.some((item) => item.index === value)) {
                  setValue('1');
                }
              }
            }}
          >
            {tabList.length === 4 ? '增加' : '减少'}TabList长度
          </div>
          <div style={{ width: '325px' }}>
            <Tabs
              style={{ marginTop: '20px', marginBottom: '12px' }}
              value={value}
              onChange={handleChange}
            >
              {tabList.map((item) => (
                <Tab key={item.index} {...item}>
                  {item.title}
                </Tab>
              ))}
            </Tabs>

            {tabList.map((item) => (
              <TabPanel key={item.index} value={value} index={item.index}>
                {item.index}
              </TabPanel>
            ))}
          </div>
        </>
      );
    }

    const { container, getByTestId } = render(<Component />);

    const testModifyTablistBtn = getByTestId('test-modify-tablist2');
    const [tab1, , , , , tab6] = container.querySelectorAll(`.bui-tab`);
    const tabpanels = container.querySelectorAll(`.${rootClass.tabpanel}`);
    const [tabpanel1] = tabpanels;

    tabpanels.forEach((tabpanel, index) => {
      if (index === 1) {
        expect(tabpanel).toHaveTextContent('2');
      } else {
        expect(tabpanel).toHaveTextContent('');
      }
    });

    fireEvent.click(tab6);
    tabpanels.forEach((tabpanel, index) => {
      if (index === 5) {
        expect(tabpanel).toHaveTextContent('6');
      } else {
        expect(tabpanel).toHaveTextContent('');
      }
    });

    fireEvent.click(testModifyTablistBtn);
    expect(tab1).toHaveClass('bui-tab-active');
    expect(tabpanel1).toHaveTextContent('1');

    fireEvent.click(testModifyTablistBtn);
    expect(tab1).toHaveClass('bui-tab-active');
    expect(tabpanel1).toHaveTextContent('1');
  });
});
