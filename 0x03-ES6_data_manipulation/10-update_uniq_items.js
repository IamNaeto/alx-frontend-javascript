export default function updateUniqueItems(item) {
  if (typeof item !== 'object' || item === null || Array.isArray(item)) {
    throw new Error('Cannot process. Argument is not a map.');
  }

  item.forEach((quantity, name) => {
    if (quantity === 1) {
      item.set(name, 100);
    }
  });
  return item;
}
