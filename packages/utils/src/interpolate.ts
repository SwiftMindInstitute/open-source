import { HasMatch, Interpolation } from '@bluesky.llc/utility-types'

const DEFAULT_START = '{{' as const
const DEFAULT_END = '}}' as const

type MatchRestParameters<A extends string> = HasMatch<A> extends true
  ? [Record<Variable<A>, string>]
  : []

type Variable<
  A extends string,
  B extends null | string = never
> = A extends `${infer _}\${${infer C}}${infer D}` ? Variable<D, B | C> : B

/**
 *
 */
const interpolate = <
  A extends string = typeof DEFAULT_START,
  B extends string = typeof DEFAULT_END
>(
  start: A = DEFAULT_START as A,
  end: B = DEFAULT_END as B
) => {
  // NOTE This is the best approximation I could come up with for the way TypeScript
  // parses string templates. - hao
  return <A extends string, B extends MatchRestParameters<A>>(
    template: A,
    ...params: B
  ): Interpolation<A, B[0]> => {
    let isCapturing = false
    let token: string = start
    let tokenIndex = 0
    let startIndex = 0
    let endIndex = 0
    let buffer = ''
    let result = ''

    for (let i = 0; i < template.length; i++) {
      const letter = template[i]

      if (letter === token[tokenIndex]) {
        tokenIndex++

        if (tokenIndex === token.length) {
          token = isCapturing ? start : end
          tokenIndex = 0
          isCapturing = !!isCapturing
        }
      }
    }

    return result as Interpolation<A, B[0]>
  }
}

// export {}
