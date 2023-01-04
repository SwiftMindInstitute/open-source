import createSimpleTypeGuard from '../utils/create-simple-type-guard'

const isBoolean = createSimpleTypeGuard<boolean>('boolean')

export default isBoolean
