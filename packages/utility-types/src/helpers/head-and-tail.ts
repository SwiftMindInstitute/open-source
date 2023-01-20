import { AnyArray } from '../any'

/**
 * This form is more convenient for inference
 */
export type HeadAndTail<B extends any, C extends AnyArray> = [B, ...C]
