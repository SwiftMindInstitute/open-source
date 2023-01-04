import createInstanceTypeGuard from '../utils/create-instance-type-guard'

const isWeakMap = createInstanceTypeGuard<WeakMap<any, any>>(WeakMap)

export default isWeakMap
