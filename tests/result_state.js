function resultState(items, query) {
  if (!query.trim()) return 'idle';
  return items.length ? 'results' : 'empty';
}

console.assert(resultState([], '') === 'idle');
console.assert(resultState([{title: 'Dune'}], 'dune') === 'results');
console.assert(resultState([], 'unknown') === 'empty');
console.log('Movie result state tests passed');
