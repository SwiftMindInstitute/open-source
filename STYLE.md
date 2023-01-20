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

## Have a sense of humor

If you have no chill please contribute elsewhere. Writing code should be fun.

## Intolerant of Intolerance

The mission of BlueSky.llc is to help enable the TypeScript community and
development community at large. Behaviors that discourage collaboration or
negatively impact diversity and inclusion will lead to corrective action.

## The Screaming 🐍

**SCREAMING_SNAKE_CASE** is used for all constants in this code base. That
includes `enum` values.

## Use arrow functions

Use arrow functions whenever possible. If you are writing a function has
overloads implement the overloads as a type or interface and declare the type
on the function declaration (for a good example of this pattern see
[pipe](https://github.com/bluesky-llc/open-source/blob/main/packages/utils/src/pipe.ts)).
