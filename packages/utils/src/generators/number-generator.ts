/**
 * Create a generator for bigints (auto-incremented)
 */
function* numberGenerator() {
  let value = 0

  while (true) {
    yield value
    value++
  }
}

export default numberGenerator
