function cleanQuery(value) {
  return value.trim();
}

console.assert(cleanQuery('  avatar  ') === 'avatar');
console.assert(cleanQuery('movie') === 'movie');
