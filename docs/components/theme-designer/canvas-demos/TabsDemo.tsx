import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export const TabsDemo = () => {
  const [value, setValue] = useState('fruits');
  const tabList = [
    { title: '水果', index: 'fruits' },
    { title: '蔬菜', index: 'vegetables' },
    { title: '动物', index: 'animals' },
  ];
  const handleClick = (e, { index }) => {
    console.log(`Click Tab, value index is: ${index}`);
    setValue(index);
  };

  return (
    <Stack alignItems="stretch">
      <Tabs style={{ marginBottom: '12px' }} value={value}>
        {tabList.map((item) => (
          <Tab key={item.index} index={item.index} onClick={handleClick}>
            {item.title}
          </Tab>
        ))}
      </Tabs>
      <TabPanel value={value} index="fruits">
        菠萝
      </TabPanel>
      <TabPanel value={value} index="vegetables">
        西红柿
      </TabPanel>
      <TabPanel value={value} index="animals">
        蚂蚁
      </TabPanel>
    </Stack>
  );
};
