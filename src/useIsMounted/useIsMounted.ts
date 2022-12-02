import { type RefObject, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect/useIsomorphicLayoutEffect';

/**
 * Returns a Ref that is `true` as long as the component is mounted
 *
 * @example
 * ```
 * const isMounted = useIsMounted();
 * ```
 */

export function useIsMounted(): RefObject<boolean> {
  const isMounted = useRef<boolean>(true);

  useIsomorphicLayoutEffect(
    // eslint-disable-next-line unicorn/consistent-function-scoping
    () => () => {
      isMounted.current = false;
    },
    [],
  );

  return isMounted;
}
