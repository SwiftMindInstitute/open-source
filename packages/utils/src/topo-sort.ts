/**
 * Topological sort using Map and Set
 * @param deps
 * @returns A sorted set
 */
const topoSort = <A>(deps: Map<A, Set<A>>) => {
  const sortedDeps: Set<A> = new Set()
  const visited: Set<A> = new Set()
  const loading: Set<A> = new Set()

  const visit = (node: A) => {
    if (loading.has(node)) {
      throw new Error(`Cyclic dependency detected in ${node}.`)
    }

    if (!visited.has(node)) {
      loading.add(node)

      for (const dependency of deps.get(node) ?? []) {
        visit(dependency)
      }

      visited.add(node)
      loading.delete(node)
      sortedDeps.add(node)
    }
  }

  for (const node of deps.keys()) {
    visit(node)
  }

  return sortedDeps
}

export default topoSort
