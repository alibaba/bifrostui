import { Skeleton, Stack } from "@bifrostui/react";
import React from "react";
export default () => {
  return <div style={{padding: '20px'}}>
    <Stack spacing="10px" alignItems="flex-start">
      <Skeleton variant="rectangular" width={'100%'} height={48} />
      <Skeleton variant="text" width={'40%'} />
      <Stack>
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}
        >
          <Skeleton height={80} style={{ width: '300px', marginRight: '12px' }} />
          <Skeleton height={80} style={{ width: '300px', marginRight: '12px' }} />
          <Skeleton height={80} style={{ width: '300px', marginRight: '12px' }} />
        </div>
      </Stack>
      <Skeleton variant="rectangular" width={'80%'} height={120} />
      <Skeleton variant="rounded" width={'50%'} height={32} />
      <Skeleton variant="text" width={'100%'} />
      <Skeleton variant="text" width={'100%'} />
      <Skeleton variant="text" width={'100%'} />
      <Skeleton variant="text" width={'100%'} />
      <Skeleton variant="text" width={'80%'} />
      <Skeleton variant="rectangular" width={'100%'} height={400} />
    </Stack>
  </div>;
};
