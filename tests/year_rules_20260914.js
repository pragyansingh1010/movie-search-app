function validYear(year) {
  return Number.isInteger(year) && year > 0;
}

console.assert(validYear(2020));
console.assert(validYear(1999));
console.assert(!validYear(0));
console.assert(!validYear(-1));
console.log('Movie year rules passed');
