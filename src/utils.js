/**
 * Compose styles together easily
 * @param {String} styles Classes/styles to be applied
 * @returns {String} Combined classes
 */
export const composeClasses = (...styles) => {
  let classes = '';

  styles.forEach(arg => {
    if (arg) {
      classes += `${arg} `;
    }
  });

  return classes.trim();
};

/**
 * @param array
 * @returns {Boolean}
 */
export const isNotEmptyArray = array => Array.isArray(array) && array.length > 0;
