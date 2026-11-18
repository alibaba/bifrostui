import { type IPreviewerProps } from 'dumi';
import Tabs from 'rc-tabs';
import React, { useState, type FC } from 'react';
import SourceCode from '../../builtins/SourceCode';
import './index.less';

export interface IPreviewerActionsProps extends IPreviewerProps {
  asset: any;
  showCode: boolean;
}

const PreviewerActions: FC<IPreviewerActionsProps> = (props) => {
  const { asset, showCode } = props;
  const files = Object.entries(asset.dependencies).filter(
    ([, { type }]: [string, { type: string }]) => type === 'FILE',
  );
  const [activeKey, setActiveKey] = useState(0);
  const isSingleFile = files.length === 1;
  const lang = (files[activeKey][0].match(/\.([^.]+)$/)?.[1] || 'text') as any;

  return (
    <React.Fragment key="previewer-actions">
      {showCode && (
        <>
          <div className="dumi-default-previewer-sources">
            {!isSingleFile && (
              <Tabs
                className="dumi-default-previewer-tabs"
                prefixCls="dumi-default-tabs"
                moreIcon="···"
                defaultActiveKey={String(activeKey)}
                onChange={(key) => setActiveKey(Number(key))}
                items={files.map(([filename], i) => ({
                  key: String(i),
                  label: filename,
                }))}
              />
            )}
          </div>
          <div className="dumi-default-sourcecode">
            <SourceCode lang={lang}>
              {(files[activeKey][1] as any).value}
            </SourceCode>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default PreviewerActions;
