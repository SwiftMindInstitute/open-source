import { IsExtension } from '@any/condition/is-extension'

export type Includes<A extends string, B extends string> = IsExtension<A, B>
