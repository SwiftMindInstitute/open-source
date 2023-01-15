import { Subtract } from './subtract'

export type Decrement<A extends number> = Subtract<A, 1>
