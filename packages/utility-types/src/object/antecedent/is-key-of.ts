import { IsExtension } from '../../any/antecedent/is-extension'
import { AnyKey } from '../../any/any-key'
import { AnyObject } from '../../any/any-object'
import { KeyOf } from '../key-of'

/**
 * If `B extends KeyOf<A>` then `true` else `false`
 * @beta
 * @group Antecedent
 * @group Object
 * @example
 * ```
 * type Ex1 = IsKeyOf<{ hello: 'World' }, 'hello'> // true
 * type Ex2 = IsKeyOf<{ hello: 'World' }, 42>      // false
 * ```
 */
export type IsKeyOf<A extends AnyObject, B extends AnyKey> = IsExtension<
  B,
  KeyOf<A>
>
