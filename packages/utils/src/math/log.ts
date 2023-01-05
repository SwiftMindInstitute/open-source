import { isUndefined } from '../type-guards'
import div from './div'

const BASE_LOG_FUNCTION: Record<number, ((_: number) => number) | undefined> = {
  2: Math.log2,
  10: Math.log10,
}

const E_LOG_VALUES: Record<number, number | undefined> = {
  2: 0.6931471805599453,
  3: 1.0986122886681096,
  4: 1.3862943611198906,
  5: 1.6094379124341003,
  6: 1.791759469228055,
  7: 1.9459101490553132,
  8: 2.0794415416798357,
  9: 2.1972245773362196,
  10: 2.302585092994046,
  11: 2.3978952727983707,
  12: 2.4849066497880004,
  13: 2.5649493574615367,
  14: 2.6390573296152584,
  15: 2.70805020110221,
  16: 2.772588722239781,
}

/**
 * Returns the log of `value` in some `base` (default: 10)
 * @param value
 * @param base
 * @returns number
 */
const log = (value: number, base: number = 10) => {
  // Throw if the base is less than or equal to 1. Because, `Math.log(1) === 0`.
  if (base <= 1) {
    throw new Error('The numeric `base` cannot be less than 2')
  } else if (isUndefined(base) || base === Math.E) {
    return Math.log(value)
  }

  const logFunction = BASE_LOG_FUNCTION[base]

  if (logFunction) {
    return logFunction(value)
  }

  const divisor = E_LOG_VALUES[base] || Math.log(base)

  const logResult = Math.log(value)

  return isUndefined(base) ? logResult : div(logResult, divisor)
}

export default log
