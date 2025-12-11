/**
 * Accesses a nested value in an immutable object.
 * @param {Object} object - the immutable object
 * @param {Array<string>} array - the array of keys to access the value
 * @returns {*} the value of the given key in the immutable object
 */
export default function accessImmutableObject(object, array) {
  let value = object;
  for (const key of array) {
    value = value[key];
  }
  return value;
}
