import { Split } from '../string/split'

/**
 * Return the length of tuple `A`
 * @beta
 * @group Object
 * @example
 * ```
 * type Ex1 = LengthProp<'Hello'>   // 5
 * type Ex2 = LengthProp<[1, 2, 3]> // 3
 * ```
 */
export type LengthProp<A> = A extends string
  ? Split<A>['length'] // TODO(hao) see if this is still necessary in 5.0
  : 'length' extends keyof A
  ? A['length']
  : never
