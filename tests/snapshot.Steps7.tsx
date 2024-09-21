import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

const detail = () => {
  return (
    <Stack style={{ '--align-items': 'flex-start' }}>
      <div
        style={{
          backgroundColor: 'var(--bui-color-bg-view)',
          width: '220px',
          height: '80px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: '5px 10px',
          margin: '5px 0 20px',
        }}
      >
        <div>
          <span style={{ color: '#5F6672' }}>退票电影</span>
          <span style={{ color: '#2E333E', paddingLeft: '20px' }}>
            复仇者联盟3（3张）
          </span>
        </div>
        <div>
          <span style={{ color: '#5F6672' }}>退票金额</span>
          <span style={{ color: '#2E333E', paddingLeft: '20px' }}>38.9元</span>
        </div>
        <div>
          <span style={{ color: '#5F6672' }}>服务费</span>
          <span style={{ color: '#2E333E', paddingLeft: '34px' }}>
            4元（影院、淘票票收取）
          </span>
        </div>
      </div>
    </Stack>
  );
};

export default () => {
  return (
    <Steps labelPlacement="vertical">
      <Step
        key={1}
        title="退款申请 已提交"
        subtitle="2021-03-30 19:00 "
        description={detail()}
      />
      <Step
        key={2}
        title="退款申请 已提交"
        subtitle="2021-03-30 19:08 "
        description="正在处理退款申请，预计1-3天原路返回至你的付款账户。"
      />
      <Step
        key={3}
        title="退款完成"
        subtitle="2021-03-30 19:08 "
        description="退款到账后，将结束本次退款流程。"
      />
    </Steps>
  );
};