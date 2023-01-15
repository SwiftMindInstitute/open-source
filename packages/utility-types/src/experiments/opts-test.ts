import { Increment } from '../math/increment'
import { Options } from './options'

interface Opts<A extends number = number, B extends string = string>
  extends Options<'Test'> {
  index: A
  value: B
}

export type Repeat<
  A extends number,
  B extends string,
  Z extends Opts = Opts<0, ''>
> = Z['index'] extends A
  ? Z['value']
  : Repeat<A, B, Opts<Increment<Z['index']>, `${Z['value']}${B}`>>
