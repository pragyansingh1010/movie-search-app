function normalize(query) {
  return query.trim().toLowerCase();
}

console.assert(normalize(' Batman ') === 'batman');
console.assert(normalize('SPIDER-MAN') === 'spider-man');
console.assert(normalize('') === '');
console.log('Movie query normalization passed');
