/**
 * Some trickery to make types work with snapshot tests.
 *
 * Derived from here [utility-types](https://github.com/piotrwitek/utility-types)
 * @param _ any
 * @returns any
 */
function testType<A>(_?: A): A {
  return undefined as any
}

export default testType
