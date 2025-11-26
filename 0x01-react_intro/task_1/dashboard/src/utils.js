/**
 * Returns the current year.
 * @returns {number} The current year.
 */
export function getFullYear() {
  const date = new Date();
  return date.getFullYear();
}

/**
 * Returns the copyright text to display in the footer.
 * If isIndex is true, it returns "ALX", otherwise it returns "ALX main dashboard".
 * @param {boolean} isIndex - If true, returns "ALX", otherwise returns "ALX main dashboard".
 * @returns {string} The copyright text to display in the footer.
 */
export function getFooterCopy(isIndex) {
  if (!isIndex) {
    return "ALX main dashboard";
  }
  return "ALX";
}
