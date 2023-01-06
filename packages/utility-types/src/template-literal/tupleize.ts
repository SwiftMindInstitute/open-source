/**
 * Convert a string into a tuple of characters.
 *
 */
export type Tupelize<
  A extends string,
  B extends any[] = []
> = A extends `${infer C}${infer D}` ? [C, ...Tupelize<D, B>] : B

export {}
