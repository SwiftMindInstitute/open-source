import createSimpleTypeGuard from '../utils/create-simple-type-guard'

const isString = createSimpleTypeGuard<string>('string')

export default isString
