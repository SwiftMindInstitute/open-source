import { AnyArray } from '@bluesky.llc/utility-types'
import pipe from './pipe'

interface Flow {
  <A extends AnyArray, B>(ab: (a: A) => B): B
  <A extends AnyArray, B, C>(ab: (a: A) => B, bc: (b: B) => C): C
}

const flow: Flow =
  <A>(a: A, ...callbacks: any[]) =>
  (...params: Parameters<A>) =>
    pipe([a(...params), ...callbacks])

export default flow

const add2 = (x: number, y: number) => x + 2

const mult3 = (x: number) => x * 3

const x = flow(add2)

const y = x(1, 2)
