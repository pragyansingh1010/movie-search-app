function hasResults(items) {
  return Array.isArray(items) && items.length > 0;
}

console.assert(hasResults(['Movie']));
console.assert(!hasResults([]));
