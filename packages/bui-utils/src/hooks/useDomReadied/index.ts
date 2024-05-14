import React from 'react';

function useDomReadied(cb: () => void) {
  React.useEffect(() => {
    cb?.();
  }, []);
}

export default useDomReadied;
