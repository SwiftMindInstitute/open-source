/** Exclude any undefined members of  */
export type NonUndefined<A> = A extends undefined
  ? never
  : Exclude<A, undefined>

export {}
