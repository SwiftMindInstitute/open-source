import { BinaryOp } from './types'

/**
 * Raise `a` to the power of `b`
 * @param a number
 * @param b number
 * @returns number
 */
const pow: BinaryOp = (a, b) => a ** b

export default pow
