function hasTitle(item) {
  return item && typeof item.Title === 'string' && item.Title.trim().length > 0;
}

console.assert(hasTitle({Title:'Batman'}));
console.assert(!hasTitle({Title:''}));
console.assert(!hasTitle({}));
console.log('Movie result filter passed');
