import createSimpleTypeGuard from '../utils/create-simple-type-guard'

const isObject = createSimpleTypeGuard<object>('object')

export default isObject
