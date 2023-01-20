/**
 *
 */
function* symbolGen() {
  while (true) {
    yield Symbol()
  }
}

export default symbolGen
