---
group: 日期
name: DatePicker 日期组件
---

# DatePicker 日期组件

DatePicker 移动端组件，常用于选择日期，包括年月日。

## 代码演示

### 基础用法

默认 `value` 应传入 `Date`，默认可选范围为包含当前年份在内的前后10年。

```tsx
import React, { useState } from 'react';
import { DatePicker, Stack } from '@bifrostui/react';

export default () => {
  const [value, setValue] = useState(new Date());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        {/* <DatePicker
          open
          title="选择日期"
          value={value}
          picker="year|month|day|time|minute|second"
          onChange={handleChange}
        /> */}
      </div>
    </Stack>
  );
};
```

### API

| 属性         | 说明                             | 类型                                    | 默认值           |
| ------------ | -------------------------------- | --------------------------------------- | ---------------- |
| open         | 弹层是否打开                     | boolean                                 | false            |
| title        | 标题                             | string                                  | -                |
| defaultValue | 默认选中的值，当组件非受控时使用 | Date                                    | -                |
| value        | 选中的值，当组件受控时使用       | Date                                    | -                |
| picker       | 日期选择器类型                   | year\|month\|day\|time\|minute\|second  | year\|month\|day |
| minDate      | 可选择的最小日期                 | Date                                    | 十年前           |
| maxDate      | 可选择的最大日期                 | Date                                    | 十年前           |
| formatter    | 选项格式化函数                   | (type: string, value: string) => string | -                |
| filter       | 选项过滤函数                     | (type: string, value: string) => string | -                |
| PickerProps  | 透传Picker属性                   | object                                  | -                |
| onConfirm    | 点击确定按钮时触发               | (value: Date) => void                   | -                |
| onCancel     | 点击取消按钮时触发               | () => void                              | -                |
| onClose      | 确定和取消时，都触发             | (value: Date) => void                   | -                |
| onChange     | 选项改变时触发                   | (value: Date) => void                   | -                |
