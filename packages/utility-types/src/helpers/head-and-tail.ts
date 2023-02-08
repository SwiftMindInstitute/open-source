import { AnyArray } from '../any'

/**
 * # 🚫 DO NOT EXPORT FROM src/index.ts
 * Convenience type for infering the head and tail of a tuple
 * @internal
 */
export type HeadAndTail<B, C extends AnyArray> = [B, ...C]
