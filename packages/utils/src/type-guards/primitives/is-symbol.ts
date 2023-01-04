import createSimpleTypeGuard from '../utils/create-simple-type-guard'

const isSymbol = createSimpleTypeGuard<symbol>('symbol')

export default isSymbol
