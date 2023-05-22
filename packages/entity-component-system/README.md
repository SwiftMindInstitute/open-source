# Entity Component System

Made with ❤️ by [bluesky.llc](https://bluesky.llc).

# Documentation

- [Documentation](https://swiftmindinstitute.github.io/open-source/modules/Utils.html)

# Overview

This is an Entity Component System implementation. It's designed to be as
simple and robust as possible.

## Entities

Entities are unique values that are supplied by a generator. The library does
not define them directly. The default is an auto-incrementing number however,
@bluesky.llc/utils also provides generators for `bigint` and `symbol` data
types which can be used interchangably. That can be passed in to the
EntityComponentSystem constructor.

```ts
const ecs = new EntityComponentSystem()

const entity = ecs.create() // 0
```

You can also supply your own generator.

```ts
import { bigintGenerator } from '@bluesky.llc/utils'

const ecs = new EntityComponentSystem(bigintGenerator())

const entity = ecs.create()
```

## Components
