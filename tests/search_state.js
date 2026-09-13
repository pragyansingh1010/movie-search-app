function normalizeQuery(value) {
  return typeof value === 'string' ? value.trim() : '';
}

console.assert(normalizeQuery('  marvel  ') === 'marvel');
console.assert(normalizeQuery('   ') === '');
console.assert(normalizeQuery(null) === '');
console.log('Movie search query tests passed');
