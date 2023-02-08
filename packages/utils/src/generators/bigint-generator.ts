/**
 * Create a generator for bigints (auto-incremented)
 */
function* bigintGenerator() {
  let value = 0n

  while (true) {
    yield value
    value++
  }
}

export default bigintGenerator
