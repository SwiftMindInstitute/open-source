import { AnyKey } from '../../any/any-key'
import { AnyObject } from '../../any/any-object'
import { KeyOf } from '../../object/key-of'

/**
 * If `B extends KeyOf<A>` then `true` else `false`
 * @group Condition
 * @group Prop
 * @example
 * ```
 * type Ex = HasProp<{ hello: 'World' }, 'hello'> // true
 * ```
 */
export type HasProp<A extends AnyObject, B extends AnyKey> = B extends KeyOf<A>
  ? true
  : false
