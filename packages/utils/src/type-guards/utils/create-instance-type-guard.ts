import createTypeGuard from './create-type-guard'

interface Constructor {
  new (..._: any[]): any
}

const createInstanceTypeGuard = <A>(classType: Constructor) =>
  createTypeGuard<A>(value => value instanceof classType)

export default createInstanceTypeGuard
