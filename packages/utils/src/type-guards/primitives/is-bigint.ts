import createSimpleTypeGuard from '../utils/create-simple-type-guard'

const isBigint = createSimpleTypeGuard<bigint>('bigint')

export default isBigint
