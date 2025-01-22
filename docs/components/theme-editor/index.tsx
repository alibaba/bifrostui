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
} from '@bifrostui/react';
import { themes, tabList } from './constants';
import './index.less';

export default () => {
  const [theme, setTheme] = useState('default');
  const [activeTab, setActiveTab] = useState('fruits');

  const handleThemeChange = (_e, data) => {
    document.querySelector('html')?.setAttribute('data-theme', data.value);
    setTheme(data.value);
  };

  return (
    <div className="bui-theme-editor">
      <div className="theme-editor-menu">
        <RadioGroup value={theme} onChange={handleThemeChange}>
          {themes.map((item) => (
            <Radio key={item.value} value={item.value}>
              {item.text}
            </Radio>
          ))}
        </RadioGroup>
      </div>

      <h2>主题预览</h2>
      <div className="editor-preview">
        <Stack className="editor-preview-column" direction="row" spacing="8px">
          <Button size="small" variant="contained" color="primary">
            小号按钮
          </Button>
          <Button size="medium" variant="contained" color="primary">
            中号按钮
          </Button>
          <Button size="large" variant="contained" color="primary">
            大号按钮
          </Button>
        </Stack>
        <Stack className="editor-preview-column" direction="row" spacing="8px">
          <Button size="full" variant="contained" color="primary">
            通栏按钮
          </Button>
        </Stack>

        <Stack className="editor-preview-column">
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
        </Stack>

        <Stack className="editor-preview-column">
          <Card style={{ width: '100%' }}>
            <CardHeader title="订单" />
            <CardContent>
              <div>订单号：7a73fcggert235fag4</div>
              <div>取餐码：235634</div>
              <div>手机号: 134****5427</div>
            </CardContent>
            <CardFooter>
              <Button color="primary">签收</Button>
            </CardFooter>
          </Card>
        </Stack>
      </div>
    </div>
  );
};
