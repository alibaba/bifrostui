import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '300px' }}>
        <DesktopDateTimePicker value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};