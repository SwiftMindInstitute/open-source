/** Exclude any undefined members of  */
export type NonUndefined<A extends any = any> = A extends undefined
  ? never
  : Exclude<A, undefined>

const x = <A>(a: NonUndefined<A>) => a

export {}
