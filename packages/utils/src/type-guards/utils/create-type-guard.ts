import { AnyFunction } from 'utility-types'

const createTypeGuard = <A>(callback: AnyFunction<[unknown], boolean>) => {
  return (a: unknown): a is A => callback(a)
}

export default createTypeGuard
