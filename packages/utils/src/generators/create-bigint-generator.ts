/**
 * A generator for bigint (auto-incremented)
 */
function* createBigintGenerator() {
  let value = 0n

  while (true === true) {
    yield value
    value++
  }

  return value
}

export default createBigintGenerator
