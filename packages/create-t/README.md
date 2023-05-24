# EventQueue

A String handling class for TypeScript by SwiftMind Institute

```ts
const t = createT({
  home: {
    welcome: 'Welcome {{name}}, to SwiftMind Institute',
  },
} as const)

const welcome = t('home.welcome', { name: 'Hans' } as const)
```

# Documentation

- [Documentation](https://swiftmindinstitute.github.io/open-source/modules/Create_T.html)

# Contributing

Read the [style guide](https://github.com/swiftmindinstitute/open-source/blob/main/STYLE.md#style-guide).
