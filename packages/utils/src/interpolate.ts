// import { HasMatch, Interpolation } from '@bluesky.llc/utility-types'

// const DEFAULT_START = '{{' as const
// const DEFAULT_END = '}}' as const

// type MatchRestParameters<A extends string> = HasMatch<A> extends true
//   ? [Record<Match<A>, string>]
//   : []

// /**
//  *
//  */
// const interpolate = <
//   A extends string = typeof DEFAULT_START,
//   B extends string = typeof DEFAULT_END
// >(
//   start: A = DEFAULT_START as A,
//   end: B = DEFAULT_END as B
// ) => {
//   return <A extends string, B extends MatchRestParameters<A>>(
//     template: A,
//     ...params: B
//   ): Interpolation<A, B[0]> => {
//     if (params.length === 0) {
//       return template as Interpolation<A, B[0]>
//     }

//     const result = template.replace(
//       new RegExp(`(?<=${start})(.*?)(?=${end})`),
//       (...params) => {
//         console.log(params)
//         return ''
//       }
//     )

//     return result as Interpolation<A, B[0]>
//   }
// }

export {}
