import { Add } from './add'

export type Increment<A extends number> = Add<A, 1>
