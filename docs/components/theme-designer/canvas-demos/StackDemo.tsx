import React, { useState } from 'react';
import { Button, Radio, RadioGroup, Stack } from '@bifrostui/react';
import '../../../../packages/bui-core/src/Stack/demo/index.less';

const StackDemo = () => {
  const [stackState, setStackState] = useState({
    direction: '',
    alignItems: '',
    justifyContent: '',
    spacing: '',
    wrap: '',
  } as any);

  return (
    <Stack>
      <Stack
        style={{
          width: '150px',
          height: '150px',
        }}
        {...stackState}
      >
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </Stack>
      <div className="bui-stack-demo-options">
        <RadioGroup
          value={stackState.direction}
          onChange={(e, data) => {
            setStackState({
              ...stackState,
              direction: data.value,
            });
          }}
        >
          <div className="bui-stack-demo-options-title">direction</div>
          <Radio value="row"> row</Radio>
          <Radio value="row-reverse"> row-reverse</Radio>
          <Radio value="column">column</Radio>
          <Radio value="column-reverse">column-reverse</Radio>
        </RadioGroup>
        <RadioGroup
          value={stackState.justifyContent}
          onChange={(e, data) => {
            setStackState({
              ...stackState,
              justifyContent: data.value,
            });
          }}
        >
          <div className="bui-stack-demo-options-title"> justifyContent</div>
          <Radio value="flex-start"> flex-start</Radio>
          <Radio value="flex-end"> flex-end</Radio>
          <Radio value="center">center</Radio>
          <Radio value="space-between">space-between</Radio>
          <Radio value="space-around">space-around</Radio>
          <Radio value="space-evenly">space-evenly</Radio>
        </RadioGroup>
        <RadioGroup
          value={stackState.alignItems}
          onChange={(e, data) => {
            setStackState({
              ...stackState,
              alignItems: data.value,
            });
          }}
        >
          <div className="bui-stack-demo-options-title"> alignItems</div>
          <Radio value="flex-start"> flex-start</Radio>
          <Radio value="flex-end"> flex-end</Radio>
          <Radio value="center">center</Radio>
          <Radio value="stretch">stretch</Radio>
          <Radio value="baseline"> baseline</Radio>
        </RadioGroup>
        <RadioGroup
          value={stackState.flexWrap}
          onChange={(e, data) => {
            setStackState({
              ...stackState,
              flexWrap: data.value,
            });
          }}
        >
          <div className="bui-stack-demo-options-title"> flexWrap</div>
          <Radio value="wrap"> wrap</Radio>
          <Radio value="no-wrap"> no-wrap</Radio>
          <Radio value="wrap-reverse">wrap-reverse</Radio>
        </RadioGroup>
        <RadioGroup
          value={stackState.spacing}
          onChange={(e, data) => {
            setStackState({
              ...stackState,
              spacing: data.value,
            });
          }}
        >
          <div className="bui-stack-demo-options-title"> spacing</div>
          <Radio value="10px">10px</Radio>
          <Radio value="20px"> 20px</Radio>
          <Radio value="30px">30px</Radio>
          <Radio value="40px">40px</Radio>
          <Radio value="50px"> 50px</Radio>
        </RadioGroup>
      </div>
    </Stack>
  );
};

export default StackDemo;
