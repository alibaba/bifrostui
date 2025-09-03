import React from 'react';
import Picker from '../../Picker';

export const CalendarDemo = () => {
  return (
    <Picker
      open
      value={[2]}
      options={[
        [
          {
            value: 1,
            label: '周一',
          },
          {
            value: 2,
            label: '周二',
          },
          {
            value: 3,
            label: '周三',
          },
          {
            value: 4,
            label: '周四',
          },
          {
            value: 5,
            label: '周五',
          },
          {
            value: 6,
            label: '周六',
          },
          {
            value: 7,
            label: '周日',
          },
        ],
      ]}
    />
  );
};
