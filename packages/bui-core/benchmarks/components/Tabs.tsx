import React, { useState } from 'react';
import { Tab, TabPanel, Tabs } from '../../src/Tabs';

const TabsView = () => {
  const [value, setValue] = useState('one');
  const tabList = [
    { title: 'TAB ONE', index: 'one' },
    { title: 'TAB TWO', index: 'two' },
    { title: 'TAB THREE', index: 'three' },
  ];
  const handleClick = (_e, { index }) => {
    setValue(index);
  };

  return (
    <>
      <Tabs style={{ marginBottom: '12px' }} value={value}>
        {tabList.map((item) => (
          <Tab key={item.index} index={item.index} onClick={handleClick}>
            {item.title}
          </Tab>
        ))}
      </Tabs>
      <TabPanel value={value} index="one">
        Tab Panel 1
      </TabPanel>
      <TabPanel value={value} index="two">
        Tab Panel 2
      </TabPanel>
      <TabPanel value={value} index="three">
        Tab Panel 3
      </TabPanel>
    </>
  );
};

export { TabsView as Tabs };
