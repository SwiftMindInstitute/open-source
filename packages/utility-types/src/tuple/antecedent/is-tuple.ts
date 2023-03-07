import { AnyArray, IsExtension } from '../../any'
import { And } from '../../logic/antecedent/and'
import { Not } from '../../logic/antecedent/not'
import { LengthProp } from '../../object/length-prop'

/**
 * If `A` is a tuple return `true` else `false`
 * @alpha
 * @group Tuple
 * @example
 * ```
 * type Ex1 = IsTuple<[any, any]> // true
 * type Ex2 = IsTuple<any[]>      // false
 * ```
 */
export type IsTuple<A> = And<
  IsExtension<A, AnyArray>,
  Not<IsExtension<number, LengthProp<A>>>
>
