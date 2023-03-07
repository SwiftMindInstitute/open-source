/**
 * Alias of `Exclude<A, B>`
 *
 * The
 * [complement](https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement)
 * `B \ A` of `A` and `B`
 * @experimental
 */
export type Complement<A, B> = Exclude<A, B>
