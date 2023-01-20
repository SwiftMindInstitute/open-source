/**
 *
 */
function* bigintIncrement() {
  let value = 0n

  while (true) {
    yield value
    value++
  }
}

export default bigintIncrement
