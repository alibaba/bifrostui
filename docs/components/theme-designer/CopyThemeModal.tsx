import React, { useEffect, useState } from 'react';
import { TextArea, Modal, Button, Toast } from '@bifrostui/react';
import './CopyThemeModal.less';

interface CopyThemeModalProps {
  open: boolean;
  themeVars: string;
  onClose: () => void;
}

const CopyThemeModal = (props: CopyThemeModalProps) => {
  const { open, themeVars, onClose, ...others } = props;
  const [value, setValue] = useState(themeVars);

  useEffect(() => {
    setValue(themeVars);
  }, [themeVars]);

  const onChange = (_e, data) => {
    setValue(data.value);
  };

  const copy = () => {
    navigator?.clipboard
      ?.writeText(value)
      .then(() => {
        Toast.success('复制成功');
      })
      .catch((err) => {
        Toast.fail('复制失败');
        console.error(err);
      });
  };

  return (
    <Modal className="theme-modal" open={open} onClose={onClose} {...others}>
      <div className="theme-modal-content">
        <div className="theme-modal-title">自定义主题</div>
        <div className="theme-modal-desc">
          以下自定义主题可复制到业务代码的app.less文件中，并在项目入口引用改主题变量文件，实现自定义主题定制。
        </div>
        <TextArea
          className="theme-modal-textarea"
          value={value}
          onChange={onChange}
        />
        <div className="theme-modal-footer">
          <Button
            variant="contained"
            color="primary"
            className="btn-cancel"
            onClick={onClose}
          >
            取消
          </Button>
          <Button variant="contained" color="primary" onClick={copy}>
            复制
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CopyThemeModal;
