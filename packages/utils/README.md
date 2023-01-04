# utils

A collection of utils functions by BlueSky.

# Functions

- [createWhich](#user-content-createwhich)

## createWhich

Which is a functional pattern that provides a deterministic switch like
functionality.

[Article](https://medium.com/@hansoksendahl/utils-deterministic-switch-statements-with-which-7ef9daa53d85)

There are two patterns of usage with createWhich.

1. Without a default key
2. With a default key.

In either case createWhich will return a function that attempts to perform look
ups.

```ts
// Without default key
const which1 = createWhich({
  a: 'Hello again!',
  b: 42,
  c: true,
})

const ex1A = which('a') // string
const ex1B = which('b') // 42
const ex1C = which('c') // boolean
const ex1Default = which() // undefined

// With default key
const which2 = createWhich(
  {
    a: 'Hello again!',
    b: 42,
    c: true,
  },
  'a'
)

const ex2A = which('a') // string
const ex2B = which('b') // 42
const ex2C = which('c') // boolean
const ex2Default = which() // string
```
