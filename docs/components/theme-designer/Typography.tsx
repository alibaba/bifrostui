import * as React from 'react';
import { Card, CardContent, CardHeader } from '@bifrostui/react';
import './Typography.less';

export const Typography = () => {
  return (
    <div className="grid col-span-4">
      <Card className="card-typography">
        <CardHeader title="文本" />
        <CardContent>
          <strong>标题</strong>
          <div className="pioneer-title title-1">Bifrost UI Title 1</div>
          <div className="pioneer-title title-2">Bifrost UI Title 2</div>
          <div className="pioneer-title title-3">Bifrost UI Title 3</div>
          <div className="pioneer-title title-4">Bifrost UI Title 4</div>

          <strong>正文</strong>
          <div className="text-1">Bifrost UI Content 1</div>
          <div className="text-2">Bifrost UI Content 2</div>
          <div className="text-3">Bifrost UI Content 3</div>
          <div className="text-4">Bifrost UI Content 4</div>
        </CardContent>
      </Card>
    </div>
  );
};
