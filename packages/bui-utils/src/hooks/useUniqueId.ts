import { useRef } from 'react';

let globalClientIdCounter = 0;

function useUniqueId() {
  const idRef = useRef<string>();

  if (!idRef.current) {
    globalClientIdCounter += 1;
    idRef.current = `b${globalClientIdCounter.toString(32)}`;
  }

  return idRef.current;
}

export default useUniqueId;
