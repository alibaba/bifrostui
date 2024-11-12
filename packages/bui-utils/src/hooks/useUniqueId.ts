import { useRef } from 'react';

const globalClientIdCounter = 0;

function useUniqueId() {
  const idRef = useRef<string>();

  if (!idRef.current) {
    const globalClientId = globalClientIdCounter + 1;
    idRef.current = `b${globalClientId.toString(32)}`;
  }

  return idRef.current;
}

export default useUniqueId;
