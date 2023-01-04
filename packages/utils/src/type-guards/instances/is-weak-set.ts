import createInstanceTypeGuard from '../utils/create-instance-type-guard'

const isWeakSet = createInstanceTypeGuard<WeakSet<any>>(WeakSet)

export default isWeakSet
