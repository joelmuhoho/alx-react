import { Map } from "./node_modules/immutable/dist/immutable.js";

/**
 * Converts a given object into an immutable object.
 * @param {Object} object - an object to be converted into an immutable object
 * @returns {Object} - an immutable object
 */
export default function getImmutableObject(object) {
  return Map(object);
}
