import React, { useState } from 'react';
import Select from '../../Select';
import SelectOption from '../../SelectOption';

/**
 * 自定义 Select 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 A11yDemos.tsx（固定约定）
 */

// Demo 1: 基础 Select 组件
export const basicSelectDemo = () => {
  return (
    <div>
      <Select placeholder="请选择选项" aria-label="基础选择器">
        <SelectOption value="option1" label="选项一">
          选项一
        </SelectOption>
        <SelectOption value="option2" label="选项二">
          选项二
        </SelectOption>
        <SelectOption value="option3" label="选项三">
          选项三
        </SelectOption>
      </Select>
    </div>
  );
};

// Demo 2: 受控的 Select
export const ControlledSelectDemo = () => {
  const [value, setValue] = useState('option1');

  return (
    <div>
      <Select
        value={value}
        placeholder="受控选择器"
        aria-label="受控选择器"
        onChange={(e, { value: newValue }) => {
          setValue(newValue);
          // eslint-disable-next-line no-console
          console.log('选中值:', newValue);
        }}
      >
        <SelectOption value="option1" label="选项一">
          选项一
        </SelectOption>
        <SelectOption value="option2" label="选项二">
          选项二
        </SelectOption>
        <SelectOption value="option3" label="选项三">
          选项三
        </SelectOption>
      </Select>
      <p>当前选中值: {value}</p>
    </div>
  );
};

// Demo 3: 禁用状态的 Select
export const disabledSelectDemo = () => {
  return (
    <div>
      <Select disabled placeholder="禁用的选择器" aria-label="禁用选择器">
        <SelectOption value="option1" label="选项一">
          选项一
        </SelectOption>
        <SelectOption value="option2" label="选项二">
          选项二
        </SelectOption>
      </Select>
    </div>
  );
};

// Demo 4: 包含禁用选项的 Select
export const selectWithDisabledOptionsDemo = () => {
  return (
    <div>
      <Select placeholder="包含禁用选项" aria-label="包含禁用选项的选择器">
        <SelectOption value="option1" label="选项一">
          选项一
        </SelectOption>
        <SelectOption value="option2" label="选项二" disabled>
          选项二（禁用）
        </SelectOption>
        <SelectOption value="option3" label="选项三">
          选项三
        </SelectOption>
        <SelectOption value="option4" label="选项四" disabled>
          选项四（禁用）
        </SelectOption>
      </Select>
    </div>
  );
};

// Demo 5: 默认值的 Select
export const defaultValueSelectDemo = () => {
  return (
    <div>
      <Select
        defaultValue="option2"
        placeholder="有默认值的选择器"
        aria-label="有默认值的选择器"
      >
        <SelectOption value="option1" label="选项一">
          选项一
        </SelectOption>
        <SelectOption value="option2" label="选项二">
          选项二
        </SelectOption>
        <SelectOption value="option3" label="选项三">
          选项三
        </SelectOption>
      </Select>
    </div>
  );
};

// Demo 6: 复杂交互的 Select
export const complexInteractionSelectDemo = () => {
  const ComplexInteractionSelectDemo = () => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([
      { value: 'option1', label: '选项一', disabled: false },
      { value: 'option2', label: '选项二', disabled: false },
      { value: 'option3', label: '选项三', disabled: false },
    ]);

    const toggleOptionDisabled = (targetValue: string) => {
      setOptions((prevOptions) =>
        prevOptions.map((option) =>
          option.value === targetValue
            ? { ...option, disabled: !option.disabled }
            : option,
        ),
      );
    };

    return (
      <div>
        <Select
          value={value}
          placeholder="复杂交互选择器"
          aria-label="复杂交互选择器"
          onChange={(e, { value: newValue }) => {
            setValue(newValue);
          }}
        >
          {options.map((option) => (
            <SelectOption
              key={option.value}
              value={option.value}
              label={option.label}
              disabled={option.disabled}
            >
              {option.label}
            </SelectOption>
          ))}
        </Select>
        <div style={{ marginTop: 10 }}>
          <button type="button" onClick={() => toggleOptionDisabled('option2')}>
            切换选项二状态
          </button>
        </div>
        {value && <p>当前选中: {value}</p>}
      </div>
    );
  };

  return <ComplexInteractionSelectDemo />;
};

// 默认导出所有 demo
export default {
  basicSelectDemo,
  ControlledSelectDemo,
  disabledSelectDemo,
  selectWithDisabledOptionsDemo,
  defaultValueSelectDemo,
  complexInteractionSelectDemo,
};
