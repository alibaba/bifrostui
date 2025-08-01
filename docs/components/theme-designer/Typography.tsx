import * as React from 'react';
import './Typography.less';

export const Typography = () => {
  return (
    <div className="typography">
      <div className="typography-title">标题</div>
      <div className="pioneer-title title-1">Bifrost UI Title 1</div>
      <div className="pioneer-title title-2">Bifrost UI Title 2</div>
      <div className="pioneer-title title-3">Bifrost UI Title 3</div>
      <div className="pioneer-title title-4">Bifrost UI Title 4</div>

      <div className="typography-title">正文</div>
      <div className="pioneer-text text-1">Bifrost UI Content 1</div>
      <div className="pioneer-text text-2">Bifrost UI Content 2</div>
      <div className="pioneer-text text-3">Bifrost UI Content 3</div>
      <div className="pioneer-text text-4">Bifrost UI Content 4</div>
    </div>
  );
};
