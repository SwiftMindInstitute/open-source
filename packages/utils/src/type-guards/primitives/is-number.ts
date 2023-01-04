import createSimpleTypeGuard from '../utils/create-simple-type-guard'

const isNumber = createSimpleTypeGuard<number>('number')

export default isNumber
