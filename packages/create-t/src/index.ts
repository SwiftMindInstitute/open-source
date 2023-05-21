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

const createT =
  <A extends DeepObject, B extends CaptureGroup = { start: '{{'; end: '}}' }>(
    templates: A,
    captureGroup: B = { start: '{{', end: '}}' } as B
  ) =>
  <
    C extends GetKeys<A>,
    D extends AnyObject<Capture<GetValue<A, C>, B>, string>
  >(
    key: C,
    variables: D
  ): Interpolation<GetValue<A, C>, B, D> => {
    const template = getDeepProp(templates, key)

    return interpolate(
      template as string,
      captureGroup,
      variables
    ) as Interpolation<GetValue<A, C>, B, D>
  }

export default createT
