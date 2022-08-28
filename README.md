# fun-constructors

[![npm](https://img.shields.io/npm/v/fun-constructors)](https://npm.im/fun-constructors)
[![build](https://github.com/iyegoroff/fun-constructors/workflows/build/badge.svg)](https://github.com/iyegoroff/fun-constructors/actions/workflows/build.yml)
[![publish](https://github.com/iyegoroff/fun-constructors/workflows/publish/badge.svg)](https://github.com/iyegoroff/fun-constructors/actions/workflows/publish.yml)
[![codecov](https://codecov.io/gh/iyegoroff/fun-constructors/branch/main/graph/badge.svg?token=YC314L3ZF7)](https://codecov.io/gh/iyegoroff/fun-constructors)
[![Type Coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fiyegoroff%2Ffun-constructors%2Fmain%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/fun-constructors)
[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/fun-constructors?label=min+gzip)](https://bundlephobia.com/package/fun-constructors)
[![npm](https://img.shields.io/npm/l/fun-constructors.svg?t=1495378566926)](https://www.npmjs.com/package/fun-constructors)

Functional constructors for standard collections

## Getting started

```
npm i fun-constructors
```

## Overview

```ts
export const arrayOf: <T>(...args: Parameters<typeof Array.of<T>>) => readonly T[] = Array.of

export const mutableArrayOf = Array.of

export const arrayFrom: {
  <T, U>(...args: Parameters<typeof Array.from<T, U>>): readonly T[]
  <T>(...args: Parameters<typeof Array.from<T>>): readonly T[]
} = Array.from

export const mutableArrayFrom = Array.from

export const mapOf = <K, V>(...args: ConstructorParameters<typeof Map<K, V>>): ReadonlyMap<K, V> =>
  new Map(...args)

export const mutableMapOf = <K, V>(...args: ConstructorParameters<typeof Map<K, V>>): Map<K, V> =>
  new Map(...args)

export const setOf = <V>(...args: ConstructorParameters<typeof Set<V>>): ReadonlySet<V> =>
  new Set(...args)

export const mutableSetOf = <V>(...args: ConstructorParameters<typeof Set<V>>): Set<V> =>
  new Set(...args)

export const weakMapOf = <K extends object, V>(
  ...args: ConstructorParameters<typeof WeakMap<K, V>>
): WeakMap<K, V> => new WeakMap(...args)

export const weakSetOf = <V extends object>(
  ...args: ConstructorParameters<typeof WeakSet<V>>
): WeakSet<V> => new WeakSet(...args)
```
