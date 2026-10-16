import * as React from 'react';
import Alert from '../../Alert';

/**
 * 自定义 Alert 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 customDemoComponent.tsx（固定约定）
 */

// Demo 1: 基础 Alert 组件
export const basicAlertDemo = () => {
  return (
    <div>
      <Alert
        color="info"
        onClose={() => {
          // eslint-disable-next-line no-console
          console.log('关闭 info alert');
        }}
      >
        这是一个基础的 Alert 组件示例
      </Alert>
    </div>
  );
};

// Demo 2: 多种类型的 Alert
export const multipleTypeAlertDemo = () => {
  return (
    <div>
      <Alert
        color="info"
        onClose={() => {
          // eslint-disable-next-line no-console
          console.log('关闭 info alert');
        }}
      >
        信息提示
      </Alert>
      <Alert
        color="success"
        onClose={() => {
          // eslint-disable-next-line no-console
          console.log('关闭 success alert');
        }}
      >
        成功提示
      </Alert>
      <Alert
        color="warning"
        onClose={() => {
          // eslint-disable-next-line no-console
          console.log('关闭 warning alert');
        }}
      >
        警告提示
      </Alert>
      <Alert
        color="danger"
        onClose={() => {
          // eslint-disable-next-line no-console
          console.log('关闭 danger alert');
        }}
      >
        错误提示
      </Alert>
    </div>
  );
};

// Demo 3: 带操作的 Alert
export const actionAlertDemo = () => {
  return (
    <div>
      <Alert
        color="info"
        action={
          <button
            type="button"
            onClick={() => {
              // eslint-disable-next-line no-console
              console.log('执行操作');
            }}
          >
            执行操作
          </button>
        }
        onClose={() => {
          // eslint-disable-next-line no-console
          console.log('关闭 alert');
        }}
      >
        这是一个带操作按钮的 Alert 组件
      </Alert>
    </div>
  );
};

// Demo 4: 复杂交互 Alert
export const complexInteractionAlertDemo = () => {
  const ComplexInteractionAlertDemo = () => {
    const [showAlert, setShowAlert] = React.useState(true);

    if (!showAlert) {
      return (
        <button type="button" onClick={() => setShowAlert(true)}>
          重新显示 Alert
        </button>
      );
    }

    return (
      <div>
        <Alert
          color="warning"
          onClose={() => {
            setShowAlert(false);
          }}
        >
          这是一个可以关闭的 Alert 组件，关闭后会显示重新显示按钮
        </Alert>
      </div>
    );
  };

  return <ComplexInteractionAlertDemo />;
};

// 默认导出所有 demo
export default {
  basicAlertDemo,
  multipleTypeAlertDemo,
  actionAlertDemo,
  complexInteractionAlertDemo,
};
