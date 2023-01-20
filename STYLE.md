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

Welcome to the style guide.

## Naming

- `SCREAMING_SNAKE_CASE` for all constants, including `enum` values.
- `PascalCase` for all types, interfaces, and classes
- `camelCase` for all non-constant run-time variables and function names

## Arrow functions

Use arrow functions whenever possible. If you are writing a function that has
overloads implement the overloads as a type or interface (for a good example of
this pattern see
[pipe](https://github.com/bluesky-llc/open-source/blob/main/packages/utils/src/pipe.ts)).

## TSDoc

All source code comments should use [TSDoc](https://tsdoc.org/).

## New Code

Any new type, interface, class, or function should be labeled `@experimental`.
Once the new code has been documented the prior label can be removed and the
`@alpha` label can be added. If the new code is added to a minor versioned
release the prior label can be removed and `@beta` can be added. Finally, when
a beta feature is part of a majorn versioned release the `@beta` label can be
removed.

## Unit Tests

Every package should have a `test` script. Every `test` script should use
[Jest](https://jestjs.io/).
