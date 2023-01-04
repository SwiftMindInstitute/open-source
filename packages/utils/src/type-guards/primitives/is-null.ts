import createSimpleTypeGuard from '../utils/create-simple-type-guard'

const isNull = createSimpleTypeGuard<null>('null')

export default isNull
