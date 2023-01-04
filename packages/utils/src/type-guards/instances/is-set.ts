import createInstanceTypeGuard from '../utils/create-instance-type-guard'

const isSet = createInstanceTypeGuard<Set<any>>(Set)

export default isSet
