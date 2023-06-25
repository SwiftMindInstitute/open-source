import {
  AnyObject,
  AnyPrimitive,
  CaptureGroup,
  DeepObject,
  GetKeys,
  GetValue,
} from '@swiftmind/utility-types'
import { getDeepProp, interpolate } from '@swiftmind/utils'

export type Capture<
  A extends DeepObject | AnyPrimitive,
  B extends CaptureGroup = CaptureGroup<'{{', '}}'>,
  C extends string = never
> = A extends `${string}${B['start']}${infer D}${B['end']}${infer E}`
  ? Capture<E, B, C | D>
  : C

export type Interpolation<
  A extends DeepObject | AnyPrimitive,
  B extends CaptureGroup = CaptureGroup<'{{', '}}'>,
  C extends AnyObject<Capture<A, B>, string> = AnyObject<Capture<A, B>, string>,
  D extends DeepObject | AnyPrimitive = A,
  E extends Capture<A, B> = Capture<A, B>
> = D extends `${infer F}${B['start']}${infer G}${B['end']}${infer H}`
  ? G extends E
    ? Interpolation<A, B, C, `${F}${C[G]}${H}`, E>
    : never
  : D

export type Variables<
  A extends DeepObject | AnyPrimitive,
  B extends CaptureGroup = CaptureGroup<'{{', '}}'>
> = Capture<A, B> extends never ? [] : [AnyObject<Capture<A, B>, string>]

/**
 * Create a function that defines a group of string `templates` using a deeply
 * nested object and an optional user defined `captureGroup` for variable
 * interpolation.
 *
 * @param templates
 * @param captureGroup
 * @returns
 */
const createT = <
  A extends DeepObject,
  B extends CaptureGroup = { start: '{{'; end: '}}' }
>(
  templates: A,
  captureGroup: B = { start: '{{', end: '}}' } as B
) => {
  /**
   * Return a curried function that takes a `key` defined in `templates` and
   * an object containing the variables defined for that function.
   * @param key
   * @param variables
   * @returns
   */
  const templateFunction = <
    C extends GetKeys<A>,
    D extends AnyObject<Capture<GetValue<A, C>, B>, string>
  >(
    key: C,
    ...params: Capture<GetValue<A, C>, B> extends never ? [] : [D]
  ): Interpolation<GetValue<A, C>, B, D> => {
    const variables = params[0] ?? {}
    const template = getDeepProp(templates, key)

    return interpolate(
      template as string,
      captureGroup,
      variables
    ) as Interpolation<GetValue<A, C>, B, D>
  }

  return templateFunction
}

export default createT
