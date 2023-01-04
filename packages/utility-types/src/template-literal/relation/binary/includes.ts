import { IsExtension } from '../../../any/relation/is-extension'

export type Includes<A extends string, B extends string> = IsExtension<A, B>
