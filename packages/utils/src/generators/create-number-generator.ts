/**
 * A generator for number (auto-incremented)
 */
function* createNumberGenerator() {
  let value = 0

  while (true === true) {
    yield value
    value++
  }

  return value
}

export default createNumberGenerator
