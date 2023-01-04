import createInstanceTypeGuard from '../utils/create-instance-type-guard'

const isMap = createInstanceTypeGuard<Map<any, any>>(Map)

export default isMap
