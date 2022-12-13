import { unwrapRefs } from '../unwrapRefs/unwrapRefs';
import type { UnwrapRefs } from '../unwrapRefs/unwrapRefs.types';
import type { Refs } from '../useRefs/useRefs.types';
import {
  isNonNullableRecord,
  type NonNullableRecord,
} from '../utils/isNonNullableRecord/isNonNullableRecord';

/**
 * Unwraps refs and assert every field is not null
 *
 * NOTE: this function asserts fields known during runtime on the refs parameter.
 * The useRefs Proxy only creates a field in the getter, this means that a field's
 * value will still be undefined when you never reference that field. The return
 * type of this function doesn't reflect that behavior.
 */
export function assertAndUnwrapRefs<T extends Refs>(refs: T): NonNullableRecord<UnwrapRefs<T>> {
  const unwrappedRefs = unwrapRefs(refs);

  if (!isNonNullableRecord(unwrappedRefs)) {
    throw new Error('"refs" contains null values', refs);
  }

  return unwrappedRefs;
}
