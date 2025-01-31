import * as React from 'react';
import { Card, CardContent, CardHeader } from '@bifrostui/react';
import './Typography.less';

export const Typography = () => {
  return (
    <div className="grid col-span-4">
      <Card className="card-typography">
        <CardHeader title="文本" />
        <CardContent>
          <h3>标题</h3>
          <div className="title-1">BUI Title 1</div>
          <div className="title-2">BUI Title 2</div>
          <div className="title-3">BUI Title 3</div>
          <div className="title-4">BUI Title 4</div>

          <h3>正文</h3>
          <div className="text-1">BUI Content 1</div>
          <div className="text-2">BUI Content 2</div>
          <div className="text-3">BUI Content 3</div>
          <div className="text-4">BUI Content 4</div>
        </CardContent>
      </Card>
    </div>
  );
};
