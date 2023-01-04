import createSimpleTypeGuard from '../utils/create-simple-type-guard'

const isUndefined = createSimpleTypeGuard<undefined>('undefined')

export default isUndefined
