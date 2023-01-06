# Utility-Types

A collection of utility-types by BlueSky.

# Overview

This package contains only types. There is no run time code.

This package draws inspiration from the following:

- [utility-types](https://github.com/piotrwitek/utility-types) by [Piotr Witek](https://github.com/piotrwitek)
- [fp-ts](https://github.com/gcanti/fp-ts) and [io-ts](https://github.com/gcanti/io-ts) by [Giulio Canti](https://gcanti.github.io/)
- The article [Implementing Arithmetic Within TypeScript’s Type System](https://itnext.io/implementing-arithmetic-within-typescripts-type-system-a1ef140a6f6f) by [Ryan Dabler](https://medium.com/@ryan.dabler)

# Installation

```shell
npm install @bluesky.llc/utility-types --save-dev
```

# Terms

- **Static type** - A type that can NOT take parameters
- **Generic type** - A type that can take parameters
  - **Conditional type** - A Generic type that uses the extends keyword
    - **Condition type** - A Conditional type that always returns a boolean

# Modules

- [Logic Module](#user-content-logic-types)
- [Any Module](#user-content-any-types)
- [Tuple Module](#user-content-tuple-types)

# Logic Module

The Utility-Types library leverages the **condition type**. A condition type
forms just the condition portion of a conditional statement. Since a condition
type always returns a boolean value it is possible to perform logic with them.
The types provided by the Utility-Types logic module.

Links:

- [TS: Utility-Types: Logic Types](https://medium.com/@hansoksendahl/ts-utility-types-logic-types-1fc9abb69b0#11a5)

## Conditions

- [And](https://medium.com/@hansoksendahl/ts-utility-types-logic-types-1fc9abb69b0#11a5)
- [Not](https://medium.com/@hansoksendahl/ts-utility-types-logic-types-1fc9abb69b0#1b7f)
- [Or](https://medium.com/@hansoksendahl/ts-utility-types-logic-types-1fc9abb69b0#fddb)
- [Xor](https://medium.com/@hansoksendahl/ts-utility-types-logic-types-1fc9abb69b0#0515)

# Any Module

Any types are a collection of simple static and generic types that represent the
"general case" of their associated data type.

The any types module contains two **condition types** (IsExtension, and
IsEqual). Condition types are conditional types that return only boolean values.
Condition types can be composed using boolean logic such as that provided by
Utility-Types' logic module.

Links:

- [TS: Utility-Types: Any Types](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639)

## Conditions

- [IsExtension<A> → boolean](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639#fbd6)
- [IsEqual<A, B> → boolean](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639#e295)

## Types

- [AnyArray<A = any>](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639#c655)
- [AnyConstructor<A = AnyArray, B = any>](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639#129e)
- [AnyFunction<A = AnyArray, B = any>](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639#ed5a)
- [AnyKey](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639#f6e5)
- [AnyObject<A = AnyKey, B = any>](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639#1273)
- [AnyTuple<A extends number, B = any>](https://medium.com/@hansoksendahl/ts-utility-types-any-interfaces-b3bb13cb9639#8313)

# Tuple Types

Tuple types are generic types for working with tuples. Tuples unlike their
counsins arrays have order, and magnitude (length). The additional properties of
arrays enable arithematic operations such as those provided by Utility-Types'
Math module.

Links:

- [TS: Utility-Types: Tuple Types](https://medium.com/@hansoksendahl/ts-utility-types-tuple-types-6198cd2573a3)

## Types

- [Append](https://medium.com/@hansoksendahl/ts-utility-types-tuple-types-6198cd2573a3#0843)
- [Concat](https://medium.com/@hansoksendahl/ts-utility-types-tuple-types-6198cd2573a3#334d)
- [Head](https://medium.com/@hansoksendahl/ts-utility-types-tuple-types-6198cd2573a3#332e)
- [In](https://medium.com/@hansoksendahl/ts-utility-types-tuple-types-6198cd2573a3#319c)
- [Last](https://medium.com/@hansoksendahl/ts-utility-types-tuple-types-6198cd2573a3#4596)
- [Length](https://medium.com/@hansoksendahl/ts-utility-types-tuple-types-6198cd2573a3#f28a)
- [Prepend](https://medium.com/@hansoksendahl/ts-utility-types-tuple-types-6198cd2573a3#8228)
- [Tail](https://medium.com/@hansoksendahl/ts-utility-types-tuple-types-6198cd2573a3#8612)

# Math Types

## Conditions

- [GreaterThanOrEqual](https://medium.com/@hansoksendahl/ts-utility-types-math-types-8c06e650cc82#8868)
- [GreaterThan](https://medium.com/@hansoksendahl/ts-utility-types-math-types-8c06e650cc82#63ab)
- [IsDecimal](https://medium.com/@hansoksendahl/ts-utility-types-math-types-8c06e650cc82#4cd4)
- [IsNatural](https://medium.com/@hansoksendahl/ts-utility-types-math-types-8c06e650cc82#e0f3)
- [IsNegative](https://medium.com/@hansoksendahl/ts-utility-types-math-types-8c06e650cc82#acdb)
- [IsNonNegative](https://medium.com/@hansoksendahl/ts-utility-types-math-types-8c06e650cc82#cbbf)
- [IsNonPositive](https://medium.com/@hansoksendahl/ts-utility-types-math-types-8c06e650cc82#2996)
- [IsPositive](https://medium.com/@hansoksendahl/ts-utility-types-math-types-8c06e650cc82#e657)
- [IsWhole](https://medium.com/@hansoksendahl/ts-utility-types-math-types-8c06e650cc82#cf62)
- [IsZero](https://medium.com/@hansoksendahl/ts-utility-types-math-types-8c06e650cc82#e787)
- [LessThanOrEqual](LessThanOrEqual)
- [LessThan](https://medium.com/@hansoksendahl/ts-utility-types-math-types-8c06e650cc82#dd91)

## Types

- [Add](https://medium.com/@hansoksendahl/ts-utility-types-math-types-8c06e650cc82#5aab)
- [Divide](https://medium.com/@hansoksendahl/ts-utility-types-math-types-8c06e650cc82#6856)
- [Modulo](https://medium.com/@hansoksendahl/ts-utility-types-math-types-8c06e650cc82#394e)
- [Multiply](https://medium.com/@hansoksendahl/ts-utility-types-math-types-8c06e650cc82#da06)
- [Subtract](https://medium.com/@hansoksendahl/ts-utility-types-math-types-8c06e650cc82#a01c)
