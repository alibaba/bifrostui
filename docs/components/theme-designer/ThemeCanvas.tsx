import React, { FC, useEffect, useRef, useState } from 'react';
import {
  Stack,
  Button,
  Tabs,
  Tab,
  TabPanel,
  Slider,
  List,
  ListItem,
  ListItemContent,
  ListItemExtra,
  Switch,
  Calendar,
} from '@bifrostui/react';
import * as demos from './canvas-demos';
import { Typography } from './Typography';
import './ThemeCanvas.less';

const tabs = [
  {
    title: '水果',
    index: 'fruits',
    children: '菠萝',
  },
  {
    title: '蔬菜',
    index: 'vegetables',
    children: '西红柿',
  },
  {
    title: '动物',
    index: 'animals',
    children: '蚂蚁',
  },
];

export interface ThemeCanvasProps {
  componentName: string;
}

export const ThemeCanvas: FC<ThemeCanvasProps> = ({ componentName }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].index);
  const themeCanvasElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateChildWidth = () => {
      const parentWidth = themeCanvasElRef.current?.offsetWidth;
      const themeCanvasRowsEl =
        themeCanvasElRef.current?.querySelectorAll('.theme-canvas-rows') ?? [];

      [...themeCanvasRowsEl].forEach((el: HTMLDivElement) => {
        if (parentWidth <= 550) {
          el.classList.add('is-full');
        } else {
          el.classList.remove('is-full');
        }
      });
    };

    updateChildWidth();

    window.addEventListener('resize', updateChildWidth);

    return () => {
      window.removeEventListener('resize', updateChildWidth);
    };
  }, []);

  const Comp = demos[`${componentName}Demo`];
  return (
    <div className="theme-canvas" ref={themeCanvasElRef}>
      {Comp ? (
        <div className="theme-canvas-rows">
          <Comp />
        </div>
      ) : (
        <>
          <div className="theme-canvas-rows">
            <Typography />
          </div>
          <div className="theme-canvas-rows">
            <Stack className="theme-canvas-row" direction="row" spacing="8px">
              <Button size="small" variant="contained" color="primary">
                小按钮
              </Button>
              <Button size="medium" variant="contained" color="primary">
                中按钮
              </Button>
              <Button size="large" variant="contained" color="primary">
                大按钮
              </Button>
            </Stack>
            <Stack className="theme-canvas-row" direction="row" spacing="8px">
              <Button>浅色</Button>
              <Button color="dark">深色</Button>
              <Button variant="contained">浅色</Button>
              <Button color="dark" variant="contained">
                深色
              </Button>
            </Stack>
            <Stack className="theme-canvas-row" direction="row" spacing="8px">
              <Button variant="contained" color="primary">
                购票
              </Button>
              <Button variant="contained" color="warning">
                想看
              </Button>
              <Button variant="contained" color="info">
                预售
              </Button>
            </Stack>
            <Stack className="theme-canvas-row">
              <Button size="full" variant="contained" color="primary">
                通栏按钮
              </Button>
            </Stack>
          </div>
          <div className="theme-canvas-rows">
            <Stack className="theme-canvas-row">
              <Tabs style={{ marginBottom: '12px' }} value={activeTab}>
                {tabs.map((item) => (
                  <Tab
                    key={item.index}
                    index={item.index}
                    onClick={() => setActiveTab(item.index)}
                  >
                    {item.title}
                  </Tab>
                ))}
              </Tabs>
              {tabs.map((item) => (
                <TabPanel key={item.index} value={activeTab} index={item.index}>
                  {item.children}
                </TabPanel>
              ))}
            </Stack>
          </div>
          <div className="theme-canvas-rows">
            <Stack className="theme-canvas-row">
              <Slider defaultValue={37.5} tipVisible />
            </Stack>
          </div>
          <div className="theme-canvas-rows">
            <Stack className="theme-canvas-row">
              <List size="medium" className="theme-canvas-list-component">
                <ListItem>
                  <ListItemContent primary="自动" />
                  <ListItemExtra>
                    <Switch color="primary" defaultChecked />
                  </ListItemExtra>
                </ListItem>
                <ListItem>
                  <ListItemContent primary="粗体文本" />
                  <ListItemExtra>
                    <Switch color="primary" />
                  </ListItemExtra>
                </ListItem>
                <ListItem>
                  <ListItemContent primary="原彩显示" />
                  <ListItemExtra>
                    <Switch color="primary" />
                  </ListItemExtra>
                </ListItem>
              </List>
            </Stack>
          </div>
          <div className="theme-canvas-rows">
            <Stack className="theme-canvas-row">
              <Calendar />
            </Stack>
          </div>
        </>
      )}
    </div>
  );
};
