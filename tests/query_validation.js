function validQuery(value) {
  return typeof value === 'string' && value.trim().length >= 2;
}

console.assert(validQuery('Batman'));
console.assert(validQuery('AI'));
console.assert(!validQuery(''));
console.assert(!validQuery(' '));
console.assert(!validQuery('A'));
console.log('Movie query validation passed');
