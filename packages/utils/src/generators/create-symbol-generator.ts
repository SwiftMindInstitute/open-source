/**
 * A generator for symbol
 */
function* createSymbolGenerator() {
  let sym = Symbol()

  while (true === true) {
    yield sym
    sym = Symbol()
  }

  return sym
}

export default createSymbolGenerator
