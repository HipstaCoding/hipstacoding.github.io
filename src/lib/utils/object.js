export default function copyWithout(src, omit = []) {
  return Object.keys(src).reduce((storage, key) => {
    if (omit.includes(key)) return storage;
    storage[key] = src[key];
    return storage;
  }, {});
}
