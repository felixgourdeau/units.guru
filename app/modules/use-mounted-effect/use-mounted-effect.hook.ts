import { useEffect, useRef, DependencyList } from "react";

export default function useMountedEffect(
  callback: (isMounted: () => boolean) => void,
  deps?: DependencyList | undefined
): void {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    callbackRef.current(() => mountedRef.current);
    return () => {
      mountedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
