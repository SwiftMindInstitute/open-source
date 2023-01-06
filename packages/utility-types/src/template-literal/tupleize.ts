type Tupelize<
  A extends string,
  B extends any[] = []
> = A extends `${infer C}${infer D}` ? [C, ...Tupelize<D, B>] : B
