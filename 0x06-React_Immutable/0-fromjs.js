import { fromJS } from "./node_modules/immutable/dist/immutable.js";

/**
 * Converts a given object into an immutable object.
 * @param {Object} object - an object to be converted into an immutable object
 * @returns {Object} - an immutable object
 */
const getImmutableObject = (object) => {
  return fromJS(object);
};

const obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

const immutableObj = getImmutableObject(obj);
console.log(immutableObj);
