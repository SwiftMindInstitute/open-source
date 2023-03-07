import { AnyArray, AnyFunction, AnyObject } from '../any'

/**
 * A factory function
 */
export interface Factory<
  A extends AnyArray = AnyArray,
  B extends AnyObject = AnyObject
> extends AnyFunction<A, B> {}
