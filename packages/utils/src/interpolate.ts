import {
  AnyObject,
  Capture,
  CaptureGroup,
  Interpolation,
} from '@swiftmind/utility-types'

interface Interpolate {
  <A extends string>(a: A): A
  <
    A extends string,
    B extends CaptureGroup,
    C extends AnyObject<Capture<A, B>, string>
  >(
    a: A,
    b: B,
    c: C
  ): Interpolation<A, C, B>
}

/**
 *
 */
const interpolate: Interpolate = (...params: any[]) => {
  if (params.length === 1) {
    return params[0]
  }

  const [template, captureGroup, variables] = params

  const result = (template as string).replace(
    new RegExp(`${captureGroup.start}(.*?)${captureGroup.end}`, 'g'),
    (_, match) => variables[match]
  )

  return result
}

export default interpolate
