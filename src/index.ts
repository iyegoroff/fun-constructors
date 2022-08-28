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
