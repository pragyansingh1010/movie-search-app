function normalizeQuery(query) {
  return query.trim();
}

console.assert(normalizeQuery('  Batman  ') === 'Batman');
console.assert(normalizeQuery('') === '');
console.assert(normalizeQuery('  ') === '');
console.log('Search input rules passed');
