import { renderHook } from '@testing-library/react';
import { useIsMounted } from './useIsMounted';

describe('useIsMounted', () => {
  it('should not crash', async () => {
    const { rerender, unmount } = renderHook(useIsMounted, {
      initialProps: () => {},
    });
    rerender();
    unmount();
  });

  it('should return true until the component is unmounted', async () => {
    const { result, rerender, unmount } = renderHook(useIsMounted);
    expect(result.current.current).toEqual(true);
    rerender();
    expect(result.current.current).toEqual(true);
    unmount();
    expect(result.current.current).toEqual(false);
  });
});
