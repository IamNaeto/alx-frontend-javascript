export default function cleanSet(set, startString) {
  const newString = [];
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(startString)) {
      newString.push(element.slice(startString.length));
    }
  });

  return newString.join('-');
}
