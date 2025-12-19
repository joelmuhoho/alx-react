import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
/**
 * Returns an action object to trigger the selection of a course
 * @param {number} index - The index of the course to select
 * @returns {object} - An action object with type SELECT_COURSE and index
 */
export const selectCourse = (index) => {
  return { type: SELECT_COURSE, index: index };
};
/**
 * Returns an action object to trigger the unSelection of a course
 * @param {number} index - The index of the course to unselect
 * @returns {object} - An action object with type UNSELECT_COURSE and index
 */
export const unSelectCourse = (index) => {
  return { type: UNSELECT_COURSE, index: index };
};
