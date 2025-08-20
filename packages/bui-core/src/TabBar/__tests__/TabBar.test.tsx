import React from 'react';
import {
  HomeFilledIcon,
  PhoneFilledIcon,
  StoreFilledIcon,
} from '@bifrostui/icons';
import { render, isConformant, screen, userEvent } from 'testing';
import TabBar from '../TabBar';
import TabBarItem from '../TabBarItem';

describe('TabBar', () => {
  isConformant({
    Component: TabBar,
    displayName: 'BuiTabBar',
    className: 'bui-tab-bar',
  });
  it('should render current', () => {
    render(
      <TabBar>
        <TabBarItem title="主页" />
        <TabBarItem title="想看" />
        <TabBarItem title="反馈" />
      </TabBar>,
    );
    expect(screen.getByText('主页').parentNode).toHaveClass(
      'bui-tab-bar-item-active',
    );
    expect(screen.getByText('主页')).toBeTruthy();
    expect(screen.getByText('想看')).toBeTruthy();
    expect(screen.getByText('反馈')).toBeTruthy();
  });
  it('should render  default value current', () => {
    render(
      <TabBar current={2}>
        <TabBarItem title="主页" />
        <TabBarItem title="想看" />
        <TabBarItem title="反馈" />
      </TabBar>,
    );
    expect(screen.getByText('反馈').parentNode).toHaveClass(
      'bui-tab-bar-item-active',
    );
  });
  it('should render icon current', () => {
    render(
      <TabBar>
        <TabBarItem title="主页" icon={<HomeFilledIcon />} />
        <TabBarItem title="商店" icon={<StoreFilledIcon />} />
        <TabBarItem title="帮助" icon={<PhoneFilledIcon />} />
      </TabBar>,
    );
    expect(document.querySelector('.bui-svg-icon')).toBeTruthy();
  });
  it('should render active icon current', () => {
    render(
      <TabBar>
        <TabBarItem
          title="主页"
          icon={<HomeFilledIcon />}
          activeIcon={<div>图标</div>}
        />
        <TabBarItem title="商店" icon={<StoreFilledIcon />} />
        <TabBarItem title="帮助" icon={<PhoneFilledIcon />} />
      </TabBar>,
    );

    expect(screen.getByText('图标')).toBeTruthy();
  });
  it('should render color current', () => {
    render(
      <TabBar color="info">
        <TabBarItem title="主页" icon={<HomeFilledIcon />} />
        <TabBarItem title="商店" icon={<StoreFilledIcon />} />
        <TabBarItem title="帮助" icon={<PhoneFilledIcon />} />
      </TabBar>,
    );

    expect(screen.getByText('商店')).toHaveClass('bui-tab-bar-item-info');
  });
  it('should render active color current', () => {
    render(
      <TabBar activeColor="info">
        <TabBarItem title="主页" icon={<HomeFilledIcon />} />
        <TabBarItem title="商店" icon={<StoreFilledIcon />} />
        <TabBarItem title="帮助" icon={<PhoneFilledIcon />} />
      </TabBar>,
    );
    expect(screen.getByText('主页')).toHaveClass('bui-tab-bar-item-info');
  });
  it('should render BadgeProps current', () => {
    render(
      <TabBar activeColor="info">
        <TabBarItem
          title="主页"
          icon={<HomeFilledIcon />}
          BadgeProps={{ content: 20 }}
        />
        <TabBarItem title="商店" icon={<StoreFilledIcon />} />
        <TabBarItem title="帮助" icon={<PhoneFilledIcon />} />
      </TabBar>,
    );
    expect(screen.getByText('20')).toBeTruthy();
    expect(document.querySelector('.bui-badge')).toBeTruthy();
  });
  it('should pass value as part of event.target of change', async () => {
    const onChange = vi.fn((e, value) => value);
    render(
      <TabBar activeColor="info" onChange={onChange}>
        <TabBarItem title="主页" icon={<HomeFilledIcon />} />
        <TabBarItem title="商店" icon={<StoreFilledIcon />} />
        <TabBarItem title="帮助" icon={<PhoneFilledIcon />} />
      </TabBar>,
    );
    await userEvent.click(screen.getByText('商店'));
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveReturnedWith({ value: 1 });
  });
});
