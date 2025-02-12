import React, { useState } from 'react';
import {
  Stack,
  Button,
  Tabs,
  Tab,
  TabPanel,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Radio,
  RadioGroup,
  Calendar,
  List,
  ListItem,
  ListItemContent,
  ListItemExtra,
  Switch,
  Slider,
} from '@bifrostui/react';
import { themes, tabList } from './constants';
import { Typography } from './Typography';
import './index.less';

const ThemeDesigner = () => {
  const [theme, setTheme] = useState('default');
  const [activeTab, setActiveTab] = useState(tabList[0].index);

  const handleThemeChange = (_e, data) => {
    document.querySelector('html')?.setAttribute('data-theme', data.value);
    setTheme(data.value);
  };

  return (
    <div className="bui-theme-editor grid grid-cols-12">
      <div className="theme-editor-menu grid col-span-12">
        <RadioGroup value={theme} onChange={handleThemeChange}>
          {themes.map((item) => (
            <Radio key={item.value} value={item.value}>
              {item.text}
            </Radio>
          ))}
        </RadioGroup>
      </div>

      <Typography />

      <div className="grid col-span-2">
        <Card className="card-center">
          <CardContent>
            <Stack direction="column" spacing="9px">
              <Button>浅色</Button>
              <Button color="dark">深色</Button>
              <Button variant="contained">浅色</Button>
              <Button color="dark" variant="contained">
                深色
              </Button>
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
          </CardContent>
        </Card>
      </div>

      <div className="grid col-span-6">
        <Card className="card-center">
          <CardContent>
            <Stack
              className="editor-preview-column"
              direction="column"
              spacing="9px"
            >
              <Button size="small" variant="contained" color="primary">
                小按钮
              </Button>
              <Button size="medium" variant="contained" color="primary">
                中按钮
              </Button>
              <Button size="large" variant="contained" color="primary">
                大按钮
              </Button>

              <Button size="full" variant="contained" color="primary">
                通栏按钮
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </div>

      <div className="grid col-span-8">
        <Card>
          <CardContent>
            <Tabs style={{ marginBottom: '12px' }} value={activeTab}>
              {tabList.map((item) => (
                <Tab
                  key={item.index}
                  index={item.index}
                  onClick={() => setActiveTab(item.index)}
                >
                  {item.title}
                </Tab>
              ))}
            </Tabs>
            {tabList.map((item) => (
              <TabPanel key={item.index} value={activeTab} index={item.index}>
                {item.title}
              </TabPanel>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid col-span-4">
        <Card className="card-center">
          <CardContent>
            <Slider defaultValue={37.5} tipVisible />
          </CardContent>
        </Card>
      </div>

      <div className="grid col-span-4">
        <Card>
          <CardHeader title="显示与亮度" />
          <CardContent>
            <List size="medium">
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
          </CardContent>
        </Card>
      </div>

      <div className="grid col-span-4">
        <Card>
          <Calendar />
        </Card>
      </div>

      <div className="grid col-span-4">
        <Card>
          <CardHeader title="订单" />
          <CardContent>
            <div>订单编号：9527</div>
            <div>下单时间：2025年9月9日</div>
            <div>联系方式: 139****9999</div>
          </CardContent>
          <CardFooter>
            <Button color="primary">取消订单</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ThemeDesigner;
