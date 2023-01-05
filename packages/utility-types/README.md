# Utility-Types

A collection of utility-types by BlueSky.

# Overview

This package contains only types. There is no run time code.

This package draws inspiration from the following:

- [utility-types](https://github.com/piotrwitek/utility-types) by [Piotr Witek](https://github.com/piotrwitek)
- [fp-ts](https://github.com/gcanti/fp-ts) and [io-ts](https://github.com/gcanti/io-ts) by [Giulio Canti](https://gcanti.github.io/)
- The article "[Implementing Arithmetic Within TypeScript’s Type System]" by [Ryan Dabler](https://medium.com/@ryan.dabler)

# Terms

For the most part the utility types in this library are separated into two
categories. The reason for this separation is that there are utility types which
build specifically off of Relations on binary values.

- **Relations** - Return a boolean
- **Operations** - Return a type other than boolean

Both **Relations** and **Operations** can have unary or binary types associated
with them.

# Modules

- [Any](#user-content-any-types)
- [Tuple](#user-content-tuple-types)
- [Logic](#user-content-logic-types)

# Any Types

[TS: Utility-Types: Any Types](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639)

## Conditions

- [IsExtension](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639#fbd6)
- [IsEqual](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639#e295)

## Types

- [AnyArray](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639#c655)
- [AnyConstructor](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639#129e)
- [AnyFunction](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639#ed5a)
- [AnyKey](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639#f6e5)
- [AnyObject](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639#1273)
- [AnyTuple](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639#8313)

# Tuple Types

- [Append](https://medium.com/@hansoksendahl/ts-utility-types-tuple-types-6198cd2573a3#0843)
- [Concat](https://medium.com/@hansoksendahl/ts-utility-types-tuple-types-6198cd2573a3#334d)
- [Head](https://medium.com/@hansoksendahl/ts-utility-types-tuple-types-6198cd2573a3#332e)
- [In](https://medium.com/@hansoksendahl/ts-utility-types-tuple-types-6198cd2573a3#319c)
- [Last](https://medium.com/@hansoksendahl/ts-utility-types-tuple-types-6198cd2573a3#4596)
- [Length](https://medium.com/@hansoksendahl/ts-utility-types-tuple-types-6198cd2573a3#f28a)
- [Prepend](https://medium.com/@hansoksendahl/ts-utility-types-tuple-types-6198cd2573a3#8228)
- [Tail](https://medium.com/@hansoksendahl/ts-utility-types-tuple-types-6198cd2573a3#8612)

# Logic Types

## Generic Types

- And
- Not
- Or
- Xor

# Math

## Operation Types

- add
- divide
- modulo
- multiply
- subtract

## Relation Types

- greaterThanOrEqual
- greaterThan
- lessThanOrEqual
- lessThan
