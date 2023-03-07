# Style Guide

So you're thinking about contributing? Welcome!

# Inspiration

- [utility-types](https://github.com/piotrwitek/utility-types) by [Piotr Witek](https://github.com/piotrwitek)  
  Early work by Piotr Witek actually became part of the TypeScript spec!
- [fp-ts](https://github.com/gcanti/fp-ts) and [io-ts](https://github.com/gcanti/io-ts) by [Giulio Canti](https://gcanti.github.io/)
  The fp-ts library implements a vast number of abstract algebraic interfaces
  and functional programming paradigms. The io-ts library leverages fp-ts
  implementing run-time type checking and validation. The types... the types are
  beautiful.
- The article [Implementing Arithmetic Within TypeScript’s Type System](https://itnext.io/implementing-arithmetic-within-typescripts-type-system-a1ef140a6f6f) by [Ryan Dabler](https://medium.com/@ryan.dabler)  
  The math module of this package was largely inspired by this article.

# Overview

Welcome to the style guide. This code base is the work of a small group of
developers who like things consistent, well-documented, and tested.

## TSDoc

All source code comments should use [TSDoc](https://tsdoc.org/).

## Naming

- `kebab-case` for all file names
- `camelCase` for all non-constant run-time variables and function names
- `PascalCase` for all types, interfaces, classes, and JSX components
- `SCREAMING_SNAKE_CASE` for all constants, including `enum` values.

## New Code

Any new type, interface, class, or function should be labeled `@experimental`.
Once the new code has been documented the prior label can be removed and the
`@alpha` label can be added. If the new code is added to a minor versioned
release the prior label can be removed and `@beta` can be added. Finally, when
a beta feature is part of a major versioned release the `@beta` label can be
removed.

## Unit Tests

Every package should have a `test` script. Every `test` script should use
[Jest](https://jestjs.io/). Every exported function or class should have
_at least_ one unit test.

## Arrow functions

Use arrow functions whenever possible, they are simpler and more performant.

## Type Guards & Validations

Type guards are a great feature of TypeScript and make it much easier to
define separate "swim lanes" in your code. Their use is highly encouraged. Both
type guards and validations serve similar purposes. Both types of functions take
some input and return a boolean value. Because these functions are asking a yes
or no question and returning the answer the function name should always form a
question. Some examples `isUndefined`, `hasProp`, `doesExist`.

Validations are similar to type guards but they do not return type predicates
using the `is` keyword. Validation functions should be similarly named to type
guards in that the name should form a question. Validations should also be
prefixed with the

## Standalone Function Interfaces

When creating a stand-alone function please try to provide an interface that it
it implements (for a good example of this pattern see
[pipe](https://github.com/bluesky-llc/open-source/blob/main/packages/utils/src/pipe.ts)
). The reasons for this are two fold. One, TypeScript only allows overloads to
be defined on types and interfaces and functions declared with the `function`
keyword. If you want to create overloads for an arrow function you **must** use
an interface. Two, using a function interface often greatly simplifies the
implementation of the actual function.

## Usage of the `any` Keyword

As a general rule of thumb do not use `any`.

There exists an exception for standalone functions if they meet the following
criteria.

1. The function is unit tested

- Both edge and corner cases have been captured in tests

2. The function is typed with an interface, the interface should cover both
   the parameters and return value.

If a standalone function meets this criteria feel free to use `any` judiciously
within the body of the function. If it meets these criteria, we know the function
works from the tests, and the input and return values are strongly typed.

## Symbols, WeakSets, and WeakMaps

These are incredibly powerful tools for interfacing with data supplied by the
user. Do not underestimate their efficacy for creating great developer
experiences.

## Generators

Generators are used sparingly as their usage tends to necessitate major
architectural changes when used extensively. When creating a new generator
please ensure that it both yields and returns the same type of data. TypeScript
creates a union of the yield and return types for `value` returned from the
generator's `next` method. Ensuring that the generator both yields and returns
the same type prevents having to use a non-null assertion or conditional
wherever the generator's `next` method is called.
