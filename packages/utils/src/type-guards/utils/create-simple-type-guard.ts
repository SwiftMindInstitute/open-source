import createTypeGuard from './create-type-guard'

const createSimpleTypeGuard = <A>(typeName: string) =>
  createTypeGuard<A>(value => typeof value === typeName)

export default createSimpleTypeGuard
