import React from 'react';

function useDomReady(cb: () => void) {
  React.useEffect(() => {
    cb?.();
  }, []);
}

export default useDomReady;
